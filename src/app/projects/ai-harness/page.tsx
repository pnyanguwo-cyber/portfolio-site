"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Brain, Check, Code, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AIHarnessPage() {
  const workflowSteps = [
    {
      step: 1,
      title: "Developer Defines Outcome",
      description: "Clear acceptance criteria and constraints are established before any work begins.",
    },
    {
      step: 2,
      title: "Agent Receives Context",
      description: "Project instructions, relevant code snippets, and constraints are provided.",
    },
    {
      step: 3,
      title: "Work is Decomposed",
      description: "Task is broken into manageable, testable pieces with clear boundaries.",
    },
    {
      step: 4,
      title: "Agent Uses Permitted Tools",
      description: "Agent inspects and edits code using only approved tools and methods.",
    },
    {
      step: 5,
      title: "Changes Are Tested",
      description: "Generated code is validated through tests, type checking, and linting.",
    },
    {
      step: 6,
      title: "Developer Investigates Failures",
      description: "Failed tests are analyzed and failure mode is identified.",
    },
    {
      step: 7,
      title: "Human Reviews & Decides",
      description: "Final decision on whether to accept changes, iterate, or reject.",
    },
  ];

  const constraints = [
    "Agent operates as a developer assistant, not autonomous decision-maker",
    "Only project-relevant tools permitted (Git, file read/write, testing)",
    "Changes must pass linting and type checking",
    "Cannot modify configuration or dependencies without approval",
    "All significant changes require human review before merge",
  ];

  const validation = [
    "Type checking with `tsc --noEmit`",
    "Linting with ESLint rules",
    "Unit tests with Vitest (80%+ coverage for new code)",
    "Integration tests for complex workflows",
    "Manual review of architectural changes",
    "Security scan for sensitive data exposure",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              AI Coding Agent Harness
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A structured workflow for AI-assisted development with human-led validation.
              This is a harness because it has real structure around instructions, tool
              environment, constraints, and feedback/validation.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">AI Agent</span>
              </div>
              <span className="text-gray-400">·</span>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">TypeScript</span>
              </div>
              <span className="text-gray-400">·</span>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Human Review</span>
              </div>
            </div>

            <Link href="https://github.com/pnyanguwo-cyber/ai-coding-agent-harness" target="_blank" rel="noopener noreferrer">
              <Button size="lg">GitHub Repository</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            The Workflow
          </h2>

          <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="space-y-8">
              {workflowSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Constraints & Validation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Agent Constraints
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {constraints.map((constraint, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Validation Checks
              </h2>
              <div className="space-y-3">
                {validation.map((check, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-950 rounded-lg border border-gray-200 dark:border-gray-800">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{check}</span>
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