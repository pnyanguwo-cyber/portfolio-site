"use client";

import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Security Knowledge Base",
    description:
      "A curated library of security methodologies, threat models, and secure coding patterns developed through my work with multi-agent AI systems and secure application development. Includes STRIDE analysis, OWASP Top 10 patterns, and security testing frameworks.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Security Knowledge Compilation",
    stack: ["OWASP", "STRIDE", "Secure Coding", "Threat Modeling"],
    slug: "security-knowledge",
  },
  {
    title: "WA Directory Security Model",
    description:
      "Comprehensive security architecture for WhatsApp-based directory platform, featuring HMAC authentication, service-role database access, input validation, and threat modeling documented in IMPROVEMENTS.md.",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    role: "Security Architect",
    stack: ["Next.js Security", "Supabase RLS", "HMAC", "WhatsApp API Security"],
    slug: "wa-security",
  },
];

const securityConcepts = [
  {
    title: "Threat Modeling",
    description: "STRIDE-based analysis of system components, trust boundaries, and attack surfaces",
  },
  {
    title: "Authentication & Authorization",
    description: "HMAC token design, secure session management, role-based access control",
  },
  {
    title: "Input Validation",
    description: "Schema-driven validation, type safety, injection prevention patterns",
  },
  {
    title: "Secure AI Integration",
    description: "Prompt injection defense, output validation, context sanitization",
  },
];

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center justify-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              Cybersecurity
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A security-aware approach to software development, from threat modeling to
              secure implementation patterns. All work documented here is either from
              authorized environments or sanitized for educational presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Security Knowledge Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityConcepts.map((concept) => (
                <div key={concept.title} className="bg-white dark:bg-zinc-950 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}