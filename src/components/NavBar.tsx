"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const fadeIn = useAnimation();
  const [navVisible, setNavVisible] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const [topOffset, setTopOffset] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0.3);
  const navRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const needsEvalRef = useRef(false);
  const scrollHistory = useRef<{ time: number; y: number }[]>([]);
  const lastUpdateTime = useRef(Date.now());

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // Set flag to skip loader animation when navigating from another page
      if (typeof window !== "undefined") {
        sessionStorage.setItem("skip-loader", "true");
      }
      // Navigate to home page (ScrollToTop component will handle scrolling)
      router.push("/");
    }
  };

  useEffect(() => {
    const startFade = () => {
      if (!navVisible) {
        setNavVisible(true);
        // Fade in with the same timing as the hero text
        fadeIn.start({
          opacity: 1,
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
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
  }, [fadeIn, navVisible]);

  // Calculate bezel and position navbar centered between top and bezels
  useEffect(() => {
    let rafId: number | null = null;
    
    const updatePosition = () => {
      if (typeof window === "undefined" || !navRef.current) return;
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      const baseInset = minDimension * 0.10; // Same as Hero component
      
      // Get navbar height
      const navbarHeight = navRef.current.getBoundingClientRect().height;
      
      // Get scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      const now = Date.now();
      
      // Track scroll history for velocity calculation
      scrollHistory.current.push({ time: now, y: scrollY });
      
      // Keep only last 150ms of scroll history
      const historyWindow = 150; // milliseconds
      scrollHistory.current = scrollHistory.current.filter(
        entry => now - entry.time <= historyWindow
      );
      
      // Calculate average scroll velocity over the history window
      let scrollVelocity = 0;
      if (scrollHistory.current.length >= 2) {
        const oldest = scrollHistory.current[0];
        const newest = scrollHistory.current[scrollHistory.current.length - 1];
        const totalTime = newest.time - oldest.time;
        const totalDistance = Math.abs(newest.y - oldest.y);
        
        if (totalTime > 0) {
          scrollVelocity = totalDistance / totalTime; // pixels per millisecond
        }
      }
      
      // Only update transition duration if enough time has passed (throttle)
      const timeSinceLastUpdate = now - lastUpdateTime.current;
      if (timeSinceLastUpdate >= 16) { // ~60fps updates
        // Calculate transition duration based on scroll speed
        // Faster scroll (higher velocity) = shorter duration
        // Scale: 0.1 px/ms = slow, 2+ px/ms = very fast
        const maxVelocity = 3; // pixels per ms - adjust this threshold as needed
        const minDuration = 0.01; // seconds - very fast scroll
        const maxDuration = 0.5; // seconds - slow scroll
        
        // Invert: higher velocity = lower duration
        const normalizedVelocity = Math.min(scrollVelocity / maxVelocity, 1);
        const dynamicDuration = maxDuration - (normalizedVelocity * (maxDuration - minDuration));
        
        setTransitionDuration(dynamicDuration);
        lastUpdateTime.current = now;
      }
      
      // When at the top (scroll < 100px), center navbar in bezel space
      // The midpoint between screen top (0) and bezel (baseInset) is baseInset / 2
      // To center the navbar, position its center at that point: top = midpoint - navbarHeight/2
      if (scrollY < 100) {
        const bezelProgress = 1 - (scrollY / 100);
        const midpoint = baseInset / 2;
        const centerOffset = (midpoint - navbarHeight / 2) * bezelProgress;
        setTopOffset(centerOffset);
      } else {
        setTopOffset(0);
      }
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updatePosition();
          rafId = null;
        });
      }
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePosition);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Check background color at navbar position and update text color
  useEffect(() => {
    const getActualBackgroundColorAtPoint = (x: number, y: number): string | null => {
      // Get all elements at this point (not just the top one)
      const elements = document.elementsFromPoint(x, y);
      
      // Filter out the navbar and other UI overlays
      const contentElements = elements.filter(el => {
        // Skip the navbar itself
        if (el.closest('nav')) return false;
        // Skip fixed/sticky positioning elements that might be overlays
        const style = getComputedStyle(el);
        const zIndex = parseInt(style.zIndex || '0', 10);
        // Skip very high z-index elements (likely overlays like navbar, cursor, etc)
        if (zIndex > 40) return false;
        
        // Skip elements that are transparent or have no background
        const bg = style.backgroundColor;
        if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') {
          // Still include it if it might have visible content, but prefer elements with backgrounds
          return true;
        }
        return true;
      });
      
      // Check backgrounds of content elements, starting from the topmost content element
      // Look for solid, opaque backgrounds first
      for (const el of contentElements) {
        if (el instanceof HTMLElement) {
          const style = getComputedStyle(el);
          const bg = style.backgroundColor;
          
          // Parse the background color
          const rgbMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1], 10);
            const g = parseInt(rgbMatch[2], 10);
            const b = parseInt(rgbMatch[3], 10);
            const toHex = (n: number) => n.toString(16).padStart(2, '0');
            const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
            
            // If we found a non-transparent background, use it
            const alphaMatch = bg.match(/rgba?\([^)]+,\s*([\d.]+)\)/);
            const alpha = alphaMatch ? parseFloat(alphaMatch[1]) : 1;
            
            // Prioritize more opaque backgrounds, but accept anything above 10% opacity
            if (alpha > 0.1) {
              // If it's very opaque, return immediately (this is likely the actual background)
              if (alpha > 0.9) {
                return hex;
              }
            }
          }
          
          // Also check for CSS variable colors (like var(--dark-bg))
          // Handle var(--dark-bg) which is #06402A
          if (bg.includes('var(--dark-bg)')) {
            return '#06402A';
          }
        }
      }
      
      // If no solid background found in filtered elements, try the original method
      // but exclude the navbar element first
      return resolveEffectiveBackgroundAtPoint(x, y);
    };

    const updateColor = () => {
      if (typeof window === "undefined" || !navRef.current) return;
      needsEvalRef.current = true;
      if (rafRef.current == null) {
          rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            if (!needsEvalRef.current || !navRef.current) return;
            needsEvalRef.current = false;
            // Check background at multiple points across the navbar
            // Check at a fixed position near the top of viewport where Hero dark green section is visible
            const width = window.innerWidth;
            const y = 30; // Check lower down to better detect background color
            const points = [
              { x: width * 0.1, y }, // Left side (where name is)
              { x: width * 0.5, y }, // Center
              { x: width * 0.9, y }, // Right side (where links are)
            ];
            
            // Sample multiple points
            const samples: string[] = [];
            for (const point of points) {
              try {
                const hex = getActualBackgroundColorAtPoint(point.x, point.y);
                if (hex) {
                  samples.push(hex);
                }
              } catch (e) {
                // Ignore errors
              }
            }
            
            if (samples.length > 0) {
              // Log all samples for debugging
              console.log("NavBar background hex colors:", samples);
              // Use the center point's color as primary
              const primaryHex = samples.length >= 2 ? samples[1] : samples[0];
              console.log("NavBar using hex color:", primaryHex);
              setIsLightBg(isCloserToWhite(primaryHex));
            }
          });
      }
    };

    // Update on scroll and resize
    window.addEventListener("scroll", updateColor, { passive: true });
    window.addEventListener("resize", updateColor, { passive: true });
    
    // Initial check
    updateColor();
    
    // Poll periodically to catch dynamic content changes
    const poll = setInterval(updateColor, 250);

    return () => {
      window.removeEventListener("scroll", updateColor);
      window.removeEventListener("resize", updateColor);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      clearInterval(poll);
    };
  }, []); // Color detection uses fixed position, doesn't depend on navbar position

  const textColor = isLightBg ? "#06402A" : "#F5F1E6";

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={fadeIn}
      className="fixed left-0 right-0 z-50 py-4 md:py-5"
      style={{ 
        pointerEvents: navVisible ? "auto" : "none", 
        background: "transparent",
        top: `${topOffset}px`,
        transition: `top ${transitionDuration}s ease-out`
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left side - Name */}
        <Link
          href="/"
          onClick={handleScrollToTop}
          className="font-bold pl-6 md:pl-8 hover:opacity-70 transition-opacity duration-200"
          style={{ 
            fontFamily: "var(--font-inter)",
            color: textColor,
            transition: "color 300ms ease, opacity 200ms ease"
          }}
        >
          Nate Bahne
        </Link>

        {/* Right side - Navigation links */}
        <div className="flex items-center gap-8 md:gap-10 pr-6 md:pr-8">
          <Link
            href="/my-projects"
            className="hover:opacity-70 transition-opacity duration-200"
            style={{ 
              fontFamily: "var(--font-poppins)",
              color: textColor,
              transition: "color 300ms ease, opacity 200ms ease"
            }}
          >
            My Projects
          </Link>
          <Link
            href="/cool-stuff"
            className="hover:opacity-70 transition-opacity duration-200"
            style={{ 
              fontFamily: "var(--font-poppins)",
              color: textColor,
              transition: "color 300ms ease, opacity 200ms ease"
            }}
          >
            Cool Stuff
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

