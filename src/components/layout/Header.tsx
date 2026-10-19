"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, optipro } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import BrandMark from "./BrandMark";
import styles from "./layout.module.css";

const links = [
  { href: "/#savoir-faire", label: "Savoir-faire" },
  { href: "/projets", label: "Réalisations" },
  { href: "/optipro", label: optipro.brand },
  { href: "/a-propos", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

function closeMobileMenu(event: MouseEvent<HTMLElement>) {
  const details = event.currentTarget.closest("details");
  if (details instanceof HTMLDetailsElement) details.open = false;
}

// Le menu mobile est un <details> natif : il s’ouvre sans JavaScript.
// Le script ne fait qu’ajouter la fermeture par Échap, par clic extérieur et au passage en bureau.
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
    const desktop = window.matchMedia("(min-width: 960px)");
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

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <>
      <a href="#contenu" className={styles.skipLink}>Aller au contenu</a>
      <header className={styles.header}>
        <div className={`shell ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} aria-label={`Pierre Laurent, ${optipro.brand}, accueil`}>
            <BrandMark className={styles.mark} />
            Pierre Laurent <small>{optipro.brand}</small>
          </Link>
          <nav className={styles.nav} aria-label="Navigation principale">
            {links.map((link) => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}</Link>)}
          </nav>
          <a className={styles.telTop} href={contact.phoneHref} aria-label={`Appeler le ${contact.phoneDisplay}`}>
            <Icon name="tel" /><span className="num">{contact.phoneDisplay}</span>
          </a>
          <details className={styles.menu} ref={menuRef}>
            <summary aria-label="Menu"><span className={styles.burger} aria-hidden="true" /></summary>
            <nav aria-label="Navigation mobile">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMobileMenu} aria-current={current(link.href)}>{link.label}</Link>)}
              <Link href="/cv" onClick={closeMobileMenu} aria-current={current("/cv")}>Mon CV</Link>
              <p>Pierre Laurent, {contact.city}, {contact.area}</p>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
