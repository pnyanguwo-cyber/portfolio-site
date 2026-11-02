"use client";

import { useEffect, useState } from "react";

export function ThemeProvider() {
  // Light mode only - no theme toggle needed
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return null;
}