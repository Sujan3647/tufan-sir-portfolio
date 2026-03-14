import React from "react";
import Image from "next/image";
import { Trophy } from "@phosphor-icons/react/dist/ssr";
import AboutChemAnimation from "./about/AboutChemAnimation";
import EduMathChemAnimation from "./about/EduMathChemAnimation";

const qualifications = [
  {
    degree: "Ph.D. in Inorganic Chemistry",
    institution: "Indian Institute of Technology Kharagpur",
    year: "2016",
    logo: "/educationlogos/IIT%20Kharagpur%20.png",
    thesis: "Synthesis and Studies of Multinuclear Coordination Compounds of Selected 3d Metal Ions",
    bgClass: "bg-amber-50",
    textClass: "text-amber-700",
    borderClass: "border-amber-300",
    hoverBorderClass: "group-hover:border-amber-500",
  },
  {
    degree: "M.Sc. in Chemistry",
    institution: "Indian Institute of Technology Madras",
    year: "2011",
    logo: "/educationlogos/IIT%20Madras.png",
    highlight: "IIT JAM — AIR 86",
    bgClass: "bg-sky-50",
    textClass: "text-sky-700",
    borderClass: "border-sky-300",
    hoverBorderClass: "group-hover:border-sky-500",
  },
  {
    degree: "B.Sc. in Chemistry",
    institution: "Presidency College, University of Calcutta",
    year: "2009",
    logo: "/educationlogos/Presidency%20College%2C.png",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-700",
    borderClass: "border-emerald-300",
    hoverBorderClass: "group-hover:border-emerald-500",
  },
];

const experience = [
  {
    role: "Assistant Professor",
    institution: "ICFAI University Tripura",
    period: "August 2019 – Present",
    type: "Academic",
    logo: "/experience-logos/icfailogo.png",
    bgClass: "bg-indigo-50",
    textClass: "text-indigo-700",
    borderLeftClass: "border-l-indigo-500",
  },
  {
    role: "Research Associate",
    institution: "CSIR-CSMCRI, Bhavnagar",
    period: "March 2019 – August 2019",
    type: "Research",
    logo: "/experience-logos/CSIR-CSMCRI.png",
    bgClass: "bg-rose-50",
    textClass: "text-rose-700",
    borderLeftClass: "border-l-rose-500",
  },
  {
    role: "SERB-National Post-Doctoral Fellow",
    institution: "CSIR-CSMCRI",
    period: "March 2017 – March 2019",
    type: "Post-Doc",
    logo: "/experience-logos/CSIR-CSMCRI.png",
    bgClass: "bg-violet-50",
    textClass: "text-violet-700",
    borderLeftClass: "border-l-violet-500",
  },
];

const nationalRanks = [
  { exam: "CSIR UGC NET", rank: "AIR 26" },
  { exam: "GATE", rank: "AIR 33" },
];

