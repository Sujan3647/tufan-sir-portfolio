"use client";

import React from "react";

const interests = [
  {
    id: "01",
    area: "Synthetic Chemistry",
    title: "Coordination Polymer Design",
    description: "Strategic synthesis of transition (3d/4d) and lanthanide (4f) metal-containing complexes using meticulously prepared ligands to build novel coordination architectures."
  },
  {
    id: "02",
    area: "Luminescent Materials",
    title: "Supramolecular Metallogels",
    description: "Development of functional luminescent metallogels utilizing substituted terpyridine moieties and lanthanide ions for advanced optical applications."
  },
  {
    id: "03",
    area: "Nanotechnology",
    title: "2D Coordination Nanosheets",
    description: "Engineering of luminescent Two-Dimensional lanthanide Coordination Nanosheets, focusing on structural integrity and photonic properties."
  },
  {
    id: "04",
    area: "Material Science",
    title: "Multifunctional Analysis",
    description: "Comprehensive investigation of optical, sensing, magnetic, and catalytic properties inherent in the synthesized coordination polymers and complexes."
  }
];

export default function NewsBanner() {
  return (
    <section className="bg-slate-50/80 backdrop-blur-sm pb-24 pt-12 sm:pb-32 sm:pt-16" id="research-interests">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-left mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Research Interests
          </h2>
          <p className="font-body text-lg text-slate-600 leading-relaxed max-w-xl">
             Our laboratory focuses on the intersection of coordination chemistry and materials science, exploring how molecular design governs macroscopic properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 border-t border-slate-200 pt-16">
          {interests.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-4 mb-2">
                <span className="font-mono text-sm text-slate-400 tracking-widest">
                  {item.id} — {item.area.toUpperCase()}
                </span>
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-slate-900 leading-tight">
                {item.title}
              </h3>
              
              <p className="font-body text-base text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
