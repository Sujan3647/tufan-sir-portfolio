"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

const publications = [
  {
    title: "UV-Shielding Efficiency of Polymer/ZnO Nanocomposites: Recent Developments and Prospects",
    authors: "Saheli Roy,* Parmita Majumder, Tufan Singha Mahapatra",
    journal: "Journal of Vinyl and Additive Technology",
    year: "2025",
    doi: "https://doi.org/10.1002/vnl.70050",
    impactFactor: "3.6",
    image: "/research/research 1.png",
  },
  {
    title: "An octahedral Ni(III)-thiosemicarbazone complex with cytotoxic potential",
    authors: "S. Nath, S. Roy, S. Ghanta, S. Bej, B. C. Roy, K. Saha, R. J. Butcher, A. K. Verma*, T. Singha Mahapatra,* S. Adhikari*",
    journal: "Inorganic Chemistry Communications",
    year: "2025",
    doi: "https://doi.org/10.1016/j.inoche.2025.115827",
    impactFactor: "5.4",
    image: "/research/reasech2.png",
  },
  {
    title: "Mononuclear Co(III) complex: Synthesis, characterization and molecular docking with multiple protein targets, and EGFR inhibition",
    authors: "T. Singha Mahapatra,* B. C. Roy, S. Bej, B. Dey, A. Paul, A. Choudhury, E. Debbarma, S. Ghanta*",
    journal: "Polyhedron",
    year: "2025",
    volume: "282, 117804",
    doi: "https://doi.org/10.1016/j.poly.2025.117804",
    impactFactor: "2.6",
    image: "/research/research3.png",
  },
  {
    title: "Isostructural square planar mononuclear copper(II) and nickel(II) complexes: catecholase and phenoxazinone synthase activity, protein and DNA-binding insights, and molecular docking",
    authors: "B. C. Roy, E. Debbarma, D. Chakraborty, B. Dey, D. Basak, S. Ghanta,* T. Singha Mahapatra*",
    journal: "Polyhedron",
    year: "2025",
    volume: "273, 117492",
    doi: "https://doi.org/10.1016/j.poly.2025.117492",
    impactFactor: "2.6",
    image: "/research/research4.png",
  },
  {
    title: "Light-Emitting Coordination Polymers: Stimuli-Responsive Gels, PMMA-Based Composite Films and UV-Shielding",
    authors: "B. C. Roy, V. R. Ramlal, D. Basak, S. Basak, S. Roy, S. Ghosh, and T. Singha Mahapatra*",
    journal: "Inorganic Chemistry",
    year: "2024",
    volume: "63, 48, 23044–23056",
    doi: "https://doi.org/10.1021/acs.inorgchem.4c04333",
    impactFactor: "4.7",
    image: "/research/research5.png",
  },
  {
    title: "Ultrathin lanthanide-based 2D-coordination nanosheets: a versatile class of 2D materials",
    authors: "B. C. Roy, S. Ghosh, T. Singha Mahapatra,* A. Das*",
    journal: "Coordination Chemistry Reviews",
    year: "2024",
    volume: "518, 216058",
    doi: "https://doi.org/10.1016/j.ccr.2024.216058",
    impactFactor: "23.5",
    image: "/research/research6.png",
  },
  {
    title: "Recent Advances in Stimuli-Responsive Luminescent Supramolecular Lanthanide-Based Metallogels",
    authors: "B. C. Roy, A. Kundu, P. Biswas, S. Roy,* and T. Singha Mahapatra*",
    journal: "ChemistrySelect",
    year: "2024",
    volume: "9, e202304755",
    doi: "https://doi.org/10.1002/slct.202304755",
    impactFactor: "2",
    image: "/research/research7.png",
  },
  {
    title: "Structures and magnetic properties of a trinuclear angular [Ni3] and a heptanuclear wheel-like [Ni7] complexes with a Schiff base ligand",
    authors: "B. C. Roy, B. Dutta, J. Lengyel, M. Shatruk, and D. Ray*",
    journal: "Polyhedron",
    year: "2024",
    volume: "249, 116782–116791",
    doi: "https://doi.org/10.1016/j.poly.2023.116782",
    impactFactor: "2.6",
    image: "/research/research8.png",
  },
  {
    title: "Investigations on a mononuclear Cu(II) Schiff base complex: Theoretical calculations, catechol oxidase activity, and protein binding interaction analysis",
    authors: "B. C. Roy, B. Dutta, D. Basak, S. Debnath, D. Ray*, and T. Singha Mahapatra*",
    journal: "New Journal of Chemistry",
    year: "2023",
    volume: "47, 11928–11944",
    doi: "https://doi.org/10.1039/D3NJ01515G",
    impactFactor: "2.7",
    image: "/research/research9.png",
  },
  {
    title: "Crystalline Free-Standing Two-Dimensional Zwitterionic Organic Nanosheets for Efficient Conduction of Lithium Ions",
    authors: "A. Dey, V. R. Ramlal, S. S. Sankar, T. Singha Mahapatra, E. Suresh, S. Kundu, A. K. Mandal and A. Das",
    journal: "ACS Applied Materials & Interfaces",
    year: "2020",
    volume: "12, 58122-58131",
    doi: "https://doi.org/10.1021/acsami.0c17683",
    impactFactor: "8.5",
    image: "/research/research10.png",
  },
  {
    title: "Recent Advances in the Development of Europium (III) and Terbium (III)-based Luminescent Supramolecular Metallogel",
    authors: "B. C. Roy and T. Singha Mahapatra*",
    journal: "Soft Matter",
    year: "2023",
    volume: "19, 1854–1872",
    doi: "https://doi.org/10.1039/D2SM00999D",
    impactFactor: "2.9",
    image: "/research/research11.png",
  },
];

