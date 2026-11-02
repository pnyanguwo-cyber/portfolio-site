"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const certifications = [
    { name: "Software Engineering Professional", status: "Completed", year: "2024" },
    { name: "Google Gemini API Certified", status: "Completed", year: "2024" },
    { name: "WhatsApp Business API Integration", status: "Completed", year: "2023" },
    { name: "OWASP Top 10 Mastery", status: "Completed", year: "2023" },
  ];

  const skills = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Shell"] },
    { category: "Frameworks", items: ["Next.js", "React", "Expo", "Node.js"] },
    { category: "AI/ML", items: ["Gemini", "Claude Code", "Vector Search"] },
    { category: "Databases", items: ["Supabase", "PostgreSQL", "IndexedDB"] },
    { category: "APIs", items: ["WhatsApp Cloud API", "REST", "WebSocket"] },
    { category: "Security", items: ["Threat Modeling", "OAuth", "HMAC"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Panashe T.E. Nyanguwo
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Software Development | AI Applications | Cybersecurity
              </p>
            </div>

            {/* Education & Background */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Education
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Computer Science (in progress)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      University of Zimbabwe
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Professional Background
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    Co-founder building technology products since 2020. Focus on practical
                    solutions that balance user needs with security and maintainability.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialize in multi-agent AI-assisted development workflows, WhatsApp
                    commerce platforms, and security-conscious software architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {cert.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          University of Zimbabwe
                        </p>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact - but link to contact page */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm interested in discussing new opportunities, technical collaborations,
                or just saying hello.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button>
                    View Contact Details
                  </Button>
                </Link>
                <a href="/panashe-nyanguwo-cv.pdf" download>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}