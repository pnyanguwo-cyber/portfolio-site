import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const techStack = ["React", "Vite", "TypeScript", "Supabase", "Expo"];

const problem = [
  "Property seekers in Zimbabwe faced fragmented, unverified listings across WhatsApp groups and Facebook.",
  "No centralized, searchable database of rental properties existed.",
  "Landlords lacked a standardized portal to showcase properties with photos and amenities.",
];

const solution = [
  "Structured property listings with rich photo carousels, specs, and geospatial filtering.",
  "Fast location and price filtering with debounced client-side queries.",
  "Authenticated landlord dashboard with listing lifecycle controls.",
];

const architecture = [
  "Mobile-first responsive interface built with Expo and React Native",
  "File-based typed routing via Expo Router for predictable navigation",
  "Session authentication with custom claims for secure landlord privileges",
  "Supabase PostgreSQL with Row-Level Security and geospatial indexing",
];

export default function RentZimbabwePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero with background image */}
        <section className="relative py-20 md:py-32 min-h-[60vh] flex items-center">
          <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'url("/rent-zimbabwe.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-primary)]/10 via-white to-[var(--color-cyan)]/10" />

          <div className="container relative z-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4">
              Rent Zimbabwe
            </h1>
            <p className="text-lg text-[var(--color-text-body)] mb-8 leading-relaxed max-w-2xl">
              Cross-platform property discovery platform connecting tenants with landlords
              across web and mobile.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="https://www.rentzimbabwe.co.zw" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm">
                  <a href="https://www.rentzimbabwe.co.zw" target="_blank" rel="noopener noreferrer">
                    Live Platform
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/infinityhomeswebsite" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm" variant="outline">
                  <a href="https://github.com/pnyanguwo-cyber/infinityhomeswebsite" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3.5 w-3.5 mr-1" />
                    Codebase
                  </a>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="py-20 bg-[var(--color-bg-pale-blue)] border-y border-[var(--color-border)]">
          <div className="container">
            <img
              src="/rent-zimbabwe.png"
              alt="Rent Zimbabwe app screenshot"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl border border-[var(--color-border)]"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            {/* Problem / Solution */}
            <section className="mb-16 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="border border-[var(--color-border)] rounded-xl p-6 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
                    Problem
                  </h2>
                  <ul className="space-y-3 text-[var(--color-text-body)] text-sm">
                    {problem.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[var(--color-text-muted)] mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="border border-[var(--color-border)] rounded-xl p-6 bg-white hover:border-[var(--color-success)]/30 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                    Solution
                  </h2>
                  <ul className="space-y-3 text-[var(--color-text-body)] text-sm">
                    {solution.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[var(--color-success)] mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <TechStackBadge key={tech} name={tech} />
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Architecture</h2>
              <ul className="space-y-3 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {architecture.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}