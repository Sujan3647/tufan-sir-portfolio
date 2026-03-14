"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { Certificate, RocketLaunch, CheckCircle, Clock } from "@phosphor-icons/react";

const patentsData = [
  {
    title: "Transparent and Flexible Poly(Methyl Methacrylate) Composite Films With UV-Shielding Performances and Process For Preparation Thereof",
    patentNo: "398431",
    inventors: "Tufan Singha Mahapatra, Sumit Kumar Pramanik and Amitava Das",
    image: "/patient/patient1.png",
    status: "Granted",
    date: "Patent Granted",
    theme: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50",
    textDark: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    title: "A novel terbium-based coordination polymer for the detection of FOX-7 and process for preparation thereof",
    patentNo: "404135",
    inventors: "Tufan Singha Mahapatra, Harwinder Singh, Ananta Dey, and Amitava Das",
    image: "/patient/patient2.png",
    status: "Granted",
    date: "Patent Granted",
    theme: "from-indigo-400 to-blue-500",
    bgLight: "bg-indigo-50",
    textDark: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
  {
    title: "A Portable Detection Kit for Detecting FOX-7 Explosive Utilizing a Europium(III) Complex-Doped Poly(Methyl Methacrylate) Composite Film",
    applicationNo: "202531050004",
    inventors: "Bilash Ch Roy, Tufan Singha Mahapatra, Somnath Bej, Saheli Roy, and Amitava Das",
    status: "Filed",
    date: "Filed (2025)",
    theme: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    textDark: "text-amber-700",
    borderColor: "border-amber-200",
  },
];

export default function PatentsPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafc] select-none overflow-x-hidden w-full">
      <Header />

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/5_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

      {/* Hero Section */}
      <div className="relative pt-28 pb-14 md:pt-36 md:pb-18 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] uppercase text-indigo-500 mb-5 border border-indigo-100 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
            <Certificate size={16} weight="fill" />
            Intellectual Property
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-5">
            Patents & <span className="font-medium">Innovations</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-xl">
            Translating fundamental scientific research into high-impact, patented technological solutions for advanced materials and safety applications.
          </p>
        </div>
      </div>

      {/* Patents List */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 relative z-10 space-y-10 lg:space-y-14">
        {patentsData.map((patent, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white/60 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-700 ring-1 ring-slate-900/5 hover:ring-slate-900/10"
          >
            {/* Ambient background glow */}
            <div className={`absolute -right-40 -top-40 w-96 h-96 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out z-0 pointer-events-none bg-linear-to-br ${patent.theme} mix-blend-multiply blur-[80px]`} />

            <div className="flex flex-col lg:flex-row h-full relative z-10">
              
              {/* Left Content (Data) */}
              <div className="flex-[1.2] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                  <span className={`inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full ${patent.bgLight} ${patent.textDark} border ${patent.borderColor} shadow-xs`}>
                    {patent.status === "Granted" ? <CheckCircle size={15} weight="fill" /> : <Clock size={15} weight="fill" />}
                    {patent.date}
                  </span>
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {patent.patentNo ? `No: ${patent.patentNo}` : `App: ${patent.applicationNo}`}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.5rem] md:text-[2.2rem] font-medium text-slate-900 leading-tight mb-8 group-hover:text-slate-800 transition-colors">
                  {patent.title}
                </h3>

                {/* Inventors Box */}
                <div className="bg-white/80 rounded-2xl p-6 border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-500 ring-1 ring-slate-900/5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors" />
                    Inventors
                  </p>
                  <p className="font-sans text-[15px] md:text-base font-medium text-slate-700 leading-relaxed border-l-[3px] border-slate-200 pl-4 group-hover:border-slate-400 transition-colors duration-300">
                    {patent.inventors}
                  </p>
                </div>
              </div>

              {/* Right Content (Visual) */}
              {patent.image ? (
                <div className="flex-1 p-6 md:p-8 flex items-center justify-center bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden group/img min-h-[300px]">
                  <div className={`absolute inset-0 opacity-0 group-hover/img:opacity-5 transition-opacity duration-700 bg-linear-to-br ${patent.theme}`} />
                  <div className="relative w-full h-full min-h-[250px] lg:min-h-[100%] rounded-[1.5rem] overflow-hidden shadow-sm ring-1 ring-slate-200 bg-white group-hover/img:scale-[1.03] group-hover/img:shadow-xl transition-all duration-700">
                    <Image
                      src={patent.image}
                      alt={`Patent schematic for ${patent.patentNo}`}
                      fill
                      className="object-contain p-4 md:p-6"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex-1 p-10 flex flex-col items-center justify-center bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-100 relative group/img overflow-hidden min-h-[300px]">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-linear-to-br ${patent.theme}`} />
                  <div className="h-28 w-28 rounded-full bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-700">
                    <RocketLaunch size={48} weight="duotone" className="text-amber-500 opacity-80" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-slate-800 text-center">Research in Progress</h4>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-3">Active Filing Status</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
