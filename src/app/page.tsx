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
                <div className="inline-flex items-center gap-2 text-sm text-[var(--color-success)] bg-[var(--color-success-light)] px-4 py-2 rounded-full animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" aria-hidden="true" />
                  <span className="font-medium">Available for exciting opportunities</span>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative animate-fade-in-up mx-auto w-full max-w-md lg:max-w-lg" style={{ animationDelay: "250ms" }}>
                {/* Gradient frame glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-cyan)] opacity-20 blur-2xl" aria-hidden="true" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=1000&fit=crop&auto=format&q=80"
                    alt="Engineering workspace with a laptop by a window"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
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
