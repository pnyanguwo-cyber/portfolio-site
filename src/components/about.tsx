"use client";

import React from "react";
import { Code2, ShieldCheck, Sparkles } from "lucide-react";

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
      className="relative py-20 md:py-32 bg-white"
      aria-labelledby="about-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="lg:col-span-5 order-last lg:order-first animate-fade-in-up">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-bg-pale-blue)] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Panashe Nyanguwo - Software Engineer & Security Architect"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-cyan)] opacity-20 blur-lg" aria-hidden="true" />
            </div>
          </div>

          {/* Center: About content */}
          <div className="lg:col-span-4 lg:col-start-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="pt-8 lg:pt-0">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
                About Me
              </span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-6 leading-tight">
                Engineering beyond the interface.
              </h2>
              <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-6">
                I'm a passionate Software Engineer and Security Architect, building secure, high-performance applications
                that solve real problems. My work blends modern technologies with strong security principles and a user-first mindset.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                From scalable WhatsApp-based platforms to multi-agent AI coding workflows, I focus on delivering
                production systems that are both powerful and trustworthy.
              </p>
            </div>
          </div>

          {/* Right: Engineering Principles */}
          <div className="lg:col-span-3 lg:col-start-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-4 pt-8 lg:pt-0">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="group p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300"
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
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="wave-separator">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C300,120 500,0 720,64 C940,128 1140,0 1440,64 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#087BFA" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}