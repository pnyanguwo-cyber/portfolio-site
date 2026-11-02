"use client";

import React from "react";
import { ProjectCard } from "@/components/project-card";
import { Navigation } from "@/components/navigation";
import { Code2, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "A cross-platform property discovery ecosystem connecting Zimbabwean tenants with landlords through web, mobile, and WhatsApp. Built with Expo/React Native, Supabase PostgreSQL, and automated AI listing curation with verified landlord security portals.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    role: "Co-founder & Product Architect",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router", "Tailwind CSS"],
    slug: "rent-zimbabwe",
  },
  {
    title: "WA Directory",
    description:
      "Conversational commercial directory powered by WhatsApp Business API and Google Gemini 2.0 Flash. Facilitates real-time natural language business search in English and Shona, interactive messaging flows, and zero-latency listings verification.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    role: "Co-founder & Lead Architect",
    stack: ["Next.js 16", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Node.js", "Supabase Vector"],
    slug: "wa-directory",
  },
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured multi-agent development workflow with human-led validation. Constrains the agent environment, decomposes complex refactors into verifiable AST steps, and executes deterministic Vitest assertions before code acceptance.",
    liveUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Workflow Architect & Designer",
    stack: ["Claude Code", "Gemini AI", "GitHub CLI", "TypeScript", "Vitest", "Node.js"],
    slug: "ai-harness",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
              Engineering & Digital Products
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Selected production applications and systems built with a security-aware mindset, anti-gravity autonomy, and modern cloud technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
