"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    liveUrl?: string;
    githubUrl?: string;
    stack: string[];
    image?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 transition-colors">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-zinc-900 mb-2">{project.title}</h3>
        <p className="text-zinc-600 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <TechStackBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <a className="text-sm text-zinc-700 hover:text-cyan-600 transition-colors">
                Live
                <ExternalLink className="h-3.5 w-3.5 ml-1 inline" />
              </a>
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <a className="text-sm text-zinc-700 hover:text-cyan-600 transition-colors">
                Code
                <GithubIcon className="h-3.5 w-3.5 ml-1 inline" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}