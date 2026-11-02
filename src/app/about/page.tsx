import React from "react";
import { Navigation } from "@/components/navigation";
import { TechStackBadge } from "@/components/tech-stack-badge";
import Link from "next/link";

const education = [
  "BSc Computer Science — University of Zimbabwe",
  "AWS Certified Solutions Architect — Associate",
  "Google Cloud Professional Cloud Developer",
];

const certifications = [
  "CompTIA Security+",
  "(ISC)² CISSP — In Progress",
  "OWASP Top 10 2023 — Certified",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Hero with gradient background */}
        <section className="relative py-24 min-h-[50vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/80 -z-10" />
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, amber, transparent 40%), radial-gradient(circle at 80% 70%, orange, transparent 40%)" }} />

          <div className="container mx-auto px-4 sm:px-6 max-w-3xl z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              About
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              I&apos;m a software engineer and co-founder building production systems with a security-aware mindset.
              My work spans full-stack applications, AI-assisted development workflows, and zero-trust security architectures.
              <br /><br />
              Currently focused on: scalable WhatsApp-based platforms, multi-agent AI coding harnesses, and applying
              threat modeling (STRIDE) to production systems. Open to full-time and contract roles.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <section className="mb-16">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Education</h2>
              <ul className="space-y-2 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
                {education.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Certifications</h2>
              <ul className="space-y-2 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
                {certifications.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "React Native", "Supabase", "PostgreSQL", "Gemini API", "WhatsApp API", "HMAC Auth", "RLS", "STRIDE", "OWASP"].map((skill) => (
                  <TechStackBadge key={skill} name={skill} />
                ))}
              </div>
            </section>
          </div>
        </section>
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