import React from "react";
import AboutChemAnimation from "./about/AboutChemAnimation";

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

            {/* Secondary Bio Text & Roles */}
            <div className="md:col-span-5 space-y-6 md:border-l md:border-slate-200 md:pl-8 lg:pl-10">
              <div className="space-y-4">
                <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
                  His research focuses on <span className="font-serif italic text-lg text-slate-800">coordination complexes/polymers, lanthanide-based luminescent materials,</span> and <span className="font-serif italic text-lg text-slate-800">2D nanosheets</span> for applications in <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">catalysis, biology, sensing, & UV shielding</span>.
                </p>
                <p className="font-sans text-base text-slate-600 leading-relaxed font-light">
                  He has published research articles in several reputable <span className="font-medium text-slate-800">SCI-indexed journals</span>, holds <span className="font-mono font-bold text-slate-800 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60">3 patents</span> <span className="text-sm italic text-slate-500">(2 granted, 1 filed)</span>, and actively mentors <span className="font-serif text-slate-800">PhD and Master’s researchers</span>.
                </p>
              </div>
              
              <div className="pt-4 mt-2 border-t border-slate-100">
                <p className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-semibold mb-3">Academic Leadership</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="block w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <p className="font-serif text-sm md:text-base text-slate-800 leading-tight">
                      <span className="font-bold block text-slate-900 mb-0.5">Convener</span>
                      Institution’s Innovation Council
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="block w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <p className="font-serif text-sm md:text-base text-slate-800 leading-tight">
                      <span className="font-bold block text-slate-900 mb-0.5">Faculty-in-Charge</span>
                      Central Instrumentation Centre
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
