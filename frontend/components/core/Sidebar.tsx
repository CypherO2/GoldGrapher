"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Accessibility,
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutDashboard,
} from "lucide-react";
import CerberusIcon from "./CerberusIcon";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/accessibility", label: "Accessibility", icon: Accessibility },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`relative sticky top-0 z-20 flex h-screen shrink-0 flex-col border-r border-foreground/25 bg-gate text-foreground transition-[width] duration-300 ease-out ${
        expanded ? "w-56" : "w-16"
      }`}
    >
      <div className="meander" aria-hidden />

      <div
        className={`flex h-16 items-center border-b border-foreground/20 ${
          expanded ? "gap-3 px-4" : "justify-center"
        }`}
      >
        <CerberusIcon className="size-6 shrink-0 text-clay" />
        {expanded && (
          <span className="truncate font-display text-lg tracking-[0.1em] text-foreground">
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
              className={`flex items-center py-2.5 transition-colors duration-200 ${
                href === "/accessibility" ? "mt-auto" : ""
              } ${expanded ? "gap-3 px-3" : "justify-center px-0"} ${
                active
                  ? "bg-clay/15 text-clay"
                  : "text-muted hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <Icon className="size-5 shrink-0" aria-hidden />
              {expanded && (
                <span className="truncate text-sm font-medium tracking-wide">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="meander" aria-hidden />

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        className="absolute top-1/2 -right-4 z-30 flex h-24 w-4 -translate-y-1/2 flex-col items-center justify-center gap-2 border border-l-0 border-foreground/40 bg-gate text-foreground shadow-[3px_0_18px_rgba(0,0,0,0.55)] transition-colors hover:bg-clay hover:text-background"
      >
        <span className="h-1.5 w-1.5 bg-current" aria-hidden />
        {expanded ? (
          <ChevronLeft className="size-3.5 shrink-0" aria-hidden />
        ) : (
          <ChevronRight className="size-3.5 shrink-0" aria-hidden />
        )}
        <span className="h-1.5 w-1.5 bg-current" aria-hidden />
      </button>
    </aside>
  );
}
