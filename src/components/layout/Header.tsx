"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const links = [
  { href: "/a-propos", label: "Parcours" },
  { href: "/projets", label: "Projets" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

function closeMobileMenu(event: MouseEvent<HTMLElement>) {
  const details = event.currentTarget.closest("details");

  if (details instanceof HTMLDetailsElement) {
    details.open = false;
  }
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`shell ${styles.headerInner}`}>
        <Link href="/" className={styles.brand} aria-label="Pierre Laurent — accueil">
          <span className={styles.brandMark} aria-hidden="true">PL<span>.</span></span>
          <span className={styles.brandName}>Pierre Laurent</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav aria-label="Navigation mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
