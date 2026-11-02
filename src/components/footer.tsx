"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative py-12 md:py-16 bg-white border-t border-[var(--color-border)]"
      role="contentinfo"
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-text-heading)] font-semibold text-xl mb-4"
              aria-label="Panashe Nyanguwo - Home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white font-bold text-sm">
                PN
              </span>
              <span>Panashe Nyanguwo</span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
              Software Engineer & Security Architect building secure, scalable, and intelligent software solutions.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-1" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-[var(--color-text-heading)] uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-[var(--color-text-heading)] uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:panashe.nyanguwo@example.com"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>panashe.nyanguwo@example.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pnyanguwo-cyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <GithubIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/panashe-nyanguwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {year} Panashe Nyanguwo. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}