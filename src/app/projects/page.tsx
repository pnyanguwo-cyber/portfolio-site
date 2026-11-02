"use client";

import { ProjectCard } from "@/components/project-card";
import { Navigation } from "@/components/navigation";
import { TechStackBadge } from "@/components/tech-stack-badge";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "A property discovery platform connecting Zimbabwean property seekers with landlords through web and WhatsApp. Built with Expo/React Native for cross-platform mobile access, featuring AI-assisted listing curation and secure landlord portal access.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    role: "Co-founder | Full-stack Developer | Product Architect",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router", "Tailwind"],
    slug: "rent-zimbabwe",
  },
  {
    title: "WA Directory",
    description:
      "A conversational business directory using WhatsApp Business API and Gemini AI. Users discover businesses through natural language queries in Shona/English, with verified listings and interactive WhatsApp flows for contact and transactions.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    role: "Co-founder | Lead Developer | Technical Architect",
    stack: ["Next.js 14", "Node.js", "TypeScript", "Supabase", "Gemini 2.0 Flash", "WhatsApp Cloud API"],
    slug: "wa-directory",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of full-stack applications I've built, focusing on practical problems
              with security-aware engineering and AI-assisted development workflows.
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