"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Code, Database, Shield, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function WADirectoryPage() {
  const techStack = [
    { name: "Next.js 14", description: "App Router with React Server Components" },
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    { name: "TypeScript", description: "Type safety for reliable applications" },
    { name: "Supabase", description: "PostgreSQL with built-in auth and real-time" },
    { name: "Gemini 2.0 Flash", description: "AI for natural language search interpretation" },
    { name: "WhatsApp Cloud API", description: "Business messaging platform" },
  ];

  const securityModel = [
    "Service-role key access only on server-side",
    "HMAC-SHA256 signed admin tokens with expiry",
    "Self-signed business portal cookies with validation",
    "Inbound webhook signature verification",
    "Magic byte validation for file uploads",
    "Fail-closed secrets management",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              WA Directory
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A conversational business directory using WhatsApp Business API and AI
              for natural language discovery in Zimbabwe.
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
              <span className="text-gray-400">·</span>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-600" />
                <span className="text-gray-700">Security</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wadirectory.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Live Demo</Button>
              </Link>
              <Link href="https://github.com/pnyanguwo-cyber/wa.directory" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">GitHub</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live URLs */}
      <section className="py-8 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            <Link href="https://wadirectory.vercel.app" className="text-primary-600 hover:underline">
              https://wadirectory.vercel.app
            </Link>{" "}
            ·
            <Link href="https://wadirectory.co.zw" className="text-primary-600 hover:underline">
              {" "}
              https://wadirectory.co.zw
            </Link>
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In Zimbabwe, WhatsApp *is* the internet for commerce, but there was no
                reliable way to discover local businesses:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Word-of-mouth and Facebook groups for discovery</li>
                <li>• No trust layer — no verification or ratings</li>
                <li>• Businesses have no analytics or discovery surface</li>
                <li>• Google Maps coverage is thin in informal areas</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                The Solution
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                WA Directory is the discovery, trust, and analytics layer on top of
                WhatsApp commerce:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  • <strong>Discover</strong> — Search in plain English/Shona, AI interprets intent
                </li>
                <li>• <strong>Connect</strong> — Tap to chat via WhatsApp with pre-filled message</li>
                <li>
                  • <strong>Trust</strong> — Verified badges, ratings, and clear business details
                </li>
                <li>
                  • <strong>Grow</strong> — Portal with analytics and paid visibility options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 dark:bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div key={tech.name} className="bg-white dark:bg-zinc-950 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Security Model
            </h2>
            <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Security is built into every layer:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {securityModel.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}