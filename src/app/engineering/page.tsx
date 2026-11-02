"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Cpu, Terminal, GitBranch, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured AI-assisted development workflow with human-led validation. Constrains the agent environment, decomposes tasks, reviews changes, and makes deterministic decisions on code acceptance using automated test fixtures and security linting.",
    liveUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Workflow Architect & Designer",
    stack: ["Claude Code", "Gemini AI", "GitHub CLI", "TypeScript", "Vitest", "Node.js"],
    slug: "ai-harness",
  },
  {
    title: "Technical Decision Records (TDR)",
    description:
      "Comprehensive architectural documentation across Rent Zimbabwe and WA Directory, detailing synchronous vs webhook pipelines, HMAC signature verification, vector database embeddings, and multi-agent system state machines.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Technical Architect & Author",
    stack: ["Markdown", "Mermaid", "TypeScript", "System Design", "Architecture"],
    slug: "technical-decisions",
  },
];

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5" />
              <span>SYSTEMS & AGENT ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 text-zinc-50 tracking-tight mb-6">
              Engineering Deep-Dives
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 text-zinc-300 max-w-2xl mx-auto">
              Technical deep-dives into systems design, multi-agent validation harnesses, and resilient architectural patterns implemented in production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Architectural Pillars */}
          <div className="max-w-4xl mx-auto rounded-2xl p-8 bg-white/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 text-zinc-100 mb-6 flex items-center gap-2.5">
              <GitBranch className="h-6 w-6 text-cyan-500" />
              Core Engineering Principles
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-950/70 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-xs font-mono text-cyan-600 text-cyan-400 font-bold block mb-1">01 / DETERMINISM</span>
                <h3 className="font-semibold text-zinc-900 text-zinc-100 text-sm mb-2">Automated Test Harnesses</h3>
                <p className="text-xs text-zinc-600 text-zinc-400 leading-relaxed">
                  Every AI-assisted code change runs through strict unit and integration assertions before pull-request generation.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-950/70 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-xs font-mono text-indigo-600 text-indigo-400 font-bold block mb-1">02 / DECOUPLING</span>
                <h3 className="font-semibold text-zinc-900 text-zinc-100 text-sm mb-2">Asynchronous Webhooks</h3>
                <p className="text-xs text-zinc-600 text-zinc-400 leading-relaxed">
                  Edge routing isolates conversational WhatsApp API latency from relational database queries via queues and caching.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-950/70 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-xs font-mono text-emerald-600 text-emerald-400 font-bold block mb-1">03 / ZERO-TRUST</span>
                <h3 className="font-semibold text-zinc-900 text-zinc-100 text-sm mb-2">Boundary Validation</h3>
                <p className="text-xs text-zinc-600 text-zinc-400 leading-relaxed">
                  Cryptographic HMAC verification for all incoming requests, enforcing row-level security policies at the database layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
