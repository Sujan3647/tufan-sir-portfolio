import React from "react";
import AboutChemAnimation from "./about/AboutChemAnimation";
import { Atom, Article, Lightbulb } from "@phosphor-icons/react/dist/ssr";

export default function BioSection() {
  return (
    <section className="bg-white/80 backdrop-blur-sm py-24 relative overflow-hidden" id="about">
      {/* Detailed chemistry floating animation */}
      <AboutChemAnimation />
      
      {/* Decorative architectural line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 to-transparent opacity-50" />
      
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 inline-block border border-slate-300 rounded-full px-4 py-1">
            About the PI
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
            Dr. Tufan Singha <span className="font-bold text-slate-800">Mahapatra</span>
          </h2>
        </div>

        {/* Content Layout - Editorial Style */}
        <div className="relative">
          {/* Large decorative quotation mark / initial */}
          <span className="absolute -top-10 -left-8 text-8xl font-serif text-slate-200 opacity-50 select-none hidden md:block">
            &ldquo;
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Main Bio Text - Large clear typography */}
            <div className="md:col-span-7 space-y-6">
              <p className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed">
                Dr. Tufan Singha Mahapatra is an Assistant Professor of Chemistry with <span className="font-semibold">9+ years of post-PhD experience</span>, integrating academic leadership with cutting-edge research in <span className="italic text-slate-600">inorganic, supramolecular and materials chemistry.</span>
              </p>
              
              <p className="font-sans text-base text-slate-600 leading-loose font-light">
                He is an alumnus of <strong className="font-medium text-slate-800">IIT Madras (M.Sc.)</strong> and <strong className="font-medium text-slate-800">IIT Kharagpur (PhD)</strong>, and secured strong ranks in national-level examinations, including <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-semibold">IIT-JAM</span>, <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-semibold">GATE</span>, and <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-semibold">CSIR-UGC NET (JRF)</span>.
              </p>
            </div>

            {/* Secondary Bio Details - Professional Academic Style */}
            <div className="md:col-span-5 space-y-10 md:pl-8 lg:pl-10">
              
              {/* Research Focus */}
              <div className="relative border-l-[3px] border-slate-200 pl-6 group hover:border-slate-400 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3 text-slate-800">
                  <Atom size={22} weight="light" />
                  <h3 className="font-serif font-medium text-slate-900 tracking-wide uppercase text-sm">Research Domains</h3>
                </div>
                <p className="font-sans text-[15px] text-slate-600 leading-relaxed font-light">
                  Specializes in <span className="font-medium text-slate-800">coordination complexes</span>, <span className="font-medium text-slate-800">lanthanide luminescent materials</span>, and <span className="font-medium text-slate-800">2D nanosheets</span>. Advancing applications in catalysis, biology, sensing, and UV shielding.
                </p>
              </div>

              {/* Achievements & Recognition */}
              <div className="relative border-l-[3px] border-slate-200 pl-6 group hover:border-slate-400 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4 text-slate-800">
                  <Article size={22} weight="light" />
                  <h3 className="font-serif font-medium text-slate-900 tracking-wide uppercase text-sm">Academic Impact</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5 shrink-0"></span>
                    <p className="font-sans text-[15px] text-slate-600 leading-relaxed font-light">
                      Published research articles in several reputable <span className="font-medium text-slate-800">SCI-indexed</span> journals.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5 shrink-0"></span>
                    <p className="font-sans text-[15px] text-slate-600 leading-relaxed font-light">
                      Holds <span className="font-medium text-slate-800">3 patents</span> (2 granted, 1 filed).
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2.5 shrink-0"></span>
                    <p className="font-sans text-[15px] text-slate-600 leading-relaxed font-light">
                      Actively mentors <span className="font-medium text-slate-800">PhD and Master’s</span> researchers.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Academic Leadership */}
              <div className="relative border-l-[3px] border-slate-200 pl-6 group hover:border-slate-400 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5 text-slate-800">
                  <Lightbulb size={22} weight="light" />
                  <h3 className="font-serif font-medium text-slate-900 tracking-wide uppercase text-sm">Institutional Leadership</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-mono font-medium text-slate-400 text-[11px] tracking-widest uppercase mb-1">Convener</h4>
                    <p className="font-serif text-slate-800 text-base">Institution’s Innovation Council</p>
                  </div>
                  <div>
                    <h4 className="font-mono font-medium text-slate-400 text-[11px] tracking-widest uppercase mb-1">Faculty-in-Charge</h4>
                    <p className="font-serif text-slate-800 text-base">Central Instrumentation Centre</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
