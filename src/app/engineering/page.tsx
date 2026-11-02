import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const stack = ["Claude Code", "Gemini AI", "TypeScript", "Vitest", "GitHub CLI", "Node.js"];

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Hero with gradient background */}
        <section className="relative py-24 min-h-[50vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80 -z-10" />
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, emerald, transparent 40%), radial-gradient(circle at 80% 70%, teal, transparent 40%)" }} />

          <div className="container mx-auto px-4 sm:px-6 max-w-3xl z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Engineering Deep-Dives
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Technical deep-dives into systems design, AI-assisted development workflows,
              and resilient architectural patterns implemented in production.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <section className="mb-16">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">AI Coding Agent Harness</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                A structured AI-assisted development workflow with human-led validation. The harness
                constrains the agent environment, decomposes complex tasks into verifiable AST steps,
                and executes deterministic Vitest assertions before any code is accepted. Every change
                runs through strict unit and integration checks before pull-request generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {stack.map((tech) => (
                  <TechStackBadge key={tech} name={tech} />
                ))}
              </div>
              <Link href="https://github.com/pnyanguwo-cyber/ai-coding-agent-harness" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm">
                  <a href="https://github.com/pnyanguwo-cyber/ai-coding-agent-harness" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </Link>
            </section>

            <section className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Core Engineering Principles</h2>
              <ul className="space-y-4 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  <strong>Determinism:</strong> Every AI-assisted change runs through strict unit and integration assertions before PR generation.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  <strong>Decoupling:</strong> Edge routing isolates conversational WhatsApp API latency from relational DB queries via queues and caching.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  <strong>Zero-Trust:</strong> Cryptographic HMAC verification for all incoming requests, enforcing row-level security at the database layer.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  <strong>Documentation:</strong> Technical Decision Records (TDR) for all architectural choices — sync vs webhook pipelines, vector embeddings, state machines.
                </li>
              </ul>
            </section>
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