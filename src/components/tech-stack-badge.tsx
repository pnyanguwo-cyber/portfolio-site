"use client";

import React from "react";

interface TechStackBadgeProps {
  name: string;
}

export function TechStackBadge({ name }: TechStackBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
      {name}
    </span>
  );
}