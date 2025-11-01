"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Force scroll to top with multiple attempts to ensure it works
  // Also triggers scroll events so components that listen to scroll will update
  const forceScrollToTop = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Use multiple methods to ensure scroll happens AND trigger scroll events
    const scroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // CRITICAL: Trigger a scroll event so components that listen to scroll updates will re-render
      // This is needed because components read scroll position on mount, then we scroll,
      // but they don't know to re-check unless we fire the event
      const scrollEvent = new Event("scroll", { bubbles: true });
      window.dispatchEvent(scrollEvent);
      document.dispatchEvent(scrollEvent);
    };

    // Immediate attempt
    scroll();
    
    // Second attempt after browser paints
    requestAnimationFrame(() => {
      scroll();
      
      // Third attempt after a short delay to catch any late updates
      setTimeout(() => {
        scroll();
        
        // Fourth attempt after components have measured (for complex layouts)
        requestAnimationFrame(() => {
          scroll();
          
          // Final attempt after a longer delay for components that measure on mount
          setTimeout(() => {
            scroll();
          }, 100);
          
          // One more attempt after all async operations
          setTimeout(() => {
            scroll();
          }, 200);
        });
      }, 50);
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Handle pages loaded from back/forward cache
    const handlePageShow = (e: PageTransitionEvent) => {
      // If page was loaded from bfcache, force scroll to top
      if (e.persisted) {
        forceScrollToTop();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pageshow", handlePageShow);

    // Scroll to top on initial mount
    forceScrollToTop();

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [forceScrollToTop]);

  // Scroll to top whenever the pathname changes (including back/forward navigation)
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Force scroll to top on navigation
    forceScrollToTop();
    
    // Also handle popstate events (back/forward button)
    const handlePopState = () => {
      // Delay slightly to let the browser finish restoring
      setTimeout(() => {
        forceScrollToTop();
      }, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, forceScrollToTop]);

  return null;
}


