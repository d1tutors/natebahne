"use client";

import { useEffect, useRef } from "react";

type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number; // 0..1
};

function clamp01(value: number): number {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

function parseCssColorToRgba(cssColor: string | null): RgbaColor | null {
  if (!cssColor) return null;
  const color = cssColor.trim().toLowerCase();

  // rgb(a)
  const rgbaMatch = color.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/
  );
  if (rgbaMatch) {
    const r = Math.round(Number(rgbaMatch[1]));
    const g = Math.round(Number(rgbaMatch[2]));
    const b = Math.round(Number(rgbaMatch[3]));
    const a = rgbaMatch[4] !== undefined ? clamp01(Number(rgbaMatch[4])) : 1;
    return { r, g, b, a };
  }

  // hex #rgb, #rgba, #rrggbb, #rrggbbaa
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      const a = hex.length === 4 ? parseInt(hex[3] + hex[3], 16) / 255 : 1;
      return { r, g, b, a };
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
      return { r, g, b, a };
    }
  }

  // fallback: common color names via computed style already resolve to rgb/rgba, so reach here rarely
  return null;
}

function blendRgba(over: RgbaColor, under: RgbaColor): RgbaColor {
  const a = over.a + under.a * (1 - over.a);
  if (a === 0) return { r: 0, g: 0, b: 0, a: 0 };
  const r = Math.round((over.r * over.a + under.r * under.a * (1 - over.a)) / a);
  const g = Math.round((over.g * over.a + under.g * under.a * (1 - over.a)) / a);
  const b = Math.round((over.b * over.a + under.b * under.a * (1 - over.a)) / a);
  return { r, g, b, a };
}

function rgbaToHex(color: RgbaColor): string {
  const toHex = (v: number) => v.toString(16).padStart(2, "0");
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
}

function getPixelFromCanvasAtPoint(canvas: HTMLCanvasElement, x: number, y: number): RgbaColor | null {
  try {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const sx = Math.min(canvas.width - 1, Math.max(0, Math.round((x - rect.left) * (canvas.width / rect.width))));
    const sy = Math.min(canvas.height - 1, Math.max(0, Math.round((y - rect.top) * (canvas.height / rect.height))));
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const data = ctx.getImageData(sx, sy, 1, 1).data;
    return { r: data[0], g: data[1], b: data[2], a: data[3] / 255 };
  } catch {
    return null;
  }
}

function getPixelFromImageLikeAtPoint(el: HTMLImageElement | HTMLVideoElement, x: number, y: number): RgbaColor | null {
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return null;
  const naturalWidth = (el as any).naturalWidth ?? (el as any).videoWidth;
  const naturalHeight = (el as any).naturalHeight ?? (el as any).videoHeight;
  if (!naturalWidth || !naturalHeight) return null;
  const sx = Math.min(naturalWidth - 1, Math.max(0, Math.round((x - rect.left) * (naturalWidth / rect.width))));
  const sy = Math.min(naturalHeight - 1, Math.max(0, Math.round((y - rect.top) * (naturalHeight / rect.height))));
  try {
    const off = document.createElement("canvas");
    off.width = 1;
    off.height = 1;
    const ctx = off.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(el as any, sx, sy, 1, 1, 0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    return { r: data[0], g: data[1], b: data[2], a: data[3] / 255 };
  } catch {
    // Likely cross-origin taint; fall back to computed/background approach
    return null;
  }
}

// Text detection removed per request; keep image/canvas sampling and background blending only.

export function resolveEffectiveBackgroundAtPoint(x: number, y: number): string | null {
  let el: Element | null = document.elementFromPoint(x, y);

  // 1) If directly over a canvas, sample from it
  if (el instanceof HTMLCanvasElement) {
    const px = getPixelFromCanvasAtPoint(el, x, y);
    if (px) return rgbaToHex(px);
  }

  // 2) If over an image or video element, sample that pixel
  if (el instanceof HTMLImageElement || el instanceof HTMLVideoElement) {
    const px = getPixelFromImageLikeAtPoint(el, x, y);
    if (px) return rgbaToHex(px);
  }

  // 3) Fallback: blend backgrounds up the tree
  let current: Element | null = el;
  let effective: RgbaColor = { r: 0, g: 0, b: 0, a: 0 };
  while (current && current instanceof HTMLElement) {
    const style = getComputedStyle(current);
    const bg = style.backgroundColor;
    const parsed = parseCssColorToRgba(bg);
    if (parsed) {
      effective = blendRgba(parsed, effective);
      if (effective.a >= 0.999) break;
    }
    current = current.parentElement;
  }
  if (effective.a === 0) {
    effective = { r: 255, g: 255, b: 255, a: 1 };
  }
  return rgbaToHex(effective);
}

export default function ColorUnderCursorLogger() {
  const lastHexRef = useRef<string | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    }

    window.addEventListener("mousemove", onMove, { passive: true });

    const interval = window.setInterval(() => {
      const { x, y } = mousePosRef.current;
      const hex = resolveEffectiveBackgroundAtPoint(x, y);
      if (hex && hex !== lastHexRef.current) {
        lastHexRef.current = hex;
        // eslint-disable-next-line no-console
        console.log("Cursor background hex:", hex);
      }
    }, 300);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}


