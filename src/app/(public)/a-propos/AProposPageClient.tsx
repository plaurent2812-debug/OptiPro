'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import { revealOnScroll, ensureVisibleInViewport } from '@/lib/gsap-reveal';
import styles from './a-propos.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TimelineItem = {
  period: string;
  company: string;
  role: string;
  description: string;
  current?: boolean;
};

const timeline: TimelineItem[] = [
  {
    period: 'Juin 2026 → aujourd\'hui',
    company: 'OptiPro',
    role: 'Fondateur — Développeur web sur mesure pour artisans et TPE',
    description:
      "Je construis des outils web pour artisans et TPE, en missions à périmètre défini. Sites vitrines, web apps, outils métier sur mesure — des projets livrés en temps et en heure. Première réalisation : SAPAL Signalisation, plateforme B2B avec catalogue 2 500+ références, portail client et intégrations API.",
    current: true,
  },
  {
    period: 'Sept. 2025 → Juin 2026',
    company: 'GL Events Live',
    role: 'Responsable Exploitation logistique événementielle',
    description:
      "Pilotage du dépôt événementiel sur la Côte d'Azur, équipe de 6 personnes, coordination des sous-traitants. Tempo serré, terrain mouvant, marges d'erreur quasi nulles — toujours la même logique : anticiper, structurer, livrer.",
  },
  {
    period: 'Nov. 2019 → Sept. 2024',
    company: 'Factory',
    role: 'Responsable Logistique & Exploitation',
    description:
      "Pilotage d'un portefeuille ADV de 7 M€/an, projets d'aménagement de 20 k€ à 1 M€, supervision de 15 à 20 artisans sous-traitants. C'est là que j'ai vu de près ce qui freine vraiment les indépendants : pas le travail terrain, mais les outils qui ne sont pas là.",
  },
  {
    period: 'Janv. 2019 → Nov. 2019',
    company: 'Groupe EDDIFIS',
    role: 'Responsable Logistique — création de filiale',
    description:
      "Création complète d'une filiale depuis zéro : montage de l'entrepôt, déploiement personnel de l'ERP EBP, structuration des process, des stocks, des KPIs et de la facturation. 80 k€/mois de CA en quelques mois. Tout construire depuis la page blanche — la même posture qu'OptiPro propose aux artisans et TPE.",
  },
  {
    period: 'Déc. 2017 → Janv. 2019',
    company: 'DBS Drive',
    role: "Responsable d'agence — robinetterie & chauffage",
    description:
      "Gestion d'une agence avec 8 500 références, en contact quotidien avec des artisans plombiers et chauffagistes. J'ai parlé leur langue pendant plus d'un an. Ça ne s'oublie pas quand on construit des outils pour eux.",
  },
  {
    period: '2015 → 2017',
    company: 'Toute la Nutrition',
    role: "Gestionnaire d'opérations e-commerce",
    description:
      "400 commandes traitées par jour, gestion des stocks, des retours, du SAV. Premier contact avec les flux opérationnels intenses — et la conviction que les bons outils changent tout.",
  },
];

const valeurs = [
  {
    icon: "🏭",
    title: "Profil hybride ops + dev",
    description:
      "Avant d’être développeur, j’ai piloté des flux, coordonné des prestataires et structuré des process. Je comprends vos problèmes métier — pas seulement la technique.",
  },
  {
    icon: "🎯",
    title: "Un seul interlocuteur",
    description:
      "Du premier appel à la mise en ligne : pas de commercial, pas de chef de projet, pas de sous-traitance. C’est moi qui construis votre site ou votre outil.",
  },
  {
    icon: "📋",
    title: "Périmètre défini au devis",
    description:
      "Vous savez ce que vous payez avant de démarrer. Pas de dérive, pas de surprise à la livraison. Le devis détaille chaque livrable.",
  },
  {
    icon: "⚡",
    title: "Reconversion via IA (Claude Code, Cursor)",
    description:
      "J’ai appris le développement en construisant des projets réels — avec les meilleurs outils disponibles. Pas une école, pas un bootcamp — le terrain d’abord.",
  },
];

