"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Download, Award, GraduationCap, Briefcase, Sparkles, User } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const certifications = [
    { name: "Software Engineering Professional", status: "Verified", year: "2024" },
    { name: "Google Gemini API & AI Applications", status: "Verified", year: "2024" },
    { name: "WhatsApp Business API Integration", status: "Verified", year: "2023" },
    { name: "OWASP Top 10 & Application Security", status: "Verified", year: "2023" },
  ];

  const skills = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Shell / Bash", "Python"] },
    { category: "Frameworks & Runtimes", items: ["Next.js 16", "React 19", "Expo", "Node.js", "Express"] },
    { category: "AI & Autonomous Systems", items: ["Google Gemini 2.0", "Claude Code", "Vector Embeddings", "AI Harnesses"] },
    { category: "Cloud & Databases", items: ["Supabase", "PostgreSQL", "Vercel Edge", "Redis"] },
    { category: "APIs & Integrations", items: ["WhatsApp Cloud API", "REST", "Webhooks", "SSE"] },
    { category: "Cybersecurity", items: ["STRIDE Threat Modeling", "HMAC Auth", "OWASP Top 10", "Zero-Trust"] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
                <User className="w-3.5 h-3.5" />
                <span>BIOGRAPHY & BACKGROUND</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 text-zinc-50 tracking-tight mb-4">
                Panashe T.E. Nyanguwo
              </h1>
              <p className="text-lg text-zinc-600 text-zinc-300 font-mono">
                Software Architect | AI Autonomous Systems | Cybersecurity Engineer
              </p>
            </div>

            {/* Background & Education Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl p-6 sm:p-8 bg-white/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 text-zinc-100">
                    Academic Foundation
                  </h2>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-zinc-900 text-zinc-100">
                    BSc Computer Science (In Progress)
                  </h3>
                  <p className="text-zinc-600 text-zinc-400 text-sm">
                    University of Zimbabwe
                  </p>
                  <p className="text-zinc-600 text-zinc-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Focus on distributed systems, cryptographic algorithms, database internals, and computational theory.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl p-6 sm:p-8 bg-white/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 text-zinc-100">
                    Founder & Engineering Experience
                  </h2>
                </div>
                <div className="space-y-3 text-zinc-600 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Co-founder and product architect building production software platforms since 2020. Core contributor to Rent Zimbabwe and WA Directory.
                  </p>
                  <p>
                    Specializing in combining autonomous multi-agent validation loops, WhatsApp commercial interfaces, and zero-trust data layer enclaves.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl p-6 sm:p-8 bg-white/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-lg mb-12">
              <h2 className="text-xl font-bold text-zinc-900 text-zinc-100 mb-6 flex items-center gap-2.5">
                <Award className="h-5 w-5 text-amber-500" />
                Verified Credentials & Specializations
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-950/70 border border-zinc-200/80 border-zinc-800/80 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-zinc-100 text-sm">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">{cert.year}</p>
                    </div>
                    <span className="text-xs font-mono bg-emerald-500/10 text-emerald-600 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div className="rounded-2xl p-6 sm:p-8 bg-white/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 backdrop-blur-xl shadow-lg mb-12">
              <h2 className="text-xl font-bold text-zinc-900 text-zinc-100 mb-6 flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-cyan-500" />
                Technical Competencies
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-950/70 border border-zinc-200/80 border-zinc-800/80"
                  >
                    <h3 className="font-semibold text-zinc-900 text-zinc-100 text-xs font-mono uppercase tracking-wider mb-3 text-cyan-600 text-cyan-400">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono bg-white dark:bg-zinc-900 text-zinc-700 text-zinc-300 border border-zinc-200 border-zinc-800 px-2.5 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume & Connect CTA */}
            <div className="rounded-2xl p-8 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-indigo-500/10 border border-cyan-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 text-zinc-100">
                  Ready to collaborate on high-stakes systems?
                </h3>
                <p className="text-zinc-600 text-zinc-400 text-sm mt-1">
                  Open for software architecture, AI application engineering, and technical leadership roles.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium">
                    Initiate Contact
                  </Button>
                </Link>
                <a href="/panashe-nyanguwo-cv.pdf" download>
                  <Button variant="outline" className="border-zinc-300 border-zinc-800">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
