export interface FloatingItemData {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  content: string;
  type: "svg" | "text";
  svgPath?: string;
  svgViewBox?: string;
  svgWidth?: number;
  svgHeight?: number;
  svgFill?: string;
  textClass?: string;
  opacity: number;
  scale: number;
  rotation: number;
  rotSpeed: number;
}

// Chemical structures (SVG)
export const svgDefs = [
  { path: "M15 5 L25 10 L25 22 L15 27 L5 22 L5 10 Z", viewBox: "0 0 30 32", w: 50, h: 50, fill: "none" },
  { path: "M15 2 L28 9.5 L28 24.5 L15 32 L2 24.5 L2 9.5 Z", viewBox: "0 0 30 34", w: 44, h: 44, fill: "none" },
  { path: "M2 15 L28 15", viewBox: "0 0 30 30", w: 36, h: 36, fill: "none" },
  { path: "M2 12 L28 12 M2 18 L28 18", viewBox: "0 0 30 30", w: 36, h: 36, fill: "none" },
  { path: "M15 15 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0", viewBox: "0 0 30 30", w: 24, h: 24, fill: "currentColor" },
  { path: "M2 15 Q 15 2, 28 15 Q 15 28, 2 15", viewBox: "0 0 30 30", w: 44, h: 28, fill: "none" },
  { path: "M5 5 L15 25 L25 5 M10 15 L20 15", viewBox: "0 0 30 30", w: 36, h: 36, fill: "none" },
];

// Formulas & math text
export const textDefs = [
  { content: "E = hν", cls: "font-serif italic text-lg" },
  { content: "ΔG°", cls: "font-serif italic text-xl" },
  { content: "λmax", cls: "font-serif italic text-lg" },
  { content: "∫", cls: "font-serif italic text-3xl" },
  { content: "Nₐ = 6.022×10²³", cls: "font-mono text-xs" },
  { content: "pH", cls: "font-serif font-bold text-xl" },
  { content: "π*", cls: "font-serif italic text-xl" },
  { content: "e⁻", cls: "font-serif italic text-lg" },
  { content: "H₂O", cls: "font-serif font-bold text-lg" },
  { content: "C₆H₆", cls: "font-serif font-bold text-lg" },
  { content: "Ln³⁺", cls: "font-serif font-bold text-base" },
  { content: "σ → σ*", cls: "font-mono text-sm" },
  { content: "ΔH", cls: "font-serif italic text-xl" },
];

export function createFloatingItem(id: number, width: number, height: number): FloatingItemData {
  const useSvg = Math.random() < 0.5;
  if (useSvg) {
    const s = svgDefs[Math.floor(Math.random() * svgDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      content: "",
      type: "svg",
      svgPath: s.path,
      svgViewBox: s.viewBox,
      svgWidth: s.w,
      svgHeight: s.h,
      svgFill: s.fill,
      opacity: 0.15 + Math.random() * 0.2,
      scale: 0.7 + Math.random() * 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.5,
    };
  } else {
    const t = textDefs[Math.floor(Math.random() * textDefs.length)];
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      content: t.content,
      type: "text",
      textClass: t.cls,
      opacity: 0.12 + Math.random() * 0.18,
      scale: 0.8 + Math.random() * 0.4,
      rotation: (Math.random() - 0.5) * 30,
      rotSpeed: (Math.random() - 0.5) * 0.2,
    };
  }
}
