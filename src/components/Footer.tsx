import React from "react";

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "ResearchGate", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1" fill="white" />
                <rect x="10" y="2" width="6" height="6" rx="1" fill="white" opacity="0.6" />
                <rect x="2" y="10" width="6" height="6" rx="1" fill="white" opacity="0.6" />
                <rect x="10" y="10" width="6" height="6" rx="1" fill="white" opacity="0.4" />
              </svg>
            </div>
            <span className="text-base font-semibold text-text-dark">
              Dr. Julian Thorne
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary">
            Leading the next generation of cybersecurity research through
            quantum-enhanced methodologies.
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
            © 2024 Dr. Julian Thorne. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
