import React from "react";
import { FloatingItemData } from "./chemPhysicsData";

export default function FloatingPhysicsItem({ it }: { it: FloatingItemData }) {
  return (
    <div
      className="absolute text-slate-400"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${it.x}px, ${it.y}px, 0) scale(${it.scale}) rotate(${it.rotation}deg)`,
        opacity: it.opacity,
        willChange: "transform",
      }}
    >
      {it.type === "svg" ? (
        <svg width={it.svgWidth} height={it.svgHeight} viewBox={it.svgViewBox} className="text-current">
          <path
            d={it.svgPath}
            fill={it.svgFill === "currentColor" ? "currentColor" : "none"}
            stroke={it.svgFill === "currentColor" ? "none" : "currentColor"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span className={`whitespace-nowrap ${it.textClass || ""}`}>{it.content}</span>
      )}
    </div>
  );
}
