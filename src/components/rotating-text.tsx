"use client";

import React, { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "AI Systems Builder",
  "Product Problem Solver",
];

const TYPE_SPEED_MS = 70;
const ERASE_SPEED_MS = 40;
const HOLD_MS = 1800;

/**
 * Typewriter effect that cycles through ROLES with a blinking cursor.
 */
export function RotatingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing && text === "") {
      // Start typing the next role
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, 1));
        setIsErasing(false);
      }, TYPE_SPEED_MS);
    } else if (isErasing) {
      if (text === "") {
        // Move to the next role
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setIsErasing(false);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, ERASE_SPEED_MS);
      }
    } else if (text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, TYPE_SPEED_MS);
    } else {
      // Hold the full text, then start erasing
      timeout = setTimeout(() => setIsErasing(true), HOLD_MS);
    }

    return () => clearTimeout(timeout);
  }, [text, isErasing, roleIndex]);

  return (
    <span className="text-gradient-animate">
      {text}
      <span
        className="ml-1 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-sm bg-[var(--color-primary)] animate-cursor-blink"
        aria-hidden="true"
      />
      <span className="sr-only">{ROLES.join(", ")}</span>
    </span>
  );
}
