'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComparisonCards from '@/components/ui/ComparisonCards';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_HOMEPAGE } from '@/data/faq';
import styles from './home.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Toggle quand le 1er Fondateur signera et autorisera la publication d'un témoignage.
const SHOW_TESTIMONIALS = false;

const PROBLEM_POINTS: { title: string; desc: string }[] = [
  {
    title: 'Devis qui partent en retard',
    desc: "Vos prospects signent ailleurs pendant que vous repoussez la paperasse au soir.",
  },
  {
    title: 'Factures impayées qui dorment',
    desc: 'Sans relance régulière, ce sont des milliers d’euros qui restent bloqués chaque mois.',
  },
  {
    title: 'L’admin qui mange vos soirées',
    desc: 'Vous facturez 35h mais vous en travaillez 60 — la moitié sans valeur ajoutée.',
  },
];

const SOLUTION_CARDS: { icon: string; title: string; desc: string }[] = [
  {
    icon: '📄',
    title: 'Devis',
    desc: "Structurés, rapides, conformes. Envoyés sans délai après votre brief.",
  },
  {
    icon: '💰',
    title: 'Facturation',
    desc: "Émission, envoi, suivi des paiements. Conforme à la facturation électronique 2026-2027.",
  },
  {
    icon: '📊',
    title: 'Trésorerie',
    desc: "Suivi de vos encaissements et décaissements. Vous savez où vous en êtes.",
  },
  {
    icon: '📋',
    title: 'Préparation comptable',
    desc: "Dossier mensuel propre, FEC à jour, factures classées. Votre comptable gagne du temps.",
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
          const revealTargets = rootRef.current?.querySelectorAll<HTMLElement>(
            '[data-reveal]',
          );
          revealTargets?.forEach((target) => {
            gsap.set(target, {
              opacity: 0,
              y: reduced ? 0 : 30,
            });
            ScrollTrigger.create({
              trigger: target,
              start: 'top 85%',
              once: true,
              onEnter: () => {
                target.style.willChange = 'transform, opacity';
                gsap.to(target, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  onComplete: () => {
                    target.style.willChange = 'auto';
                  },
                });
              },
            });
          });
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef}>
      {/* ===== Section 1 — HERO (refonte mai 2026, inspiration pierrelegoux.fr) ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.bgGrid} />
        </div>

        <h1 className={styles.headline}>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0s' }}>Le</span>{' '}
            <span className={`${styles.word} ${styles.brandWord}`} style={{ animationDelay: '0.08s' }}>bras</span>{' '}
            <span className={`${styles.word} ${styles.brandWord}`} style={{ animationDelay: '0.16s' }}>droit</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.24s' }}>des</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.32s' }}>artisans,</span>
          </span>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: '0.45s' }}>indépendants</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.53s' }}>et</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.61s' }}>TPE</span>{' '}
            <span className={styles.word} style={{ animationDelay: '0.69s' }}>en</span>{' '}
            <span className={`${styles.word} ${styles.brandWord}`} style={{ animationDelay: '0.77s' }}>PACA.</span>
          </span>
        </h1>

        <p className={styles.sub}>
          Vous restez sur le terrain. Je m&apos;occupe du reste — devis, factures, fournisseurs,
          suivi. Mission ponctuelle ou accompagnement régulier, à partir de 650&nbsp;€/mois.
        </p>

        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnPrimary}>
            Réserver un appel gratuit <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/tarifs" className={styles.btnSecondary}>
            Voir les tarifs
          </Link>
        </div>

        <a href="#hero-next" className={styles.scrollHint} aria-label="Faire défiler vers la suite">
          <span>Découvrir</span>
          <span className={styles.scrollHintArrow} aria-hidden="true" />
        </a>
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
            <strong style={{ color: 'var(--primary)' }}>OptiPro</strong> est le bras droit administratif et opérationnel des artisans, indépendants et TPE en PACA. Mission ponctuelle à <strong style={{ color: 'var(--primary)' }}>75 €/h</strong> ou pack mensuel dès <strong style={{ color: 'var(--primary)' }}>650 €/mois</strong> — période d&apos;essai 30 jours sans frais.
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

      {/* ===== Section 3 — BLOC SOLUTION ===== */}
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
            margin: '0 0 1rem',
          }}
        >
          Voilà ce que je prends en charge pour vous
        </h2>
        <p
          data-reveal
          style={{
            textAlign: 'center',
            color: 'var(--secondary)',
            maxWidth: '620px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
          }}
        >
          Tout votre admin opérationnel, pris en charge — sur mesure, à l&apos;heure ou en pack mensuel.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {SOLUTION_CARDS.map((s) => (
            <article
              key={s.title}
              data-reveal
              style={{
                padding: '1.75rem',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{ fontSize: '2rem', lineHeight: 1 }}
              >
                {s.icon}
              </span>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  margin: 0,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'var(--secondary)',
                  lineHeight: 1.55,
                }}
              >
                {s.desc}
              </p>
            </article>
          ))}
        </div>
        <p
          data-reveal
          style={{
            textAlign: 'center',
            color: 'var(--secondary)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
          }}
        >
          + Frais &amp; dépenses (OCR auto), Planning &amp; RDV, Coordination
          fournisseurs.
        </p>
      </section>

      {/* ===== Section 4 — BLOC COMPARAISON ===== */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <div data-reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--primary)',
              margin: '0 0 1rem',
            }}
          >
            Pourquoi pas un(e) assistant(e) classique ?
          </h2>
          <p
            style={{
              color: 'var(--secondary)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Comparé aux solutions traditionnelles, voilà ce que vous gagnez.
          </p>
        </div>
        <div data-reveal>
          <ComparisonCards />
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
          Prêt à libérer 5 à 10h par semaine ?
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
