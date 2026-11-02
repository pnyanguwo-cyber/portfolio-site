"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@panashey.ninja",
      href: "mailto:hello@panashey.ninja",
      copyable: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+263 77 123 4567",
      href: "https://wa.me/263771234567",
    },
    {
      icon: User,
      label: "GitHub",
      value: "@pnyanguwo-cyber",
      href: "https://github.com/pnyanguwo-cyber",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Let&apos;s Build Something Together
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              I&apos;m open to discussing new projects, collaborations, or learning opportunities.
              Feel free to reach out!
            </p>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.startsWith("https") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") || link.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <link.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <div className="text-left">
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {link.label}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {link.value}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Quick Links
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/projects">
                  <Button variant="ghost" className="w-full justify-start">
                    View Projects
                  </Button>
                </Link>
                <Link href="/engineering">
                  <Button variant="ghost" className="w-full justify-start">
                    Engineering Work
                  </Button>
                </Link>
                <Link href="/cybersecurity">
                  <Button variant="ghost" className="w-full justify-start">
                    Cybersecurity Work
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" className="w-full justify-start">
                    About Me
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