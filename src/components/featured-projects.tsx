"use client";

import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Rent Zimbabwe",
    description: "A modern property rental platform connecting property seekers with trusted owners across Zimbabwe.",
    image: "/rent-zimbabwe.png",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    capabilities: ["Property listings and search", "Direct contact", "Responsive design"],
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router"],
  },
  {
    title: "WA Directory",
    description: "Zimbabwe's WhatsApp business directory, helping users find verified businesses near them.",
    image: "/wa-directory.png",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    capabilities: ["WhatsApp integration", "Smart search", "Business listings"],
    stack: ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector"],
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-white"
      aria-labelledby="projects-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            FEATURED PROJECTS
          </span>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            Real Solutions. Real Impact.
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Production applications built with security, scalability, and user experience at the core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}