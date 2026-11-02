import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ExternalLink, Mail, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Rent Zimbabwe",
    description:
      "Cross-platform property discovery platform connecting tenants with verified landlords across web, mobile, and WhatsApp. Built with Expo/React Native and Supabase.",
    liveUrl: "https://infinityrental.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/infinityrental",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Expo Router"],
    image: "/rent-zimbabwe.png",
  },
  {
    title: "WA Directory",
    description:
      "Conversational business directory on WhatsApp using Gemini 2.0 Flash for natural-language search in English and Shona. Handles 10k+ conversations with HMAC-verified webhooks.",
    liveUrl: "https://wadirectory.vercel.app",
    githubUrl: "https://github.com/pnyanguwo-cyber/wa.directory",
    stack: ["Next.js", "Gemini 2.0 Flash", "WhatsApp Cloud API", "Supabase pgvector"],
    image: "/wa-directory.png",
  },
];

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Go"],
  "Frameworks": ["Next.js", "React", "React Native", "Expo", "Node.js"],
  "Backend & AI": ["Supabase", "pgvector", "Gemini API", "WhatsApp Cloud API"],
  "Security": ["HMAC", "RLS", "STRIDE", "OWASP", "Prompt Injection Defense"],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero with parallax-like background */}
      <section className="relative pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-white to-indigo-50/80 -z-10" />
        <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, blue, transparent 40%), radial-gradient(circle at 80% 70%, indigo, transparent 40%)" }} />

        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8">
            <span className="text-cyan-600">Panashe Nyanguwo</span>
            <br />
            <span className="text-zinc-700">Software Engineer & Security Architect</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building production software with a security-aware mindset. Specializing in cross-platform applications,
            AI-powered conversational interfaces, and zero-trust security architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/projects">
              <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition-colors">
                View My Work
                <ExternalLink className="h-4 w-4" />
              </a>
            </Link>
            <a
              href="/panashe-nyanguwo-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            <div className="text-center p-4 rounded-lg bg-white/60 border border-zinc-200">
              <span className="text-2xl font-bold text-cyan-600">10k+</span>
              <p className="text-zinc-500 text-xs mt-1">Conversations</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/60 border border-zinc-200">
              <span className="text-2xl font-bold text-indigo-600">38ms</span>
              <p className="text-zinc-500 text-xs mt-1">AI Latency</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/60 border border-zinc-200">
              <span className="text-2xl font-bold text-emerald-600">100%</span>
              <p className="text-zinc-500 text-xs mt-1">Zero-Trust</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/60 border border-zinc-200">
              <span className="text-2xl font-bold text-amber-600">3+</span>
              <p className="text-zinc-500 text-xs mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills with gradient background */}
      <section className="py-20 bg-zinc-50/50 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-4 border border-zinc-200 rounded-lg">
                <h3 className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <TechStackBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Featured Projects</h2>
            <p className="text-zinc-600">Production applications built with security and scalability in mind</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-zinc-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <TechStackBadge key={tech} name={tech} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <a className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-cyan-600 transition-colors">
                          Live
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Link>
                    )}
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <a className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-cyan-600 transition-colors">
                        Code
                        <GithubIcon className="h-3.5 w-3.5" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Available for Full-Time & Contract Roles</h2>
          <p className="text-zinc-600 mb-8">
            Currently exploring opportunities in software engineering and security architecture.
            Open to remote and relocation options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:panashe.nyanguwo@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="/panashe-nyanguwo-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-4">
            <p>Panashe Nyanguwo &copy; 2026</p>
            <span>&bull;</span>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/pnyanguwo-cyber" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/panashe-nyanguwo" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}