"use client";

import React, { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publication", href: "#publications" },
  { label: "Invited Talks", href: "#talks" },
  { label: "Mentorship", href: "#mentorship" },
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
              className="font-modern text-base font-bold tracking-wide text-navy/80 hover:text-primary transition-all hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-navy lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`fixed inset-x-0 top-20 bg-white border-b border-gray-100 shadow-xl lg:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-modern block text-xl font-bold text-navy hover:text-primary pl-4 border-l-4 border-transparent hover:border-primary transition-all tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
