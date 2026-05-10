'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MockupTableauDeBord from '@/components/ui/MockupTableauDeBord';
import ComparisonCards from '@/components/ui/ComparisonCards';
import FondateurBanner from '@/components/ui/FondateurBanner';
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
    desc: 'Envoyés sous 1h après votre vocal WhatsApp. Signature en ligne.',
  },
  {
    icon: '💰',
    title: 'Facturation',
    desc: 'Émission, envoi, relances auto. Conforme à la facturation électronique 2026-2027.',
  },
  {
    icon: '📊',
    title: 'Trésorerie',
    desc: 'Tableau de bord temps réel. Plus jamais de surprise sur le compte.',
  },
  {
    icon: '📋',
    title: 'Comptable',
    desc: 'Dossier mensuel propre, FEC à jour. Votre comptable vous remerciera.',
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
          Le bras droit administratif des artisans.
        </h1>

        {/* Sous-titre 3 lignes — punch */}
        <div
          data-hero-anim
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'var(--secondary)',
              fontWeight: 500,
              margin: 0,
            }}
          >
            Plus rapide qu&apos;un(e) assistant(e).
          </p>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'var(--secondary)',
              fontWeight: 500,
              margin: 0,
            }}
          >
            Moins cher qu&apos;un mi-temps.
          </p>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'var(--accent)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Plus complet que les deux.
          </p>
        </div>

        {/* Description */}
        <p
          data-hero-anim
          style={{
            fontSize: '1.1rem',
            color: 'var(--secondary)',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 1.5rem',
          }}
        >
          Devis, factures, trésorerie, relances — tout est piloté pour vous, à
          partir de{' '}
          <strong style={{ color: 'var(--primary)' }}>750€/mois</strong>. Avec un
          tableau de bord temps réel inclus.
        </p>

        {/* Rassurance comptable */}
        <div
          data-hero-anim
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1.25rem',
            background: 'rgba(22, 163, 74, 0.08)',
            border: '1px solid rgba(22, 163, 74, 0.25)',
            borderRadius: '999px',
            marginBottom: '2.5rem',
            fontSize: '0.95rem',
            color: 'var(--secondary)',
          }}
        >
          <span aria-hidden="true" style={{ color: '#16a34a', fontWeight: 800 }}>
            ✓
          </span>
          <span>
            Votre comptable garde son rôle. Je m&apos;occupe du reste : tout
            l&apos;admin opérationnel.
          </span>
        </div>

        {/* CTA double */}
        <div
          data-hero-anim
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem',
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

        {/* Bandeau Fondateur */}
        <div
          data-hero-anim
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '999px',
            fontSize: '0.85rem',
            color: 'var(--accent)',
            fontWeight: 600,
          }}
        >
          <span aria-hidden="true">⚡</span>
          <span>
            3 places Fondateur disponibles — tarif progressif sur 6 mois
          </span>
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
          Tout votre admin opérationnel, géré par un humain (moi) avec des
          outils qui automatisent le répétitif.
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

      {/* ===== Section 4 — BLOC TABLEAU DE BORD ===== */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <div
          data-reveal
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '780px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--primary)',
              margin: '0 0 1rem',
            }}
          >
            Vous gardez la main grâce à votre tableau de bord en temps réel
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              textAlign: 'left',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <li
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                color: 'var(--secondary)',
              }}
            >
              <span
                aria-hidden="true"
                style={{ color: 'var(--accent)', fontWeight: 700 }}
              >
                ✓
              </span>
              <span>Tout est à jour en permanence</span>
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                color: 'var(--secondary)',
              }}
            >
              <span
                aria-hidden="true"
                style={{ color: 'var(--accent)', fontWeight: 700 }}
              >
                ✓
              </span>
              <span>Vous voyez ce que je fais, sans avoir à demander</span>
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                color: 'var(--secondary)',
              }}
            >
              <span
                aria-hidden="true"
                style={{ color: 'var(--accent)', fontWeight: 700 }}
              >
                ✓
              </span>
              <span>Notifs Telegram ou Push pour les événements importants</span>
            </li>
          </ul>
        </div>
        <div data-reveal>
          <MockupTableauDeBord />
        </div>
      </section>

      {/* ===== Section 5 — BLOC COMPARAISON ===== */}
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

      {/* ===== Section 6 — BLOC TÉMOIGNAGE (caché tant que pas de Fondateur signé) ===== */}
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

      {/* ===== Section 7 — BLOC FONDATEUR ===== */}
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <div data-reveal>
          <FondateurBanner variant="inline" />
        </div>
      </section>

      {/* ===== Section 8 — FAQ ===== */}
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

      {/* ===== Section 9 — CTA FINAL ===== */}
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
          Prêt à libérer 8-10h/mois et à reprendre la main sur votre admin ?
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
