"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Detailed Chemistry & Math SVG definitions for Education section ─── */

interface EduSVGDef {
  paths: string[];           
  viewBox: string;
  w: number;
  h: number;
  fills: string[];           
  strokes: string[];         
  strokeWidths: number[];
}

const detailedSvgDefs: EduSVGDef[] = [
  // Benzene ring
  {
    paths: [
      "M15 3 L26 9.5 L26 22.5 L15 29 L4 22.5 L4 9.5 Z",
      "M15 7 L22 11 L22 21 L15 25 L8 21 L8 11 Z",
    ],
    viewBox: "0 0 30 32",
    w: 44, h: 48,
    fills: ["none", "none"],
    strokes: ["currentColor", "currentColor"],
    strokeWidths: [1.5, 0.8],
  },
  // Simple water molecule
  {
    paths: [
      "M15 12 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0",
      "M11 12 L4 18 M4 18 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0",
      "M19 12 L26 18 M26 18 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0",
    ],
    viewBox: "0 0 30 24",
    w: 40, h: 32,
    fills: ["currentColor", "currentColor", "currentColor"],
    strokes: ["none", "currentColor", "currentColor"],
    strokeWidths: [0, 1, 1],
  },
  // Pi symbol
  {
    paths: [
      "M4 8 C8 8, 12 5, 26 5 C28 5, 30 8, 30 8 M10 8 L10 24 M20 8 L20 20 C20 23, 23 25, 25 22",
    ],
    viewBox: "0 0 32 32",
    w: 40, h: 40,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [2.5],
  },
  // Integral symbol
  {
    paths: [
      "M18 4 C14 2, 10 4, 10 8 L10 24 C10 28, 14 30, 18 28",
    ],
    viewBox: "0 0 28 32",
    w: 36, h: 40,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [2],
  },
  // Square root symbol
  {
    paths: [
      "M4 18 L8 26 L16 6 L32 6",
    ],
    viewBox: "0 0 36 32",
    w: 44, h: 40,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [2],
  },
  // Infinity symbol
  {
    paths: [
      "M16 16 C10 6, 2 6, 2 16 C2 26, 10 26, 16 16 C22 6, 30 6, 30 16 C30 26, 22 26, 16 16 Z",
    ],
    viewBox: "0 0 32 32",
    w: 48, h: 48,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [1.5],
  },
  // Coordination polymer node
  {
    paths: [
      "M15 15 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0",
      "M20 15 L35 15",
      "M10 15 L-5 15",
      "M15 10 L15 0",
      "M15 20 L15 30",
    ],
    viewBox: "-8 -2 50 34",
    w: 56, h: 40,
    fills: ["currentColor", "none", "none", "none", "none"],
    strokes: ["none", "currentColor", "currentColor", "currentColor", "currentColor"],
    strokeWidths: [0, 1.5, 1.5, 1.2, 1.2],
  },
];

// Mixed Chemistry and Math text formulas
const eduTextDefs = [
  { content: "Ln³⁺", cls: "font-serif font-bold text-base" },
  { content: "E = mc²", cls: "font-serif italic text-lg" },
  { content: "∫ f(x)dx", cls: "font-serif italic text-base" },
  { content: "∑ n=1", cls: "font-mono font-bold text-sm" },
  { content: "Ksp", cls: "font-serif italic text-lg" },
  { content: "x² + y² = r²", cls: "font-mono text-xs" },
  { content: "UV-Vis", cls: "font-mono text-xs font-bold" },
  { content: "lim x→∞", cls: "font-serif italic text-sm" },
  { content: "ΔE", cls: "font-serif italic text-xl" },
  { content: "∇ × E", cls: "font-serif italic text-base" },
  { content: "e^(iπ) + 1 = 0", cls: "font-mono text-[10px]" },
  { content: "H₂O", cls: "font-sans font-medium text-base" },
];

export interface EduFloatingItem {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "svg" | "text";
  svgDef?: EduSVGDef;
  content?: string;
  textClass?: string;
  opacity: number;
  scale: number;
  rotation: number;
  rotSpeed: number;
}

export function createEduItem(id: number, width: number, height: number): EduFloatingItem {
  const useSvg = Math.random() < 0.5;
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
      opacity: 0.05 + Math.random() * 0.1,
      scale: 0.6 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.25,
    };
  } else {
    const t = eduTextDefs[Math.floor(Math.random() * eduTextDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      type: "text",
      content: t.content,
      textClass: t.cls,
      opacity: 0.04 + Math.random() * 0.08,
      scale: 0.7 + Math.random() * 0.5,
      rotation: (Math.random() - 0.5) * 20,
      rotSpeed: (Math.random() - 0.5) * 0.15,
    };
  }
}

function EduFloatingElement({ it }: { it: EduFloatingItem }) {
  return (
    <div
      className="absolute text-slate-400/80"
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

export default function EduMathChemAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<EduFloatingItem[]>([]);
  const rafRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    itemsRef.current = Array.from({ length: 30 }, (_, i) =>
      createEduItem(i, width, height)
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
        <EduFloatingElement key={it.id} it={it} />
      ))}
    </div>
  );
}
