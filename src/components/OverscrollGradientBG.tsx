"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Utility to lerp between two hex colors (no alpha)
function lerpColor(a: string, b: string, t: number): string {
  function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
    const num = parseInt(hex, 16);
    return [
      (num >> 16) & 0xff,
      (num >> 8) & 0xff,
      num & 0xff,
    ];
  }
  function rgbToHex(rgb: number[]) {
    return (
      "#" + rgb.map(v => v.toString(16).padStart(2, "0")).join("")
    );
  }
  const rgbA = hexToRgb(a);
  const rgbB = hexToRgb(b);
  const mix = [0, 1, 2].map(i => Math.round(rgbA[i] + (rgbB[i] - rgbA[i]) * t));
  return rgbToHex(mix);
}

const TAN = "#F5F1E6";
const GREEN = "#06402A";

export default function OverscrollGradientBG() {
  const pathname = usePathname();
  
  useEffect(() => {
    let ticking = false;
    const handle = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      let t = h > 0 ? Math.max(0, Math.min(1, scrollY / h)) : 0;
      // Smooth out with ease-in-out
      t = 0.5 - 0.5 * Math.cos(Math.PI * t);
      const col = lerpColor(TAN, GREEN, t);
      document.documentElement.style.background = col;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handle();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initial update - but delay slightly to ensure scroll position is correct
    requestAnimationFrame(() => {
      handle();
      // Also update after a short delay to catch any late scroll corrections
      setTimeout(() => {
        handle();
      }, 100);
      // One more update after longer delay
      setTimeout(() => {
        handle();
      }, 250);
    });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.background = TAN;
    };
  }, [pathname]);
  return null;
}