function getIFColor(ifVal: string): string {
  const n = parseFloat(ifVal);
  if (n >= 10) return "text-emerald-600 bg-emerald-50 border-emerald-200";
  if (n >= 4) return "text-blue-600 bg-blue-50 border-blue-200";
  if (n >= 2) return "text-amber-600 bg-amber-50 border-amber-200";
  return "text-slate-500 bg-slate-50 border-slate-200";
}

export default function IndependentResearchPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafc]">
      <Header />

      {/* Background texture */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20 pointer-events-none z-0" />

      {/* Hero */}
      <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-slate-300" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
              Independent Research
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-5">
            Research <span className="font-semibold">Publications</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-xl">
            Peer-reviewed contributions in coordination chemistry, luminescent materials, 2D nanosheets, and polymer composites.
          </p>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        <div className="space-y-0">
          {publications.map((pub, idx) => (
            <article
              key={idx}
              className="group relative border-t border-slate-200/80 first:border-t-0"
            >
              <div className={`flex flex-col ${pub.image ? 'lg:flex-row' : ''} gap-0`}>

                {/* Image Column */}
                {pub.image && (
                  <div className="lg:w-[280px] shrink-0 p-5 lg:py-8 lg:pr-0 lg:pl-0">
                    <div className="relative w-full aspect-[4/3] lg:aspect-[3/2.5] rounded-xl overflow-hidden bg-white ring-1 ring-slate-200/60 shadow-sm group-hover:shadow-md group-hover:ring-slate-300/60 transition-all duration-500">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </div>
                )}

                {/* Text Column */}
                <div className="flex-1 py-6 lg:py-8 px-5 lg:px-8 flex flex-col justify-center">

                  {/* Journal + Year + IF row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {pub.journal && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {pub.journal}
                      </span>
                    )}
                    {pub.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {pub.year}
                        </span>
                      </>
                    )}
                    {pub.impactFactor && (
                      <span className={`ml-auto font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${getIFColor(pub.impactFactor)}`}>
                        IF {pub.impactFactor}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg md:text-xl font-medium text-slate-900 leading-snug mb-3 group-hover:text-slate-700 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  {pub.authors && (
                    <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-3">
                      {pub.authors}
                    </p>
                  )}

                  {/* Volume + DOI */}
                  <div className="flex flex-wrap items-center gap-3">
                    {pub.volume && (
                      <span className="font-mono text-[11px] text-slate-400">
                        {pub.volume}
                      </span>
                    )}
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-semibold text-indigo-500 hover:text-indigo-700 transition-colors underline underline-offset-2 decoration-indigo-200 hover:decoration-indigo-400"
                      >
                        DOI ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
