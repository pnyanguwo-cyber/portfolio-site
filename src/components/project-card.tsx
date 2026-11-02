"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    capabilities: string[];
    stack: string[];
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project screenshot */}
      <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-pale-blue)]">
        <img
          src={project.image}
          alt={`${project.title} - Application screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      {/* Project content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)] mb-3">
          {project.title}
        </h3>
        <p className="text-[var(--color-text-body)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Capabilities */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            Key Capabilities
          </h4>
          <ul className="space-y-2">
            {project.capabilities.map((capability) => (
              <li key={capability} className="flex items-center gap-2 text-sm text-[var(--color-text-body)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" aria-hidden="true" />
                {capability}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-pale-blue)] rounded-md border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-200"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View Live
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Source Code
          </Link>
        </div>
      </div>
    </article>
  );
}