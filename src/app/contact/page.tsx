import React from "react";
import { Navigation } from "@/components/navigation";
import { ExternalLink, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function ContactPage() {
  const email = "panashe.nyanguwo@example.com";
  const github = "https://github.com/pnyanguwo-cyber";
  const linkedin = "https://linkedin.com/in/panashe-nyanguwo";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl">
          <header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Contact
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Available for full-time and contract roles. Feel free to reach out.
            </p>
          </header>

          <section className="space-y-4">
            <article className="border border-zinc-200 rounded-lg p-6 flex items-center gap-4">
              <div className="p-2 rounded bg-zinc-100 text-zinc-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-zinc-900 hover:text-cyan-600 transition-colors"
                >
                  {email}
                </a>
              </div>
            </article>

            <article className="border border-zinc-200 rounded-lg p-6 flex items-center gap-4">
              <div className="p-2 rounded bg-zinc-100 text-zinc-600">
                <GithubIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">GitHub</p>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-cyan-600 transition-colors flex items-center gap-1"
                >
                  github.com/pnyanguwo-cyber
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>

            <article className="border border-zinc-200 rounded-lg p-6 flex items-center gap-4">
              <div className="p-2 rounded bg-zinc-100 text-zinc-600">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">LinkedIn</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-cyan-600 transition-colors flex items-center gap-1"
                >
                  linkedin.com/in/panashe-nyanguwo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>

            <article className="border border-zinc-200 rounded-lg p-6 flex items-center gap-4">
              <div className="p-2 rounded bg-zinc-100 text-zinc-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">CV / Resume</p>
                <a
                  href="/panashe-nyanguwo-cv.pdf"
                  download
                  className="text-zinc-900 hover:text-cyan-600 transition-colors inline-flex items-center gap-1"
                >
                  Download PDF
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </section>

          <p className="mt-12 text-sm text-zinc-500">
            Currently based in Harare, Zimbabwe. Open to remote and relocation opportunities.
          </p>
        </div>
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