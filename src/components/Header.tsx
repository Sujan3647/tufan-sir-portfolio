"use client";

import React, { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Patents", href: "/patents" },
  { label: "Invited Talks", href: "/invited-talks" },
  { label: "Mentorship", href: "/mentorship" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Lab Name / Logo */}
        <div className="flex flex-col">
          <span className="font-modern text-xl font-bold tracking-tight text-navy">
            TSM Research Group
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            SupraMat Lab
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-modern text-base font-bold tracking-wide text-navy/80 hover:text-primary transition-all hover:-translate-y-0.5 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-navy lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl lg:hidden transform transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label} className="py-2">
              <a
                href={link.href}
                className="font-modern flex items-center justify-between text-xl font-bold text-navy hover:text-primary pl-4 transition-all tracking-tight border-transparent hover:border-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
