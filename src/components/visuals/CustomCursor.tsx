"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const INTERACTIVE_SELECTOR =
  'a, button, summary, [role="button"], [data-cursor-interactive="true"]';
const NATIVE_CURSOR_SELECTOR =
  'input, textarea, select, [contenteditable="true"], p, h1, h2, h3, h4, h5, h6, li, blockquote, code, pre, label';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !dot || !ring || !precisePointer.matches || reducedMotion.matches) {
      return;
    }

    const documentRoot = document.documentElement;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasPosition = false;
    let animationFrame = 0;
    let targetRefreshFrame = 0;

    documentRoot.dataset.customCursor = "true";

    const setVisible = (visible: boolean) => {
      cursor.dataset.visible = String(visible);
    };

    const updateTargetMode = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        cursor.dataset.interactive = "false";
        documentRoot.dataset.cursorNative = "false";
        return false;
      }

      const interactive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      const nativeCursor = !interactive && Boolean(target.closest(NATIVE_CURSOR_SELECTOR));

      cursor.dataset.interactive = String(interactive);
      documentRoot.dataset.cursorNative = String(nativeCursor);

      return nativeCursor;
    };

    const drawRing = () => {
      const deltaX = targetX - ringX;
      const deltaY = targetY - ringY;

      ringX += deltaX * 0.18;
      ringY += deltaY * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(deltaX) + Math.abs(deltaY) > 0.1) {
        animationFrame = window.requestAnimationFrame(drawRing);
      } else {
        animationFrame = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!hasPosition) {
        ringX = targetX;
        ringY = targetY;
        hasPosition = true;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      } else if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(drawRing);
      }

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      setVisible(!updateTargetMode(event.target));
    };

    const refreshTargetMode = () => {
      targetRefreshFrame = 0;

      if (!hasPosition) {
        return;
      }

      const currentTarget = document.elementFromPoint(targetX, targetY);
      setVisible(!updateTargetMode(currentTarget));
    };

    const queueTargetRefresh = () => {
      if (!targetRefreshFrame) {
        targetRefreshFrame = window.requestAnimationFrame(refreshTargetMode);
      }
    };

    const handlePointerDown = () => {
      cursor.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      cursor.dataset.pressed = "false";
    };

    const handlePointerLeave = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        setVisible(false);
      }
    };

    const handleWindowBlur = () => setVisible(false);
    const contentObserver = new MutationObserver(queueTargetRefresh);

    contentObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("mouseout", handlePointerLeave, { passive: true });
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("scroll", queueTargetRefresh, { passive: true });

    return () => {
      contentObserver.disconnect();
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (targetRefreshFrame) {
        window.cancelAnimationFrame(targetRefreshFrame);
      }
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseout", handlePointerLeave);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("scroll", queueTargetRefresh);
      delete documentRoot.dataset.customCursor;
      delete documentRoot.dataset.cursorNative;
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.cursor}
      data-interactive="false"
      data-pressed="false"
      data-visible="false"
      aria-hidden="true"
    >
      <span ref={ringRef} className={styles.ring} />
      <span ref={dotRef} className={styles.dot} />
    </div>
  );
}
