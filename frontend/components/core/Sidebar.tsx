"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChartColumnIncreasing,
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutDashboard,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`sticky top-0 flex h-screen shrink-0 flex-col bg-foreground text-gold transition-[width] duration-300 ease-out ${
        expanded ? "w-56" : "w-16"
      }`}
    >
      <div
        className={`flex h-16 items-center border-b border-gold/20 ${
          expanded ? "gap-3 px-4" : "justify-center"
        }`}
      >
        <ChartColumnIncreasing className="size-6 shrink-0" aria-hidden />
        {expanded && (
          <span className="truncate font-[family-name:var(--font-display)] text-lg tracking-tight">
            GoldGrapher
          </span>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-2" aria-label="Main">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              title={expanded ? undefined : label}
              className={`flex items-center rounded-md py-2.5 transition-colors duration-200 ${
                expanded ? "gap-3 px-3" : "justify-center px-0"
              } ${
                active
                  ? "bg-gold/15 text-gold"
                  : "text-gold/70 hover:bg-gold/10 hover:text-gold"
              }`}
            >
              <Icon className="size-5 shrink-0" aria-hidden />
              {expanded && (
                <span className="truncate text-sm font-medium">{label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gold/20 p-2">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          className={`flex w-full items-center rounded-md py-2.5 text-gold/70 transition-colors duration-200 hover:bg-gold/10 hover:text-gold ${
            expanded ? "gap-3 px-3" : "justify-center"
          }`}
        >
          {expanded ? (
            <>
              <ChevronLeft className="size-5 shrink-0" aria-hidden />
              <span className="text-sm font-medium">Collapse</span>
            </>
          ) : (
            <ChevronRight className="size-5 shrink-0" aria-hidden />
          )}
        </button>
      </div>
    </aside>
  );
}
