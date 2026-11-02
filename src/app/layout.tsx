import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/splash-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Panashe Nyanguwo — Software Engineer",
  description: "Building innovative, secure and scalable software solutions with a focus on performance, user experience and trust.",
  keywords: ["software engineering", "security architecture", "AI applications", "WhatsApp Business API", "Next.js", "Expo", "Supabase", "TypeScript", "Gemini"],
  authors: [{ name: "Panashe T.E. Nyanguwo" }],
  openGraph: {
    title: "Panashe Nyanguwo — Software Engineer",
    description: "Building innovative, secure and scalable software solutions with a focus on performance, user experience and trust.",
    type: "website",
    locale: "en_ZW",
    siteName: "Panashe Nyanguwo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panashe Nyanguwo — Software Engineer",
    description: "Building innovative, secure and scalable software solutions with a focus on performance, user experience and trust.",
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
      <body className="min-h-full flex flex-col bg-white text-[var(--color-text-body)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Opening splash screen */}
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}