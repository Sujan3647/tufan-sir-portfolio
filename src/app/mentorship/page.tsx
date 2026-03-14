"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { GraduationCap, Users, UserList, Medal, Certificate } from "@phosphor-icons/react";

const phdStudents = [
  {
    name: "Dr. Bilash Chandra Roy",
    status: "Awarded",
    theme: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textLight: "text-emerald-600",
    borderColor: "border-emerald-200",
    thesis: "Transition Metal Complexes and Luminescent Lanthanide Supramolecular Polymers for Catalysis, Biophysical Studies, and Sensing",
    date: "PhD Degree Awarded on 04-07-2025",
    image: "/student-mentorship/st1.png",
  },
  {
    name: "Mr. Sourav Ghosh",
    status: "Ongoing",
    theme: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textLight: "text-blue-600",
    borderColor: "border-blue-200",
    image: "/student-mentorship/st2.png",
  },
  {
    name: "Mr. Biswajit Dey",
    status: "Ongoing",
    theme: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textLight: "text-blue-600",
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

      {/* Ambient background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-800/4_1px,transparent_1px),linear-gradient(to_bottom,#slate-800/4_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-36 md:pb-24 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500 mb-6 border border-indigo-100 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
            <Users size={16} weight="duotone" />
            Student Mentorship
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-slate-900 tracking-tight leading-tight mb-6">
            Guiding the Next <span className="font-medium text-slate-800">Generation</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Supervising and mentoring doctoral candidates and master&apos;s students in advanced chemical research and materials science.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-12 w-full max-w-2xl">
            <div className="w-full md:w-auto bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 flex-1 shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
               <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                 <GraduationCap size={24} weight="duotone" />
               </div>
               <div className="text-left">
                 <p className="font-mono text-[10px] font-bold tracking-widest text-slate-400 mb-1">PHD SUPERVISED</p>
                 <p className="font-serif text-2xl font-medium text-slate-900">3 Scholars</p>
                 <p className="font-sans text-xs text-slate-500 mt-1">1 Awarded, 2 Ongoing</p>
               </div>
            </div>
            <div className="w-full md:w-auto bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 flex-1 shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
               <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                 <UserList size={24} weight="duotone" />
               </div>
               <div className="text-left">
                 <p className="font-mono text-[10px] font-bold tracking-widest text-slate-400 mb-1">M.SC DISSERTATIONS</p>
                 <p className="font-serif text-2xl font-medium text-slate-900">24 Students</p>
                 <p className="font-sans text-xs text-slate-500 mt-1">Supervised To Date</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* PhD Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-serif text-3xl font-medium text-slate-900">PhD Scholars</h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phdStudents.map((student, idx) => (
            <div 
              key={idx}
              className={`group relative bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 ${student.status === "Awarded" ? "lg:col-span-3 flex flex-col md:flex-row" : "flex flex-col"}`}
            >
              {/* Image Section */}
              <div className={`relative ${student.status === "Awarded" ? "md:w-[40%] aspect-[4/3] md:aspect-auto md:min-h-[400px]" : "w-full aspect-[4/3] min-h-[300px]"} flex items-center justify-center bg-slate-50/60 border-b md:border-b-0 md:border-r border-slate-100/80 overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl`}>
                 {/* Internal Image Frame */}
                 <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-center group-hover:bg-slate-100/50 transition-colors duration-500">
                   {student.image && (
                     <div className="relative w-full h-full">
                       <Image 
                         src={student.image}
                         alt={student.name}
                         fill
                         className="object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                         unoptimized // Avoid aggressive nextjs cropping on large files
                       />
                     </div>
                   )}
                 </div>
                 
                 {/* Badge Overlay */}
                 {student.status === "Awarded" && (
                   <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md border border-slate-200/60 px-4 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
                     <Medal size={18} weight="fill" className="text-amber-500" />
                     <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-800 uppercase">Awarded</span>
                   </div>
                 )}
              </div>

              {/* Data Section */}
              <div className={`p-8 md:p-10 flex flex-col justify-center ${student.status === "Awarded" ? "flex-1" : "flex-1"}`}>
                <div className="mb-4">
                   <span className={`inline-flex font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md ${student.bgLight} ${student.textLight} border ${student.borderColor}`}>
                     Status: {student.status}
                   </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-slate-900 mb-4">{student.name}</h3>
                
                {student.thesis && (
                  <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100/80 mb-6 group-hover:bg-slate-50 transition-colors">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                      <Certificate size={14} /> Thesis Title
                    </p>
                    <p className="font-sans text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                      &quot;{student.thesis}&quot;
                    </p>
                  </div>
                )}

                {student.date && (
                  <p className="font-mono text-xs text-slate-500 font-semibold tracking-wide">
                    {student.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Masters Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-serif text-3xl font-medium text-slate-900">Master&apos;s Dissertations</h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/60">
                  <th className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 p-6 whitespace-nowrap">Year</th>
                  <th className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 p-6">Name of the Candidate(s)</th>
                  <th className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 p-6">Masters Dissertation Thesis Title</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {mastersStudents.map((student, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 align-top">
                      <span className="font-mono text-sm font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60">
                        {student.year}
                      </span>
                    </td>
                    <td className="p-6 align-top">
                      <div className="font-sans text-[15px] font-medium text-slate-700 leading-relaxed max-w-sm">
                        {student.names}
                      </div>
                    </td>
                    <td className="p-6 align-top">
                      <div className="font-sans text-[14px] text-slate-600 leading-relaxed max-w-2xl bg-white border border-slate-100 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                        {student.thesis}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}
