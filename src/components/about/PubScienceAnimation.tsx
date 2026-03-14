"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Detailed Science & Data SVG definitions for Publications section ─── */

interface SciSVGDef {
  paths: string[];           
  viewBox: string;
  w: number;
  h: number;
  fills: string[];           
  strokes: string[];         
  strokeWidths: number[];
}

const detailedSvgDefs: SciSVGDef[] = [
  // Atom / Physics symbol
  {
    paths: [
      "M16 16 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
      "M16 16 ellipse 12 4 45",
      "M16 16 ellipse 12 4 -45",
      "M16 16 ellipse 12 4 90",
    ],
    viewBox: "0 0 32 32",
    w: 48, h: 48,
    fills: ["currentColor", "none", "none", "none"],
    strokes: ["none", "currentColor", "currentColor", "currentColor"],
    strokeWidths: [0, 1.2, 1.2, 1.2],
  },
  // DNA Helix / Biology symbol
  {
    paths: [
      "M4 4 Q10 16, 4 28 M16 4 Q10 16, 16 28 M6 8 L14 8 M8 16 L12 16 M6 24 L14 24",
    ],
    viewBox: "0 0 20 32",
    w: 28, h: 44,
    fills: ["none"],
    strokes: ["currentColor"],
    strokeWidths: [1.5],
  },
  // Data Chart / Analytics symbol
  {
    paths: [
      "M4 28 L28 28",
      "M4 4 L4 28",
      "M8 24 L8 16 L14 16 L14 24 Z",
      "M16 24 L16 8 L22 8 L22 24 Z",
      "M24 24 L24 12 L30 12 L30 24 Z",
    ],
    viewBox: "0 0 32 32",
    w: 40, h: 40,
    fills: ["none", "none", "currentColor", "currentColor", "currentColor"],
    strokes: ["currentColor", "currentColor", "none", "none", "none"],
    strokeWidths: [2, 2, 0, 0, 0],
  },
  // Network Graph / Connections symbol
  {
    paths: [
      "M16 6 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
      "M6 20 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
      "M26 20 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
      "M16 26 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0",
      "M14 8 L8 18",
      "M18 8 L24 18",
      "M8 22 L14 24",
      "M24 22 L18 24",
    ],
    viewBox: "0 0 32 32",
    w: 44, h: 44,
    fills: ["currentColor", "currentColor", "currentColor", "currentColor", "none", "none", "none", "none"],
    strokes: ["none", "none", "none", "none", "currentColor", "currentColor", "currentColor", "currentColor"],
    strokeWidths: [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5],
  },
  // Beaker / Chemistry symbol
  {
    paths: [
      "M10 6 L22 6",
      "M14 6 L14 14 L8 24 L8 26 L24 26 L24 24 L18 14 L18 6",
      "M10 20 L22 20",
    ],
    viewBox: "0 0 32 32",
    w: 36, h: 36,
    fills: ["none", "none", "none"],
    strokes: ["currentColor", "currentColor", "currentColor"],
    strokeWidths: [2, 2, 1],
  },
  // Telescope / Astronomy symbol
  {
    paths: [
      "M4 28 L12 20",
      "M14 24 L22 16 L26 12 L30 16 L26 20 L18 28 Z",
      "M2 18 L6 14 L18 26 L14 30 Z",
    ],
    viewBox: "0 0 32 32",
    w: 40, h: 40,
    fills: ["none", "none", "none"],
    strokes: ["currentColor", "currentColor", "currentColor"],
    strokeWidths: [1.5, 1.5, 1.5],
  },
  // Magnifying Glass / Research symbol
  {
    paths: [
      "M14 14 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0",
      "M20 20 L28 28",
    ],
    viewBox: "0 0 32 32",
    w: 36, h: 36,
    fills: ["none", "none"],
    strokes: ["currentColor", "currentColor"],
    strokeWidths: [2, 3],
  },
  // Brain / Neuroscience symbol
  {
    paths: [
      "M16 6 C10 6, 6 10, 6 16 C6 20, 8 24, 12 26 C14 28, 18 28, 20 26 C24 24, 26 20, 26 16 C26 10, 22 6, 16 6 Z",
      "M16 6 L16 26",
      "M6 16 L26 16",
    ],
    viewBox: "0 0 32 32",
    w: 40, h: 40,
    fills: ["none", "none", "none"],
    strokes: ["currentColor", "currentColor", "currentColor"],
    strokeWidths: [1.5, 1, 1],
  },
];

