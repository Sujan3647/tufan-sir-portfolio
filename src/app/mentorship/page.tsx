"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { GraduationCap, Users, UserList, Medal, Certificate, Path, BookOpen, Clock } from "@phosphor-icons/react";

const phdStudents = [
  {
    name: "Dr. Bilash Chandra Roy",
    status: "Awarded",
    theme: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50/50",
    textLight: "text-emerald-700",
    borderColor: "border-emerald-200",
    thesis: "Transition Metal Complexes and Luminescent Lanthanide Supramolecular Polymers for Catalysis, Biophysical Studies, and Sensing",
    date: "PhD Degree Awarded on 04-07-2025",
    image: "/student-mentorship/st1.png",
  },
  {
    name: "Mr. Sourav Ghosh",
    status: "Ongoing",
    theme: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50/50",
    textLight: "text-blue-700",
    borderColor: "border-blue-200",
    image: "/student-mentorship/st2.png",
  },
  {
    name: "Mr. Biswajit Dey",
    status: "Ongoing",
    theme: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50/50",
    textLight: "text-blue-700",
    borderColor: "border-blue-200",
    image: "/student-mentorship/st3.png",
  },
];

const mastersStudents = [
  {
    no: "1",
    names: "Sourav Shil Sarma (18IUT0090001) & Sreeparna Bhattacharjee (18IUT0090012)",
    thesis: "Synthesis and studies on the coordination chemistry of self-assembled coordination compounds of nickel (II) and copper (II) ions",
    year: "2020",
  },
  {
    no: "2",
    names: "Bilash Chandra Roy (18IUT0090009) & Amalesh Roy (18IUT0090007)",
    thesis: "Synthesis and studies of self-assembled multinuclear coordination compounds of iron (III) and cobalt (II) ions",
    year: "2020",
  },
  {
    no: "3",
    names: "Sanuki De (19IUT0090010), Sagarika Paul (19IUT0090021) & Banasree Bhattacharya (19IUT0090029)",
    thesis: "Design, Synthesis and Studies of 3d-4f Heterometallic Clusters Using Compartmental Ligand Approach",
    year: "2021",
  },
  {
    no: "4",
    names: "Ashirbad Majumder (20IUT0090019), Sourav Ghosh (20IUT0090056) & Pranjit Biswas (20IUT0090066)",
    thesis: "Fabrication of Light-emitting Supramolecular Lanthanide Based Metallogels with Modular Luminescence Properties",
    year: "2022",
  },
  {
    no: "5",
    names: "Poulami Deb (20IUT0090010), Kajal Majumder (20IUT0090017) & Moushumi Nath (20IUT0090053)",
    thesis: "Construction of Lanthanide-Directed Luminescent Coordination Polymers with Interesting Optical Properties",
    year: "2022",
  },
  {
    no: "6",
    names: "Manisha Paul (21IUT0090015), Subrajit Baidya (21IUT0090016), Subrata Nath (21IUT0090026), Susmita Sen (21IUT0090055), Tanujit Das (21IUT0090056), Hrituparna Banik (21IUT0090037)",
    thesis: "Fabrication of lanthanide (Ln)-based luminescent supramolecular architectures using terpyridine as a sensitizer",
    year: "2023",
  },
  {
    no: "7",
    names: "Dipanwita Chakraborty (22IUT0090003), Biswajit Dey (22IUT0090018) & Kanika Rudra Paul (22IUT0090019)",
    thesis: "Synthesis, structure and catalytic activity of mononuclear Ni(II) and Cu(II) Schiff base complexes",
    year: "2024",
  },
  {
    no: "8",
    names: "Akhangsha Paul (23IUT0090019) & Abhishek Choudhury (23IUT0090003)",
    thesis: "Synthesis and Structural Characterization of a Mononuclear Co(III) Complex with Insights into Protein and DNA Binding",
    year: "2025",
  },
];

