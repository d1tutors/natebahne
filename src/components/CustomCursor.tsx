"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const rafId = useRef<number | null>(null);
  const debugRef = useRef<{ samples: number; valid: number; avgLum: number }>({ samples: 0, valid: 0, avgLum: 0 });
  const cssBg = useRef<string>("#ffffff");
  const frameCounter = useRef(0);

  function parseCssColorToRgba(color: string): { r: number; g: number; b: number; a: number } | null {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#000";
    ctx.fillStyle = color.trim();
    const computed = ctx.fillStyle as string;
    const m = computed.match(/rgba?\(([^)]+)\)/i);
    if (!m) return null;
    const parts = m[1].split(",").map((p) => p.trim());
    const r = Number(parts[0]);
    const g = Number(parts[1]);
    const b = Number(parts[2]);
    const a = parts[3] !== undefined ? Number(parts[3]) : 1;
    if ([r, g, b].some((v) => Number.isNaN(v)) || Number.isNaN(a)) return null;
    return { r, g, b, a };
  }

  function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
    const srgb = [r, g, b]
      .map((v) => v / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  function resolveEffectiveColorAtPoint(x: number, y: number): { r: number; g: number; b: number; a: number } | null {
    // Use elementsFromPoint to get stack; skip the cursor via pointer-events: none
    const elements = document.elementsFromPoint(x, y) as Element[];
    // Try text color first where meaningful
    for (const el of elements) {
      const style = getComputedStyle(el as Element);
      const col = style.color;
      const parsedCol = parseCssColorToRgba(col);
      if (parsedCol && (el as HTMLElement).innerText && (el as HTMLElement).innerText.trim().length > 0) {
        return parsedCol;
      }
    }
    // Then find first non-transparent background walking up each element's chain
    const seen = new Set<HTMLElement>();
    for (const el of elements) {
      let cur: HTMLElement | null = el as HTMLElement;
      while (cur && !seen.has(cur)) {
        seen.add(cur);
        const style = getComputedStyle(cur);
        const bg = style.backgroundColor;
        const parsedBg = parseCssColorToRgba(bg);
        if (parsedBg && parsedBg.a > 0) return parsedBg;
        cur = cur.parentElement;
      }
    }
    // Fallback to CSS variable --background, then body/html
    return (
      parseCssColorToRgba(cssBg.current) ||
      parseCssColorToRgba(getComputedStyle(document.body).backgroundColor) ||
      parseCssColorToRgba(getComputedStyle(document.documentElement).backgroundColor)
    );
  }

  function sampleAverageLuminance(x: number, y: number, radius: number): number {
    // Temporarily hide the cursor so hit-testing can "see" underneath
    const cursorEl = cursorRef.current;
    const prevVisibility = cursorEl ? cursorEl.style.visibility : "";
    if (cursorEl) cursorEl.style.visibility = "hidden";

    // Fixed multi-ring pattern: center + inner 8 + outer 8
    const offsets: Array<[number, number]> = [[0, 0]];
    const ringR1 = Math.max(2, Math.floor(radius * 0.5));
    const ringR2 = Math.max(ringR1 + 1, Math.floor(radius * 0.9));
    const dirs = 8;
    for (let i = 0; i < dirs; i++) {
      const ang = (i * 2 * Math.PI) / dirs;
      offsets.push([Math.round(Math.cos(ang) * ringR1), Math.round(Math.sin(ang) * ringR1)]);
      offsets.push([Math.round(Math.cos(ang) * ringR2), Math.round(Math.sin(ang) * ringR2)]);
    }

    let totalLum = 0;
    let count = 0;
    let attempted = 0;
    try {
      for (const [dx, dy] of offsets) {
        const px = Math.max(0, Math.min(window.innerWidth - 1, x + dx));
        const py = Math.max(0, Math.min(window.innerHeight - 1, y + dy));
        attempted += 1;
        const rgba = resolveEffectiveColorAtPoint(px, py);
        if (!rgba) continue;
        totalLum += relativeLuminance(rgba);
        count += 1;
        // Detailed per-sample logging on every 10th frame to avoid spam
        if (process.env.NODE_ENV !== "production" && frameCounter.current % 10 === 0) {
          const els = document.elementsFromPoint(px, py);
          const top = els[0] as HTMLElement | undefined;
          const style = top ? getComputedStyle(top) : null;
          // eslint-disable-next-line no-console
          console.debug(
            "[CustomCursor] sample",
            { px, py, tag: top?.tagName, class: top?.className, bg: style?.backgroundColor, color: style?.color,
              pickedLum: relativeLuminance(rgba).toFixed(3) }
          );
        }
      }
    } finally {
      if (cursorEl) cursorEl.style.visibility = prevVisibility;
    }

    const avg = count === 0 ? 1 : totalLum / count;
    debugRef.current = { samples: attempted, valid: count, avgLum: avg };
    return avg;
  }

  useEffect(() => {
    // Resolve CSS variable --background once; this is the app's tan background
    const rootStyle = getComputedStyle(document.documentElement);
    const bgVar = rootStyle.getPropertyValue("--background").trim();
    if (bgVar) cssBg.current = bgVar;

    const handleMove = (e: PointerEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (cursorRef.current && cursorRef.current.style.opacity !== "1") {
        cursorRef.current.style.opacity = "1";
      }
      if (rafId.current == null) {
        rafId.current = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
            const diameter = cursorRef.current.offsetWidth || 28;
            const radius = Math.round(diameter / 2);
            frameCounter.current += 1;
            const avgLum = sampleAverageLuminance(mouseX.current, mouseY.current, radius);
            const useBlack = avgLum > 0.5; // light background → black cursor
            cursorRef.current.style.background = useBlack ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)";
            cursorRef.current.style.boxShadow = useBlack
              ? "0 0 0 1px rgba(0,0,0,0.2) inset"
              : "0 0 0 1px rgba(255,255,255,0.4) inset";
            // Debug output to help verify sampling and decision
            if (process.env.NODE_ENV !== "production") {
              const dbg = debugRef.current;
              // Log once per frame; concise payload
              // eslint-disable-next-line no-console
              console.log("[CustomCursor] avgLum:", dbg.avgLum.toFixed(3), "samples:", dbg.samples, "valid:", dbg.valid, "choice:", useBlack ? "black" : "white");
            }
          }
          rafId.current = null;
        });
      }
    };

    document.addEventListener("pointermove", handleMove as any, { passive: true } as any);
    return () => {
      document.removeEventListener("pointermove", handleMove as any);
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden className="custom-cursor" />;
}


