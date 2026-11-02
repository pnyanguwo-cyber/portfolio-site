"use client";

import React from "react";
import { Code2, Sparkles, ShieldCheck, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
    skills: [
      { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
      { name: "JavaScript", color: "bg-yellow-100 text-yellow-700" },
      { name: "Python", color: "bg-green-100 text-green-700" },
      { name: "Go", color: "bg-cyan-100 text-cyan-700" },
      { name: "Next.js", color: "bg-gray-100 text-gray-700" },
      { name: "React", color: "bg-cyan-100 text-cyan-700" },
      { name: "React Native", color: "bg-cyan-100 text-cyan-700" },
      { name: "Expo", color: "bg-gray-800 text-white" },
      { name: "Node.js", color: "bg-green-100 text-green-700" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Sparkles,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-cyan-light)]",
    skills: [
      { name: "Gemini API", color: "bg-blue-100 text-blue-700" },
      { name: "Claude Code", color: "bg-orange-100 text-orange-700" },
      { name: "Prompt Engineering", color: "bg-purple-100 text-purple-700" },
      { name: "RAG Systems", color: "bg-indigo-100 text-indigo-700" },
      { name: "Vector Search", color: "bg-violet-100 text-violet-700" },
      { name: "WhatsApp Cloud API", color: "bg-green-100 text-green-700" },
    ],
  },
  {
    title: "Security & Infrastructure",
    icon: ShieldCheck,
    color: "text-[var(--color-success)]",
    bgColor: "bg-[var(--color-success-light)]",
    skills: [
      { name: "HMAC Auth", color: "bg-red-100 text-red-700" },
      { name: "Supabase RLS", color: "bg-green-100 text-green-700" },
      { name: "PostgreSQL", color: "bg-blue-100 text-blue-700" },
      { name: "pgvector", color: "bg-purple-100 text-purple-700" },
      { name: "STRIDE Modeling", color: "bg-orange-100 text-orange-700" },
      { name: "OWASP Top 10", color: "bg-yellow-100 text-yellow-700" },
      { name: "Zero-Trust", color: "bg-emerald-100 text-emerald-700" },
    ],
  },
  {
    title: "Engineering",
    icon: Cpu,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
    skills: [
      { name: "Git/GitHub", color: "bg-gray-100 text-gray-700" },
      { name: "CI/CD", color: "bg-blue-100 text-blue-700" },
      { name: "Vitest/Jest", color: "bg-yellow-100 text-yellow-700" },
      { name: "Docker", color: "bg-blue-100 text-blue-700" },
      { name: "Vercel", color: "bg-gray-800 text-white" },
      { name: "Technical Writing", color: "bg-purple-100 text-purple-700" },
    ],
  },
];

export function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-[var(--color-bg-pale-blue)]"
      aria-labelledby="skills-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            MY TECHNICAL SKILLS
          </span>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            Technologies I Work With
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            A curated stack for building secure, scalable, and intelligent software systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <article
              key={category.title}
              className="group p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${category.bgColor} ${category.color}`}
                aria-hidden="true"
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${skill.color} border border-transparent hover:border-current/20 transition-colors`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}