import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Navigation } from "@/components/navigation";
import { TechStackBadge } from "@/components/tech-stack-badge";

export default function HomePage() {
  const featuredProjects = [
    {
      title: "Rent Zimbabwe",
      description:
        "Property discovery platform with web and WhatsApp integration for Zimbabwean property seekers. Built with Expo/React Native for cross-platform mobile access, featuring AI-assisted listing curation and secure landlord portal access.",
      liveUrl: "https://infinityrental.vercel.app",
      githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
      role: "Co-founder | Full-stack Developer | Product Architect",
      stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router", "Tailwind"],
      slug: "rent-zimbabwe",
    },
    {
      title: "WA Directory",
      description:
        "Conversational business directory using WhatsApp Business API and Gemini AI. Users discover businesses through natural language queries in Shona/English, with verified listings and interactive WhatsApp flows for contact and transactions.",
      liveUrl: "https://wadirectory.vercel.app",
      githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
      role: "Co-founder | Lead Developer | Technical Architect",
      stack: ["Next.js 14", "Node.js", "TypeScript", "Supabase", "Gemini 2.0 Flash", "WhatsApp Cloud API"],
      slug: "wa-directory",
    },
  ];

  const aiWorkflowProjects = [
    {
      title: "AI Coding Agent Harness",
      description:
        "Structured AI-assisted development workflow with human-led validation. I architect and constrain the agent environment, decompose tasks, review changes, and make final decisions on code acceptance.",
      liveUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
      githubUrl: "https://github.com/pnyanguwo-cyber/ai-coding-agent-harness",
      role: "Workflow Designer | Implementation Lead",
      stack: ["Claude Code", "GitHub CLI", "TypeScript", "Vitest", "Node.js"],
      slug: "ai-harness",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Building useful digital products with a security-aware mindset
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m Panashe Nyanguwo, an IT professional and co-founder working across software development, AI-enabled applications, cybersecurity, and IT systems. I contribute to product architecture and implementation for Rent Zimbabwe and WA Directory, using Node.js, Gemini, WhatsApp Business API integrations and AI-assisted development workflows.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-10">
              <strong className="text-primary-600 dark:text-primary-400">Featured work:</strong> Rent Zimbabwe · WA Directory · AI Coding Agent Harness · Cybersecurity Labs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Tech Stack Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
                Technical Expertise
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <TechStackBadge name="React" />
                <TechStackBadge name="Next.js" />
                <TechStackBadge name="Node.js" />
                <TechStackBadge name="TypeScript" />
                <TechStackBadge name="Supabase" />
                <TechStackBadge name="Gemini AI" />
                <TechStackBadge name="WhatsApp API" />
                <TechStackBadge name="Expo" />
                <TechStackBadge name="Security" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Selected full-stack applications showcasing practical problem-solving with modern tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Engineering */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              AI Engineering
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              AI-assisted development workflows and multi-agent system design
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiWorkflowProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in building secure, scalable products?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s discuss how we can turn practical problems into usable digital products.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}