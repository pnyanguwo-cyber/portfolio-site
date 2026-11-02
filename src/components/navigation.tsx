"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Engineering", href: "/engineering" },
  { name: "Cybersecurity", href: "/cybersecurity" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 dark:bg-zinc-950/95 dark:border-gray-800 backdrop-blur supports-[backdrop-filter]:bg-white/95 supports-[backdrop-filter]:dark:bg-zinc-950/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Panashe Nyanguwo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeProvider />
          </div>
        </div>
      </div>
    </header>
  );
}