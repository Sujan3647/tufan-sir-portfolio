"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Detailed Chemistry SVG definitions specific to About section ─── */

interface ChemSVGDef {
  paths: string[];           // Multiple paths per structure
  viewBox: string;
  w: number;
  h: number;
  fills: string[];           // Fill per path
  strokes: string[];         // Stroke per path
  strokeWidths: number[];
}

// More complex / detailed structures related to coordination chemistry
const detailedSvgDefs: ChemSVGDef[] = [
  // Coordination polymer repeating unit (metal center + bridging ligands)
  {
    paths: [
      "M15 15 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0",          // Metal center
      "M20 15 L35 15",                                              // Bridge right
      "M10 15 L-5 15",                                              // Bridge left
      "M15 10 L15 0",                                               // Axial up
      "M15 20 L15 30",                                              // Axial down
      "M20 11 L28 5",                                               // Diagonal ligand
      "M10 19 L2 25",                                               // Diagonal ligand
    ],
    viewBox: "-8 -2 50 34",
    w: 64, h: 48,
    fills: ["currentColor", "none", "none", "none", "none", "none", "none"],
    strokes: ["none", "currentColor", "currentColor", "currentColor", "currentColor", "currentColor", "currentColor"],
    strokeWidths: [0, 1.5, 1.5, 1.2, 1.2, 1, 1],
  },
  // Lanthanide complex (central Ln with surrounding donors)
  {
    paths: [
      "M20 20 m-7,0 a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0",          // Ln center
      "M20 20 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",             // Inner shell
      "M20 13 L20 4 M24 14 L30 7 M27 20 L36 20 M24 26 L30 33 M20 27 L20 36 M16 26 L10 33 M13 20 L4 20 M16 14 L10 7", // 8 donor arms
    ],
    viewBox: "0 0 40 40",
    w: 56, h: 56,
    fills: ["currentColor", "none", "none"],
    strokes: ["none", "currentColor", "currentColor"],
    strokeWidths: [0, 1, 1.2],
  },
  // Benzene ring (detailed with circle inside)
  {
    paths: [
      "M15 3 L26 9.5 L26 22.5 L15 29 L4 22.5 L4 9.5 Z",         // Hexagon
      "M15 7 L22 11 L22 21 L15 25 L8 21 L8 11 Z",                 // Inner ring
    ],
    viewBox: "0 0 30 32",
    w: 44, h: 48,
    fills: ["none", "none"],
    strokes: ["currentColor", "currentColor"],
    strokeWidths: [1.5, 0.8],
  },
  // 2D nanosheet lattice fragment
  {
    paths: [
      // Honeycomb lattice
      "M10 5 L16 2 L22 5 L22 11 L16 14 L10 11 Z M22 5 L28 2 L34 5 L34 11 L28 14 L22 11 M10 11 L16 14 L16 20 L10 23 L4 20 L4 14 Z M22 11 L28 14 L28 20 L22 23 L16 20 L16 14",
    ],
    viewBox: "0 0 38 26",
    w: 72, h: 52,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [1],
  },
  // Double helix / coordination polymer chain
  {
    paths: [
      "M2 15 Q10 5, 18 15 Q26 25, 34 15 Q42 5, 50 15",            // Strand 1
      "M2 15 Q10 25, 18 15 Q26 5, 34 15 Q42 25, 50 15",            // Strand 2
      "M10 15 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0",              // Node 1
      "M26 15 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0",              // Node 2
      "M42 15 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0",              // Node 3
    ],
    viewBox: "0 0 52 30",
    w: 80, h: 44,
    fills: ["none", "none", "currentColor", "currentColor", "currentColor"],
    strokes: ["currentColor", "currentColor", "none", "none", "none"],
    strokeWidths: [1.2, 1.2, 0, 0, 0],
  },
  // Orbital diagram (d-orbital shape)
  {
    paths: [
      "M20 20 Q5 5, 20 2 Q35 5, 20 20 Q35 35, 20 38 Q5 35, 20 20",  // Vertical lobes
      "M20 20 Q5 20, 8 12 Q12 5, 20 20 Q28 5, 32 12 Q35 20, 20 20 Q35 20, 32 28 Q28 35, 20 20 Q12 35, 8 28 Q5 20, 20 20", // Horizontal lobes
    ],
    viewBox: "0 0 40 40",
    w: 48, h: 48,
    fills: ["none", "none"],
    strokes: ["currentColor", "currentColor"],
    strokeWidths: [1, 0.7],
  },
  // Crystal unit cell
  {
    paths: [
      "M5 10 L20 5 L35 10 L35 25 L20 30 L5 25 Z",                // Front face
      "M20 5 L30 2 L45 7 L35 10",                                  // Top right
      "M35 10 L45 7 L45 22 L35 25",                                // Right face
      "M12 17 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0",             // Atom inside
      "M27 14 m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0",             // Atom inside
    ],
    viewBox: "0 0 48 34",
    w: 64, h: 48,
    fills: ["none", "none", "none", "currentColor", "currentColor"],
    strokes: ["currentColor", "currentColor", "currentColor", "none", "none"],
    strokeWidths: [1.2, 0.8, 0.8, 0, 0],
  },
  // Simple water molecule
  {
    paths: [
      "M15 12 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0",            // O
      "M11 12 L4 18 M4 18 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0", // H left
      "M19 12 L26 18 M26 18 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0", // H right
    ],
    viewBox: "0 0 30 24",
    w: 40, h: 32,
    fills: ["currentColor", "currentColor", "currentColor"],
    strokes: ["none", "currentColor", "currentColor"],
    strokeWidths: [0, 1, 1],
  },
];

