"use client";

import React, { useState } from "react";
import { ListIcon, XIcon, CaretDown } from "@phosphor-icons/react";

const navLinks = [
  { label: "About", href: "/#about" },
  { 
    label: "Research", 
    href: "/#research",
    subLinks: [
      { label: "Independent Research", href: "/independent-research" },
      { label: "Publications from PhD and Post-doc", href: "/phd-postdoc" }
    ]
  },
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
            link.subLinks ? (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="font-modern flex items-center gap-1.5 text-base font-bold tracking-wide text-navy/80 hover:text-primary transition-all hover:-translate-y-0.5 py-2"
                >
                  {link.label}
                  <CaretDown weight="bold" className="transition-transform duration-300 group-hover:rotate-180" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-72 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-100 p-2 flex flex-col gap-1 z-50">
                  {link.subLinks.map((subLink) => (
                    <a
                      key={subLink.label}
                      href={subLink.href}
                      className="block px-4 py-3 font-modern text-sm font-semibold text-navy/80 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors border border-transparent hover:border-slate-100"
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-modern text-base font-bold tracking-wide text-navy/80 hover:text-primary transition-all hover:-translate-y-0.5 py-2"
              >
                {link.label}
              </a>
            )
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
                className={`font-modern flex items-center justify-between text-xl font-bold text-navy hover:text-primary pl-4 border-l-4 transition-all tracking-tight ${link.subLinks ? 'border-transparent' : 'border-transparent hover:border-primary'}`}
                onClick={(e) => {
                  if(!link.subLinks) setIsMenuOpen(false);
                }}
              >
                {link.label}
                {link.subLinks && <CaretDown weight="bold" className="text-navy/50" />}
              </a>
              
              {/* Mobile Submenu */}
              {link.subLinks && (
                <div className="mt-4 ml-4 flex flex-col space-y-4 pl-4 border-l-2 border-slate-100">
                  {link.subLinks.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="font-modern text-[17px] font-semibold text-navy/70 hover:text-primary transition-colors flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-slate-300 before:rounded-full hover:before:bg-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