export default function AProposPageClient() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // ───────────────────────────────────────────────
      // matchMedia : on désactive les animations
      // si l'utilisateur préfère reduced-motion.
      // ───────────────────────────────────────────────
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
            // Reduced motion : on rend tout visible immédiatement.
            const all = rootRef.current?.querySelectorAll<HTMLElement>(
              [
                `.${styles.heroBadge}`,
                `.${styles.heroTitle}`,
                `.${styles.heroSubtitle}`,
                `.${styles.heroMeta}`,
                `.${styles.avatarWrap}`,
                `.${styles.philosophieText} p`,
                `.${styles.timelineItem}`,
                `.${styles.timelineDot}`,
                `.${styles.timelineContent}`,
                `.${styles.formationCard}`,
                `.${styles.valeurCard}`,
                `.${styles.ctaInner}`,
              ].join(', '),
            );
            if (all && all.length > 0) {
              gsap.set(all, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                clearProps: 'transform',
              });
            }
            return;
          }

          // ───────────────────────────────────────────────
          // HERO — timeline staggered au mount
          // ───────────────────────────────────────────────
          // set + to sur des éléments résolus depuis le ref racine (pattern
          // HomePageClient). Un `.from()` par sélecteur string laisserait le
          // contenu à opacity 0 si le tween n'est jamais joué.
          const heroEls = rootRef.current?.querySelectorAll<HTMLElement>(
            [
              `.${styles.heroBadge}`,
              `.${styles.heroTitle}`,
              `.${styles.heroSubtitle}`,
              `.${styles.heroMetaItem}`,
            ].join(', '),
          );
          if (heroEls && heroEls.length > 0) {
            gsap.set(heroEls, { opacity: 0, y: 20, willChange: 'transform, opacity' });
            gsap.to(heroEls, {
              opacity: 1,
              y: 0,
              duration: 0.7,
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

          const avatarEl = rootRef.current?.querySelector<HTMLElement>(
            `.${styles.avatarWrap}`,
          );
          if (avatarEl) {
            gsap.set(avatarEl, { opacity: 0, scale: 0.8 });
            gsap.to(avatarEl, {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              delay: 0.2,
              ease: 'back.out(1.4)',
              overwrite: 'auto',
            });
          }

          // Anneau avatar : rotation continue (remplace l'animation CSS).
          gsap.to(`.${styles.avatarRing}`, {
            rotation: 360,
            transformOrigin: '50% 50%',
            duration: 24,
            repeat: -1,
            ease: 'none',
          });

          // Avatar glow : pulse subtle
          gsap.to(`.${styles.avatarGlow}`, {
            scale: 1.08,
            opacity: 0.85,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          // ───────────────────────────────────────────────
          // PHILOSOPHIE — paragraphes staggered au scroll
          // ───────────────────────────────────────────────
          revealOnScroll(
            rootRef.current?.querySelectorAll<HTMLElement>(
              `.${styles.philosophieText} p`,
            ),
            { y: 30, duration: 0.7, stagger: 0.15, start: 'top 75%' },
          );

          // ───────────────────────────────────────────────
          // PARCOURS — la pièce maîtresse
          // ───────────────────────────────────────────────

          // 1) Ligne verticale "scrubbed" : on anime --line-progress
          //    de 0 à 100 selon la progression dans la liste.
          const timelineList = rootRef.current?.querySelector<HTMLElement>(
            `.${styles.timelineList}`,
          );

          if (timelineList) {
            ScrollTrigger.create({
              trigger: timelineList,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.6,
              onUpdate: (st) => {
                timelineList.style.setProperty(
                  '--line-progress',
                  `${(st.progress * 100).toFixed(2)}%`,
                );
              },
            });
          }

          // 2) Items de la timeline : dot d'abord, puis contenu.
          const items = gsap.utils.toArray<HTMLElement>(
            `.${styles.timelineItem}`,
          );

          items.forEach((item) => {
            const dot = item.querySelector<HTMLElement>(`.${styles.timelineDot}`);
            const content = item.querySelector<HTMLElement>(
              `.${styles.timelineContent}`,
            );

            if (!dot || !content) return;

            const build = () => {
              const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
              tl.set(item, { opacity: 1 })
                .from(dot, {
                  scale: 0,
                  opacity: 0,
                  duration: 0.5,
                  ease: 'back.out(2)',
                  transformOrigin: '50% 50%',
                })
                .from(
                  content,
                  {
                    opacity: 0,
                    x: -24,
                    duration: 0.6,
                  },
                  '-=0.2',
                );
              return tl;
            };

            // Un item déjà visible à l'écran s'anime tout de suite : sinon son
            // dot/contenu restait à opacity 0 en attendant un scroll (le haut
            // de l'item peut être sous la ligne « top 70% » dès le chargement).
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              build();
              return;
            }

            ScrollTrigger.create({
              trigger: item,
              start: 'top 70%',
              once: true,
              onEnter: () => build(),
            });
          });

          // 3) Badge "En poste" : pulsation subtle
          gsap.to(`.${styles.timelineBadge}`, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            transformOrigin: '50% 50%',
          });

          // 4) Carte formation
          revealOnScroll(
            rootRef.current?.querySelectorAll<HTMLElement>(
              `.${styles.formationCard}`,
            ),
            { y: 24, duration: 0.7, start: 'top 85%' },
          );

          // ───────────────────────────────────────────────
          // VALEURS — cards staggered au scroll
          // ───────────────────────────────────────────────
          revealOnScroll(
            rootRef.current?.querySelectorAll<HTMLElement>(
              `.${styles.valeurCard}`,
            ),
            { y: 40, duration: 0.7, stagger: 0.15, start: 'top 80%' },
          );

          // ───────────────────────────────────────────────
          // CTA — fade + bouton subtle pulse
          // ───────────────────────────────────────────────
          revealOnScroll(
            rootRef.current?.querySelectorAll<HTMLElement>(
              `.${styles.ctaInner}`,
            ),
            { y: 30, duration: 0.8, start: 'top 75%' },
          );

          // Subtle glow pulse sur le CTA principal
          const ctaBtn = rootRef.current?.querySelector<HTMLElement>(
            `.${styles.ctaActions} a:first-child`,
          );

          if (ctaBtn) {
            gsap.to(ctaBtn, {
              boxShadow: '0 0 28px rgba(249, 115, 22, 0.55)',
              duration: 2.2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }

          // Filet de sécurité : rien de visible à l'écran ne doit rester masqué
          // après un recalcul de layout (polices web, images).
          ScrollTrigger.addEventListener('refresh', () =>
            ensureVisibleInViewport(
              rootRef.current?.querySelectorAll<HTMLElement>(
                [
                  `.${styles.philosophieText} p`,
                  `.${styles.timelineItem}`,
                  `.${styles.timelineDot}`,
                  `.${styles.timelineContent}`,
                  `.${styles.formationCard}`,
                  `.${styles.valeurCard}`,
                  `.${styles.ctaInner}`,
                ].join(', '),
              ),
            ),
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <main className={styles.main} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBgGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Fondateur · OptiPro · Dev web sur mesure</span>
            <h1 className={styles.heroTitle}>Pierre Laurent</h1>
            <p className={styles.heroSubtitle}>
              Pendant 10 ans, j&apos;ai été responsable d&apos;exploitation en logistique.
              En 2026, j&apos;ai appris le développement via Claude Code et Cursor — et je
              construis maintenant des sites et outils web sur mesure pour artisans et TPE
              qui veulent digitaliser leur activité.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Basé à Vence (06)
              </span>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Anglais bilingue
              </span>
              <span className={styles.heroMetaItem}>
                <span className={styles.heroMetaDot} />
                Interlocuteur unique
              </span>
            </div>
          </div>

          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <div className={styles.avatar}>
              <Image
                src="/pierre-laurent.png"
                alt="Pierre Laurent, fondateur d'OptiPro"
                width={180}
                height={180}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                priority
              />
            </div>
            <div className={styles.avatarGlow} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className={styles.philosophie}>
        <div className="container">
          <div className={styles.philosophieInner}>
            <span className={styles.sectionLabel}>Pourquoi OptiPro</span>
            <h2 className={styles.sectionTitle}>
              J&apos;ai vu les mêmes problèmes pendant dix ans.
            </h2>
            <div className={styles.philosophieText}>
              <p>
                J&apos;ai passé dix ans à côtoyer des artisans — chez DBS Drive au comptoir avec des plombiers
                et chauffagistes, chez Factory à superviser 15 à 20 sous-traitants sur des chantiers
                d&apos;aménagement, chez Eddifis à déployer un ERP de zéro. À chaque fois, le même constat :
                des outils qui ne sont pas là, ou qui ne correspondent pas au terrain.
              </p>
              <p>
                En 2026, j&apos;ai décidé de construire ces outils moi-même. Pas en suivant une formation
                classique — en apprenant via Claude Code et Cursor, en construisant des projets réels.
                La première réalisation concrète : SAPAL Signalisation, une plateforme B2B avec
                catalogue 2 500+ références, portail client et intégrations API.
              </p>
              <p>
                Mon avantage : je comprends le métier avant de comprendre la technique. Quand un artisan
                me parle de suivi de chantiers ou de bon de commande fournisseur, je sais exactement
                de quoi il s&apos;agit — parce que je l&apos;ai vécu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className={styles.parcours}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Mon parcours</span>
            <h2 className={styles.sectionTitle}>10 ans d&apos;opérations. Maintenant développeur.</h2>
            <p className={styles.sectionLead}>
              De 400 commandes/jour à un portefeuille ADV de 7 M€, en passant par
              la création d&apos;une filiale de zéro — chaque étape m&apos;a appris
              ce que coûte un outil absent ou mal conçu.
            </p>
          </div>

          <ol className={styles.timelineList}>
            {timeline.map((item, idx) => (
              <li
                key={item.company + idx}
                className={`${styles.timelineItem} ${item.current ? styles.timelineItemCurrent : ''}`}
              >
                <div className={styles.timelineDot}>
                  <span className={styles.timelineDotInner} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                    {item.current && (
                      <span className={styles.timelineBadge}>En poste</span>
                    )}
                  </div>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <p className={styles.timelineCompany}>{item.company}</p>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.formationCard}>
            <span className={styles.formationLabel}>Formation</span>
            <p className={styles.formationText}>
              <strong>Bac Pro Option Commerce</strong> — Afipe (2008–2010)
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs / Comment je travaille */}
      <section className={styles.valeurs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Comment je travaille</span>
            <h2 className={styles.sectionTitle}>Ce qui me différencie.</h2>
          </div>

          <div className={styles.valeursGrid}>
            {valeurs.map((v) => (
              <article key={v.title} className={styles.valeurCard}>
                <div className={styles.valeurIcon} aria-hidden="true">{v.icon}</div>
                <h3 className={styles.valeurTitle}>{v.title}</h3>
                <p className={styles.valeurDesc}>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>On commence par un appel.</h2>
            <p className={styles.ctaText}>
              30 minutes pour parler de votre projet. Si c&apos;est réalisable, je vous envoie
              un devis avec un périmètre et des livrables définis. Sinon, je vous dis pourquoi.
            </p>
            <div className={styles.ctaActions}>
              <Button href="/contact" variant="primary">
                Réserver mon appel découverte gratuit
              </Button>
              <Link href="/tarifs" className={styles.ctaLink}>
                Voir les tarifs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
