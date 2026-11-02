"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Gradient background with animated shift */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[#06B6D4] to-[#0891B2] animate-gradient-shift"
        aria-hidden="true"
      />
      {/* Decorative wave shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Have a challenging problem to solve?
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
            Let&apos;s engineer something exceptional together. I&apos;m always open to discussing new opportunities,
            interesting problems, or potential collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:panashe.nyanguwo@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-white rounded-lg hover:bg-white/90 hover:shadow-xl transition-all duration-200"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Get in Touch
            </a>
            <Link
              href="/panashe-nyanguwo-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Download CV
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}