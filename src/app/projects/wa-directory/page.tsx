"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Code, Database, Shield, Users, ExternalLink, Bot, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export default function WADirectoryPage() {
  const techStack = [
    { name: "Next.js 16", description: "App Router with Edge Runtime Webhooks" },
    { name: "Google Gemini 2.0 Flash", description: "Multilingual LLM for natural-language search in Shona and English" },
    { name: "WhatsApp Cloud API", description: "Meta Business Messaging platform with interactive flows" },
    { name: "TypeScript", description: "Strict static typing and schema verification" },
    { name: "Supabase Vector", description: "PostgreSQL pgvector for semantic business embeddings" },
    { name: "Node.js", description: "Asynchronous webhook ingestion and event queueing" },
  ];

  const securityModel = [
    "Strict server-side isolation: Zero service-role keys exposed to client bundles",
    "HMAC-SHA256 signature verification on all inbound Meta webhook payloads",
    "Self-signed cryptographic merchant admin session tokens with expiry",
    "Multi-lingual prompt sanitization against adversarial LLM injection",
    "Magic-byte validation and malware scanning for business logo uploads",
    "Fail-closed environment configuration with automated credential rotation",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 text-emerald-400 border border-emerald-500/20 mb-4 backdrop-blur-md">
              <Bot className="w-3.5 h-3.5" />
              <span>AI CONVERSATIONAL AGENT CASE STUDY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 text-zinc-50 tracking-tight mb-6">
              WA Directory
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 text-zinc-300 mb-8 max-w-2xl mx-auto">
              Conversational business discovery platform using WhatsApp Business API and Google Gemini AI for natural language queries in Zimbabwe.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8 text-sm font-mono text-zinc-500 text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Code className="h-4 w-4 text-cyan-500" />
                <span>Lead Architect</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-indigo-500" />
                <span>Co-founder</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>HMAC Security Enclave</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wadirectory.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium">
                  <span>Explore Live App</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-zinc-300 border-zinc-800">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  <span>Inspect Codebase</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 text-zinc-100">
              Technology Stack
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/70 bg-zinc-900/60 rounded-xl p-5 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-zinc-900 text-zinc-100 text-sm mb-1 text-cyan-600 text-cyan-400 font-mono">
                  {tech.name}
                </h3>
                <p className="text-xs text-zinc-600 text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section className="py-12 mb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/70 bg-zinc-900/60 rounded-2xl p-8 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 text-zinc-100 mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-500" />
              Zero-Trust Security Architecture
            </h2>
            <div className="grid gap-3.5">
              {securityModel.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-zinc-700 text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
