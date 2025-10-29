"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionTwo from "./SectionTwo";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fade in animation after loader completes
  const fadeIn = useAnimation();
  const [isReady, setIsReady] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  // Start fade-in when the loader announces completion, or immediately if already done
  useEffect(() => {
    const startFade = () => {
      if (!heroVisible) {
        setHeroVisible(true);
        // Kick the framer motion fade-in
        fadeIn.start({
          opacity: 1,
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        }).then(() => {
          setIsReady(true);
        });
      }
    };

    // If the loader finished before this mounted, start immediately
    if (typeof window !== "undefined" && (window as any).__APP_LOADER_DONE__) {
      startFade();
    }

    const handleComplete = () => startFade();
    if (typeof document !== "undefined") {
      document.addEventListener("app-loader-complete", handleComplete);
    }
    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("app-loader-complete", handleComplete);
      }
    };
  }, [fadeIn, heroVisible]);

  // Scroll-based animations (only active after initial fade in)
  const inset = useTransform(scrollYProgress, [0, 0.2], [96, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  // Make early scroll also contribute to fading/blur for a more gradual transition
  const textScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.22], [0, 12]);
  const textBlurPx = useTransform(textBlur, (v: number) => `blur(${v}px)`);
  const contentY = useTransform(scrollYProgress, [0, 1], [240, -2100]);

  return (
    <div ref={ref} className="h-[400vh]">
      <div className="sticky top-0 h-screen">
        {/* Animated padding creates perfectly even bezels on all sides */}
        <motion.div style={{ padding: inset }} className="h-full w-full">
          <motion.div
            style={{ borderRadius: radius, background: 'var(--dark-bg)' }}
            className="relative h-full w-full overflow-hidden"
          >
            {/* Hero text layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={fadeIn}
              style={{
                scale: isReady ? textScale : 1,
                // Once ready, hand opacity over to scroll; before that, let framer animate it
                ...(isReady && { opacity: textOpacity }),
                filter: isReady ? textBlurPx : 'blur(0px)',
                willChange: 'opacity',
                pointerEvents: 'none'
              }}
              className="absolute inset-0 z-20 flex items-center justify-center text-center text-[#F5F1E6]"
            >
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">Hey, I’m Nate.</h1>
                <p className="mt-4 text-xl md:text-2xl opacity-90">And I make stuff.</p>
              </div>
            </motion.div>

            {/* Bottom edge gradient (solid bottom ~20% -> fades quickly to transparent) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
              style={{
                height: "30%",
                background:
                  "linear-gradient(180deg, rgba(6, 64, 42, 0) 0%, rgba(6, 64, 42, 0.35) 25%, rgba(6, 64, 42, 0.7) 60%, rgba(6, 64, 42, 1) 80%, rgba(6, 64, 42, 1) 100%)",
              }}
            />

            {/* Top edge gradient (solid top ~20% -> fades quickly to transparent) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10"
              style={{
                height: "30%",
                background:
                  "linear-gradient(180deg, rgba(6, 64, 42, 1) 0%, rgba(6, 64, 42, 1) 20%, rgba(6, 64, 42, 0.7) 40%, rgba(6, 64, 42, 0.35) 65%, rgba(6, 64, 42, 0) 100%)",
              }}
            />

            {/* Masked scrolling content (Blank section + Section Two) */}
            <motion.div style={{ y: contentY }} className="relative z-0">
              {/* Blank spacer above the second section */}
              <section aria-hidden className="min-h-[60vh]" />
              <SectionTwo />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
