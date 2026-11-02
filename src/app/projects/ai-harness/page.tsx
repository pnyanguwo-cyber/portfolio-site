"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Brain, Check, Code, Shield, ExternalLink, Bot, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export default function AIHarnessPage() {
  const workflowSteps = [
    {
      step: 1,
      title: "Developer Defines Strict Outcome",
      description: "Clear acceptance criteria, invariant constraints, and AST boundary assertions are established prior to invocation.",
    },
    {
      step: 2,
      title: "Agent Receives Constrained Context",
      description: "Scoped workspace instructions, relevant file slices, and type definitions are injected without context bloat.",
    },
    {
      step: 3,
      title: "Work is Formally Decomposed",
      description: "Tasks are broken into atomic, independently testable phases with explicit checkpoints.",
    },
    {
      step: 4,
      title: "Agent Uses Permitted Tools Only",
      description: "Sandboxed tool invocation with read-only exploration and bounded file editing primitives.",
    },
    {
      step: 5,
      title: "Automated Test Assertions Run",
      description: "Generated code is validated against Vitest suites, TypeScript compiler checks, and ESLint rules.",
    },
    {
      step: 6,
      title: "Failure Mode Analysis",
      description: "Failures trigger root-cause classification (syntax error, regression, or missing mock) with targeted retry tokens.",
    },
    {
      step: 7,
      title: "Human Architect Accepts & Merges",
      description: "Final decision by the human engineer on architectural fidelity and code acceptance.",
    },
  ];

  const constraints = [
    "Agent operates strictly within defined harness guardrails with no unmonitored external network execution",
    "Only project-relevant tools permitted: AST inspection, localized diffs, and test runners",
    "All code additions must pass type checking (tsc --noEmit) and linter without suppression directives",
    "Deterministic verification fixtures required for every new feature or refactor",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
              <Bot className="w-3.5 h-3.5" />
              <span>AI CODING HARNESS ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
              AI Coding Agent Harness
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              A structured AI-assisted development workflow with human-led validation, tool sandboxing, and automated regression guards.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8 text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Code className="h-4 w-4 text-cyan-500" />
                <span>Workflow Architect</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Brain className="h-4 w-4 text-indigo-500" />
                <span>Multi-Agent Harness</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/pnyanguwo-cyber/ai-coding-agent-harness" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  <span>Inspect Harness on GitHub</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Workflow */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              The 7-Step Validation Workflow
            </h2>
          </div>
          <div className="grid gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white/70 dark:bg-zinc-900/60 rounded-xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harness Guardrails */}
      <section className="py-12 mb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/70 dark:bg-zinc-900/60 rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-indigo-500" />
              Core Safety Guardrails & Determinism Constraints
            </h2>
            <div className="grid gap-3.5">
              {constraints.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
