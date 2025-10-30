"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { resolveEffectiveBackgroundAtPoint } from "./ColorUnderCursorLogger";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return { r, g, b };
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
  }
  return null;
}

function isCloserToWhite(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  const { r, g, b } = rgb;
  // Perceived luminance approximation
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // 0..255
  // If brighter than mid-point, it's closer to white
  return luminance >= 128;
}

export default function CustomCursor() {
  const pathname = usePathname();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isLightBg, setIsLightBg] = useState(false);
  const [mode, setMode] = useState<"dot" | "view">("dot");
  const rafRef = useRef<number | null>(null);
  const needsEvalRef = useRef(false);

  // On route change, reset back to dot mode to avoid being stuck in pill
  useEffect(() => {
    setMode("dot");
  }, [pathname]);

  // On route change, immediately recompute background brightness at current pointer
  useEffect(() => {
    const hex = resolveEffectiveBackgroundAtPoint(pos.x, pos.y);
    if (hex) setIsLightBg(isCloserToWhite(hex));
  }, [pathname]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      needsEvalRef.current = true;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          if (!needsEvalRef.current) return;
          needsEvalRef.current = false;
          const hex = resolveEffectiveBackgroundAtPoint(e.clientX, e.clientY);
          if (hex) setIsLightBg(isCloserToWhite(hex));
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Attach hover listeners to elements that should trigger the "View" pill
    const targets = Array.from(document.querySelectorAll('[data-cursor-view]')) as HTMLElement[];
    const enter = () => setMode("view");
    const leave = () => setMode("dot");
    targets.forEach(t => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      targets.forEach(t => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", leave);
      });
    };
  }, [pathname]);

  const size = 16; // base dot side length (we'll keep it a rounded square)
  const radius = size / 2;
  const isView = mode === "view";
  // Use green on light backgrounds, tan on dark backgrounds for contrast when in dot mode
  const dotFill = isLightBg ? "#06402A" : "#F5F1E6";
  const pillBg = "#F5F1E6";
  const pillText = "#06402A";
  const pillWidth = 70;
  const pillHeight = 40;
  const duration = 500; // ms

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        // Center the element on the pointer so size changes expand evenly around the cursor
        transform: "translate(-50%, -50%)",
        width: isView ? `${pillWidth}px` : `${size}px`,
        height: isView ? `${pillHeight}px` : `${size}px`,
        // A square with fully rounded corners looks like a circle at small size
        borderRadius: "9999px",
        background: isView ? pillBg : dotFill,
        color: pillText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-poppins)",
        fontWeight: 700,
        // Keep font-size constant; fade it with opacity to avoid layout jumps
        fontSize: "14px",
        letterSpacing: "0.2px",
        pointerEvents: "none",
        zIndex: 2147483647,
        willChange: "transform, background, width, height, border-radius",
        transition: `background ${duration}ms linear, width ${duration}ms cubic-bezier(0.2,0.8,0.2,1), height ${duration}ms cubic-bezier(0.2,0.8,0.2,1), border-radius ${duration}ms cubic-bezier(0.2,0.8,0.2,1)`,
        boxShadow: "none",
        mixBlendMode: "normal",
      }}
    >
      <span
        style={{
          opacity: isView ? 1 : 0,
          transition: `opacity ${Math.max(200, duration - 200)}ms ease ${isView ? 200 : 0}ms`,
          willChange: "opacity",
        }}
      >
        View
      </span>
    </div>
  );
}


