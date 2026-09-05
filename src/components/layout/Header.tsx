"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

function closeMobileMenu(event: MouseEvent<HTMLElement>) {
  const details = event.currentTarget.closest("details");
  if (details instanceof HTMLDetailsElement) details.open = false;
}

export default function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    menu.open = false;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    };
    const desktop = window.matchMedia("(min-width: 821px)");
    const onDesktop = () => { if (desktop.matches) menu.open = false; };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [pathname]);

  return (
    <>
      <a href="#contenu" className={styles.skipLink}>Aller au contenu</a>
      <header className={styles.header}>
        <div className={`shell ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} aria-label="Pierre Laurent — accueil">
            <span className={styles.brandMark} aria-hidden="true">p<span>l.</span></span>
            <span className={styles.brandName}>Pierre Laurent<span>Opérations & création numérique</span></span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigation principale">
            {links.map((link, index) => <Link key={link.href} href={link.href} className={styles.navLink} aria-current={pathname === link.href ? "page" : undefined}><span aria-hidden="true">0{index + 1}</span>{link.label}</Link>)}
            <Link href="/cv" className={styles.cvLink} aria-current={pathname === "/cv" ? "page" : undefined}>Mon CV <span aria-hidden="true">↗</span></Link>
          </nav>
          <details className={styles.mobileMenu} ref={menuRef}>
            <summary aria-label="Menu"><span className={styles.menuLabel}>Menu</span><span className={styles.menuIcon} aria-hidden="true"><i /><i /></span></summary>
            <nav aria-label="Navigation mobile">
              {links.map((link, index) => <Link key={link.href} href={link.href} onClick={closeMobileMenu} aria-current={pathname === link.href ? "page" : undefined}><span>0{index + 1}</span>{link.label}<i aria-hidden="true">↗</i></Link>)}
              <Link href="/cv" onClick={closeMobileMenu} aria-current={pathname === "/cv" ? "page" : undefined}><span>04</span>Mon CV<i aria-hidden="true">↗</i></Link>
              <p>Pierre Laurent · Vence, France</p>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
