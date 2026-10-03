import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible,
  Cinzel,
  Geist_Mono,
  Lexend,
  Source_Sans_3,
} from "next/font/google";
import "@fontsource/opendyslexic/latin-400.css";
import "@fontsource/opendyslexic/latin-700.css";
import "./globals.css";
import A11yApply from "@/components/core/A11yApply";
import Sidebar from "@/components/core/Sidebar";
import { A11Y_BOOT_SCRIPT } from "@/lib/a11y";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: "GoldGrapher",
  description:
    "Track spending, budgets, and balances. A ledger for Plouton's riches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${geistMono.variable} ${cinzel.variable} ${lexend.variable} ${atkinson.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <A11yApply />
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
