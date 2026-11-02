import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const techStack = ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector", "Node.js", "TypeScript"];

const problem = [
  "Small businesses in Zimbabwe lacked discoverability — no centralized directory with real-time updates.",
  "Customers struggled to find businesses using natural language, especially in local languages (Shona).",
  "WhatsApp was the primary communication channel, but no structured business discovery existed on it.",
];

const solution = [
  "Conversational WhatsApp agent using Gemini 2.0 Flash for bilingual (English/Shona) natural-language search.",
  "Verified business listings with pgvector semantic embeddings for intent-based matching.",
  "HMAC-SHA256 verified Meta webhooks with zero service-role exposure to client bundles.",
];

const architecture = [
  "Next.js App Router with Edge Runtime webhooks for Meta payload ingestion",
  "Supabase pgvector for semantic business search with cosine similarity ranking",
  "Supabase Row-Level Security enforcing tenant isolation at the database layer",
  "Self-signed cryptographic admin tokens with automatic rotation and expiry",
];

const security = [
  "HMAC-SHA256 signature verification on all inbound Meta webhook payloads",
  "Multi-lingual prompt sanitization against adversarial LLM injection",
  "Magic-byte validation and malware scanning for business logo uploads",
  "Fail-closed configuration with automated credential rotation",
];

export default function WADirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero with background image */}
        <section className="relative py-20 md:py-32 min-h-[60vh] flex items-center">
          <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'url("/wa-directory.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-cyan)]/10 via-white to-[var(--color-primary)]/10" />

          <div className="container relative z-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4">
              WA Directory
            </h1>
            <p className="text-lg text-[var(--color-text-body)] mb-8 leading-relaxed max-w-2xl">
              Conversational business directory on WhatsApp using Gemini 2.0 Flash for
              natural-language search in English and Shona.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="https://wadirectory.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm">
                  <a href="https://wadirectory.vercel.app" target="_blank" rel="noopener noreferrer">
                    Live App
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm" variant="outline">
                  <a href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3.5 w-3.5 mr-1" />
                    Codebase
                  </a>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="py-20 bg-[var(--color-bg-pale-cyan)] border-y border-[var(--color-border)]">
          <div className="container">
            <img
              src="/wa-directory.png"
              alt="WA Directory app screenshot"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl border border-[var(--color-border)]"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            {/* Problem / Solution */}
            <section className="mb-16 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="border border-[var(--color-border)] rounded-xl p-6 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
                    Problem
                  </h2>
                  <ul className="space-y-3 text-[var(--color-text-body)] text-sm">
                    {problem.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[var(--color-text-muted)] mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="border border-[var(--color-border)] rounded-xl p-6 bg-white hover:border-[var(--color-success)]/30 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                    Solution
                  </h2>
                  <ul className="space-y-3 text-[var(--color-text-body)] text-sm">
                    {solution.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[var(--color-success)] mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <TechStackBadge key={tech} name={tech} />
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Architecture</h2>
              <ul className="space-y-3 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {architecture.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Security Model */}
            <section className="bg-[var(--color-bg-pale-blue)] border border-[var(--color-border)] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                Security Model
              </h2>
              <ul className="space-y-3 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {security.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}