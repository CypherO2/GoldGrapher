"use client";
import Link from "next/link";

interface SiteFooterProps {
  companyName?: string;
  companyWebsite?: string;
  year?: string;
}

export default function SiteFooter({
  companyName = "Placeholder",
  companyWebsite,
  year = "2025",
}: SiteFooterProps) {
  return (
    <div className="mx-5 text-center text-sm bg-foreground text-gold py-2 rounded-t-lg">
      © {year}{" "}
      <Link href={companyWebsite ?? ""} className="font-bold underline">
        {companyName}
      </Link>{" "}
      | All Rights Reserved
    </div>
  );
}
