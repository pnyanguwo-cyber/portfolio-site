import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactiveGridBackground } from "@/components/reactive-grid-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panashe Nyanguwo — Anti-Gravity Systems | Software & AI Architecture | Cybersecurity",
  description: "Silicon Valley-caliber portfolio of Panashe Nyanguwo. Building high-impact digital products, autonomous multi-agent systems, and zero-trust architectures with Gemini 2.0, Next.js, and WhatsApp Cloud API.",
  keywords: [
    "Panashe Nyanguwo",
    "Anti-Gravity",
    "software architecture",
    "AI applications",
    "cybersecurity",
    "WhatsApp Business API",
    "Node.js",
    "Gemini 2.0",
    "Next.js 16",
    "Expo",
    "Supabase",
    "Silicon Valley portfolio",
  ],
  authors: [{ name: "Panashe T.E. Nyanguwo" }],
  openGraph: {
    title: "Panashe Nyanguwo — Anti-Gravity Systems | Software & AI Architecture",
    description: "Building resilient digital products with an anti-gravity mindset and zero-trust security.",
    type: "website",
    locale: "en_ZW",
    siteName: "Panashe Nyanguwo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panashe Nyanguwo — Anti-Gravity Systems | Software & AI Architecture",
    description: "Building resilient digital products with an anti-gravity mindset and zero-trust security.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-500">
        <ReactiveGridBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
