import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/core/NavigationBar";
import SiteFooter from "@/components/core/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoldGrapher",
  description: "Your all in one money management dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar
          siteTitle="GoldGrapher"
          dropdownOptions={[
            { label: "Home", href: "/" },
            { label: "Dashboard", href: "/dashboard" },
          ]}
        />
        <main className="flex flex-col flex-1 min-h-[calc(100vh-100px)] py-6 mx-10">
          {children}
        </main>
        <SiteFooter companyName="GoldGrapher" year="2025" />
      </body>
    </html>
  );
}
