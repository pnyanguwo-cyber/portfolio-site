"use client";

import React from "react";

interface TechStackBadgeProps {
  name: string;
}

export function TechStackBadge({ name }: TechStackBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded bg-[var(--color-bg-pale-blue)] text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary-light)] transition-colors">
      {name}
    </span>
  );
}