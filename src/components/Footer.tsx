import React from "react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-tufan-singha-mahapatra-292a69a4/" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=3lFKhPkAAAAJ" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-2839-9688" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-base font-semibold text-text-dark">
              Dr. Tufan Singha Mahapatra
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            Assistant Professor of Chemistry, ICFAI University Tripura. Exploring Supramolecular Chemistry and Materials Science.
          </p>
        </div>

        {/* Right */}
        <div className="text-right">
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-body transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-muted">
            © {new Date().getFullYear()} Dr. Tufan Singha Mahapatra. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
