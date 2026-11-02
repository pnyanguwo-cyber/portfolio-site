import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const techStack = ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router", "Tailwind CSS"];

const problem = [
  "Property seekers in Zimbabwe faced fragmented, unverified listings across WhatsApp groups and Facebook.",
  "No centralized, searchable database of verified rental properties existed.",
  "Landlords lacked a standardized portal to showcase properties with photos and amenities.",
];

const solution = [
  "Structured property listings with rich photo carousels, specs, and geospatial filtering.",
  "Sub-second location and price filtering with debounced client-side queries.",
  "Authenticated landlord dashboard with listing lifecycle controls and verification.",
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

      <main className="flex-1">
        {/* Hero with background image */}
        <section className="relative py-24 min-h-[60vh] flex items-center">
          <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'url("/rent-zimbabwe.png")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-50/80 to-white" />

          <div className="container mx-auto px-4 sm:px-6 max-w-3xl z-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Rent Zimbabwe
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Cross-platform property discovery platform connecting tenants with verified landlords
              across web, mobile, and WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="https://infinityrental.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm">
                  <a href="https://infinityrental.vercel.app" target="_blank" rel="noopener noreferrer">
                    Live Platform
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/infinityrental" target="_blank" rel="noopener noreferrer">
                <Button asChild size="sm" variant="outline">
                  <a href="https://github.com/pnyanguwo-cyber/infinityrental" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3.5 w-3.5 mr-1" />
                    Codebase
                  </a>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="py-20 bg-zinc-50 border-y border-zinc-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <img
              src="/rent-zimbabwe.png"
              alt="Rent Zimbabwe app screenshot"
              className="w-full rounded-xl shadow-lg border border-zinc-200"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            {/* Problem / Solution */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="border border-zinc-200 rounded-lg p-6 bg-white">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4">Problem</h2>
                  <ul className="space-y-3 text-zinc-600 text-sm">
                    {problem.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-zinc-400 mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="border border-zinc-200 rounded-lg p-6 bg-white">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4">Solution</h2>
                  <ul className="space-y-3 text-zinc-600 text-sm">
                    {solution.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-600 mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16">
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <TechStackBadge key={tech} name={tech} />
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Architecture</h2>
              <ul className="space-y-3 text-zinc-600 text-sm border-l-2 border-zinc-200 pl-4">
                {architecture.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-400">
                    {item}
                  </li>
                ))}
              </ul>
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