// Chemistry-specific text formulas related to Dr. Mahapatra's research
const aboutTextDefs = [
  { content: "Ln³⁺", cls: "font-serif font-bold text-base" },
  { content: "[ML₂]ₙ", cls: "font-mono text-sm" },
  { content: "Ksp", cls: "font-serif italic text-lg" },
  { content: "d→d*", cls: "font-mono text-xs" },
  { content: "UV-Vis", cls: "font-mono text-xs font-bold" },
  { content: "λem", cls: "font-serif italic text-base" },
  { content: "MOF", cls: "font-mono font-bold text-sm" },
  { content: "2D", cls: "font-mono font-bold text-lg" },
  { content: "Cu²⁺", cls: "font-serif font-bold text-base" },
  { content: "Zn²⁺", cls: "font-serif font-bold text-base" },
  { content: "ΔE", cls: "font-serif italic text-xl" },
  { content: "hν → e⁻", cls: "font-serif italic text-sm" },
  { content: "η⁵", cls: "font-serif italic text-base" },
  { content: "MLCT", cls: "font-mono text-xs font-bold" },
  { content: "τ = 1/k", cls: "font-mono text-xs" },
  { content: "Φ_f", cls: "font-serif italic text-base" },
];

/* ─── Floating item data for About section ─── */

export interface AboutFloatingItem {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "svg" | "text";
  // SVG data
  svgDef?: ChemSVGDef;
  // Text data
  content?: string;
  textClass?: string;
  // Shared
  opacity: number;
  scale: number;
  rotation: number;
  rotSpeed: number;
}

export function createAboutItem(id: number, width: number, height: number): AboutFloatingItem {
  const useSvg = Math.random() < 0.55; // Slightly favour SVGs for visual richness
  if (useSvg) {
    const def = detailedSvgDefs[Math.floor(Math.random() * detailedSvgDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      type: "svg",
      svgDef: def,
      opacity: 0.08 + Math.random() * 0.14,
      scale: 0.6 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.25,
    };
  } else {
    const t = aboutTextDefs[Math.floor(Math.random() * aboutTextDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      type: "text",
      content: t.content,
      textClass: t.cls,
      opacity: 0.06 + Math.random() * 0.12,
      scale: 0.7 + Math.random() * 0.5,
      rotation: (Math.random() - 0.5) * 20,
      rotSpeed: (Math.random() - 0.5) * 0.15,
    };
  }
}

/* ─── Individual floating item renderer ─── */

function AboutFloatingElement({ it }: { it: AboutFloatingItem }) {
  return (
    <div
      className="absolute text-slate-400/70"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${it.x}px, ${it.y}px, 0) scale(${it.scale}) rotate(${it.rotation}deg)`,
        opacity: it.opacity,
        willChange: "transform",
      }}
    >
      {it.type === "svg" && it.svgDef ? (
        <svg
          width={it.svgDef.w}
          height={it.svgDef.h}
          viewBox={it.svgDef.viewBox}
          className="text-current"
          style={{ overflow: "visible" }}
        >
          {it.svgDef.paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill={it.svgDef!.fills[i] === "currentColor" ? "currentColor" : "none"}
              stroke={it.svgDef!.strokes[i] === "currentColor" ? "currentColor" : "none"}
              strokeWidth={it.svgDef!.strokeWidths[i]}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      ) : (
        <span className={`whitespace-nowrap ${it.textClass || ""}`}>
          {it.content}
        </span>
      )}
    </div>
  );
}

/* ─── Main animated background component ─── */

export default function AboutChemAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<AboutFloatingItem[]>([]);
  const rafRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    // Create 25 detailed particles — enough to fill the area without overwhelming the text
    itemsRef.current = Array.from({ length: 25 }, (_, i) =>
      createAboutItem(i, width, height)
    );
    forceRender((n) => n + 1);

    let last = performance.now();

    function tick(now: number) {
      const dt = Math.min((now - last) / 16, 3);
      last = now;
      const items = itemsRef.current;
      const w = el!.clientWidth;
      const h = el!.clientHeight;

      for (const it of items) {
        it.x += it.vx * dt;
        it.y += it.vy * dt;
        it.rotation += it.rotSpeed * dt;

        // Soft bounce off edges
        if (it.x < -60) { it.x = -60; it.vx = Math.abs(it.vx); }
        if (it.x > w + 30) { it.x = w + 30; it.vx = -Math.abs(it.vx); }
        if (it.y < -60) { it.y = -60; it.vy = Math.abs(it.vy); }
        if (it.y > h + 30) { it.y = h + 30; it.vy = -Math.abs(it.vy); }
      }

      forceRender((n) => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {itemsRef.current.map((it) => (
        <AboutFloatingElement key={it.id} it={it} />
      ))}
    </div>
  );
}
