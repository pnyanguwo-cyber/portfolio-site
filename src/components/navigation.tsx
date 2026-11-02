"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, ArrowUpRight, ShieldCheck, Cpu, Code2, User, Home, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Code2 },
  { name: "Engineering", href: "/engineering", icon: Cpu },
  { name: "Cybersecurity", href: "/cybersecurity", icon: ShieldCheck },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const triggerAntiGravityPulse = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("anti-gravity-pulse", {
          detail: { x: window.innerWidth / 2, y: 50 },
        })
      );
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm"
            : "bg-white/60 backdrop-blur-md border-b border-zinc-200/40"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand Logo with Anti-Gravity Levitation Pill */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={triggerAntiGravityPulse}
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-white font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="font-mono">AG</span>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-zinc-900 group-hover:text-cyan-600 transition-colors">
                  Panashe Nyanguwo
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 flex items-center gap-1">
                  <span>Anti-Gravity</span>
                  <span className="text-cyan-500">•</span>
                  <span>AI & Security</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 p-1 bg-zinc-100/70 rounded-full border border-zinc-200/80 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "bg-white text-cyan-600 shadow-sm border border-zinc-200/50"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Pulse, GitHub, Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Anti-Gravity Pulse Button (Desktop) */}
              <button
                onClick={triggerAntiGravityPulse}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all hover:scale-105 active:scale-95"
                title="Pulse the Reactive Grid"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-spin-slow" />
                <span>Zero-G</span>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/pnyanguwo-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative z-50 flex flex-col w-full bg-white border-b border-zinc-200 pt-20 pb-8 px-6 shadow-2xl animate-in slide-in-from-top-6 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Live Operational Status */}
            <div className="mb-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>SYSTEM: ONLINE</span>
              </div>
              <button
                onClick={triggerAntiGravityPulse}
                className="text-cyan-600 font-semibold underline underline-offset-2 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                Pulse Grid
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-cyan-500/15 text-cyan-600 border border-cyan-500/30 font-semibold"
                        : "text-zinc-800 hover:bg-zinc-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("h-5 w-5", isActive ? "text-cyan-500" : "text-zinc-500")} />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTAs */}
            <div className="mt-6 pt-6 border-t border-zinc-200 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-center font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 shadow-lg shadow-cyan-500/20 text-sm"
              >
                Initiate Project / Contact
              </Link>
              <a
                href="/panashe-nyanguwo-cv.pdf"
                download
                className="w-full py-3 px-4 rounded-xl text-center font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 text-sm border border-zinc-200"
              >
                Download Resume / CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}