// General Science and Academic text formulas
const sciTextDefs = [
  { content: "Open Access", cls: "font-serif font-bold text-sm" },
  { content: "h-index", cls: "font-serif italic text-lg" },
  { content: "i10-index", cls: "font-serif italic text-base" },
  { content: "DOI:10.1038", cls: "font-mono font-bold text-xs" },
  { content: "Impact Factor", cls: "font-serif italic text-sm" },
  { content: "Peer-Reviewed", cls: "font-mono text-[11px]" },
  { content: "Citation", cls: "font-mono text-xs font-bold" },
  { content: "Methodology", cls: "font-serif italic text-sm" },
  { content: "Abstract", cls: "font-serif italic text-base" },
  { content: "Hypothesis", cls: "font-serif italic text-base" },
  { content: "Data Set", cls: "font-mono text-[10px]" },
  { content: "Nature", cls: "font-serif font-medium text-base text-slate-500" },
  { content: "Science", cls: "font-serif font-medium text-base text-slate-500" },
];

export interface SciFloatingItem {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "svg" | "text";
  svgDef?: SciSVGDef;
  content?: string;
  textClass?: string;
  opacity: number;
  scale: number;
  rotation: number;
  rotSpeed: number;
}

export function createSciItem(id: number, width: number, height: number): SciFloatingItem {
  const useSvg = Math.random() < 0.6;
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
      // Create SVG properly if it uses ellipse
      opacity: 0.04 + Math.random() * 0.08,
      scale: 0.6 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.25,
    };
  } else {
    const t = sciTextDefs[Math.floor(Math.random() * sciTextDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      type: "text",
      content: t.content,
      textClass: t.cls,
      opacity: 0.04 + Math.random() * 0.06,
      scale: 0.7 + Math.random() * 0.5,
      rotation: (Math.random() - 0.5) * 20,
      rotSpeed: (Math.random() - 0.5) * 0.15,
    };
  }
}

function SciFloatingElement({ it }: { it: SciFloatingItem }) {
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
          {it.svgDef.paths.map((d, i) => {
            if (d.includes("ellipse")) {
              const parts = d.split(" ");
              const rx = parts[3];
              const ry = parts[4];
              const transform = parts[5] ? `rotate(${parts[5]} 16 16)` : "";
              return (
                <ellipse
                  key={i}
                  cx="16"
                  cy="16"
                  rx={rx}
                  ry={ry}
                  transform={transform}
                  fill={it.svgDef!.fills[i] === "currentColor" ? "currentColor" : "none"}
                  stroke={it.svgDef!.strokes[i] === "currentColor" ? "currentColor" : "none"}
                  strokeWidth={it.svgDef!.strokeWidths[i]}
                />
              );
            }
            return (
              <path
                key={i}
                d={d}
                fill={it.svgDef!.fills[i] === "currentColor" ? "currentColor" : "none"}
                stroke={it.svgDef!.strokes[i] === "currentColor" ? "currentColor" : "none"}
                strokeWidth={it.svgDef!.strokeWidths[i]}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )
          })}
        </svg>
      ) : (
        <span className={`whitespace-nowrap ${it.textClass || ""}`}>
          {it.content}
        </span>
      )}
    </div>
  );
}

export default function PubScienceAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<SciFloatingItem[]>([]);
  const rafRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    itemsRef.current = Array.from({ length: 30 }, (_, i) =>
      createSciItem(i, width, height)
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
        <SciFloatingElement key={it.id} it={it} />
      ))}
    </div>
  );
}
