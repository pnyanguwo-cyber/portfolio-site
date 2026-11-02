import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-medium rounded-md transition-colors",
        isActive
          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
          : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
      )}
    >
      {label}
    </Link>
  );
}