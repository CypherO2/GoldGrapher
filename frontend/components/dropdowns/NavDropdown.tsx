import React from "react";
import Link from "next/link";

interface NavDropdownProps {
  setIsOpen: (isOpen: boolean) => void;
  options: {
    label: string;
    href: string;
  }[];
}

export default function NavDropdown({ setIsOpen, options }: NavDropdownProps) {
  return (
    <div className="absolute top-20 right-6">
      <div className="shadow-lg rounded-lg py-2 px-4 min-w-[160px] text-background bg-foreground">
        <div className="flex flex-col">
          {options.map((option, idx) => (
            <Link
              key={idx}
              href={option.href}
              className="py-1 px-2 hover:text-background/80 hover:bg-foreground/60 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
