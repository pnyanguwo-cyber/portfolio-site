"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Code, Database, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function RentZimbabwePage() {
  const techStack = [
    { name: "Expo", description: "Cross-platform mobile framework for React Native" },
    { name: "React Native", description: "Mobile app development with native components" },
    { name: "TypeScript", description: "Type-safe JavaScript for reliable code" },
    { name: "Supabase", description: "Open-source Firebase alternative with PostgreSQL" },
    { name: "Expo Router", description: "File-based routing for Expo apps" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
  ];

  const architecture = [
    "Mobile-first user interface built with Expo/React Native",
    "File-based routing via Expo Router for clean navigation",
    "Context-based authentication for secure session management",
    "Supabase backend with PostgreSQL for property listings",
    "Real-time search and filtering capabilities",
    "Landlord portal with property management features",
  ];

  const challenges = [
    {
      title: "Cross-Platform Consistency",
      description:
        "Ensuring property listings rendered identically on iOS, Android, and web required careful testing and component isolation. We built a shared design system with consistent spacing and typography scales.",
    },
    {
      title: "Performance on Low-End Devices",
      description:
        "Many users in Zimbabwe use budget Android devices. We optimized bundle sizes, implemented lazy loading for images, and used FlatList with proper keys for efficient rendering.",
    },
    {
      title: "Secure Landlord Authentication",
      description:
        "Building a secure auth system without traditional server infrastructure required Supabase's built-in auth with custom claims for role-based access to property management.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Rent Zimbabwe
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A property discovery platform connecting Zimbabwean property seekers with
              landlords through web and WhatsApp.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary-600" />
                <span className="text-gray-700">Code</span>
              </div>
              <span className="text-gray-400">·</span>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-600" />
                <span className="text-gray-700">Co-founder</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://infinityrental.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Live Demo</Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/infinityrental" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">GitHub</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Property seekers in Zimbabwe faced significant challenges in discovering
                rental properties:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Fragmented property listings across WhatsApp groups and Facebook</li>
                <li>• No centralized database of available properties</li>
                <li>• Landlords lacked a professional presence</li>
                <li>• Difficulty viewing property photos in one place</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                The Solution
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A cross-platform property discovery platform:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Modern property listings with photos and descriptions</li>
                <li>• Location-based search and filtering</li>
                <li>• Landlord portal for property management</li>
                <li>• Favorites system for saved searches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 dark:bg-zinc-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Technology Stack
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white dark:bg-zinc-950 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            System Architecture
          </h2>

          <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Components</h3>
            <div className="grid gap-3">
              {architecture.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technical Decisions</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Supabase for Backend:</strong> Provided instant PostgreSQL setup with
                real-time capabilities, handling authentication and database operations.
              </li>
              <li>
                <strong>Expo for Cross-Platform:</strong> Enabled single codebase deployment
                to iOS, Android, and web, reaching maximum users with minimal overhead.
              </li>
              <li>
                <strong>File-Based Routing:</strong> Expo Router provided clean, predictable
                navigation patterns similar to Next.js.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Engineering Challenges
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}