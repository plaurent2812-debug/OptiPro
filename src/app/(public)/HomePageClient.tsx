'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_HOMEPAGE } from '@/data/faq';
import { revealOnScroll, ensureVisibleInViewport } from '@/lib/gsap-reveal';
import styles from './home.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Toggle quand le 1er Fondateur signera et autorisera la publication d'un témoignage.
const SHOW_TESTIMONIALS = false;

const PROBLEM_POINTS: { title: string; desc: string }[] = [
  {
    title: 'Pas de site professionnel',
    desc: "Vos concurrents sont trouvables sur Google. Vous perdez des clients avant même qu'ils vous appellent.",
  },
  {
    title: 'Site obsolète, jamais mis à jour',
    desc: "Horaires incorrects, photos floues, formulaire cassé — chaque visiteur repart chez la concurrence.",
  },
  {
    title: 'Process métier sur papier ou Excel',
    desc: "Suivi de chantiers, catalogue produits, bons de commande — tout ce qui se gère à la main peut devenir un outil simple et fiable.",
  },
];

const OFFER_CARDS: {
  title: string;
  desc: string;
  badge?: string;
  highlight?: boolean;
}[] = [
  {
    title: 'Site vitrine — 990 €',
    desc: '3 à 4 pages, hébergement 1 an, domaine, email pro.',
    badge: 'Livré en 3 semaines',
  },
  {
    title: 'Site vitrine Pro — 1 390 €',
    desc: '+ formulaire fonctionnel, Google My Business, SEO local.',
    badge: 'Recommandé',
    highlight: true,
  },
  {
    title: 'Web app / outil métier — Sur devis',
    desc: 'Plateforme sur mesure — catalogue, portail client, gestion de chantiers.',
  },
  {
    title: 'Maintenance — dès 79 €/mois',
    desc: '1 à 2h/mois : mises à jour de contenu, petites évolutions.',
  },
];

