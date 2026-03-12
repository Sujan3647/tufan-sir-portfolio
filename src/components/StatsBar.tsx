import React from "react";

const stats = [
  { value: "45+", label: "Scholars Mentored" },
  { value: "$12M+", label: "Research Grants" },
  { value: "85+", label: "Publications" },
  { value: "3,400", label: "Citations" },
];

export default function StatsBar() {
  return (
    <section className="bg-white/80 backdrop-blur-sm py-4" id="mentorship">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-linear-to-r from-navy via-navy to-navy-light px-6 py-8 shadow-xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group transition-transform hover:-translate-y-1">
                <div className="font-modern text-4xl font-bold text-accent md:text-5xl drop-shadow-sm group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
