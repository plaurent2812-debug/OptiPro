'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComparisonCards from '@/components/ui/ComparisonCards';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_HOMEPAGE } from '@/data/faq';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Toggle quand le 1er Fondateur signera et autorisera la publication d'un témoignage.
const SHOW_TESTIMONIALS = false;

const PROBLEM_POINTS: { title: string; desc: string }[] = [
  {
    title: 'Devis envoyés 3 jours après la visite',
    desc: "Le client a déjà appelé un autre artisan.",
  },
  {
    title: "Factures impayées qui s'accumulent",
    desc: 'Vous oubliez de relancer, vous perdez 2-5k€/mois sans le voir.',
  },
  {
    title: 'Aucune visibilité sur votre trésorerie',
    desc: 'Vous ne savez jamais vraiment ce qui rentre, ce qui sort, ce qui reste à encaisser.',
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
      {/* ===== Section 1 — HERO ===== */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        <h1
          data-hero-anim
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
            fontWeight: 800,
            color: 'var(--primary)',
            lineHeight: 1.1,
            margin: '0 0 1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Le bras droit des artisans, indépendants et TPE.
        </h1>

        <p
          data-hero-anim
          style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
            color: 'var(--secondary)',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: '0 auto 2rem',
          }}
        >
          Pas un assistant. Pas un consultant. Quelqu&apos;un qui prend en charge ce qui vous freine —
          devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en
          accompagnement régulier.
        </p>

        <p
          data-hero-anim
          style={{
            fontSize: '1.1rem',
            color: 'var(--primary)',
            fontWeight: 600,
            margin: '0 0 2.5rem',
          }}
        >
          Je gère, vous restez sur le terrain.{' '}
          <span style={{ color: 'var(--accent)' }}>À partir de 600€/mois.</span>
        </p>

        <div
          data-hero-anim
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/contact"
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
            Réserver mon appel découverte (gratuit)
          </Link>
          <Link
            href="/tarifs"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'transparent',
              color: 'var(--primary)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
            }}
          >
            Voir les tarifs
          </Link>
        </div>
      </section>

      {/* ===== Section 2 — BLOC PROBLÈME ===== */}
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
          prestataires.
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
          Réserver mon appel découverte (gratuit, 30 min)
        </Link>
      </section>
    </main>
  );
}
