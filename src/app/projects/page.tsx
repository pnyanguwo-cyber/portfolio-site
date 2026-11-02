import React from "react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "Cross-platform property discovery platform (Expo/React Native, Supabase) connecting tenants with verified landlords across web, mobile, and WhatsApp. Includes landlord portal with listing management.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router"],
  },
  {
    title: "WA Directory",
    description:
      "Conversational business directory on WhatsApp using Gemini 2.0 Flash for natural-language search in English and Shona. Handles 10k+ conversations with HMAC-verified webhooks and pgvector semantic search.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    stack: ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector", "Node.js"],
  },
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured AI-assisted development workflow with human-led validation. Constrains agent environment, decomposes tasks into verifiable AST steps, runs deterministic Vitest assertions before code acceptance.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    stack: ["Claude Code", "Gemini AI", "TypeScript", "Vitest", "GitHub CLI"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-10">
            Projects
          </h1>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>Panashe Nyanguwo &copy; 2026</p>
          <div className="flex items-center gap-6">
            <a href="/projects" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="/engineering" className="hover:text-zinc-900 transition-colors">Engineering</a>
            <a href="/cybersecurity" className="hover:text-zinc-900 transition-colors">Security</a>
            <a href="/about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="/contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}