export default function HomePageClient() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motionOk: '(prefers-reduced-motion: no-preference)',
          motionReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const conditions = context.conditions as
            | { motionOk: boolean; motionReduced: boolean }
            | undefined;
          if (!conditions) return;
          const reduced = conditions.motionReduced;

          // ===== HERO INTRO =====
          const heroEls = rootRef.current?.querySelectorAll<HTMLElement>(
            '[data-hero-anim]',
          );
          if (heroEls && heroEls.length > 0 && !reduced) {
            gsap.set(heroEls, {
              opacity: 0,
              y: 20,
              willChange: 'transform, opacity',
            });
            gsap.to(heroEls, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
              onComplete: () => {
                heroEls.forEach((el) => {
                  el.style.willChange = 'auto';
                });
              },
            });
          }

          // ===== SCROLL REVEAL on cards/sections =====
          // Les éléments déjà visibles au chargement sont révélés sans attendre
          // un scroll (leur haut pouvait être sous la ligne « top 85% »).
          const revealTargets = rootRef.current?.querySelectorAll<HTMLElement>(
            '[data-reveal]',
          );
          revealOnScroll(revealTargets, {
            y: 30,
            duration: 0.6,
            stagger: 0.08,
            start: 'top 85%',
            reduced,
          });

          ScrollTrigger.addEventListener('refresh', () =>
            ensureVisibleInViewport(revealTargets),
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef}>
      {/* ===== Section 1 — HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.bgGrid} />
        </div>

        <h1 className={styles.headline}>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0s' }}>Je</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.08s' }}>construis</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.16s' }}>les</span>{' '}
            <span className={`${styles.word} ${styles.brandWord}`} style={{ animationDelay: '0.24s' }}>outils</span>{' '}
            <span className={`${styles.word} ${styles.brandWord}`} style={{ animationDelay: '0.32s' }}>web</span>
          </span>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0.45s' }}>que</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.53s' }}>vos</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.61s' }}>concurrents</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.69s' }}>n&apos;ont</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.77s' }}>pas</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.85s' }}>encore.</span>
          </span>
        </h1>

        <p className={styles.sub}>
          Sites vitrines, web apps et outils métier sur mesure pour artisans et TPE en PACA.
          Premier appel gratuit — périmètre et livrables définis au devis.
        </p>

        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnPrimary}>
            Réserver un appel gratuit <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/tarifs" className={styles.btnSecondary}>
            Voir les tarifs
          </Link>
        </div>
      </section>

      {/* ===== Section 1 bis — RÉPONSE DIRECTE (pour LLM/AI Overviews) ===== */}
      <section
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
          scrollMarginTop: 'var(--header-height)',
        }}
      >
        <div
          data-reveal
          style={{
            padding: '2rem 2.25rem',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            lineHeight: 1.75,
            color: 'var(--secondary)',
            fontSize: '1.05rem',
          }}
        >
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--primary)' }}>OptiPro</strong> est le dev opérationnel des artisans, indépendants et TPE en PACA. Sites vitrines à partir de <strong style={{ color: 'var(--primary)' }}>990&nbsp;€</strong>, web apps et outils métier sur mesure. Premier appel gratuit — périmètre et livrables définis au devis, pas d&apos;engagement horaire.
          </p>
        </div>
      </section>

      {/* ===== Section 2 — BLOC PROBLÈME ===== */}
      <section
        id="hero-next"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
          scrollMarginTop: 'var(--header-height)',
        }}
      >
        <h2
          data-reveal
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--primary)',
            textAlign: 'center',
            margin: '0 0 3rem',
          }}
        >
          Vous reconnaissez ces situations ?
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROBLEM_POINTS.map((p) => (
            <article
              key={p.title}
              data-reveal
              style={{
                padding: '1.75rem',
                background: 'rgba(220, 38, 38, 0.04)',
                border: '1px solid rgba(220, 38, 38, 0.15)',
                borderRadius: '1rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}
              >
                🔴
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'var(--secondary)',
                  lineHeight: 1.55,
                }}
              >
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Section 3 — MES PRESTATIONS ===== */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <h2
          data-reveal
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--primary)',
            textAlign: 'center',
            margin: '0 0 3rem',
          }}
        >
          Mes prestations
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {OFFER_CARDS.map((card) => (
            <article
              key={card.title}
              data-reveal
              style={{
                padding: '1.75rem',
                background: 'var(--background)',
                border: card.highlight
                  ? '2px solid var(--accent)'
                  : '1px solid var(--border)',
                borderRadius: '1rem',
                boxShadow: card.highlight
                  ? '0 8px 32px rgba(249, 115, 22, 0.15)'
                  : undefined,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {card.badge && (
                <span
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    padding: '0.25rem 0.75rem',
                    background: card.highlight
                      ? 'var(--accent)'
                      : 'var(--border)',
                    color: card.highlight ? '#fff' : 'var(--primary)',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  {card.badge}
                </span>
              )}
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  margin: 0,
                  lineHeight: 1.35,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'var(--secondary)',
                  lineHeight: 1.55,
                }}
              >
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Section 5 — BLOC TÉMOIGNAGE (caché tant que pas de Fondateur signé) ===== */}
      {SHOW_TESTIMONIALS && (
        <section
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem 5rem',
          }}
        >
          {/* Sera rempli au M3 du premier Fondateur */}
        </section>
      )}

      {/* ===== Section 6 — FAQ ===== */}
      <section
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <h2
          data-reveal
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'var(--primary)',
            textAlign: 'center',
            margin: '0 0 2.5rem',
          }}
        >
          Questions fréquentes
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          {FAQ_HOMEPAGE.map((item) => (
            <div key={item.question} data-reveal>
              <AccordionItem title={item.question}>
                <p style={{ margin: 0 }}>{item.answer}</p>
              </AccordionItem>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Section 7 — CTA FINAL ===== */}
      <section
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
          textAlign: 'center',
        }}
      >
        <h2
          data-reveal
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--primary)',
            margin: '0 0 1rem',
          }}
        >
          Discutons de votre projet.
        </h2>
        <Link
          href="/contact"
          data-reveal
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'var(--primary)',
            color: 'var(--on-primary)',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.05rem',
          }}
        >
          Réserver mon appel découverte gratuit
        </Link>
      </section>
    </main>
  );
}
