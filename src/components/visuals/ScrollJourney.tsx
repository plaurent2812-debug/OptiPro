"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ScrollJourney.module.css";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function ScrollJourney({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sequence = root.querySelector<HTMLElement>("[data-build-sequence]");
    const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-build-step]"));
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-step-link]"));
    const visuals = Array.from(root.querySelectorAll<HTMLElement>("[data-project-visual]"));
    const motion = window.matchMedia("(min-width: 981px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      // Read geometry together before updating styles; no React render on scroll.
      const positions = steps.map((step) => step.getBoundingClientRect().top);
      const visualPositions = motion.matches ? visuals.map((visual) => visual.getBoundingClientRect().top) : [];
      const activationLine = motion.matches
        ? height * .55
        : steps[0] ? parseFloat(window.getComputedStyle(steps[0]).scrollMarginTop) + 2 : 0;
      let active = 0;
      positions.forEach((top, index) => {
        if (top <= activationLine) active = index;
      });
      links.forEach((link, index) => {
        if (index === active) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });

      root.dataset.scrollMotion = String(motion.matches);
      if (!motion.matches) {
        sequence?.style.removeProperty("--structure");
        sequence?.style.removeProperty("--interface");
        visuals.forEach((visual) => visual.style.removeProperty("--reveal"));
        return;
      }

      if (sequence && positions.length === 3) {
        const distance = Math.max(1, positions[1] - positions[0]);
        sequence.style.setProperty("--structure", clamp((height * .82 - positions[1]) / (distance * .65)).toFixed(3));
        sequence.style.setProperty("--interface", clamp((height * .82 - positions[2]) / (distance * .65)).toFixed(3));
      }
      visuals.forEach((visual, index) => {
        visual.style.setProperty("--reveal", clamp((height * .95 - visualPositions[index]) / (height * .58)).toFixed(3));
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      delete root.dataset.scrollMotion;
      sequence?.style.removeProperty("--structure");
      sequence?.style.removeProperty("--interface");
      visuals.forEach((visual) => visual.style.removeProperty("--reveal"));
    };
  }, []);

  return <main ref={rootRef} className={styles.journey}>{children}</main>;
}
