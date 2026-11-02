"use client";

import React from "react";

interface TechStackBadgeProps {
  name: string;
}

export function TechStackBadge({ name }: TechStackBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-zinc-100 text-zinc-800 bg-zinc-900/90 text-zinc-300 border border-zinc-200/80 border-zinc-800/80 hover:border-cyan-500/50 hover:text-cyan-600 hover:text-cyan-400 hover:shadow-sm transition-all duration-200">
      <span className="w-1 h-1 rounded-full bg-cyan-500/80" />
      {name}
    </span>
  );
}
