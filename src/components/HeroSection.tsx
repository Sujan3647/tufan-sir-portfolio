"use client";

import React from "react";
import {
  EnvelopeSimple as EnvelopeSimpleIcon,
  ArrowRight as ArrowRightIcon,
  GraduationCap as GraduationCapIcon
} from "@phosphor-icons/react";
import AnimatedChemBackground from "@/components/hero/AnimatedChemBackground";

export default function HeroSection() {
  return (
    <section className="relative bg-white/60 backdrop-blur-sm pt-10 pb-8 lg:pt-16 lg:pb-12 overflow-hidden" id="about">
      <AnimatedChemBackground />
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 bg-transparent opacity-30"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Profile Image Column (Left on Desktop) */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-tr from-primary via-secondary to-primary rounded-2xl opacity-75 blur lg:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-3/4 w-64 md:w-72 lg:w-80 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-900/10 shadow-2xl">
                <img
                  src="/tufanprofile.png"
                  alt="Dr. Tufan Singha Mahapatra"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Column (Right on Desktop) */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-4">
              Dr. Tufan Singha Mahapatra
            </h1>
            
            <div className="text-lg sm:text-xl font-medium text-primary mb-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <span className="font-serif italic">Assistant Professor (Chemistry)</span>
              <span className="hidden sm:inline-block text-gray-300">|</span>
              <span className="font-serif italic">Convener, Institution’s Innovation Council</span>
            </div>

            <p className="font-heading text-lg sm:text-xl text-text-body max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 tracking-wide">
              Based at <strong className="text-navy font-bold font-serif">ICFAI University Tripura</strong>. 
              Dedicated to advancing the field of <span className="font-sans font-medium text-primary bg-primary/5 px-1 rounded">Supramolecular Chemistry</span> and <span className="font-sans font-medium text-secondary bg-secondary/5 px-1 rounded">Materials Science</span> through innovative research and mentorship.
            </p>

            {/* Email & Social — Single Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12 max-w-2xl mx-auto lg:mx-0">
              
              {/* Email Chip */}
              <a href="mailto:tsmahapatra@iutripura.edu.in" 
                 className="group flex items-center gap-3 pl-2 pr-5 py-2 bg-white rounded-full border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                   <EnvelopeSimpleIcon size={20} weight="duotone" />
                 </div>
                 <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors tracking-tight">tsmahapatra@iutripura.edu.in</span>
              </a>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

              {/* Social Icons */}
              <a href="mailto:tufansmp@gmail.com" className="group w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-red-200 hover:shadow-md hover:shadow-red-50 hover:-translate-y-1 transition-all duration-300" title="Gmail">
                 <img src="/logos/email.jpeg" alt="Gmail" className="w-6 h-6 object-contain transition-transform group-hover:scale-110" />
              </a>

              <a href="https://www.linkedin.com/in/dr-tufan-singha-mahapatra-292a69a4/" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-[#0a66c2]/30 hover:shadow-md hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300" title="LinkedIn">
                 <img src="/logos/linkedinlogo.png" alt="LinkedIn" className="w-6 h-6 object-contain transition-transform group-hover:scale-110" />
              </a>

              <a href="https://orcid.org/0000-0002-2839-9688" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-[#a6ce39]/40 hover:shadow-md hover:shadow-green-50 hover:-translate-y-1 transition-all duration-300" title="ORCID">
                 <img src="/logos/orcidlogo.png" alt="ORCID" className="w-6 h-6 object-contain transition-transform group-hover:scale-110" />
              </a>

              <a href="https://scholar.google.com/citations?user=3lFKhPkAAAAJ" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-[#4285f4]/30 hover:shadow-md hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300" title="Google Scholar">
                 <img src="/logos/google-scholar.png" alt="Google Scholar" className="w-6 h-6 object-contain transition-transform group-hover:scale-110" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
