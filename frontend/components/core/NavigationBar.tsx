"use client";
import NavDropdown from "../dropdowns/NavDropdown";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationBarProps {
  siteTitle?: string;
  logoImage?: string;
  dropdownOptions?: {
    label: string;
    href: string;
  }[];
}

export default function NavigationBar({
  siteTitle = "Placeholder",
  logoImage,
  dropdownOptions,
}: NavigationBarProps) {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  return (
    <div className="mx-5 mt-3">
      <div
        className={`flex p-4 text-gold bg-foreground font-bold rounded-lg justify-between`}
      >
        <div className="flex justify-start">
          <Link href="/" className="flex items-center space-x-2">
            {logoImage == "" ? (
              <Image
                src={logoImage as string}
                alt="Logo"
                width={32}
                height={32}
              />
            ) : (
              <DynamicIcon name="grid-2x2" />
            )}
            <h1 className="text-gold hover:cursor-pointer">{siteTitle}</h1>
          </Link>
        </div>
        <div className="flex justify-end items-center gap-2 pr-2">
          <button
            className="hover:cursor-pointer rounded-lg p-1 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuDropdownOpen((prev) => !prev)}
          >
            <DynamicIcon name="menu" />
          </button>
        </div>
      </div>
      {isMenuDropdownOpen && (
        <NavDropdown
          options={dropdownOptions ?? []}
          setIsOpen={setIsMenuDropdownOpen}
        />
      )}
    </div>
  );
}
