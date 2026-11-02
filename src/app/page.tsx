import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink, Mail, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "Cross-platform property discovery platform (Expo/React Native, Supabase) connecting tenants with verified landlords across web, mobile, and WhatsApp. Includes landlord portal with listing management.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router"],
  },
  {
    title: "WA Directory",
    description:
      "Conversational business directory on WhatsApp using Gemini 2.0 Flash for natural-language search in English and Shona. Handles 10k+ conversations with HMAC-verified webhooks and pgvector semantic search.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    stack: ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector", "Node.js"],
  },
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured AI-assisted development workflow with human-led validation. Constrains agent environment, decomposes tasks into verifiable AST steps, runs deterministic Vitest assertions before code acceptance.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    stack: ["Claude Code", "Gemini AI", "TypeScript", "Vitest", "GitHub CLI"],
  },
];

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Go"],
  Frameworks: ["Next.js", "React", "React Native", "Expo", "Node.js"],
  "Backend & AI": ["Supabase (PostgreSQL)", "pgvector", "Gemini API", "WhatsApp Cloud API", "REST/GraphQL"],
  Security: ["HMAC Authentication", "Row-Level Security", "STRIDE Threat Modeling", "OWASP Top 10", "Prompt Injection Defense"],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 border-b border-zinc-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Panashe Nyanguwo
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-2xl">
              Software engineer building production systems with a security-aware mindset.
              Co-founder of Rent Zimbabwe and WA Directory — serving users across web, mobile, and WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/projects" className="text-sm font-medium text-cyan-600 hover:underline">
                View Work
              </Link>
              <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:underline">
                Contact
              </Link>
              <a
                href="/panashe-nyanguwo-cv.pdf"
                download
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:underline"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <a
                href="https://github.com/pnyanguwo-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/panashe-nyanguwo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:panashe.nyanguwo@example.com"
                className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-10">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <TechStackBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900">Selected Work</h2>
              <Link
                href="/projects"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>Panashe Nyanguwo &copy; 2026</p>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="hover:text-zinc-900 transition-colors">Work</Link>
            <Link href="/engineering" className="hover:text-zinc-900 transition-colors">Engineering</Link>
            <Link href="/cybersecurity" className="hover:text-zinc-900 transition-colors">Security</Link>
            <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}