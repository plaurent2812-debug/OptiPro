"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "Parcours pro" },
  { href: "/contact", label: "Contact" },
];

function closeMobileMenu(event: MouseEvent<HTMLElement>) {
  const details = event.currentTarget.closest("details");

  if (details instanceof HTMLDetailsElement) {
    details.open = false;
  }
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.headerInner}`}>
        <Link href="/" className={styles.brand} aria-label="Pierre Laurent — accueil">
          <span className={styles.brandMark} aria-hidden="true">PL<span>.</span></span>
          <span className={styles.brandName}>Pierre Laurent</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link href="/cv" className={styles.cvLink} aria-current={pathname === "/cv" ? "page" : undefined}>CV <span aria-hidden="true">↗</span></Link>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav aria-label="Navigation mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>
            ))}
            <Link href="/cv" onClick={closeMobileMenu} aria-current={pathname === "/cv" ? "page" : undefined}>Consulter mon CV ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