export default function MentorshipPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafc] select-none overflow-x-hidden w-full">
      <Header />

      {/* Decorative Background UI */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-[800px] z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-blue-100/40 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-emerald-100/40 to-transparent blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/4_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/4_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center p-[1px] rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 mb-8 overflow-hidden shadow-sm">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-700 bg-white/90 backdrop-blur-xl px-6 py-2 rounded-full h-full w-full">
              <Users size={16} weight="duotone" className="text-indigo-500" />
              Student Mentorship
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
            Guiding the Next <br className="hidden md:block" />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">Generation of Scientists</span>
          </h1>
          
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-16">
            Committed to fostering independent thought, rigorous analytics, and innovative problem-solving in doctoral candidates and master&apos;s students within advanced chemical research.
          </p>

          {/* Stats Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Stat 1 */}
            <div className="group relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 flex items-center justify-start gap-5 overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500 -z-10 translate-x-1/2 -translate-y-1/2" />
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100/50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                 <GraduationCap size={28} weight="duotone" />
               </div>
               <div className="text-left">
                 <p className="font-mono text-[10px] font-bold tracking-widest text-slate-400 mb-1 uppercase">Doctoral Scholars</p>
                 <div className="flex items-baseline gap-2">
                    <p className="font-serif text-3xl font-medium text-slate-900">3</p>
                    <p className="font-sans text-[13px] text-slate-500 font-medium">Supervised</p>
                 </div>
               </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 flex items-center justify-start gap-5 overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors duration-500 -z-10 translate-x-1/2 -translate-y-1/2" />
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                 <UserList size={28} weight="duotone" />
               </div>
               <div className="text-left">
                 <p className="font-mono text-[10px] font-bold tracking-widest text-slate-400 mb-1 uppercase">M.Sc Dissertations</p>
                 <div className="flex items-baseline gap-2">
                    <p className="font-serif text-3xl font-medium text-slate-900">24</p>
                    <p className="font-sans text-[13px] text-slate-500 font-medium">Students</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* PhD Scholars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-32 relative z-10">
        <div className="mb-14 flex items-center gap-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-medium text-slate-900 flex items-center gap-3">
            PhD Scholars
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phdStudents.map((student, idx) => (
            <div 
              key={idx}
              className={`group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 ${student.status === "Awarded" ? "md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row" : "flex flex-col"}`}
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Image Container */}
              <div className={`relative ${student.status === "Awarded" ? "w-full lg:w-[45%] lg:min-h-[420px]" : "w-full aspect-square"} bg-slate-100/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200/60 p-4 sm:p-8`}>
                <div className="relative w-full h-full max-w-[320px] max-h-[320px] mx-auto rounded-[2rem] overflow-hidden shadow-sm bg-white ring-1 ring-slate-200/60 group-hover:shadow-lg transition-all duration-700">
                  {student.image && (
                    <Image 
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out bg-white"
                      unoptimized 
                    />
                  )}
                </div>
                
                {/* Status Badge Over Image */}
                {student.status === "Awarded" && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-amber-200/60 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2.5 z-10 ring-1 ring-black/5">
                    <div className="p-1 bg-amber-100 rounded-full">
                      <Medal size={16} weight="fill" className="text-amber-500" />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-amber-700 uppercase">Awarded</span>
                  </div>
                )}
                {student.status === "Ongoing" && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-blue-200/60 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2.5 z-10 ring-1 ring-black/5">
                    <div className="p-1 bg-blue-100 rounded-full">
                      <Clock size={16} weight="fill" className="text-blue-500" />
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-blue-700 uppercase">Ongoing</span>
                  </div>
                )}
              </div>

              {/* Info Container */}
              <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-bold w-fit uppercase tracking-widest px-3 py-1.5 rounded-lg border ${student.bgLight} ${student.textLight} ${student.borderColor}`}>
                    <Path size={14} weight="duotone" />
                    PhD Scholar
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-4 sm:mb-6 group-hover:text-slate-800 transition-colors">{student.name}</h3>
                
                {student.thesis && (
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/60 shadow-sm mb-6 relative overflow-hidden group-hover:shadow-md transition-shadow duration-500">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-300 to-indigo-500" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 flex items-center gap-2">
                      <Certificate size={16} className="text-indigo-400" /> Thesis Title
                    </p>
                    <p className="font-sans text-[15px] lg:text-[17px] text-slate-700 leading-relaxed font-medium italic">
                      &quot;{student.thesis}&quot;
                    </p>
                  </div>
                )}

                {student.date && (
                  <p className="font-mono text-[12px] text-slate-500 font-semibold tracking-wide flex items-center gap-2 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {student.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Masters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-32 relative z-10">
        <div className="mb-14 flex items-center gap-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-medium text-slate-900 flex items-center gap-3">
            Master&apos;s Dissertations
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <div className="bg-white/80 backdrop-blur-2xl border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-sm">
          {/* Desktop Table (Hidden on Mobile) */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200/80">
                  <th className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 p-6 pl-8 w-[120px]">Year</th>
                  <th className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 p-6 w-[35%]">Candidates</th>
                  <th className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 p-6 pr-8">Thesis Title</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {mastersStudents.map((student, idx) => (
                  <tr key={idx} className="group hover:bg-white transition-colors">
                    <td className="p-6 pl-8 align-top">
                      <span className="inline-flex font-mono text-[13px] font-bold text-indigo-700 bg-indigo-50/50 px-4 py-1.5 rounded-lg border border-indigo-100/50 group-hover:bg-indigo-50 group-hover:border-indigo-200/50 transition-colors">
                        {student.year}
                      </span>
                    </td>
                    <td className="p-6 align-top">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 text-slate-300 group-hover:text-indigo-300 transition-colors">
                          <UserList size={18} weight="fill" />
                        </div>
                        <div className="font-sans text-[15px] font-medium text-slate-700 leading-relaxed">
                          {student.names}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 pr-8 align-top">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 text-slate-300 group-hover:text-emerald-300 transition-colors">
                          <BookOpen size={18} weight="fill" />
                        </div>
                        <div className="font-sans text-[14px] text-slate-600 leading-relaxed font-light">
                          {student.thesis}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards (Hidden on Desktop) */}
          <div className="lg:hidden flex flex-col divide-y divide-slate-100/80">
            {mastersStudents.map((student, idx) => (
              <div key={idx} className="p-6 bg-white hover:bg-slate-50/50 transition-colors flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex font-mono text-[11px] font-bold uppercase text-indigo-700 bg-indigo-50/50 px-3 py-1 rounded-lg border border-indigo-100/50">
                    Year: {student.year}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-indigo-300">
                    <UserList size={18} weight="fill" />
                  </div>
                  <div className="font-sans text-[14px] font-medium text-slate-700 leading-relaxed">
                    {student.names}
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <div className="mt-1 flex-shrink-0 text-emerald-400">
                    <BookOpen size={18} weight="fill" />
                  </div>
                  <div className="font-sans text-[13px] text-slate-600 leading-relaxed font-light italic">
                    {student.thesis}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
