"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Code2, Cpu, ShieldCheck, Mail, ExternalLink } from "lucide-react";

const navItems = [
  { name: "Work", href: "/projects", icon: Code2 },
  { name: "Engineering", href: "/engineering", icon: Cpu },
  { name: "Security", href: "/cybersecurity", icon: ShieldCheck },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-zinc-900 hover:text-cyan-600 transition-colors"
          >
            Panashe Nyanguwo
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-cyan-600"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pnyanguwo-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="GitHub"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}