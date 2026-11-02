import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TechStackBadge } from "@/components/tech-stack-badge";
import Link from "next/link";
import { CertificationGallery } from "@/components/certification-gallery";

const education = ["BSc Computer Science — University of Zimbabwe"];

const certifications = [
  {
    title: "Cybersecurity Professional Certificate",
    issuer: "Google — Coursera",
    date: "Issued Mar 30, 2025",
    href: "https://www.coursera.org/verify/professional-cert/UGK16MCULMLY",
    image: "/certifications/google-cybersecurity.jpeg",
    imageAlt: "Google Cybersecurity Professional Certificate",
  },
  {
    title: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT Academy",
    date: "Issued May 30, 2026",
    href: "https://www.credly.com/badges/7adaaf3a-0b07-4c9e-87a8-5b7ff4b7d298",
    image: "/certifications/opswat-icip.png",
    imageAlt: "OPSWAT Academy ICIP certification badge",
  },
];

const courses = [
  { title: "Cybersecurity for Businesses — The Fundamental Edition", issuer: "CodeRed", date: "Dec 16, 2025" },
  { title: "A Practical Introduction to Cloud Computing", issuer: "CodeRed", date: "Dec 16, 2025" },
  { title: "Introduction to Cybersecurity Awareness", issuer: "HP LIFE", date: "Aug 9, 2025" },
  { title: "Data Science & Analytics", issuer: "HP LIFE", date: "Aug 9, 2025" },
  { title: "AI for Beginners", issuer: "HP LIFE", date: "Aug 9, 2025" },
  { title: "IT for Business Success", issuer: "HP LIFE", date: "Aug 9, 2025" },
];

const simulations = [
  { title: "Cybersecurity Analyst Job Simulation", issuer: "TATA — Forage", date: "Dec 16, 2025" },
  { title: "Cybersecurity Job Simulation", issuer: "Mastercard & New York Jobs CEO Council — Forage", date: "Dec 16, 2025" },
];

const bootcamps = [
  { title: "Machine Learning using Python & SKLearn", issuer: "DevTown", details: "Certificate of Participation", date: "Jan 2023" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-blue)]">
          <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              About
            </h1>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              I&apos;m a software engineer and co-founder building production systems with a security-aware mindset.
              My work spans full-stack applications, AI-assisted development workflows, and zero-trust security architectures.
              <br /><br />
              Currently focused on: scalable WhatsApp-based platforms, secure AI-assisted development workflows,
              and applying threat modeling (STRIDE) to production systems. Open to full-time and contract roles.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <section className="mb-16 animate-fade-in-up">
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Education</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {education.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Certifications</h2>
              <CertificationGallery certs={certifications} />
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Course completions (6)</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {courses.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    <strong>{item.title}</strong> &mdash; {item.issuer}, {item.date}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Job simulations (2)</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {simulations.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    <strong>{item.title}</strong> &mdash; {item.issuer}, {item.date}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Bootcamp participation (1)</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {bootcamps.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    <strong>{item.title}</strong> &mdash; {item.issuer}, {item.details}, {item.date}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[var(--color-bg-pale-blue)] border border-[var(--color-border)] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "React Native", "Supabase", "PostgreSQL", "Gemini API", "WhatsApp API", "HMAC Auth", "RLS", "STRIDE", "OWASP"].map((skill) => (
                  <TechStackBadge key={skill} name={skill} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}