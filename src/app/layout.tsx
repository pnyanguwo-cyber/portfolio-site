import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panashe Nyanguwo — IT Professional | Software & AI Application Development | Cybersecurity",
  description: "Building useful digital products with a security-aware mindset. Portfolio of Panashe Nyanguwo featuring Rent Zimbabwe, WA Directory, AI Coding Agent Harness, and Cybersecurity Labs.",
  keywords: ["software development", "AI applications", "cybersecurity", "WhatsApp Business API", "Node.js", "Gemini", "Next.js", "Expo", "Supabase"],
  authors: [{ name: "Panashe T.E. Nyanguwo" }],
  openGraph: {
    title: "Panashe Nyanguwo — IT Professional | Software & AI Application Development | Cybersecurity",
    description: "Building useful digital products with a security-aware mindset.",
    type: "website",
    locale: "en_ZW",
    siteName: "Panashe Nyanguwo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panashe Nyanguwo — IT Professional | Software & AI Application Development | Cybersecurity",
    description: "Building useful digital products with a security-aware mindset.",
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
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}