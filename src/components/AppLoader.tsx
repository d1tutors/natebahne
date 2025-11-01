"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function AppLoader() {
  const controls = useAnimation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      // Check if we should skip the loader animation
      const shouldSkip = typeof window !== "undefined" && sessionStorage.getItem("skip-loader") === "true";
      
      if (shouldSkip) {
        // Clear the flag
        sessionStorage.removeItem("skip-loader");
        // Immediately trigger completion without animation
        if (mounted) {
          if (typeof window !== "undefined") {
            (window as any).__APP_LOADER_DONE__ = true;
          }
          if (typeof document !== "undefined") {
            document.dispatchEvent(new CustomEvent("app-loader-complete"));
          }
          setVisible(false);
        }
        return;
      }

      // Compute dynamic bezel: 10% of the smaller viewport dimension
      const minDimension = typeof window !== "undefined" ? Math.min(window.innerWidth, window.innerHeight) : 0;
      const inset = minDimension * 0.10;
      const targetTop = inset;
      const targetLeft = inset;
      const targetWidth = typeof window !== "undefined" ? window.innerWidth - inset * 2 : "calc(100vw - 192px)";
      const targetHeight = typeof window !== "undefined" ? window.innerHeight - inset * 2 : "calc(100vh - 192px)";
      // Rotate a minimum of 2x: each rotate 0.5s + pause 0.5s
      let angle = 45;
      for (let i = 0; i < 2; i++) {
        angle += 90;
        await controls.start({ rotate: angle, transition: { duration: 0.5, ease: "easeInOut" } });
        await new Promise((r) => setTimeout(r, 500));
      }

      // Final 45° rotation + scale to hero rectangle size simultaneously (dynamic inset)
      await controls.start({
        rotate: 360,
        top: targetTop,
        left: targetLeft,
        width: targetWidth as any,
        height: targetHeight as any,
        borderRadius: 40,
        transition: { 
          duration: 0.6, 
          ease: "easeInOut",
          rotate: { duration: 0.6, ease: [0.1, 0.2, 0.3, 1] },  // Faster rotation
          width: { duration: 0.6, ease: "easeInOut" },
          height: { duration: 0.6, ease: "easeInOut" },
          top: { duration: 0.6, ease: "easeInOut" },
          left: { duration: 0.6, ease: "easeInOut" },
          // Delay corner rounding until after size expansion to reduce artifacts
          borderRadius: { duration: 0.6, ease: "easeInOut"}
        },
      });

      // Keep the loader visible but make it non-interactive
      if (mounted) {
        // Notify the app that the loader sequence has completed
        if (typeof window !== "undefined") {
          // Mark a global flag so late listeners can detect completion
          (window as any).__APP_LOADER_DONE__ = true;
        }
        if (typeof document !== "undefined") {
          document.dispatchEvent(new CustomEvent("app-loader-complete"));
        }
        // We'll let the Hero component handle the fade-in of content
        // The loader will be covered by the fading-in hero content
        setVisible(false);
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, [controls]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60]" style={{ background: "#F5F1E6" }}>
      <motion.div
        animate={controls}
        initial={{
          rotate: 45,
          top: "calc(50vh - 48px)",
          left: "calc(50vw - 48px)",
          width: 96,
          height: 96,
          borderRadius: 16,
          opacity: 1,
        }}
        style={{
          position: "fixed",
          background: 'var(--dark-bg)',
          willChange: "transform, width, height, top, left, border-radius",
          backfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)",
        }}
      />
    </div>
  );
}
