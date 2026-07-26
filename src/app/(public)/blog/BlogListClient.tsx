'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { formatDateFr } from '@/lib/blog';
import { revealOnScroll, ensureVisibleInViewport } from '@/lib/gsap-reveal';
import styles from './blog-list.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Seuls les champs réellement affichés dans les cartes. On ne passe
 * volontairement PAS l'objet `Article` complet : son champ `contenu` (le HTML
 * intégral de l'article, ~76 KB cumulés) serait sérialisé dans le payload RSC
 * de la page liste sans jamais être rendu.
 */
export type ArticleCard = {
  slug: string;
  titre: string;
  description: string;
  datePublication: string;
  tempsLecture: number;
  categorie: string;
};

type BlogListClientProps = {
  articles: ArticleCard[];
};

export default function BlogListClient({ articles }: BlogListClientProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMotion: '(prefers-reduced-motion: no-preference)',
          isReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const conditions = context.conditions as
            | { isMotion: boolean; isReduced: boolean }
            | undefined;

          if (!conditions || conditions.isReduced) {
            const all = rootRef.current?.querySelectorAll<HTMLElement>(
              [
                `.${styles.eyebrow}`,
                `.${styles.h1}`,
                `.${styles.subtitle}`,
                `.${styles.card}`,
                `.${styles.bottomCta}`,
              ].join(', '),
            );
            if (all && all.length > 0) {
              gsap.set(all, { opacity: 1, y: 0, clearProps: 'transform' });
            }
            return;
          }

          // ───────────────────────────────────────────────
          // HERO — entrée staggered
          // ───────────────────────────────────────────────
          // set + to (et non `from`) sur des éléments résolus depuis le ref racine :
          // même pattern que HomePageClient. Un `gsap.from` par sélecteur string
          // laisse le contenu à opacity 0 si le tween n'est jamais joué.
          const heroEls = rootRef.current?.querySelectorAll<HTMLElement>(
            [`.${styles.eyebrow}`, `.${styles.h1}`, `.${styles.subtitle}`].join(', '),
          );
          if (heroEls && heroEls.length > 0) {
            gsap.set(heroEls, { opacity: 0, y: 20, willChange: 'transform, opacity' });
            gsap.to(heroEls, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
              overwrite: 'auto',
              onComplete: () => {
                heroEls.forEach((el) => {
                  el.style.willChange = 'auto';
                });
              },
            });
          }

          // ───────────────────────────────────────────────
          // Cards — révélation au scroll
          // Les cartes déjà à l'écran (même partiellement) sont révélées
          // immédiatement : `ScrollTrigger.batch` les laissait à opacity 0
          // quand leur haut tombait sous la ligne « top 88% ».
          // ───────────────────────────────────────────────
          const cards = rootRef.current?.querySelectorAll<HTMLElement>(
            `.${styles.card}`,
          );
          revealOnScroll(cards, { y: 40, duration: 0.7, stagger: 0.12 });

          // ───────────────────────────────────────────────
          // Bottom CTA
          // ───────────────────────────────────────────────
          revealOnScroll(
            rootRef.current?.querySelectorAll<HTMLElement>(
              `.${styles.bottomCta}`,
            ),
            { y: 30, duration: 0.8, start: 'top 85%' },
          );

          // Filet de sécurité : une fois les polices et le layout stabilisés,
          // rien de visible à l'écran ne doit rester masqué.
          ScrollTrigger.addEventListener('refresh', () =>
            ensureVisibleInViewport(cards),
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>Ressources</div>
            <h1 className={styles.h1}>Ressources &amp; conseils</h1>
            <p className={styles.subtitle}>
              Site internet, outils métier, automatisation et IA : des guides
              concrets pour artisans et TPE, sans jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section>
        <div className="container">
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardMeta}>
                  <span className={styles.badge}>{article.categorie}</span>
                  <span className={styles.metaText}>
                    {formatDateFr(article.datePublication)}
                  </span>
                  <span className={styles.metaSep}>·</span>
                  <span className={styles.metaText}>
                    {article.tempsLecture} min
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{article.titre}</h2>
                <p className={styles.cardDescription}>{article.description}</p>
                <span className={styles.cardCta}>Lire l&apos;article →</span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <h2 className={styles.bottomCtaTitle}>
              Besoin d&apos;aide sur votre cas ?
            </h2>
            <p className={styles.bottomCtaText}>
              30 minutes au téléphone pour parler de votre situation. Je vous dis
              honnêtement si je peux vous être utile et comment. Si oui, on
              enchaîne sur un vrai audit. Si non, je vous oriente. Sans engagement.
            </p>
            <Link href="/contact" className={styles.bottomCtaButton}>
              Réserver un premier appel →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
