import React from "react";
import { Navigation } from "@/components/navigation";
import { RotatingText } from "@/components/rotating-text";
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
          className="relative flex items-center bg-[var(--color-bg-gradient-hero)]"
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
          </div>

          <div className="container relative py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-heading)] leading-tight mb-4 text-balance animate-fade-in-up"
                >
                  Panashe{' '}<span className="text-gradient-animate">Nyanguwo</span>
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-text-body)] leading-tight mb-6 text-balance animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  I&apos;m a <RotatingText />
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-xl lg:mx-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  Building useful digital products with a security-aware mindset.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-hover)] hover:shadow-xl hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    View My Work
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-lg hover:bg-[var(--color-primary)]/10 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Download CV
                  </a>
                </div>

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2.5 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75 animate-ping [animation-duration:2s]" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-success)]" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Available for exciting opportunities</span>
                </div>
              </div>

              {/* Right: Circular portrait with pulsing rings */}
              <div className="relative animate-fade-in-up mx-auto w-full max-w-xs md:max-w-sm" style={{ animationDelay: "250ms" }}>
                {/* Soft glow behind the avatar */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-cyan)] opacity-20 blur-2xl" aria-hidden="true" />
                <div className="relative aspect-square">
                  <span className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/40 animate-ping [animation-duration:2.5s]" aria-hidden="true" />
                  <span className="absolute -inset-3 rounded-full border border-[var(--color-primary)]/25 animate-ping [animation-duration:2.5s] [animation-delay:0.6s]" aria-hidden="true" />
                  <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <img
                      src="/hero-photo.jpg"
                      alt="Portrait of Panashe Nyanguwo"
                      className="w-full h-full object-cover object-[center_20%]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
