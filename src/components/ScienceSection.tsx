import React from 'react';
import ScienceVisual from './ScienceVisual';

export default function ScienceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-32" id="research-focus">
      {/* Background 3D Visual */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ScienceVisual transparent={true} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
            Pioneering Research in <span className="text-cyan-400">Supramolecular Chemistry</span>
          </h2>
          <p className="text-lg text-slate-300 font-body mb-8 leading-relaxed">
            Our lab focuses on the design and synthesis of functional molecular architectures. 
            By leveraging non-covalent interactions, we construct complex DNA-inspired nanostructures,
            smart materials, and advanced catalysts that push the boundaries of modern chemistry.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="rounded-full bg-cyan-900/30 px-4 py-2 text-sm font-semibold text-cyan-300 border border-cyan-800/50 backdrop-blur-sm">
              Molecular Recognition
            </div>
            <div className="rounded-full bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-300 border border-blue-800/50 backdrop-blur-sm">
              Self-Assembly
            </div>
            <div className="rounded-full bg-indigo-900/30 px-4 py-2 text-sm font-semibold text-indigo-300 border border-indigo-800/50 backdrop-blur-sm">
              Nanomaterials
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient fade to blend with other sections if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
}
