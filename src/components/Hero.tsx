"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import SectionTwo from "./SectionTwo";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Measure progress over the actual scrollable distance of the sticky wrapper
    // start when wrapper top hits viewport top; end when wrapper bottom hits viewport bottom
    offset: ["start start", "end end"],
  });

  // Fade in animation after loader completes
  const fadeIn = useAnimation();
  const [isReady, setIsReady] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  // Keep hero text wrapping stable while bezels animate by fixing its layout width
  const [textLayoutWidth, setTextLayoutWidth] = useState<number | null>(null);

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
  // Dynamic bezel: 10% of the smaller viewport dimension
  const [baseInset, setBaseInset] = useState(0);
  useEffect(() => {
    const updateInset = () => {
      if (typeof window === 'undefined') return;
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      setBaseInset(minDimension * 0.10);
    };
    updateInset();
    window.addEventListener('resize', updateInset);
    return () => window.removeEventListener('resize', updateInset);
  }, []);
  const inset = useTransform(scrollYProgress, [0, 0.2], [baseInset, 0]);
  // Counter-offset to keep masked content full-bleed regardless of animated padding
  const negativeInset = useTransform(inset, (v: number) => -v);

  // Calculate a fixed layout width for the hero text based on the initial bezel
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const computeTextWidth = () => {
      const available = Math.max(0, window.innerWidth - baseInset * 2);
      // Leave a small breathing room inside the bezel
      const target = Math.max(0, available - 32);
      setTextLayoutWidth(target);
    };
    computeTextWidth();
    window.addEventListener('resize', computeTextWidth);
    return () => window.removeEventListener('resize', computeTextWidth);
  }, [baseInset]);
  const radius = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  // Make early scroll also contribute to fading/blur for a more gradual transition
  const textScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.22], [0, 12]);
  const textBlurPx = useTransform(textBlur, (v: number) => `blur(${v}px)`);

  // Measure spacer and SectionTwo heights to drive dynamic scroll length
  const spacerRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (typeof window === 'undefined') return;
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
      setSpacerHeight(spacerRef.current ? spacerRef.current.getBoundingClientRect().height : 0);
      setSectionHeight(sectionRef.current ? sectionRef.current.getBoundingClientRect().height : 0);
    };
    measure();
    window.addEventListener('resize', measure);
    // Observe SectionTwo for intrinsic size changes (e.g., image load)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro && sectionRef.current) ro.observe(sectionRef.current);
    const t = window.setTimeout(measure, 0);
    return () => {
      window.removeEventListener('resize', measure);
      if (ro && sectionRef.current) ro.unobserve(sectionRef.current);
      window.clearTimeout(t);
    };
  }, []);

  // Compute total scrollable height for the sticky wrapper and translate range for content
  const totalContent = spacerHeight + sectionHeight;
  const scrollDistance = Math.max(0, totalContent - viewportHeight);
  const wrapperHeight = useMemo(() => Math.max(totalContent, viewportHeight || 0), [viewportHeight, totalContent]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  // Dynamic spacer: push SectionTwo down 90% of viewport height above the first section
  const SPACER_FRACTION = 0.8; // Change this number to instantly update hot reload/behavior

  return (
    <div ref={ref} style={{ height: wrapperHeight || undefined }}>
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
              <div style={{ width: textLayoutWidth ?? 'auto', maxWidth: '100%' }}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">Hey, I’m Nate.</h1>
                <p className="mt-4 text-3xl md:text-3xl opacity-90">I make stuff.</p>
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
            {/* Full-bleed container cancels animated padding so content width stays constant */}
            <motion.div
              style={{
                position: 'absolute',
                top: negativeInset,
                right: negativeInset,
                bottom: negativeInset,
                left: negativeInset,
              }}
              className="z-0"
            >
              <motion.div style={{ y: contentY }} className="relative">
                {/* Blank spacer above the second section */}
                <section ref={spacerRef} aria-hidden style={{ height: `${Math.max(0, Math.round((viewportHeight || 0) * SPACER_FRACTION))}px` }} />
                <div ref={sectionRef}>
                  <SectionTwo />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
