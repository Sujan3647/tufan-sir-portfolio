"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

const independentPublications = [
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

const phdPublications = [
  {
    title: "Tuneable Hierarchical Self-Assembly of C3-Symmetric Triaminoguanidium-derivative into Rhombic Dodecahedral Morphology",
    authors: "A. Dey, A. Maity, T. Singha Mahapatra, E. Suresh, A. K. Mandal, and A. Das.",
    journal: "CrystEngComm",
    year: "2020",
    volume: "22, 5117-5121",
    doi: "https://doi.org/10.1039/D0CE00909A",
    impactFactor: "2.6",
    image: "/Publications from PhD and Post-doc/re1.png",
  },
  {
    title: "Two-dimensional lanthanide coordination polymer nanosheets for detection of FOX-7",
    authors: "T. Singha Mahapatra,* A. Dey, H. Singh, S. S. Hossain, A. K. Mandal* and A. Das*",
    journal: "Chemical Science",
    year: "2020",
    volume: "11, 1032-1042",
    doi: "https://doi.org/10.1039/C9SC05403K",
    impactFactor: "7.6",
    image: "/Publications from PhD and Post-doc/re2.png",
  },
  {
    title: "Mitochondriotropic Lanthanide Nanorods: Implications for Multimodal Imaging",
    authors: "H. Singh, S. Sreedharan, E. Oyarzabal, T. Singha Mahapatra, N. Green, S. Yen-Yu Ian, M. Das, J. A. Thomas, S. K. Pramanik and A. Das",
    journal: "Chem. Commun.",
    year: "2020",
    volume: "56, 7945",
    doi: "https://doi.org/10.1039/D0CC02698K",
    impactFactor: "4.3",
    image: "/Publications from PhD and Post-doc/re3.png",
  },
  {
    title: "White-Light-Emitting Lanthanide and Lanthanide-Iridium Doped Supramolecular Gels: Modular Luminescence and Stimuli-Responsive Behaviour",
    authors: "T. Singha Mahapatra,* H. Singh, A. Maity, A. Dey, S. K. Pramanik, E. Suresh and A. Das*",
    journal: "Journal of Materials Chemistry C",
    year: "2018",
    volume: "6, 9756-9766",
    doi: "https://doi.org/10.1039/C8TC03487G",
    impactFactor: "5.7",
    image: "/Publications from PhD and Post-doc/re4.png",
  },
  {
    title: "Trapping of Methanoato Bridge in μ-1,1,3,3 Mode for [Cu4] Aggregate Formation: Synthesis, Steric Control on Nuclearity, Antimicrobial Activity, and DNA-Interaction Properties",
    authors: "T. Singha Mahapatra, A. Roy, S. Chaudhury, S. Dasgupta, S. L. Shrivastava, V. Bertolasi, and D. Ray",
    journal: "European Journal of Inorganic Chemistry",
    year: "2017",
    volume: "769–779",
    doi: "https://doi.org/10.1002/ejic.201601092",
    impactFactor: "2.2",
    image: "/Publications from PhD and Post-doc/re5.png",
  },
  {
    title: "A square pyramidal copper(II) complex of a Schiff base ligand: synthesis, crystal structure, antibacterial and DNA interaction studies",
    authors: "K. Jana, T. Maity, T. Singha Mahapatra, P. K. Das Mohapatra, S. C. Debnath, S. Das, M. Hossain and B. C. Samanta",
    journal: "Transition Metal Chemistry",
    year: "2017",
    volume: "42, 69–78",
    doi: "https://doi.org/10.1007/s11243-016-0108-6",
    impactFactor: "1.6",
    image: "/Publications from PhD and Post-doc/re6.png",
  },
  {
    title: "Competitive coordination aggregation for V-shaped [Co3] and disc-like [Co7] complexes: synthesis, magnetic properties and catechol oxidase activity",
    authors: "T. Singha Mahapatra, D. Basak, S. Chand, J. Lengyel, M. Shatruk, V. Bertolasi and D. Ray.",
    journal: "Dalton Transactions",
    year: "2016",
    volume: "45, 13576-13589",
    doi: "https://doi.org/10.1039/C6DT02494G",
    impactFactor: "3.5",
    image: "/Publications from PhD and Post-doc/re7.png",
  },
  {
    title: "Carboxylate Coordination Assisted Aggregation for Quasi-Tetrahedral and Partial-Dicubane [Cu4] Coordination Clusters",
    authors: "T. Singha Mahapatra, A. Bauzá, D. Dutta, S. Mishra, A. Frontera and D. Ray",
    journal: "ChemistrySelect",
    year: "2016",
    volume: "1, 64–74",
    doi: "https://doi.org/10.1002/slct.201600006",
    impactFactor: "2",
    image: "/Publications from PhD and Post-doc/re8.png",
  },
  {
    title: "Dinuclear nickel complexes of divergent Ni∙∙∙Ni separation showing ancillary ligand addition and bio-macromolecular interaction",
    authors: "T. Singha Mahapatra, S. Chaudhury, S. Dasgupta, V. Bertolasi and D. Ray",
    journal: "New Journal of Chemistry",
    year: "2016",
    volume: "40, 2268–2279",
    doi: "https://doi.org/10.1039/C5NJ02410B",
    impactFactor: "2.7",
    image: "/Publications from PhD and Post-doc/re9.png",
  },
  {
    title: "Direct C−N coupling in an in situ ligand transformation and the self-assembly of a tetrametallic [NiII4] staircase",
    authors: "A. K. Ghosh, T. Singha Mahapatra, R. Clérac, C. Mathonière, V. Bertolasi and D. Ray",
    journal: "Inorganic Chemistry",
    year: "2015",
    volume: "54, 11, 5136–5138",
    doi: "https://doi.org/10.1021/acs.inorgchem.5b00411",
    impactFactor: "4.3",
    image: "/Publications from PhD and Post-doc/re10.png",
  },
  {
    title: "Forced ether oxygen coordination from reduced Schiff base ligand in [Cu2] complexes: Synthetic preference, trapping of carboxylates and catechol oxidation",
    authors: "T. Singha Mahapatra, K. Chattopadhyay, D. Basak, M. Das, A. Bhanja, M. Biswas and D. Ray",
    journal: "Journal of the Indian Chemical Society",
    year: "2015",
    volume: "92, 1939–1947",
    doi: "",
    impactFactor: "",
    image: "/Publications from PhD and Post-doc/re11.png",
  },
];

function getIFColor(ifVal: string): string {
  if (!ifVal) return "text-slate-500 bg-slate-50 border-slate-200";
  const n = parseFloat(ifVal);
  if (isNaN(n)) return "text-slate-500 bg-slate-50 border-slate-200";
  if (n >= 10) return "text-emerald-600 bg-emerald-50 border-emerald-200";
  if (n >= 4) return "text-blue-600 bg-blue-50 border-blue-200";
  if (n >= 2) return "text-amber-600 bg-amber-50 border-amber-200";
  return "text-slate-500 bg-slate-50 border-slate-200";
}

type PublicationType = {
  title: string;
  authors?: string;
  journal?: string;
  year?: string;
  volume?: string;
  doi?: string;
  impactFactor?: string;
  image?: string;
};

function PublicationItem({ pub }: { pub: PublicationType }) {
  return (
    <article
      className="group relative border-t border-slate-200/80 first:border-t-0"
    >
      <div className={`flex flex-col ${pub.image ? 'lg:flex-row' : ''} gap-0`}>

        {/* Image Column */}
        {pub.image && (
          <div className="w-full lg:w-[280px] shrink-0 p-5 lg:py-8 lg:pr-0 lg:pl-0">
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
  );
}

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafc] overflow-x-hidden w-full select-none">
      <Header />

      {/* Background texture */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20 pointer-events-none z-0" />

      {/* Hero */}
      <div className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 max-w-6xl mx-auto z-10">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="flex flex-col items-start max-w-3xl relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-slate-300" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
              Research
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-5">
            Research <span className="font-semibold">Publications</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-xl">
            Peer-reviewed contributions in coordination chemistry, luminescent materials, 2D nanosheets, and polymer composites, encompassing independent, doctoral, and post-doctoral research.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative z-10">
        
        {/* Independent Research Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl text-slate-800">Independent Research</h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="space-y-0">
            {independentPublications.map((pub, idx) => (
              <PublicationItem key={idx} pub={pub} />
            ))}
          </div>
        </section>

        {/* PhD and Post-doc Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl text-slate-800">Doctoral & Post-Doctoral</h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="space-y-0">
            {phdPublications.map((pub, idx) => (
              <PublicationItem key={idx} pub={pub} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
