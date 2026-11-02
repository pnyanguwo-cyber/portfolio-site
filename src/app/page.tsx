import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroIllustration } from "@/components/hero-illustration";
import { Metrics } from "@/components/metrics";
import { About } from "@/components/about";
import { TechnicalSkills } from "@/components/technical-skills";
import { FeaturedProjects } from "@/components/featured-projects";
import { EngineeringApproach } from "@/components/engineering-approach";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center bg-[var(--color-bg-gradient-hero)]"
          aria-labelledby="hero-heading"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Large radial gradient on the right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/15 via-transparent to-[var(--color-cyan)]/10 rounded-full blur-3xl" />
            {/* Secondary radial gradient */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--color-cyan)]/10 via-transparent to-[var(--color-primary)]/5 rounded-full blur-3xl" />
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-decor-dots opacity-30" />
            {/* Wave separator at bottom */}
            <div className="wave-separator">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                  d="M0,80 C300,140 500,20 720,80 C940,140 1140,20 1440,80 L1440,120 L0,120 Z"
                  fill="url(#heroWaveGradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1440" y2="0">
                    <stop offset="0%" stopColor="#087BFA" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="container relative py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-6">
                  Available for exciting opportunities
                </span>
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-heading)] leading-tight mb-6 text-balance"
                >
                  Panashe Nyanguwo
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-text-body)] leading-tight mb-8 text-balance">
                  Software Engineer & Security Architect
                </h2>
                <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-xl lg:mx-0">
                  Building innovative, secure and scalable software solutions with a focus on performance,
                  user experience and trust.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 mb-12">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-hover)] hover:shadow-xl hover:shadow-[var(--color-primary)]/25 transition-all duration-200"
                  >
                    View My Work
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/panashe-nyanguwo-cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Download CV
                  </a>
                </div>

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 text-sm text-[var(--color-success)] bg-[var(--color-success-light)] px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" aria-hidden="true" />
                  <span className="font-medium">Available for full-time & contract roles</span>
                </div>
              </div>

              {/* Right: Illustration */}
              <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <HeroIllustration />
              </div>
            </div>

            {/* Mobile illustration */}
            <div className="lg:hidden mt-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Metrics */}
        <Metrics />

        {/* About */}
        <About />

        {/* Technical Skills */}
        <TechnicalSkills />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Engineering Approach */}
        <EngineeringApproach />

        {/* Contact CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}