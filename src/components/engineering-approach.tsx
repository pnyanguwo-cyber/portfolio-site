"use client";

import React from "react";
import { Layers, Lock, Brain } from "lucide-react";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Build Scalable Systems",
    description: "Designing distributed architectures that handle growth gracefully. From edge-optimized APIs to resilient data layers, every component is built to scale.",
    icon: Layers,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
    accent: "border-l-4 border-[var(--color-primary)]",
  },
  {
    title: "Engineer Secure Architectures",
    description: "Security is not an afterthought. Zero-trust principles, cryptographic verification, and threat modeling (STRIDE) are embedded from day one.",
    icon: Lock,
    color: "text-[var(--color-success)]",
    bgColor: "bg-[var(--color-success-light)]",
    accent: "border-l-4 border-[var(--color-success)]",
  },
  {
    title: "Create Intelligent Experiences",
    description: "Integrating AI thoughtfully — RAG systems, prompt engineering, and conversational interfaces that solve real problems, not just demos.",
    icon: Brain,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-cyan-light)]",
    accent: "border-l-4 border-[var(--color-cyan)]",
  },
];

export function EngineeringApproach() {
  return (
    <section
      className="relative py-16 md:py-24 bg-[var(--color-bg-pale-violet)]"
      aria-labelledby="approach-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-decor-dots opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 id="approach-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            How I <span className="text-gradient-animate">Approach</span> Engineering
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Three pillars that guide every technical decision and architectural choice.
          </p>
        </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group p-6 md:p-8 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 ${pillar.accent} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${pillar.bgColor} ${pillar.color}`}
                aria-hidden="true"
              >
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}