export default function EducationSection() {
  return (
    <div className="flex flex-col">
      
      {/* =========================================
          1. PROFESSIONAL EXPERIENCE SECTION
          ========================================= */}
      <section
        className="relative overflow-hidden bg-white/80 backdrop-blur-sm py-24 md:py-32"
        id="experience"
      >
        {/* Detailed chemistry floating animation */}
        <AboutChemAnimation />

        {/* Decorative architectural line */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 to-transparent opacity-50" />

        {/* Soft Modern Ambient Background */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-200 h-150 bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none z-[-1]" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-150 h-150 bg-sky-50/50 rounded-full blur-[120px] pointer-events-none z-[-1]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 mb-4 inline-block border border-indigo-100 bg-indigo-50/50 px-5 py-1.5 rounded-full shadow-sm">
              Professional Journey
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Work <span className="font-bold text-slate-800">Experience</span>
            </h2>
            <p className="mt-6 font-sans text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
              Impactful roles in academia and research, driving innovation in chemical sciences and mentoring the next generation of researchers.
            </p>
          </div>

          {/* Advanced Professional Experience Layout */}
          <div className="mx-auto max-w-5xl relative mt-16 space-y-8 md:space-y-12">
            
            {/* Subtle Timeline Track */}
            <div className="absolute left-[39px] md:left-12 top-10 bottom-10 w-[2px] bg-linear-to-b from-indigo-200/50 via-slate-200/50 to-emerald-200/50 hidden md:block z-0" />

            {experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col md:flex-row items-stretch gap-6 md:gap-10 z-10"
              >
                {/* Timeline Node - Desktop only */}
                <div className="hidden md:flex flex-col items-center pt-8 relative z-10 w-24 shrink-0">
                   <div className="w-[18px] h-[18px] rounded-full bg-white border-[4px] border-slate-200 group-hover:border-indigo-400 group-hover:scale-125 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
                   {/* Vertical connecting line for nodes, hidden on last item */}
                   {idx !== experience.length - 1 && (
                     <div className="w-px h-full bg-slate-200/50 mt-4 group-hover:bg-indigo-300/40 transition-colors duration-500" />
                   )}
                </div>

                {/* Modern Content Card */}
                <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:ring-slate-900/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                  
                  {/* Decorative modern shape (Animated blob) */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-linear-to-br from-slate-100 to-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 ease-out z-0 pointer-events-none ${exp.bgClass} mix-blend-multiply`} />

                  <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
                    
                    {/* Left: Role and Metadata */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-5">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full ${exp.bgClass} ${exp.textClass} ring-1 ring-inset ring-current/20 shadow-xs bg-opacity-50`}>
                          {exp.type}
                        </span>
                        <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-3xl font-medium text-slate-900 leading-tight mb-2 group-hover:text-slate-800 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Right: Institution Details (Glassed inner container) */}
                    <div className="flex items-center gap-5 lg:w-[45%] shrink-0 p-5 rounded-2xl bg-white/60 backdrop-blur border border-slate-100/80 shadow-xs group-hover:bg-white/90 group-hover:border-slate-200 transition-all duration-500">
                      <div className="relative h-16 w-16 rounded-xl bg-white p-2.5 ring-1 ring-slate-100 shadow-sm shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                        <Image
                          src={exp.logo}
                          alt={exp.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Institution</p>
                        <p className="font-sans text-[16px] font-medium text-slate-800 leading-snug">
                          {exp.institution}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          2. EDUCATION & QUALIFICATIONS SECTION
          ========================================= */}
      <section
        className="relative overflow-hidden bg-slate-50/80 backdrop-blur-sm py-24 md:py-32 border-t border-slate-200/50"
        id="education"
      >
        {/* Animated Math and Chemistry Background Background */}
        <EduMathChemAnimation />

        {/* Subtle Architectural Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/10_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-[-1]" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          {/* Section Header */}
          <div className="mb-14 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4 inline-block border border-emerald-200 bg-emerald-50/50 px-5 py-1.5 rounded-full shadow-sm">
              Academic Foundation
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Education & <span className="font-bold text-slate-800">Qualifications</span>
            </h2>
          </div>

          {/* Premium National Rankings Banner */}
          <div className="flex justify-center mb-24 relative z-10">
            <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-1 w-full max-w-4xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.4)] group">
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(245,158,11,0.1)_0deg,rgba(245,158,11,0.5)_180deg,rgba(245,158,11,0.1)_360deg)] animate-[spin_4s_linear_infinite]" />
              
              <div className="relative bg-slate-900/95 backdrop-blur-sm rounded-[22px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                {/* Background graphic */}
                <div className="absolute -left-12 -bottom-12 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Trophy size={200} weight="fill" className="text-amber-500" />
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 relative z-10 pl-2">
                  <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Trophy size={24} weight="duotone" className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-white tracking-wide">National Excellence</h4>
                    <p className="font-mono text-[10px] text-amber-500/70 uppercase tracking-widest mt-0.5">Competitive Rankings</p>
                  </div>
                </div>

                {/* Score Dividers */}
                <div className="hidden md:block w-px h-16 bg-slate-800" />

                {/* Ranks */}
                <div className="flex items-center gap-8 sm:gap-16 relative z-10 pr-4">
                  {nationalRanks.map((rank) => (
                    <div key={rank.exam} className="text-center md:text-left flex flex-col justify-center">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase font-bold mb-1.5 flex items-center justify-center md:justify-start gap-2">
                        <span className="w-1 h-1 bg-amber-500 rounded-full" />
                        {rank.exam}
                      </p>
                      <p className="font-serif text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-amber-400 transition-colors duration-500">
                        {rank.rank}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Education Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 relative z-10">
            {qualifications.map((q, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 hover:ring-slate-900/10 hover:-translate-y-2 transition-all duration-700 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Decorative background shape */}
                <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 ease-out z-0 pointer-events-none ${q.bgClass} mix-blend-multiply blur-2xl`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-slate-100 rounded-[1.25rem] scale-100 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className={`relative h-20 w-20 rounded-[1.25rem] bg-white p-3 ring-1 ${q.borderClass} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                        <Image
                          src={q.logo}
                          alt={q.institution}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2.5">
                      <span className={`font-mono text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${q.bgClass} ${q.textClass} ring-1 ring-inset ring-current/20`}>
                        {q.year}
                      </span>
                      {q.highlight && (
                        <span className="flex items-center gap-1.5 font-sans text-[10px] font-bold text-amber-700 bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200/60 shadow-xs px-2.5 py-1 rounded-md">
                          <Trophy size={12} weight="fill" className="text-amber-500" />
                          {q.highlight}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-serif text-[1.6rem] font-medium text-slate-900 leading-tight group-hover:text-slate-800 transition-colors">
                      {q.degree}
                    </h4>
                    <p className="font-sans text-[15px] font-light text-slate-600 leading-relaxed border-l-[3px] border-slate-200 pl-4 group-hover:border-slate-400 transition-colors duration-300">
                      {q.institution}
                    </p>
                  </div>
                </div>

                {q.thesis && (
                  <div className="pt-8 mt-10 border-t border-slate-100 relative z-10">
                     <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-500 transition-colors duration-500" />
                      Doctoral Thesis
                    </p>
                    <p className="font-serif text-slate-700 italic text-[15px] leading-relaxed relative">
                      <span className="absolute -left-3 -top-2 text-3xl text-slate-200 font-serif opacity-50 select-none">&ldquo;</span>
                      {q.thesis}
                      <span className="absolute -right-3 -bottom-4 text-3xl text-slate-200 font-serif opacity-50 select-none">&rdquo;</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </section>

    </div>
  );
}