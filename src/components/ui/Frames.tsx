import type { ReactNode } from "react";
import Icon from "./Icon";
import styles from "./frames.module.css";

/** Fenêtre de navigateur sobre autour d’une capture réelle. */
export function BrowserFrame({ label, className = "", children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={`${styles.browser} ${className}`}>
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.url}><Icon name="lock" />{label}</span>
        <span className={styles.spacer} aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

/** Téléphone : « inset » réserve la place de l’îlot pour une capture sans barre d’état. */
export function PhoneFrame({ inset = false, className = "", children }: { inset?: boolean; className?: string; children: ReactNode }) {
  return (
    <div className={`${styles.phone} ${className}`}>
      <div className={`${styles.screen} ${inset ? styles.inset : ""}`}>
        <span className={styles.island} aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}

/** Pastille d’état : point plein quand le projet vit, cercle vide sinon. */
export function StatusPill({ tone, children }: { tone: "live" | "idle"; children: ReactNode }) {
  return <span className={`${styles.status} ${tone === "idle" ? styles.idle : ""}`}><i aria-hidden="true" />{children}</span>;
}
