"use client";

import React, { useEffect, useState } from "react";

export function SplashScreen() {
  const [isHiding, setIsHiding] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const hideTimer = setTimeout(() => setIsHiding(true), 1600);
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
      document.documentElement.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg-gradient-hero)] transition-opacity duration-700 ease-out ${
        isHiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-cyan)]/10 rounded-full blur-3xl" />

      {/* Logo mark */}
      <div className="relative animate-splash-pop">
        <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-cyan)] text-white font-bold text-3xl shadow-xl shadow-[var(--color-primary)]/30">
          PN
        </span>
      </div>

      {/* Name */}
      <h1 className="mt-6 text-2xl md:text-3xl font-bold text-[var(--color-text-heading)] animate-splash-fade">
        Panashe <span className="text-gradient-animate">Nyanguwo</span>
      </h1>

      {/* Loading bar */}
      <div className="mt-8 h-1 w-44 overflow-hidden rounded-full bg-[var(--color-border)] animate-splash-fade">
        <div className="h-full w-full origin-left animate-splash-progress rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)]" />
      </div>
    </div>
  );
}
