"use client";

import React from "react";
import PubScienceAnimation from "./about/PubScienceAnimation";

const publicationStats = [
  {
    title: "Total Publications",
    value: "32",
    textGradient: "bg-linear-to-br from-indigo-500 to-blue-600",
    hoverBg: "hover:bg-indigo-50/50",
    accentLine: "bg-indigo-500",
  },
  {
    title: "SCI Research Articles",
    value: "23",
    textGradient: "bg-linear-to-br from-emerald-500 to-teal-600",
    hoverBg: "hover:bg-emerald-50/50",
    accentLine: "bg-emerald-500",
  },
  {
    title: "Patents",
    value: "03",
    subtext: "2 Granted, 1 Filed",
    textGradient: "bg-linear-to-br from-amber-500 to-orange-500",
    hoverBg: "hover:bg-amber-50/50",
    accentLine: "bg-amber-500",
  },
  {
    title: "Book Chapters",
    value: "04",
    textGradient: "bg-linear-to-br from-purple-500 to-fuchsia-600",
    hoverBg: "hover:bg-purple-50/50",
    accentLine: "bg-purple-500",
  },
  {
    title: "Edited Books",
    value: "02",
    textGradient: "bg-linear-to-br from-rose-500 to-red-600",
    hoverBg: "hover:bg-rose-50/50",
    accentLine: "bg-rose-500",
  },
];

export default function PublicationsSection() {
  return (
    <section className="relative overflow-hidden bg-white/80 backdrop-blur-sm py-16 sm:py-24 md:py-32 border-t border-slate-100" id="publications">
      {/* Animated General Science Background */}
      <PubScienceAnimation />

      {/* Subtle architectural background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-[-1]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-slate-300"></span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                Research Output
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-tight font-light text-slate-900 tracking-tight">
              Academic <span className="font-medium">Publications & Patents</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right pb-2">
            <p className="font-sans text-sm text-slate-500 font-light leading-relaxed max-w-xs ml-auto">
              A comprehensive distillation of scholarly contributions, highlighting high-impact research articles and intellectual property.
            </p>
          </div>
        </div>

        {/* Minimalist Editorial Stats Grid */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-xs rounded-2xl overflow-hidden relative">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100/80">
            {publicationStats.map((stat, idx) => (
              <div
                key={idx}
                className={`group relative p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-transparent ${stat.hoverBg} transition-colors duration-500 overflow-hidden`}
              >
                {/* Number */}
                <div className="mb-6 sm:mb-12 transition-transform duration-700 ease-out group-hover:-translate-y-1 relative z-10">
                  <h4 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter bg-clip-text text-transparent ${stat.textGradient} opacity-90 drop-shadow-sm`}>
                    {stat.value}
                  </h4>
                </div>

                {/* Title and metadata */}
                <div className="relative z-10">
                  <h3 className="font-serif text-lg font-medium text-slate-800 leading-snug">
                    {stat.title}
                  </h3>
                  {stat.subtext ? (
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${stat.accentLine} opacity-60`} />
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-semibold group-hover:text-slate-700 transition-colors">
                        {stat.subtext}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center gap-2 opacity-0">
                      <span className="w-1 h-1 bg-transparent rounded-full" />
                      <p className="font-mono text-[10px] uppercase tracking-widest text-transparent h-4">
                        -
                      </p>
                    </div>
                  )}
                </div>

                {/* Vibrant top border accent on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 ${stat.accentLine} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-80`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
