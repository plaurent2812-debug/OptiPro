"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Apparition progressive au défilement, en amélioration progressive :
// le HTML rendu par le serveur n'est jamais masqué. Le masquage n'existe que si ce
// script tourne, qu'IntersectionObserver est disponible et que le mouvement n'est pas réduit.
// Tout bloc qui commence dans le premier écran reste affiché sans animation.
const STAGGER_MS = 70;
const MAX_STAGGER = 4;
const CLEANUP_MS = 1200;

function revealTargets(main: HTMLElement) {
  const sections = Array.from(main.querySelectorAll<HTMLElement>(":scope > section")).slice(1);
  return sections.flatMap((section) => {
    const shell = section.querySelector<HTMLElement>(":scope > .shell");
    return shell ? Array.from(shell.children) as HTMLElement[] : [section];
  });
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const main = document.querySelector<HTMLElement>("main");
    if (reducedMotion.matches || !("IntersectionObserver" in window) || !main) return;

    const fold = window.innerHeight;
    const pending = revealTargets(main).filter((el) => el.getBoundingClientRect().top > fold);
    if (pending.length === 0) return;

    const root = document.documentElement;
    const timers = new Set<number>();
    const settle = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      el.removeAttribute("data-revealed");
      el.style.removeProperty("--reveal-delay");
    };
    const show = (el: HTMLElement, order = 0) => {
      el.style.setProperty("--reveal-delay", `${Math.min(order, MAX_STAGGER) * STAGGER_MS}ms`);
      el.setAttribute("data-revealed", "");
      // Une fois apparu, le bloc retrouve ses propres styles (transitions de survol comprises).
      const timer = window.setTimeout(() => { settle(el); timers.delete(timer); }, CLEANUP_MS + order * STAGGER_MS);
      timers.add(timer);
    };

    const observer = new IntersectionObserver((entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        show(entry.target as HTMLElement, order++);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });

    pending.forEach((el) => {
      el.setAttribute("data-reveal", "");
      observer.observe(el);
    });
    root.classList.add("reveal-on");

    const showAll = () => {
      observer.disconnect();
      pending.forEach((el) => show(el));
    };
    window.addEventListener("beforeprint", showAll);
    reducedMotion.addEventListener("change", showAll);

    return () => {
      observer.disconnect();
      window.removeEventListener("beforeprint", showAll);
      reducedMotion.removeEventListener("change", showAll);
      timers.forEach((timer) => window.clearTimeout(timer));
      pending.forEach(settle);
      root.classList.remove("reveal-on");
    };
  }, [pathname]);

  return null;
}
