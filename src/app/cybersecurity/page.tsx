"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { ShieldCheck, Lock, AlertTriangle, KeyRound, Terminal } from "lucide-react";

const projects = [
  {
    title: "Security Knowledge Base & Defense-in-Depth",
    description:
      "A curated library of security methodologies, threat models, and secure coding patterns developed through my work with multi-agent AI systems and secure application development. Includes STRIDE analysis, OWASP Top 10 patterns, and prompt injection defenses.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Security Knowledge Architect",
    stack: ["OWASP Top 10", "STRIDE", "Secure Coding", "Threat Modeling", "Prompt Defense"],
    slug: "security-knowledge",
  },
  {
    title: "WA Directory Zero-Trust Security Model",
    description:
      "Comprehensive security architecture for WhatsApp-based directory platform, featuring HMAC SHA-256 payload authentication, Supabase Row-Level Security (RLS), input schema sanitization, and automated rate limiting.",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    role: "Security Architect",
    stack: ["Next.js Security", "Supabase RLS", "HMAC SHA-256", "WhatsApp API Security"],
    slug: "wa-security",
  },
];

const securityConcepts = [
  {
    icon: AlertTriangle,
    title: "STRIDE Threat Modeling",
    description: "Systematic analysis of spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.",
  },
  {
    icon: Lock,
    title: "Authentication & Authorization",
    description: "HMAC token verification, cryptographic signature matching, and least-privilege role-based access controls.",
  },
  {
    icon: KeyRound,
    title: "Zero-Trust Data Protection",
    description: "Strict Supabase Row-Level Security (RLS), encrypted credential vaults, and perimeter boundary checks.",
  },
  {
    icon: Terminal,
    title: "Secure AI Integration",
    description: "Guardrails against prompt injection, jailbreaks, and untrusted token reflections in conversational flows.",
  },
];

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-4 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DEFENSE-IN-DEPTH ENCLAVE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6 flex items-center justify-center gap-3">
              Cybersecurity & Secure Systems
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              A security-first methodology applied across system architectures, from cryptographic API handshakes to hardened multi-agent LLM runtime defenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Security Concepts Grid */}
          <div className="max-w-4xl mx-auto rounded-2xl p-8 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Security Knowledge & Core Competencies
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {securityConcepts.map((concept) => {
                const Icon = concept.icon;
                return (
                  <div
                    key={concept.title}
                    className="p-5 rounded-xl bg-zinc-100/70 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                        {concept.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
