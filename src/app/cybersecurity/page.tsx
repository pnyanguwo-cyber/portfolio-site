import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const stack = ["Next.js", "Supabase RLS", "HMAC SHA-256", "WhatsApp Cloud API", "TypeScript", "Node.js"];

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Cybersecurity & Secure Systems
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              A security-first methodology applied across system architectures — from cryptographic
              API handshakes to hardened multi-agent LLM runtime defenses.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">WA Directory Zero-Trust Security Model</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Comprehensive security architecture for the WhatsApp-based directory platform:
            </p>
            <ul className="space-y-3 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4 mb-6">
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>HMAC-SHA256</strong> signature verification on all inbound Meta webhook payloads
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Supabase Row-Level Security (RLS)</strong> enforcing tenant isolation at the database layer
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Multi-lingual prompt sanitization</strong> against adversarial LLM injection in English and Shona
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Magic-byte validation & malware scanning</strong> for business logo uploads
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Fail-closed configuration</strong> with automated credential rotation
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {stack.map((tech) => (
                <TechStackBadge key={tech} name={tech} />
              ))}
            </div>
            <Link href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
              <Button asChild size="sm" variant="outline">
                <a href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-3.5 w-3.5 mr-1" />
                  View Security Implementation
                </a>
              </Button>
            </Link>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Security Knowledge & Competencies</h2>
            <ul className="space-y-3 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>STRIDE Threat Modeling</strong> — systematic analysis of spoofing, tampering, repudiation, information disclosure, DoS, and elevation of privilege
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Authentication & Authorization</strong> — HMAC token verification, cryptographic signature matching, least-privilege RBAC
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Zero-Trust Data Protection</strong> — Supabase RLS, encrypted credential vaults, perimeter boundary checks
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>Secure AI Integration</strong> — guardrails against prompt injection, jailbreaks, untrusted token reflection
              </li>
              <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                <strong>OWASP Top 10</strong> — applied mitigations across production APIs and conversational interfaces
              </li>
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