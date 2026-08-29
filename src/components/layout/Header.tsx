"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
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
          <span className={styles.brandMark} aria-hidden="true">PL</span>
          <span className={styles.brandName}>PIERRE.LAURENT</span>
          <span className={styles.brandRole}>/ PRODUCT BUILDER</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.probalab.net"
            className={styles.productLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            ProbaLab <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav aria-label="Navigation mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</Link>
            ))}
            <a href="https://www.probalab.net" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              ProbaLab ↗
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
