"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/data/offer";
import PhoneIcon from "./PhoneIcon";
import styles from "./layout.module.css";

const links = [
  { href: "/optipro", label: "Sites pour entreprises" },
  { href: "/projets", label: "Réalisations" },
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
    const desktop = window.matchMedia("(min-width: 981px)");
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
            <span className={styles.brandMark} aria-hidden="true">PL</span>
            <span className={styles.brandName}>Pierre Laurent<span>Opérations, applications, sites</span></span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigation principale">
            {links.map((link) => <Link key={link.href} href={link.href} className={styles.navLink} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
            <a href={contact.phoneHref} className={styles.phoneButton}><PhoneIcon />{contact.phoneDisplay}</a>
          </nav>
          <a href={contact.phoneHref} className={styles.phoneIconButton} aria-label={`Appeler le ${contact.phoneDisplay}`}><PhoneIcon /></a>
          <details className={styles.mobileMenu} ref={menuRef}>
            <summary aria-label="Menu"><span className={styles.menuLabel}>Menu</span><span className={styles.menuIcon} aria-hidden="true"><i /><i /></span></summary>
            <nav aria-label="Navigation mobile">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMobileMenu} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
              <Link href="/cv" onClick={closeMobileMenu} aria-current={pathname === "/cv" ? "page" : undefined}>Mon CV</Link>
              <a href={contact.phoneHref} className={styles.menuPhone}><PhoneIcon />Appeler le {contact.phoneDisplay}</a>
              <p>Pierre Laurent, {contact.city}, {contact.area}</p>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
