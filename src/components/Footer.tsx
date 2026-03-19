import React from "react";
import { LinkedinLogo, GraduationCap, LinkSimple, Copyright } from "@phosphor-icons/react/dist/ssr";

const socialLinks = [
  { 
    label: "Google Scholar", 
    href: "https://scholar.google.com/citations?user=3lFKhPkAAAAJ",
    icon: <GraduationCap size={20} weight="duotone" />
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/dr-tufan-singha-mahapatra-292a69a4/",
    icon: <LinkedinLogo size={20} weight="duotone" />
  },
  { 
    label: "ORCID", 
    href: "https://orcid.org/0000-0002-2839-9688",
    icon: <LinkSimple size={20} weight="duotone" />
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand / Bio */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-serif text-2xl font-medium text-white tracking-wide">
              Dr. Tufan Singha Mahapatra
            </h2>
            <p className="font-sans text-[15px] font-light text-slate-400 leading-relaxed max-w-sm">
              Assistant Professor of Chemistry at ICFAI University Tripura. Exploring Supramolecular Chemistry, 2D Nanosheets, and Materials Science to inspire the next generation of researchers.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Useful Links */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col md:items-end gap-6 text-left md:text-right">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Academic Profiles
            </h3>
            <div className="flex flex-col md:items-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <span className="hidden md:block transition-transform duration-300 group-hover:-translate-x-1">{link.label}</span>
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300 shadow-sm">
                    {link.icon}
                  </div>
                  <span className="md:hidden transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-slate-400">
            <Copyright size={14} weight="bold" /> {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="font-sans text-[13px] text-slate-500 font-light">
            Designed & securely developed for TSM Research Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
