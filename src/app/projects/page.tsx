import React from "react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "Cross-platform property discovery platform connecting tenants with verified landlords across web, mobile, and WhatsApp. Built with Expo/React Native and Supabase.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router"],
    image: "/rent-zimbabwe.png",
  },
  {
    title: "WA Directory",
    description:
      "Conversational business directory on WhatsApp using Gemini 2.0 Flash for natural-language search in English and Shona. Handles 10k+ conversations with HMAC-verified webhooks.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    stack: ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector"],
    image: "/wa-directory.png",
  },
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured AI-assisted development workflow with human-led validation. Constrains the agent environment, decomposes tasks into verifiable AST steps, runs deterministic Vitest assertions before code acceptance.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    stack: ["Claude Code", "Gemini AI", "TypeScript", "Vitest", "GitHub CLI"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Hero with gradient background */}
        <section className="relative py-20 min-h-[50vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-white to-indigo-50/80 -z-10" />
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, cyan, transparent 40%), radial-gradient(circle at 80% 70%, indigo, transparent 40%)" }} />

          <div className="container mx-auto px-4 sm:px-6 max-w-3xl z-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Projects
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              Production applications built with security and scalability in mind.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
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