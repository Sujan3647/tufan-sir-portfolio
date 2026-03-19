"use client";

import React from "react";
import Image from "next/image";
import { UsersThree } from "@phosphor-icons/react";

export default function TeamSection() {
  return (
    <section id="team" className="relative bg-slate-50 py-24 md:py-32 overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16 md:mb-24 text-center">
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-indigo-600"></span>
            Meet the Team
            <span className="h-px w-8 bg-indigo-600"></span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-light text-slate-900 tracking-tight leading-[1.1] max-w-2xl mx-auto">
            Our exceptional <span className="font-medium text-slate-800">research group</span>
          </h2>
          <p className="font-sans text-lg text-slate-500 font-light leading-relaxed mt-6 max-w-2xl mx-auto">
            Driven by curiosity and a commitment to advancing the frontiers of chemical science, our team brings together diverse minds and talents to solve complex problems in Coordination and Materials Chemistry.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-200/50">
          <div className="relative w-full group overflow-hidden bg-slate-100">
            <Image
              src="/teamphoto/teamphoto.jpeg"
              alt="Research Team"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              quality={95}
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          <div className="p-8 md:p-10 flex items-center justify-between bg-white">
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-2 font-medium">Research Group Gathering</h3>
              <p className="text-slate-500 font-light text-base md:text-lg">Collaborating to unravel the complexities of Supramolecular Chemistry</p>
            </div>
            <div className="hidden sm:flex w-16 h-16 rounded-full bg-slate-50 border border-slate-100 items-center justify-center text-indigo-600 shadow-sm">
              <UsersThree size={32} weight="duotone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
