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
  const [mode, setMode] = useState<"dot" | "view" | "contact">("dot");
  const [pillText, setPillText] = useState("View");
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile
  const [hasMoved, setHasMoved] = useState(false); // Track if mouse has moved to hide cursor at (0,0)
  const rafRef = useRef<number | null>(null);
  const needsEvalRef = useRef(false);

  // Detect if device is mobile/touch-only
  useEffect(() => {
    // Check if device supports touch and doesn't have a fine pointer (mouse)
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    
    // Only show cursor if device has fine pointer (mouse) and is not primarily touch
    setIsMobile(hasCoarsePointer || (hasTouch && !hasFinePointer));
  }, []);

  // On route change, reset back to dot mode to avoid being stuck in pill
  useEffect(() => {
    setMode("dot");
    setPillText("View");
  }, [pathname]);

  // On route change, immediately recompute background brightness at current pointer
  useEffect(() => {
    if (isMobile) return;
    
    // Check if cursor is over navbar - if so, skip color update
    if (typeof document !== "undefined") {
      const elementAtPoint = document.elementFromPoint(pos.x, pos.y);
      const isOverNavbar = elementAtPoint?.closest('nav') !== null;
      
      if (!isOverNavbar) {
        const hex = resolveEffectiveBackgroundAtPoint(pos.x, pos.y);
        if (hex) setIsLightBg(isCloserToWhite(hex));
      }
    }
  }, [pathname, isMobile, pos.x, pos.y]);

  useEffect(() => {
    // Don't attach mouse listeners on mobile devices
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setHasMoved(true); // Mark that mouse has moved at least once
      setPos({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over navbar - if so, don't update color
      const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
      const isOverNavbar = elementAtPoint?.closest('nav') !== null;
      
      if (!isOverNavbar) {
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
      }
    };
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Poll background color under cursor every 250ms
    const poll = setInterval(() => {
      // Use most recent position
      const { x, y } = pos;
      
      // Check if cursor is over navbar - if so, skip color update
      const elementAtPoint = document.elementFromPoint(x, y);
      const isOverNavbar = elementAtPoint?.closest('nav') !== null;
      
      if (!isOverNavbar) {
        const hex = resolveEffectiveBackgroundAtPoint(x, y);
        if (hex) setIsLightBg(isCloserToWhite(hex));
      }
    }, 250);

    // Attach hover listeners to elements that should trigger the pill
    const viewTargets = Array.from(document.querySelectorAll('[data-cursor-view]')) as HTMLElement[];
    const contactTargets = Array.from(document.querySelectorAll('[data-cursor-contact]')) as HTMLElement[];
    
    // Handle "View" elements
    const viewEnter = () => {
      setMode("view");
      setPillText("View");
    };
    const viewLeave = () => {
      setMode("dot");
      setPillText("View");
    };
    
    // Handle "Contact" elements
    const contactEnter = () => {
      setMode("contact");
      setPillText(" Contact ");
    };
    const contactLeave = () => {
      setMode("dot");
      setPillText("View");
    };
    
    viewTargets.forEach(t => {
      t.addEventListener("mouseenter", viewEnter);
      t.addEventListener("mouseleave", viewLeave);
    });
    
    contactTargets.forEach(t => {
      t.addEventListener("mouseenter", contactEnter);
      t.addEventListener("mouseleave", contactLeave);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      clearInterval(poll);
      viewTargets.forEach(t => {
        t.removeEventListener("mouseenter", viewEnter);
        t.removeEventListener("mouseleave", viewLeave);
      });
      
      contactTargets.forEach(t => {
        t.removeEventListener("mouseenter", contactEnter);
        t.removeEventListener("mouseleave", contactLeave);
      });
    };
  }, [pathname, pos, isMobile]);

  const size = 16; // base dot side length (we'll keep it a rounded square)
  const clickedSize = 22; // size when clicked
  const radius = size / 2;
  const isView = mode === "view" || mode === "contact";
  // Use green on light backgrounds, tan on dark backgrounds for contrast when in dot mode
  const dotFill = isLightBg ? "#06402A" : "#F5F1E6";
  // Pill colors match dot colors: if dot is green (light bg), pill is green with tan text; if dot is tan (dark bg), pill is tan with green text
  const pillBg = isLightBg ? "#06402A" : "#F5F1E6";
  const pillTextColor = isLightBg ? "#F5F1E6" : "#06402A";
  const basePillWidth = mode === "contact" ? 95 : 70; // Width for " Contact " (with spaces) or "View"
  const basePillHeight = 40;
  // When clicked, pill grows by ~15% similar to dot growth
  const clickedPillWidth = basePillWidth * 1.15;
  const clickedPillHeight = basePillHeight * 1.15;
  const pillWidth = isClicked && isView ? clickedPillWidth : basePillWidth;
  const pillHeight = isClicked && isView ? clickedPillHeight : basePillHeight;
  const duration = 500; // ms
  const currentDotSize = isClicked && !isView ? clickedSize : size;

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  // Don't show cursor until mouse has moved (prevents showing at top-left corner)
  if (!hasMoved) {
    return null;
  }

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        // Center the element on the pointer so size changes expand evenly around the cursor
        transform: "translate(-50%, -50%)",
        width: isView ? `${pillWidth}px` : `${currentDotSize}px`,
        height: isView ? `${pillHeight}px` : `${currentDotSize}px`,
        // A square with fully rounded corners looks like a circle at small size
        borderRadius: "9999px",
        background: isView ? pillBg : dotFill,
        color: isView ? pillTextColor : "transparent",
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
        transition: `background ${duration}ms linear, color ${duration}ms linear, width ${duration}ms cubic-bezier(0.2,0.8,0.2,1), height ${duration}ms cubic-bezier(0.2,0.8,0.2,1), border-radius ${duration}ms cubic-bezier(0.2,0.8,0.2,1)`,
        boxShadow: "none",
        mixBlendMode: "normal",
      }}
    >
      <span
        style={{
          opacity: isView ? 1 : 0,
          transform: isView ? (isClicked ? "scale(1.15)" : "scale(1)") : "scale(0.5)",
          transition: `opacity 200ms ease ${isView ? 200 : 0}ms, transform ${duration}ms cubic-bezier(0.2,0.8,0.2,1), color ${duration}ms linear`,
          willChange: "opacity, transform, color",
          color: pillTextColor,
        }}
      >
        {pillText}
      </span>
    </div>
  );
}


