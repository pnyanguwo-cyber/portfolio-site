"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Code, Users, ExternalLink, CheckCircle2, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export default function RentZimbabwePage() {
  const techStack = [
    { name: "Expo", description: "Cross-platform mobile framework for React Native" },
    { name: "React Native", description: "Mobile app development with native component primitives" },
    { name: "TypeScript", description: "Strict static typing across full client data layer" },
    { name: "Supabase", description: "Scalable PostgreSQL relational database with Row-Level Security" },
    { name: "Expo Router", description: "Typed file-based routing architecture" },
    { name: "Tailwind CSS", description: "Modern responsive utility styling system" },
  ];

  const architecture = [
    "Mobile-first responsive interface built with Expo and React Native",
    "File-based typed routing via Expo Router for predictable navigation",
    "Session authentication with custom claims for secure landlord privileges",
    "Supabase PostgreSQL storage with optimized geospatial filtering",
    "Real-time property search with debounced client-side vector queries",
    "Secure landlord portal with property asset upload and listing verification",
  ];

  const challenges = [
    {
      title: "Cross-Platform Consistency",
      description:
        "Ensuring property listings rendered identically across iOS, Android, and web required component isolation and a unified design token system with strict typography scales.",
    },
    {
      title: "Performance on Low-End Hardware",
      description:
        "Optimized bundle size, implemented memory-conscious image caching, and tuned FlatList recycling to ensure smooth 60fps scrolling on budget Android devices common in Zimbabwe.",
    },
    {
      title: "Zero-Trust Landlord Authentication",
      description:
        "Implemented secure JWT session management with Supabase Row-Level Security (RLS) policies, verifying landlord ownership before permitting listing updates or deletions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE CASE STUDY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
              Rent Zimbabwe
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              A high-performance property discovery ecosystem connecting Zimbabwean tenants with landlords through web, mobile, and WhatsApp.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Code className="h-4 w-4 text-cyan-500" />
                <span>Full-Stack Architecture</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-indigo-500" />
                <span>Co-founder</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://infinityrental.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium">
                  <span>Explore Live Platform</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/infinityrental" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-800">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  <span>Inspect Codebase</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 dark:bg-zinc-900/60 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                The Problem
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                Property seekers in Zimbabwe faced extreme fragmentation when discovering rental properties:
              </p>
              <ul className="space-y-2.5 text-zinc-600 dark:text-zinc-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>Unverified listings scattered across WhatsApp groups and Facebook posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>Absence of a centralized, searchable database of verified rentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>No standardized portal for landlords to showcase photos and amenities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-zinc-900/60 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                The Solution
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                An engineering-first cross-platform discovery platform:
              </p>
              <ul className="space-y-2.5 text-zinc-600 dark:text-zinc-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Structured property listings with rich photo carousels and specs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Sub-second geospatial location and price filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Authenticated landlord dashboard with listing lifecycle controls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Technology Stack
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/70 dark:bg-zinc-900/60 rounded-xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1 text-cyan-600 dark:text-cyan-400 font-mono">
                  {tech.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/70 dark:bg-zinc-900/60 rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              System Architecture & Core Components
            </h2>
            <div className="grid gap-3">
              {architecture.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 mb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8">
            Engineering Challenges & Resolutions
          </h2>
          <div className="grid gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-white/70 dark:bg-zinc-900/60 rounded-xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
