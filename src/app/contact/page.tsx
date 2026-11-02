"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageCircle, ExternalLink, Copy, Check, Sparkles, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const contactLinks = [
    {
      id: "email",
      icon: Mail,
      label: "Direct Email",
      value: "hello@panashey.ninja",
      href: "mailto:hello@panashey.ninja",
      copyable: true,
      color: "text-cyan-500",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp Business API",
      value: "+263 77 123 4567",
      href: "https://wa.me/263771234567",
      copyable: true,
      color: "text-emerald-500",
    },
    {
      id: "github",
      icon: User,
      label: "GitHub Profile",
      value: "@pnyanguwo-cyber",
      href: "https://github.com/pnyanguwo-cyber",
      copyable: false,
      color: "text-indigo-500",
    },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-4 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>COMMUNICATION CHANNELS ACTIVE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
              Initiate Contact & Collaboration
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-12 max-w-xl mx-auto leading-relaxed">
              Open to technical leadership, AI application architecture, high-impact founding builds, or security advisory consultations.
            </p>

            {/* Direct Channel Cards */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isCopied = copiedKey === link.id;
                return (
                  <div
                    key={link.id}
                    className="group relative rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 ${link.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        {link.copyable && (
                          <button
                            onClick={() => handleCopy(link.id, link.value)}
                            className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                            title="Copy to clipboard"
                          >
                            {isCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                          </button>
                        )}
                      </div>

                      <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                        {link.label}
                      </p>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm truncate">
                        {link.value}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                      >
                        <span>Connect</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Navigation Cards */}
            <div className="rounded-2xl p-8 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-500" />
                Explore Architecture & Case Studies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link href="/projects" className="w-full">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-800 text-xs py-5">
                    Projects
                  </Button>
                </Link>
                <Link href="/engineering" className="w-full">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-800 text-xs py-5">
                    Engineering
                  </Button>
                </Link>
                <Link href="/cybersecurity" className="w-full">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-800 text-xs py-5">
                    Security Enclave
                  </Button>
                </Link>
                <Link href="/about" className="w-full">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-800 text-xs py-5">
                    About Panashe
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
