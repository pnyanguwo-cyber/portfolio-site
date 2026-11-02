import React from "react";
import { Navigation } from "@/components/navigation";
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
  "Next.js App Router with Edge Runtime webhooks for sub-100ms Meta payload processing",
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

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {/* Hero */}
          <header className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              WA Directory
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
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
          </header>

          {/* Problem / Solution */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <article className="border border-zinc-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">Problem</h2>
                <ul className="space-y-3 text-zinc-600 text-sm">
                  {problem.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-zinc-400 mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="border border-zinc-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-zinc-900 mb-4">Solution</h2>
                <ul className="space-y-3 text-zinc-600 text-sm">
                  {solution.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-600 mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TechStackBadge key={tech} name={tech} />
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-16">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Architecture</h2>
            <ul className="space-y-3 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
              {architecture.map((item, i) => (
                <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Security Model */}
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Security Model</h2>
            <ul className="space-y-3 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
              {security.map((item, i) => (
                <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </section>
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