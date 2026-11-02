"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    liveUrl?: string;
    githubUrl?: string;
    stack: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-300 transition-colors">
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">
        {project.title}
      </h3>
      <p className="text-zinc-600 mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <TechStackBadge key={tech} name={tech} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {project.liveUrl && (
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
              <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild size="sm" variant="outline">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-3.5 w-3.5 mr-1" />
              Code
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}