"use client";

import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { ProjectCard } from "./project-card";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    title: "Rent Zimbabwe",
    description: "A modern property rental platform connecting property seekers with trusted owners across Zimbabwe.",
    image: "/rent-zimbabwe.png",
    liveUrl: "https://www.rentzimbabwe.co.zw",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityhomeswebsite",
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
  {
    title: "TapDine",
    description: "Restaurant OS with real-time analytics, frictionless mobile ordering, and instant kitchen-to-table communication for modern restaurants.",
    image: "/tapdine.png",
    liveUrl: "https://tapdine-landing.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/tapdine",
    capabilities: ["Real-time sales analytics", "Mobile ordering", "Instant waiter calls", "Multi-outlet management"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Supreme Organics",
    description: "Online home for a Harare nursery — plants, succulents, green spaces and practical gardening knowledge, with ordering on WhatsApp.",
    image: "/supreme-organics.jpg",
    liveUrl: "https://supreme-organics-site.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/supreme-organics-site",
    capabilities: ["Online shop & catalog", "Sustainable living guides", "WhatsApp ordering", "Green spaces services"],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-white"
      aria-labelledby="projects-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            FEATURED PROJECTS
          </span>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            Real Solutions.{' '}<span className="text-gradient-animate">Real Impact.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Production applications built with security, scalability, and user experience at the core.
          </p>
        </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
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