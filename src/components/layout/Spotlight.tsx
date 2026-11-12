"use client";

import { useEffect } from "react";

// Lueur qui suit le pointeur sur les cartes « glow-card » : un seul écouteur pour toute la page,
// uniquement avec une souris. Sans script, les cartes gardent simplement leur bordure.
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      const target = last?.target;
      if (!last || !(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".glow-card");
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${Math.round(last.clientX - box.left)}px`);
      card.style.setProperty("--gy", `${Math.round(last.clientY - box.top)}px`);
    };
    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
