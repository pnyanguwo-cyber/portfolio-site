import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const stack = ["Next.js", "Supabase RLS", "HMAC SHA-256", "WhatsApp Cloud API", "TypeScript", "Node.js"];

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-cyan)]">
          <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              Cybersecurity & Secure Systems
            </h1>
            <p className="text-lg text-[var(--color-text-body)] mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              A security-first methodology applied across system architectures — from cryptographic
              API handshakes to hardened LLM runtime defenses.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <section className="mb-16 animate-fade-in-up">
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">WA Directory Zero-Trust Security Model</h2>
              <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                Comprehensive security architecture for the WhatsApp-based directory platform:
              </p>
              <ul className="space-y-3 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4 mb-6">
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>HMAC-SHA256</strong> signature verification on all inbound Meta webhook payloads
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Supabase Row-Level Security (RLS)</strong> enforcing tenant isolation at the database layer
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Multi-lingual prompt sanitization</strong> against adversarial LLM injection in English and Shona
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Magic-byte validation & malware scanning</strong> for business logo uploads
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
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

            <section className="bg-[var(--color-bg-pale-blue)] border border-[var(--color-border)] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Security Knowledge & Competencies</h2>
              <ul className="space-y-3 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>STRIDE Threat Modeling</strong> — systematic analysis of spoofing, tampering, repudiation, information disclosure, DoS, and elevation of privilege
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Authentication & Authorization</strong> — HMAC token verification, cryptographic signature matching, least-privilege RBAC
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Zero-Trust Data Protection</strong> — Supabase RLS, encrypted credential vaults, perimeter boundary checks
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>Secure AI Integration</strong> — guardrails against prompt injection, jailbreaks, untrusted token reflection
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  <strong>OWASP Top 10</strong> — applied mitigations across production APIs and conversational interfaces
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