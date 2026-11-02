"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink, ArrowRight, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    liveUrl?: string;
    githubUrl?: string;
    role: string;
    stack: string[];
    slug?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Dynamic Cursor Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.4), rgba(99, 102, 241, 0.2), transparent 70%)`
            : "none",
        }}
      />

      {/* Main Glassmorphic Card Container */}
      <div className="relative h-full flex flex-col justify-between rounded-2xl bg-white/80 bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/80 border-zinc-800/80 p-6 sm:p-8 transition-colors">
        {/* Subtle Ambient Corner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-4">
          {/* Header & Role */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-700 text-cyan-400 border border-cyan-500/20 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span>{project.role}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
            </div>

            {project.liveUrl && (
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                LIVE
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-zinc-600 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills with Silicon Valley Micro-Design */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <TechStackBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-zinc-100 border-zinc-900 flex flex-wrap items-center gap-2 sm:gap-3">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="bg-zinc-900 text-white hover:bg-zinc-800 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium text-xs px-3.5"
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <span>Live System</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-zinc-300 border-zinc-800 hover:bg-zinc-100 hover:bg-zinc-900 text-xs px-3.5"
            >
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-3.5 w-3.5 mr-1" />
                <span>Codebase</span>
              </Link>
            </Button>
          )}

          {project.slug && (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-cyan-600 text-cyan-400 hover:bg-cyan-500/10 text-xs px-3.5 ml-auto"
            >
              <Link href={`/projects/${project.slug}`}>
                <span>Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
