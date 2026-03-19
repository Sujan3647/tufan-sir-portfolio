"use client";

import React from "react";
import Header from "@/components/Header";
import { MicrophoneStage, CalendarBlank, Buildings, PresentationChart } from "@phosphor-icons/react";

const talks = [
  {
    date: "January 8–9, 2026",
    topic: "Functional Luminous Lanthanide(III) Materials in Action: From UV Shielding to Real-Time Explosive Sensing",
    event: "International Conference on Advanced Materials and Manufacturing (ICAMM 2.0)",
    organization: "JIS Institute of Advanced Studies and Research (JISIASR), JIS University, Kolkata",
    type: "Conference",
    accent: "bg-indigo-500",
  },
  {
    date: "March 4–5, 2025",
    topic: "Light-Emitting Lanthanide(III)-Based Materials for UV-Shielding and Explosive Detection",
    event: "National Seminar on Nature, Culture, Politics and Technology in the Context of Climate Change: The Way Forward",
    organization: "Tripura University",
    type: "National Seminar",
    accent: "bg-emerald-500",
  },
  {
    date: "Jan 31 – Feb 1, 2025",
    topic: "Light-Emitting Lanthanide(III)-Based Coordination Polymers and Coordination Polymer Gels",
    event: "Recent Advances in Chemistry Research and Translation (ReACT-2025)",
    organization: "IISER Kolkata",
    type: "National Seminar",
    accent: "bg-emerald-500",
  },
  {
    date: "March 15, 2024",
    topic: "Lanthanide Coordination Nanosheets for Explosive Detection",
    event: "Science and Technology for Environmental Sustainability and Tribal Development",
    organization: "Govt. Degree College, Dharmanagar, Indian Science Congress Association",
    type: "National Seminar",
    accent: "bg-emerald-500",
  },
  {
    date: "March 4–5, 2023",
    topic: "Two-Dimensional Lanthanide Coordination Nanosheets for 1,1-Diamino-2,2-dinitroethene (FOX-7) Explosive Detection",
    event: "Emergent Materials for Energy and Environment (EMEE-2023)",
    organization: "IIT Roorkee",
    type: "Conference",
    accent: "bg-indigo-500",
  },
  {
    date: "February 28, 2020",
    topic: "Women of The Periodic Table",
    event: "National Science Day-2020",
    organization: "ICFAI University Tripura",
    type: "Special Talk",
    accent: "bg-amber-500",
  },
  {
    date: "October 23, 2019",
    topic: "A Brief History of The Development of Periodic Table",
    event: "Mole Day and International Year of Periodic Table Celebration",
    organization: "ICFAI University Tripura",
    type: "Special Talk",
    accent: "bg-amber-500",
  },
  {
    date: "April 12, 2019",
    topic: "Light-Emitting Supramolecular Metallogels: Modular Luminescence and Stimuli-Responsive Behaviour",
    event: "Invited Talk",
    organization: "CSIR-CSMCRI Bhavnagar",
    type: "Special Talk",
    accent: "bg-amber-500",
  },
];

export default function InvitedTalksPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafc] select-none overflow-x-hidden w-full">
      <Header />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/4_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/4_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-36 md:pb-32 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500 mb-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <MicrophoneStage size={16} weight="duotone" />
            Speaking Engagements
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight">
            Invited <span className="font-semibold text-slate-800">Talks</span> & <br className="hidden md:block"/> Seminars
          </h1>
          <div className="h-px w-24 bg-indigo-200 mt-8" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-[23px] sm:left-[27px] md:left-[35px] w-px bg-slate-200/80" />

          <div className="space-y-12 md:space-y-16">
            {talks.map((talk, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-16 md:pl-28 group">
                
                {/* Timeline Node */}
                <div className={`absolute left-[15px] sm:left-[19px] md:left-[27px] top-1.5 w-[17px] h-[17px] rounded-full border-4 border-[#fafafc] ${talk.accent} shadow-sm group-hover:scale-125 transition-transform duration-300 z-10`} />

                {/* Content Block */}
                <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
                  
                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md">
                      <CalendarBlank size={12} weight="bold" />
                      {talk.date}
                    </span>
                    <span className={`inline-flex font-mono text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md border ${
                      talk.type === 'Conference' ? 'text-indigo-600 bg-indigo-50 border-indigo-100' :
                      talk.type === 'National Seminar' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                      'text-amber-600 bg-amber-50 border-amber-100'
                    }`}>
                      {talk.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-slate-900 leading-snug mb-4 sm:mb-5 group-hover:text-slate-800 transition-colors">
                    {talk.topic}
                  </h3>

                  {/* Event & Location Info */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-5 border-t border-slate-100/80">
                    <div className="flex items-start gap-2 w-full md:max-w-[50%]">
                      <PresentationChart size={16} className="text-slate-400 mt-0.5 shrink-0" weight="duotone" />
                      <p className="font-sans text-[13px] md:text-sm text-slate-600 leading-relaxed">
                        {talk.event}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 w-full flex-1">
                      <Buildings size={16} className="text-slate-400 mt-0.5 shrink-0" weight="duotone" />
                      <p className="font-sans text-[13px] md:text-sm font-medium text-slate-700 leading-relaxed">
                        {talk.organization}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
