"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in ms before the reveal transition starts */
  delay?: number;
  className?: string;
};

/**
 * Fades content up into view the first time it scrolls into the viewport.
 * Falls back to visible instantly if IntersectionObserver is unavailable.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const fallback = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
