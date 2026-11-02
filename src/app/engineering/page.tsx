"use client";

import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "AI Coding Agent Harness",
    description:
      "Structured AI-assisted development workflow with human-led validation. I architect and constrain the agent environment, decompose tasks, review changes, and make final decisions on code acceptance. This is a harness because it has real structure around instructions, tool environment, constraints, and feedback/validation.",
    liveUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Workflow Designer | Implementation Lead",
    stack: ["Claude Code", "GitHub CLI", "TypeScript", "Vitest", "Node.js"],
    slug: "ai-harness",
  },
  {
    title: "Technical Decision Records",
    description:
      "Documentation of key architectural decisions across Rent Zimbabwe and WA Directory, including security models, AI integration patterns, and multi-agent system design.",
    githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
    role: "Technical Writer",
    stack: ["Markdown", "Mermaid", "TypeScript"],
    slug: "technical-decisions",
  },
];

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Engineering
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technical deep-dives into systems design, AI-assisted development workflows,
              and architecture patterns I've implemented in production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}