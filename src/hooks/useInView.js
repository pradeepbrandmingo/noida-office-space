"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useInView Hook
 * Provides smooth, performance-optimized scroll-reveal animations across all devices.
 * Zero external dependencies, pure native browser IntersectionObserver.
 */
export function useInView(options = {}) {
  const { threshold = 0.12, triggerOnce = true, rootMargin = "0px 0px -40px 0px" } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setIsInView(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isInView];
}
