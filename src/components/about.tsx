"use client";

import React from "react";
import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Build",
    description: "Production-ready applications designed for scale and reliability.",
    icon: Code2,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
  },
  {
    title: "Secure",
    description: "Security-first engineering with zero-trust principles throughout.",
    icon: ShieldCheck,
    color: "text-[var(--color-success)]",
    bgColor: "bg-[var(--color-success-light)]",
  },
  {
    title: "Innovate",
    description: "AI-powered solutions and intelligent automation for modern problems.",
    icon: Sparkles,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-cyan-light)]",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-white"
      aria-labelledby="about-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: About content */}
          <Reveal className="lg:col-span-7">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
                About Me
              </span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-5 leading-tight">
                Engineering beyond the{' '}
                <span className="text-gradient-animate">interface.</span>
              </h2>
              <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-4">
                  I&apos;m a Software Engineer focused on building secure, high-performance applications
                  that solve real problems. My work blends modern technologies with strong security principles and a user-first mindset.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                From scalable WhatsApp-based platforms to AI-assisted development workflows, I focus on delivering
                production systems that are both powerful and trustworthy.
              </p>
            </div>
          </Reveal>

          {/* Right: Engineering Principles */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="group p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${principle.bgColor} ${principle.color}`}
                    aria-hidden="true"
                  >
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
