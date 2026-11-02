import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExternalLink, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function ContactPage() {
  const email = "pnyanguwo@proton.me";
  const github = "https://github.com/pnyanguwo-cyber";
  const linkedin = "https://linkedin.com/in/pnyanguwo-cyber";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-violet)]">
          <div className="absolute inset-0 bg-decor-dots opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              Contact
            </h1>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Available for full-time and contract roles. Feel free to reach out.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-xl">
            <section className="space-y-4">
              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">GitHub</p>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    github.com/pnyanguwo-cyber
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    linkedin.com/in/pnyanguwo-cyber
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">CV / Resume</p>
                  <a
                    href="/cv.pdf"
                    download
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
                  >
                    Download PDF
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </section>

            <p className="mt-12 text-sm text-[var(--color-text-muted)]">
              Currently based in Harare, Zimbabwe. Open to remote and relocation opportunities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}