import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const stack = ["Claude Code", "Gemini AI", "TypeScript", "Vitest", "GitHub CLI", "Node.js"];

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-emerald)]">
          <div className="absolute inset-0 bg-decor-dots opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-success)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              Engineering Deep-Dives
            </h1>
            <p className="text-lg text-[var(--color-text-body)] mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Technical deep-dives into systems design, AI-assisted development workflows,
              and resilient architectural patterns implemented in production.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <section className="mb-16 animate-fade-in-up">
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">AI Coding Agent Harness</h2>
              <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
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

            <section className="bg-[var(--color-bg-pale-blue)] border border-[var(--color-border)] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Core Engineering Principles</h2>
              <ul className="space-y-4 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Determinism:</strong> Every AI-assisted change runs through strict unit and integration assertions before PR generation.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Decoupling:</strong> Edge routing isolates conversational WhatsApp API latency from relational DB queries via queues and caching.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Zero-Trust:</strong> Cryptographic HMAC verification for all incoming requests, enforcing row-level security at the database layer.
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Documentation:</strong> Technical Decision Records (TDR) for all architectural choices — sync vs webhook pipelines, vector embeddings, state machines.
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}