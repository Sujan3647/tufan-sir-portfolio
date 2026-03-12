"use client";

import React, { useEffect, useRef, useState } from "react";
import { createFloatingItem, FloatingItemData } from "./chemPhysicsData";
import FloatingPhysicsItem from "./FloatingPhysicsItem";

export default function AnimatedChemBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<FloatingItemData[]>([]);
  const rafRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    // Create particles
    itemsRef.current = Array.from({ length: 35 }, (_, i) => createFloatingItem(i, width, height));
    forceRender((n) => n + 1);

    let last = performance.now();

    function tick(now: number) {
      const dt = Math.min((now - last) / 16, 3); // normalise to ~60fps
      last = now;
      const items = itemsRef.current;
      const w = el!.clientWidth;
      const h = el!.clientHeight;

      for (const it of items) {
        it.x += it.vx * dt;
        it.y += it.vy * dt;
        it.rotation += it.rotSpeed * dt;

        // Bounce off edges
        if (it.x < -40) { it.x = -40; it.vx = Math.abs(it.vx); }
        if (it.x > w + 20) { it.x = w + 20; it.vx = -Math.abs(it.vx); }
        if (it.y < -40) { it.y = -40; it.vy = Math.abs(it.vy); }
        if (it.y > h + 20) { it.y = h + 20; it.vy = -Math.abs(it.vy); }
      }

      forceRender((n) => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const items = itemsRef.current;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {items.map((it) => (
        <FloatingPhysicsItem key={it.id} it={it} />
      ))}
    </div>
  );
}
