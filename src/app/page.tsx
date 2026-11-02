"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Navigation } from "@/components/navigation";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { AntiGravityEngine } from "@/components/anti-gravity-engine";
import {
  ArrowRight,
  Sparkles,
  Bot,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  ChevronRight,
  Code2,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = [
    {
      title: "Rent Zimbabwe",
      description:
        "High-performance property discovery platform connecting Zimbabwean property seekers with landlords through web and WhatsApp. Built with Expo/React Native for cross-platform mobile access, Supabase backend, and AI-assisted listing curation with secure landlord portals.",
      liveUrl: "https://infinityrental.vercel.app",
      githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
      role: "Co-founder & Product Architect",
      stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router", "Tailwind CSS"],
      slug: "rent-zimbabwe",
    },
    {
      title: "WA Directory",
      description:
        "Conversational business directory powered by WhatsApp Business API and Google Gemini AI. Allows instant natural language discovery in Shona and English, verified local listings, interactive messaging flows, and zero-latency transactions.",
      liveUrl: "https://wadirectory.vercel.app",
      githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
      role: "Co-founder & Lead Architect",
      stack: ["Next.js 16", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Node.js", "Supabase Vector"],
      slug: "wa-directory",
    },
  ];

  const aiWorkflowProjects = [
    {
      title: "AI Coding Agent Harness",
      description:
        "Structured multi-agent development workflow with human-led validation. Constrains the agent environment, decomposes complex refactors into verifiable AST steps, and executes deterministic Vitest assertions before code acceptance.",
      liveUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
      githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
      role: "Workflow Architect & Designer",
      stack: ["Claude Code", "Gemini AI", "GitHub CLI", "TypeScript", "Vitest", "Node.js"],
      slug: "ai-harness",
    },
    {
      title: "Cybersecurity Knowledge Enclave",
      description:
        "Defense-in-depth security architectures covering STRIDE threat modeling, HMAC API signature validation, OWASP Top 10 mitigation strategies, and prompt injection defense barriers for production LLMs.",
      githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
      role: "Security Researcher & Architect",
      stack: ["STRIDE", "HMAC Auth", "OWASP Top 10", "Supabase RLS", "Threat Modeling"],
      slug: "security-knowledge",
    },
  ];

  const handlePulse = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("anti-gravity-pulse", {
          detail: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        })
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Silicon Valley Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-8 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>AVAILABLE FOR HIGH-IMPACT ENGINEERING & ARCHITECTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-6">
              Architecting{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Intelligent Systems
              </span>{" "}
              with Zero-G Defiance
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              I&apos;m <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Panashe Nyanguwo</strong> — an IT professional, co-founder, and systems engineer building production software, Gemini 2.0 AI applications, and zero-trust security architectures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium shadow-lg shadow-cyan-500/25 px-8 py-6 rounded-xl text-sm"
                >
                  <span>Explore Production Systems</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>

              <button
                onClick={handlePulse}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium bg-white/70 dark:bg-zinc-900/70 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 backdrop-blur-md transition-all shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-cyan-500 animate-spin-slow" />
                <span>Trigger Anti-Gravity Ripple</span>
              </button>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-zinc-300 dark:border-zinc-800 px-6 py-6 rounded-xl text-sm"
                >
                  Contact & Collaboration
                </Button>
              </Link>
            </div>

            {/* Key Silicon Valley Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12">
              <div className="p-4 rounded-xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                  10k+
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                  Conversations Handled
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                  38ms
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                  Gemini AI Latency
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  100%
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                  Zero-Trust Enclave
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                  0.0g
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                  Anti-Gravity Defiance
                </span>
              </div>
            </div>

            {/* Technical Stack Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              <TechStackBadge name="Gemini 2.0 Flash" />
              <TechStackBadge name="Next.js 16" />
              <TechStackBadge name="TypeScript" />
              <TechStackBadge name="WhatsApp Cloud API" />
              <TechStackBadge name="Supabase Vector" />
              <TechStackBadge name="React Native / Expo" />
              <TechStackBadge name="STRIDE Threat Modeling" />
              <TechStackBadge name="Multi-Agent Harness" />
            </div>
          </div>

          {/* Interactive Google Anti-Gravity HUD & Console */}
          <div className="mt-12 sm:mt-16">
            <AntiGravityEngine />
          </div>
        </div>
      </section>

      {/* Featured Production Systems */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Flagship Software & AI Products
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
              Scalable, resilient architectures tackling real-world discovery and commerce challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Engineering & Security Enclave */}
      <section className="py-20 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AI AGENTS & CYBERSECURITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Agentic Engineering & Security Architecture
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
              Structured multi-agent validation loops paired with zero-trust application defense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {aiWorkflowProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Philosophy / Silicon Valley Callout */}
      <section className="py-20 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-100/80 via-white/80 to-zinc-100/80 dark:from-zinc-900/80 dark:via-zinc-950/80 dark:to-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Background Light Beam */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span>ANTI-GRAVITY ENGINEERING MINDSET</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Ready to build resilient, AI-accelerated products?
              </h2>

              <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Whether it is architecting an enterprise WhatsApp agent, hardening zero-trust security perimeters, or leading multi-agent AI engineering workflows — let&apos;s build software that defies conventional limits.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>

                <a
                  href="/panashe-nyanguwo-cv.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  Download Curriculum Vitae
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silicon Valley Footer */}
      <footer className="py-12 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Panashe Nyanguwo © 2026</span>
              <span>•</span>
              <span>Anti-Gravity Architecture</span>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/projects" className="hover:text-cyan-500 transition-colors">
                Projects
              </Link>
              <Link href="/engineering" className="hover:text-cyan-500 transition-colors">
                Engineering
              </Link>
              <Link href="/cybersecurity" className="hover:text-cyan-500 transition-colors">
                Security
              </Link>
              <Link href="/about" className="hover:text-cyan-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-cyan-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
