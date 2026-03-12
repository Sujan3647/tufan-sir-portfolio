import React from "react";
import Image from "next/image";
import { Trophy } from "@phosphor-icons/react/dist/ssr";

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
        className="relative overflow-hidden bg-white py-24 md:py-32"
        id="experience"
      >
        {/* Soft Modern Ambient Background */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-200 h-150 bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-150 h-150 bg-sky-50/50 rounded-full blur-[120px] pointer-events-none" />
        
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-1"
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-linear-to-br from-transparent to-black ${exp.bgClass}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="relative h-16 w-16 rounded-2xl bg-white p-2 ring-1 ring-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={exp.logo}
                        alt={exp.institution}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${exp.bgClass} ${exp.textClass} ring-1 ring-inset ring-current/20`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="space-y-4 grow">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></span>
                      {exp.period}
                    </span>
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors leading-snug">
                        {exp.role}
                      </h4>
                      <p className="mt-3 font-sans text-base font-light text-slate-600 leading-relaxed border-l-2 border-slate-100 pl-3">
                        {exp.institution}
                      </p>
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
        className="relative overflow-hidden bg-slate-50 py-24 md:py-32 border-t border-slate-200/50"
        id="education"
      >
        {/* Subtle Architectural Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/5_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/5_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

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

          {/* Centered National Rankings Banner */}
          <div className="flex justify-center mb-20 relative">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-linear-to-br from-amber-50 to-orange-50/50 p-5 rounded-2xl border border-amber-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute -left-4 -bottom-4 opacity-[0.04] transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                <Trophy size={140} weight="fill" className="text-amber-700" />
              </div>

              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-amber-200/60 text-amber-700 px-5 py-3 rounded-xl shadow-xs relative z-10">
                <Trophy size={24} weight="duotone" className="text-amber-500" />
                <h4 className="font-serif text-lg font-medium text-slate-900">National Rankings</h4>
              </div>

              <div className="flex items-center gap-6 sm:gap-10 px-6 relative z-10">
                {nationalRanks.map((rank) => (
                  <div key={rank.exam} className="text-center sm:text-left flex flex-col justify-center">
                    <p className="font-mono text-[10px] tracking-widest text-amber-700/80 uppercase font-bold mb-1">
                      {rank.exam}
                    </p>
                    <p className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-amber-900">
                      {rank.rank}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualifications.map((q, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between h-full ring-1 ring-slate-900/5 hover:ring-slate-900/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`relative h-20 w-20 rounded-2xl bg-white p-3 ring-1 ${q.borderClass} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                      <Image
                        src={q.logo}
                        alt={q.institution}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${q.bgClass} ${q.textClass}`}>
                        {q.year}
                      </span>
                      {q.highlight && (
                        <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-md shadow-xs drop-shadow-sm">
                          <Trophy size={10} weight="fill" />
                          {q.highlight}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-2xl font-medium text-slate-900 leading-snug">
                      {q.degree}
                    </h4>
                    <p className="font-sans text-[15px] font-light text-slate-600 leading-relaxed">
                      {q.institution}
                    </p>
                  </div>
                </div>

                {q.thesis && (
                  <div className="pt-6 mt-8 border-t border-slate-100 relative">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold flex items-center gap-2">
                      <span className="h-px w-4 bg-slate-300"></span>
                      Thesis
                    </p>
                    <p className="font-serif text-slate-600 italic text-[15px] leading-relaxed">
                      &ldquo;{q.thesis}&rdquo;
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