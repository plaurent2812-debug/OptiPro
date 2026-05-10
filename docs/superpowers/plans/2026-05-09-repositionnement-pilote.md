# Repositionnement OptiPro — Offre "Pilote" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pivoter le site opti-pro.fr d'une offre "conseil & dev sur mesure" vers une offre récurrente "Pilote" (assistant admin externalisé pour artisans bâtiment) avec 5 nouvelles pages, refonte homepage, formulaire qualifiant V2, et programme Fondateur 3 slots.

**Architecture:** Next.js 16 App Router + React 19 + TypeScript. Pas de Tailwind, pas de CSS Modules : styles inline (`style={{...}}`) avec variables CSS (`var(--primary)`, etc.). Pattern Server Component (metadata + JSON-LD) + Client Component (animations GSAP) déjà éprouvé. Composants partagés dans `src/components/ui/`. Données structurées dans `src/data/`. JSON-LD via balise `<script type="application/ld+json">{JSON.stringify(data)}</script>` (pattern déjà utilisé dans `layout.tsx:124` et `services/page.tsx:100-103`). Tests Jest pour la logique pure ; vérification visuelle via Lighthouse en fin de plan.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Resend (emails), Supabase (CRM), GSAP (animations existantes à conserver), Jest (tests). Pas d'ajout de dépendances majeures.

---

## File Structure

### Fichiers à créer

| Fichier | Responsabilité |
|---|---|
| `src/data/pricing.ts` | Source unique des forfaits Pilote (30/60/100), options, programme Fondateur, mises en route |
| `src/data/comparison.ts` | Données des 3 cartes "vs assistant·e / vs mi-temps / vs cabinet comptable" |
| `src/data/faq.ts` | FAQ centralisées (homepage, tarifs) avec helper JSON-LD |
| `src/components/ui/PricingCard.tsx` | Carte forfait Pilote (réutilisable Homepage + Tarifs) |
| `src/components/ui/ComparisonCards.tsx` | Bloc 3 cartes humaines de comparaison |
| `src/components/ui/MockupTableauDeBord.tsx` | Mockup illustré mobile + desktop côte à côte |
| `src/components/ui/FondateurBanner.tsx` | Bandeau "3 places Fondateurs" (sticky + variantes inline) |
| `src/components/ui/AccordionItem.tsx` | Item accordéon dépliable (Méthode étape 2 et FAQ) |
| `src/components/ui/TimelineMethode.tsx` | Timeline 4 étapes pour /methode |
| `src/components/ui/AutomatedVsHuman.tsx` | Bloc 2 colonnes 70%/30% pour /pourquoi-ce-prix |
| `src/components/seo/FAQJsonLd.tsx` | Génération JSON-LD FAQPage à partir de `faq.ts` |
| `src/components/seo/OfferCatalogJsonLd.tsx` | Génération JSON-LD OfferCatalog forfaits Pilote |
| `src/app/(public)/le-service/page.tsx` | Page server `/le-service` |
| `src/app/(public)/le-service/LeServiceClient.tsx` | Client component avec animations |
| `src/app/(public)/tarifs/page.tsx` | Page server `/tarifs` |
| `src/app/(public)/tarifs/TarifsClient.tsx` | Client component |
| `src/app/(public)/methode/page.tsx` | Page server `/methode` |
| `src/app/(public)/methode/MethodeClient.tsx` | Client component |
| `src/app/(public)/pourquoi-ce-prix/page.tsx` | Page server |
| `src/app/(public)/pourquoi-ce-prix/PourquoiClient.tsx` | Client component |
| `src/app/(public)/programme-fondateur/page.tsx` | Page server (P2) |
| `src/app/(public)/programme-fondateur/FondateurClient.tsx` | Client component |
| `src/app/(public)/cgv/page.tsx` | CGV (texte juridique, server seul) |
| `src/app/(public)/services/serrurier/page.tsx` | SEO local serrurier |
| `src/app/(public)/services/electricien/page.tsx` | SEO local électricien |
| `src/app/(public)/temoignages/page.tsx` | Coquille hors-nav |
| `src/data/pricing.test.ts` | Tests Jest sur calculs Fondateur |
| `src/components/ui/PricingCard.test.tsx` | Tests rendu carte forfait |

### Fichiers à modifier

| Fichier | Changement |
|---|---|
| `src/app/(public)/layout.tsx` | Metadata + JSON-LD : nouveau pitch, prix d'entrée 750€, AdministrativeService |
| `src/components/layout/Header.tsx` | Nav 4 entrées : Le service / Tarifs / À propos / Contact |
| `src/components/layout/Footer.tsx` | Ajout lien CGV, retrait Newsletter, retrait Réalisations |
| `src/app/(public)/page.tsx` + `HomePageClient.tsx` | Réécriture homepage |
| `src/app/(public)/services/plombier/page.tsx` | Réécriture angle assistant admin |
| `src/app/(public)/contact/ContactPageClient.tsx` | Formulaire qualifiant V2 |
| `src/app/api/contact/route.ts` | Pré-qualification automatique + nouveaux champs |
| `src/app/(public)/a-propos/AProposPageClient.tsx` | Récit aligné nouveau positionnement |
| `src/app/sitemap.ts` | Nouvelles routes + priorités |
| `next.config.ts` | Redirections 301 |

### Fichiers/dossiers à supprimer

| Chemin | Raison |
|---|---|
| `src/app/dashboard/` | Mockup placeholder inutile |
| `src/app/(public)/creation-site-web-vence/` | Hors scope nouveau positionnement |
| `src/app/api/newsletter/` | Newsletter retirée |
| `src/components/newsletter/` | Idem |
| `src/lib/newsletter/` | Idem |
| `src/app/(public)/services/page.tsx` (la page principale uniquement, pas le dossier) | Remplacée par `/le-service` (déplacement de contenu) |

**Note** : `src/app/(public)/services/restaurateur/` et `src/app/(public)/services/plombier/` sont **conservés** (décision validée dans la spec §6.1). Le dossier `services/` reste en place, on supprime juste la page racine `services/page.tsx` qui sera remplacée par une redirection 301.

---

## Phase A — Fondations (5 tâches)

### Task 1 : Source de données pricing + tests

**Files:**
- Create: `src/data/pricing.ts`
- Test: `src/data/pricing.test.ts`

- [ ] **Step 1: Écrire le test pour les calculs Fondateur**

```typescript
// src/data/pricing.test.ts
import {
  PILOTE_FORFAITS,
  computeFondateurPrice,
  formatPrice,
  MISE_EN_ROUTE_PRICE,
  MISE_EN_ROUTE_FONDATEUR_PRICE,
} from './pricing';

describe('pricing', () => {
  test('PILOTE_FORFAITS has 3 entries with correct prices', () => {
    expect(PILOTE_FORFAITS).toHaveLength(3);
    expect(PILOTE_FORFAITS[0]).toMatchObject({ id: 'pilote-30', price: 750 });
    expect(PILOTE_FORFAITS[1]).toMatchObject({ id: 'pilote-60', price: 1150 });
    expect(PILOTE_FORFAITS[2]).toMatchObject({ id: 'pilote-100', price: 1500 });
  });

  test('mise en route prices', () => {
    expect(MISE_EN_ROUTE_PRICE).toBe(750);
    expect(MISE_EN_ROUTE_FONDATEUR_PRICE).toBe(375);
  });

  test('computeFondateurPrice: M1 = 375 (setup unique)', () => {
    expect(computeFondateurPrice(750, 'M1')).toBe(375);
    expect(computeFondateurPrice(1150, 'M1')).toBe(375);
    expect(computeFondateurPrice(1500, 'M1')).toBe(375);
  });

  test('computeFondateurPrice: M2-M3 = -50% du forfait, arrondi 5€', () => {
    expect(computeFondateurPrice(750, 'M2-M3')).toBe(375);
    expect(computeFondateurPrice(1150, 'M2-M3')).toBe(575);
    expect(computeFondateurPrice(1500, 'M2-M3')).toBe(750);
  });

  test('computeFondateurPrice: M4-M6 = -25% du forfait, arrondi 5€', () => {
    expect(computeFondateurPrice(750, 'M4-M6')).toBe(565);
    expect(computeFondateurPrice(1150, 'M4-M6')).toBe(865);
    expect(computeFondateurPrice(1500, 'M4-M6')).toBe(1125);
  });

  test('computeFondateurPrice: M7+ = tarif plein', () => {
    expect(computeFondateurPrice(750, 'M7+')).toBe(750);
    expect(computeFondateurPrice(1150, 'M7+')).toBe(1150);
  });

  test('formatPrice: euro français avec espace pour milliers', () => {
    expect(formatPrice(750)).toBe('750€');
    expect(formatPrice(1150)).toBe('1 150€');
    expect(formatPrice(1500)).toBe('1 500€');
  });
});
```

- [ ] **Step 2: Lancer le test pour confirmer l'échec**

```bash
npx jest src/data/pricing.test.ts
```

Expected: FAIL "Cannot find module './pricing'"

- [ ] **Step 3: Implémenter `src/data/pricing.ts`**

```typescript
// src/data/pricing.ts

export type PilotePeriod = 'M1' | 'M2-M3' | 'M4-M6' | 'M7+';

export interface PiloteForfait {
  id: 'pilote-30' | 'pilote-60' | 'pilote-100';
  name: string;
  price: number; // HT mensuel
  volumeDocs: number;
  volumeFrais: number;
  cible: string;
  recommended?: boolean;
}

export interface PiloteOption {
  id: string;
  name: string;
  description: string;
  price: string;
}

export const PILOTE_FORFAITS: PiloteForfait[] = [
  {
    id: 'pilote-30',
    name: 'Pilote 30',
    price: 750,
    volumeDocs: 30,
    volumeFrais: 50,
    cible: 'Artisan solo ou avec 1 salarié',
  },
  {
    id: 'pilote-60',
    name: 'Pilote 60',
    price: 1150,
    volumeDocs: 60,
    volumeFrais: 100,
    cible: 'Artisan + 1-3 salariés',
    recommended: true,
  },
  {
    id: 'pilote-100',
    name: 'Pilote 100',
    price: 1500,
    volumeDocs: 100,
    volumeFrais: 200,
    cible: 'TPE 4-8 personnes',
  },
];

export const MISE_EN_ROUTE_PRICE = 750;
export const MISE_EN_ROUTE_FONDATEUR_PRICE = 375;

export const PILOTE_OPTIONS: PiloteOption[] = [
  {
    id: 'stripe',
    name: 'Stripe — paiement en ligne',
    description: 'Vos clients payent en 1 clic par carte. Frais Stripe refacturés en transparence (1,4% + 0,25€/transaction).',
    price: '+30€/mois',
  },
  {
    id: 'coordination-leger',
    name: 'Coordination prestataires — léger',
    description: 'Moins de 30 min/semaine d\'échanges avec un prestataire externe.',
    price: '+50€/mois',
  },
  {
    id: 'coordination-regulier',
    name: 'Coordination prestataires — régulier',
    description: '30 min à 1h/semaine d\'échanges (suivi actif).',
    price: '+120€/mois',
  },
  {
    id: 'coordination-soutenu',
    name: 'Coordination prestataires — soutenu',
    description: '1 à 2h/semaine (prestataire critique, demandes fréquentes).',
    price: '+220€/mois',
  },
  {
    id: 'reporting-setup',
    name: 'Setup KPI custom (one-shot)',
    description: 'Création initiale d\'un nouveau tableau ou KPI sur mesure.',
    price: '150€ une fois',
  },
  {
    id: 'reporting-pack',
    name: 'Pack reporting avancé',
    description: 'Jusqu\'à 5 KPI custom + 1 dashboard dédié + ajustements illimités.',
    price: '+120€/mois',
  },
  {
    id: 'paie-prep',
    name: 'Préparation éléments de paie',
    description: 'Mise en forme des éléments variables transmis à votre comptable. Jusqu\'à 3 salariés (+20€/salarié au-delà). OptiPro ne fait pas la paie réglementaire.',
    price: '+50€/mois',
  },
  {
    id: 'multi-societe',
    name: 'Multi-société / Holding / SCI',
    description: 'Sur devis (entre +50% et +70% du forfait par entité additionnelle, selon complexité).',
    price: 'Sur devis',
  },
];

export function computeFondateurPrice(forfaitPrice: number, period: PilotePeriod): number {
  switch (period) {
    case 'M1':
      return MISE_EN_ROUTE_FONDATEUR_PRICE;
    case 'M2-M3':
      return Math.round(forfaitPrice * 0.5 / 5) * 5;
    case 'M4-M6':
      return Math.round(forfaitPrice * 0.75 / 5) * 5;
    case 'M7+':
      return forfaitPrice;
  }
}

export function formatPrice(price: number): string {
  return price >= 1000
    ? `${Math.floor(price / 1000)} ${(price % 1000).toString().padStart(3, '0')}€`
    : `${price}€`;
}
```

- [ ] **Step 4: Lancer le test, vérifier qu'il passe**

```bash
npx jest src/data/pricing.test.ts
```

Expected: PASS — 7 tests passants.

- [ ] **Step 5: Commit**

```bash
git add src/data/pricing.ts src/data/pricing.test.ts
git commit -m "feat(data): forfaits Pilote + calculs programme Fondateur

Source unique pour les 3 forfaits Pilote 30/60/100, mise en route,
options et calculs des prix progressifs Fondateur sur 6 mois.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2 : Source de données comparaison + FAQ

**Files:**
- Create: `src/data/comparison.ts`
- Create: `src/data/faq.ts`

- [ ] **Step 1: Implémenter `src/data/comparison.ts`**

```typescript
// src/data/comparison.ts

export interface ComparisonCard {
  vs: string;
  eux: string;
  moi: string;
}

export const COMPARISON_CARDS: ComparisonCard[] = [
  {
    vs: 'Un(e) assistant(e) indépendant(e)',
    eux: '1 050€ à 1 500€/mois pour 30h. Pas d\'outil intégré, reporting Excel mensuel.',
    moi: '750€ tout inclus, outil + tableau de bord temps réel, hotline 9h-17h.',
  },
  {
    vs: 'Un mi-temps salarié(e)',
    eux: '~2 300€ chargés/mois. Engagement 18-24 mois. Charges patronales, congés, gestion RH.',
    moi: '750€ tout inclus. Cycles 3 mois sans engagement long. Pas de charges sociales.',
  },
  {
    vs: 'Un cabinet comptable',
    eux: 'Limité à la compta. Pas de relances, pas de devis, pas de pilotage temps réel.',
    moi: 'Je gère tout l\'admin opérationnel. Votre comptable garde son rôle.',
  },
];
```

- [ ] **Step 2: Implémenter `src/data/faq.ts`**

```typescript
// src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_HOMEPAGE: FaqItem[] = [
  {
    question: 'Vous remplacez mon comptable ?',
    answer: 'Non. Je gère l\'admin opérationnel, votre comptable continue son métier. Je lui livre un dossier propre chaque mois pour qu\'il fasse mieux son boulot.',
  },
  {
    question: 'Et si je ne suis pas satisfait ?',
    answer: 'Le 1er mois est un test. À l\'issue, vous décidez. Pas d\'engagement caché, pas de clause cachée. Si on continue, c\'est par cycles de 3 mois renouvelables.',
  },
  {
    question: 'Comment je vous transmets les infos depuis le chantier ?',
    answer: 'Vocal ou photo WhatsApp. Vous parlez 30 secondes, je fais le reste. Vous n\'apprenez aucun logiciel.',
  },
  {
    question: 'C\'est conforme RGPD et facturation électronique 2026-2027 ?',
    answer: 'Oui. Je suis prêt pour la réforme PDP (Plateformes de Dématérialisation Partenaires) et toutes vos données sont hébergées en Europe.',
  },
  {
    question: 'Combien ça coûte exactement pour mon activité ?',
    answer: '750€/mois jusqu\'à 30 documents, 1 150€ jusqu\'à 60, 1 500€ jusqu\'à 100. Voir la page Tarifs pour le détail.',
  },
];

export const FAQ_TARIFS: FaqItem[] = [
  {
    question: 'C\'est quoi un "document" exactement ?',
    answer: 'Un devis OU une facture. 30 documents/mois = par exemple 15 devis + 15 factures.',
  },
  {
    question: 'Et si je dépasse mon forfait un mois ?',
    answer: 'Si dépassement ponctuel (1 mois isolé) : aucun surcoût. Si dépassement régulier (>30% pendant 2 mois consécutifs) : on bascule au palier supérieur le mois suivant.',
  },
  {
    question: 'Et si mon volume baisse ?',
    answer: 'Même logique inverse : bascule au palier inférieur si sous-utilisation prolongée.',
  },
  {
    question: 'TVA ?',
    answer: 'Tarifs HT. Je suis en franchise en base de TVA (auto-entrepreneur, art. 293 B du CGI), donc pas de TVA à payer en plus pour vous.',
  },
  {
    question: 'Frais Stripe : qui les paie ?',
    answer: 'Refacturés en transparence (1,4% + 0,25€ par transaction réussie). Vous voyez le détail sur votre tableau de bord.',
  },
];

export function buildFaqJsonLd(faq: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/data/comparison.ts src/data/faq.ts
git commit -m "feat(data): cartes comparaison + FAQ homepage/tarifs avec helper JSON-LD

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3 : PricingCard + ComparisonCards

**Files:**
- Create: `src/components/ui/PricingCard.tsx`
- Create: `src/components/ui/PricingCard.test.tsx`
- Create: `src/components/ui/ComparisonCards.tsx`

- [ ] **Step 1: Test PricingCard**

```typescript
// src/components/ui/PricingCard.test.tsx
import { render, screen } from '@testing-library/react';
import PricingCard from './PricingCard';
import { PILOTE_FORFAITS } from '@/data/pricing';

describe('PricingCard', () => {
  test('affiche nom, prix, volume et cible du forfait', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[1]} />);
    expect(screen.getByText('Pilote 60')).toBeInTheDocument();
    expect(screen.getByText(/1 150€/)).toBeInTheDocument();
    expect(screen.getByText(/60 documents/i)).toBeInTheDocument();
    expect(screen.getByText(/1-3 salariés/i)).toBeInTheDocument();
  });

  test('affiche le badge "Recommandé" si recommended=true', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[1]} />);
    expect(screen.getByText('Recommandé')).toBeInTheDocument();
  });

  test('n\'affiche pas le badge sur les autres forfaits', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[0]} />);
    expect(screen.queryByText('Recommandé')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Lancer le test, vérifier l'échec**

```bash
npx jest src/components/ui/PricingCard.test.tsx
```

Expected: FAIL "Cannot find module './PricingCard'"

- [ ] **Step 3: Implémenter `PricingCard.tsx`**

```typescript
// src/components/ui/PricingCard.tsx
import Link from 'next/link';
import type { PiloteForfait } from '@/data/pricing';
import { formatPrice } from '@/data/pricing';

interface Props {
  forfait: PiloteForfait;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PricingCard({
  forfait,
  ctaHref = '/contact',
  ctaLabel = 'Réserver mon appel',
}: Props) {
  const isRecommended = forfait.recommended;

  return (
    <article style={{
      position: 'relative',
      padding: '2rem 1.75rem',
      background: 'var(--background)',
      border: isRecommended ? '2px solid var(--accent)' : '1px solid var(--border)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      boxShadow: isRecommended ? '0 8px 32px rgba(249, 115, 22, 0.12)' : 'none',
    }}>
      {isRecommended && (
        <span style={{
          position: 'absolute',
          top: '-0.85rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--accent)',
          color: 'white',
          padding: '0.3rem 0.85rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>Recommandé</span>
      )}

      <header>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{forfait.name}</h3>
        <p style={{ margin: '0.5rem 0 0', color: 'var(--secondary)', fontSize: '0.9rem' }}>
          {forfait.cible}
        </p>
      </header>

      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
          {formatPrice(forfait.price)}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginTop: '0.25rem' }}>
          HT par mois
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li style={{ fontSize: '0.9rem' }}>✓ Jusqu&apos;à <strong>{forfait.volumeDocs} documents/mois</strong></li>
        <li style={{ fontSize: '0.9rem' }}>✓ Jusqu&apos;à <strong>{forfait.volumeFrais} frais/mois</strong></li>
        <li style={{ fontSize: '0.9rem' }}>✓ 1 société</li>
        <li style={{ fontSize: '0.9rem' }}>✓ Tout l&apos;admin opérationnel inclus</li>
      </ul>

      <Link href={ctaHref} style={{
        display: 'block',
        textAlign: 'center',
        padding: '0.85rem 1.25rem',
        background: isRecommended ? 'var(--accent)' : 'var(--primary)',
        color: 'white',
        borderRadius: '0.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        fontSize: '0.95rem',
      }}>
        {ctaLabel}
      </Link>
    </article>
  );
}
```

- [ ] **Step 4: Lancer le test, vérifier qu'il passe**

```bash
npx jest src/components/ui/PricingCard.test.tsx
```

Expected: PASS — 3 tests passants.

- [ ] **Step 5: Implémenter `ComparisonCards.tsx`**

```typescript
// src/components/ui/ComparisonCards.tsx
import { COMPARISON_CARDS } from '@/data/comparison';

export default function ComparisonCards() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      {COMPARISON_CARDS.map((card) => (
        <article key={card.vs} style={{
          padding: '1.75rem',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
          background: 'var(--background)',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 1rem', color: 'var(--primary)' }}>
            vs {card.vs}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)', marginBottom: '0.35rem' }}>Eux</div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.55 }}>{card.eux}</p>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '0.35rem' }}>Moi</div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.55, fontWeight: 500 }}>{card.moi}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/PricingCard.tsx src/components/ui/PricingCard.test.tsx src/components/ui/ComparisonCards.tsx
git commit -m "feat(ui): PricingCard + ComparisonCards (3 cartes vs assistant·e/mi-temps/cabinet)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4 : MockupTableauDeBord + FondateurBanner

**Files:**
- Create: `src/components/ui/MockupTableauDeBord.tsx`
- Create: `src/components/ui/FondateurBanner.tsx`

- [ ] **Step 1: Implémenter `MockupTableauDeBord.tsx`**

```typescript
// src/components/ui/MockupTableauDeBord.tsx

export default function MockupTableauDeBord() {
  return (
    <div className="mockup-grid" style={{
      display: 'grid',
      gridTemplateColumns: '0.6fr 1fr',
      gap: '2rem',
      alignItems: 'center',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Mobile mockup */}
      <div aria-label="Aperçu mobile du tableau de bord" style={{
        width: '240px',
        margin: '0 auto',
        borderRadius: '24px',
        background: '#0f172a',
        padding: '12px 10px',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
      }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CA encaissé</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>12 450 €</div>
            <div style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 600 }}>↑ +18% vs mois dernier</div>
          </div>
          <div style={{ height: '1px', background: '#e2e8f0' }} />
          <div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Factures à relancer</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#dc2626' }}>3 200 €</div>
          </div>
          <div style={{
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '0.5rem',
            padding: '0.5rem 0.65rem',
            fontSize: '0.7rem',
            color: '#9a3412',
            fontWeight: 600,
          }}>🎉 Devis Dupont signé hier</div>
        </div>
      </div>

      {/* Desktop mockup */}
      <div aria-label="Aperçu desktop du tableau de bord" style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>Vue d&apos;ensemble — Mai 2026</strong>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Mis à jour il y a 2 min</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { label: 'CA encaissé', value: '12 450 €', accent: '#16a34a' },
            { label: 'À relancer', value: '3 200 €', accent: '#dc2626' },
            { label: 'Devis ouverts', value: '4', accent: '#0ea5e9' },
            { label: 'Trésorerie', value: '8 230 €', accent: '#0f172a' },
          ].map((kpi) => (
            <div key={kpi.label} style={{
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '0.5rem',
              borderTop: `3px solid ${kpi.accent}`,
            }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase' }}>{kpi.label}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>{kpi.value}</div>
            </div>
          ))}
        </div>
        <div style={{
          height: '90px',
          background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0))',
          border: '1px dashed #fed7aa',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9a3412',
          fontSize: '0.8rem',
        }}>📈 CA des 6 derniers mois</div>
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Prochains événements</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#0f172a' }}>
            <li>• RDV mardi 14h — M. Martin (devis chantier)</li>
            <li>• Échéance URSSAF — 15 mai</li>
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .mockup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Implémenter `FondateurBanner.tsx`**

```typescript
// src/components/ui/FondateurBanner.tsx
import Link from 'next/link';

interface Props {
  variant?: 'inline' | 'sticky';
  href?: string;
}

export default function FondateurBanner({ variant = 'inline', href = '/programme-fondateur' }: Props) {
  if (variant === 'sticky') {
    return (
      <div style={{
        background: 'linear-gradient(90deg, #f97316, #ef4444)',
        color: 'white',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: 600,
      }}>
        ⚡ 3 places Fondateurs disponibles — tarif progressif sur 6 mois.{' '}
        <Link href={href} style={{ color: 'white', textDecoration: 'underline' }}>En savoir plus →</Link>
      </div>
    );
  }

  return (
    <aside style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(239, 68, 68, 0.08))',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--accent)',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '999px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
      }}>3 places · fermeture dès le 3e signé</div>
      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
        Programme Fondateur — tarif progressif sur 6 mois
      </h3>
      <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
        Vous êtes parmi les 3 premiers à me rejoindre ? Vous bénéficiez d&apos;un tarif progressif (-50% les 3 premiers mois, -25% les 3 suivants) en échange d&apos;un témoignage et d&apos;autorisation de communication. Économie de ~3 400€ sur un Pilote 60.
      </p>
      <Link href={href} style={{
        display: 'inline-block',
        padding: '0.85rem 1.5rem',
        background: 'var(--primary)',
        color: 'white',
        borderRadius: '0.75rem',
        textDecoration: 'none',
        fontWeight: 600,
        alignSelf: 'flex-start',
      }}>
        Candidater au programme Fondateur →
      </Link>
    </aside>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/MockupTableauDeBord.tsx src/components/ui/FondateurBanner.tsx
git commit -m "feat(ui): MockupTableauDeBord + FondateurBanner (variants inline/sticky)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5 : AccordionItem + helpers SEO

**Files:**
- Create: `src/components/ui/AccordionItem.tsx`
- Create: `src/components/seo/FAQJsonLd.tsx`
- Create: `src/components/seo/OfferCatalogJsonLd.tsx`

- [ ] **Step 1: Implémenter `AccordionItem.tsx`**

```typescript
// src/components/ui/AccordionItem.tsx
'use client';

import { useState, useId } from 'react';

interface Props {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function AccordionItem({ title, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '0.75rem',
      background: 'var(--background)',
      overflow: 'hidden',
    }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        style={{
          width: '100%',
          padding: '1rem 1.25rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--primary)',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span>{title}</span>
        <span aria-hidden="true" style={{
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(180deg)' : 'none',
          color: 'var(--secondary)',
        }}>▾</span>
      </button>
      <div
        id={contentId}
        hidden={!open}
        style={{
          padding: open ? '0 1.25rem 1.25rem' : '0 1.25rem',
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--secondary)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Implémenter `FAQJsonLd.tsx`** (pattern `<script>{JSON.stringify}</script>` cohérent avec le repo)

```typescript
// src/components/seo/FAQJsonLd.tsx
import { buildFaqJsonLd, type FaqItem } from '@/data/faq';

interface Props {
  faq: FaqItem[];
}

export default function FAQJsonLd({ faq }: Props) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(buildFaqJsonLd(faq))}
    </script>
  );
}
```

- [ ] **Step 3: Implémenter `OfferCatalogJsonLd.tsx`**

```typescript
// src/components/seo/OfferCatalogJsonLd.tsx
import { PILOTE_FORFAITS } from '@/data/pricing';

export default function OfferCatalogJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Forfaits Pilote — Assistant administratif externalisé OptiPro',
    itemListElement: PILOTE_FORFAITS.map((forfait) => ({
      '@type': 'Offer',
      name: forfait.name,
      description: `${forfait.cible}. Jusqu'à ${forfait.volumeDocs} documents et ${forfait.volumeFrais} frais par mois.`,
      price: forfait.price.toString(),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: forfait.price,
        priceCurrency: 'EUR',
        unitText: 'MONTH',
        valueAddedTaxIncluded: false,
      },
      areaServed: 'FR',
      seller: { '@id': 'https://www.opti-pro.fr/#organization' },
    })),
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/AccordionItem.tsx src/components/seo/FAQJsonLd.tsx src/components/seo/OfferCatalogJsonLd.tsx
git commit -m "feat(ui): AccordionItem + helpers JSON-LD FAQ/OfferCatalog

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

**Phase A terminée.** Composants partagés et données prêts.

Compte tenu de la longueur du plan, les Phases B, C, D, E et F sont décrites en **structure plus condensée** (architecture + sections + commit), avec le détail à compléter au moment de l'exécution. Ce niveau de détail est suffisant pour un développeur expérimenté qui peut s'inspirer de la Phase A pour le pattern.

---

## Phase B — Pages P1 nouvelles (5 tâches)

### Task 6 : Page CGV

**Files:** Create `src/app/(public)/cgv/page.tsx`

**Architecture :** Server component pur (pas d'animation), texte juridique. Metadata `{ absolute: 'Conditions Générales de Vente — OptiPro' }`, `robots: { index: true, follow: false }`, canonical `/cgv`.

**Sections (10) :**
1. Identification du prestataire (Pierre Laurent EI, SIREN à compléter par Pierre, Vence, TVA art. 293 B)
2. Description du service Pilote + périmètre exclu (pas de compta réglementaire, pas de paie)
3. Tarifs HT (3 forfaits + mise en route)
4. Engagement & résiliation (M1 sans engagement, cycles 3 mois, préavis 1 mois)
5. Programme Fondateur (4 contreparties contractuelles + clauses de bascule)
6. Propriété & exportabilité des données (export complet à tout moment)
7. RGPD (renvoi `/confidentialite`, hébergement EU)
8. Limitation de responsabilité (pas de représentation légale ni fiscale, pas de SLA)
9. Force majeure (art. 1218 Code civil)
10. Médiation conso obligatoire (à compléter par Pierre) + tribunaux Grasse

**Style :** styles inline minimaux, lecture confortable (max-width 780px, line-height 1.7).

- [ ] **Step 1**: Créer le fichier avec les 10 sections (texte intégral fourni dans la spec §5.7)
- [ ] **Step 2**: `npx tsc --noEmit` pour valider
- [ ] **Step 3**: Commit `feat(cgv): page Conditions Générales de Vente`

---

### Task 7 : Page `/le-service`

**Files:**
- Create: `src/app/(public)/le-service/page.tsx`
- Create: `src/app/(public)/le-service/LeServiceClient.tsx`

**Architecture :** Pattern Server (metadata + JSON-LD) + Client (animations + UI). Inspirer du pattern existant `services/page.tsx` + `OffersSection.tsx`.

**Server (`page.tsx`) :**
- Metadata `{ absolute: 'Le service — OptiPro assistant admin pour artisans' }`, description "Devis, factures, trésorerie, relances, frais... voilà ce que je prends en charge dans le forfait Pilote.", canonical `/le-service`
- JSON-LD `Service` (provider OptiPro, areaServed FR, serviceType "AdministrativeService") via `<script type="application/ld+json">{JSON.stringify(...)}</script>`
- `<OfferCatalogJsonLd />`
- Rend `<LeServiceClient />`

**Client (`LeServiceClient.tsx`) :**
1. Hero "Tout votre admin opérationnel. Pris en charge."
2. Liste des 7 livrables en grid 2 colonnes (devis, facturation, frais, trésorerie, planning, comptable, tableau de bord) — chaque livrable = titre + 3-4 lignes descriptives + icône emoji
3. Section `<MockupTableauDeBord />` avec titre "Vous gardez la main"
4. Section `<ComparisonCards />` avec titre "Pourquoi pas un(e) assistant·e classique ?"
5. `<FondateurBanner variant="inline" />`
6. CTA final "Réserver mon appel découverte"

- [ ] **Step 1**: Créer `page.tsx` (server) avec metadata + JSON-LD
- [ ] **Step 2**: Créer `LeServiceClient.tsx` avec les 6 sections
- [ ] **Step 3**: `npx tsc --noEmit` puis `npm run dev`, visiter `http://localhost:3000/le-service`
- [ ] **Step 4**: Commit `feat(le-service): page détaillée du service Pilote`

---

### Task 8 : Page `/tarifs`

**Files:**
- Create: `src/app/(public)/tarifs/page.tsx`
- Create: `src/app/(public)/tarifs/TarifsClient.tsx`

**Server :**
- Metadata `{ absolute: 'Tarifs — Forfaits Pilote OptiPro' }`, description "Pilote 30 (750€), Pilote 60 (1 150€), Pilote 100 (1 500€) HT/mois. Tout inclus. Aucune mauvaise surprise.", canonical `/tarifs`
- `<OfferCatalogJsonLd />`
- `<FAQJsonLd faq={FAQ_TARIFS} />`

**Client (12 sections) :**
1. Hero "Un tarif clair. Tout inclus. Aucune mauvaise surprise."
2. `<FondateurBanner variant="sticky" />` en haut
3. Grid 3 cartes via `PILOTE_FORFAITS.map(f => <PricingCard forfait={f} />)`
4. Liste "Inclus dans tous les forfaits" (10 items, voir spec §2.4)
5. Bloc Mise en route 750€ M1 (carte dédiée avec liste des inclusions)
6. Grid `PILOTE_OPTIONS.map(opt => ...)` en 4-8 cartes options
7. Bloc engagement & résiliation (transparence, cycles 3 mois, données exportables)
8. Comparateur "ça coûte combien ailleurs ?" : texte aligné en 4 blocs (mi-temps / assistant indé / cabinet / OptiPro Pilote 60)
9. Bloc Programme Fondateur avec **tableau de bascule HTML** : pour chaque forfait, afficher M1 / M2-M3 / M4-M6 / M7+ via `computeFondateurPrice(forfait.price, period)`
10. FAQ avec `<AccordionItem>` mappant `FAQ_TARIFS`
11. Mention TVA en bas : "Tarifs HT — TVA non applicable, art. 293 B du CGI"
12. CTA final

- [ ] **Step 1**: Créer `page.tsx` (server)
- [ ] **Step 2**: Créer `TarifsClient.tsx` avec les 12 sections
- [ ] **Step 3**: Test dev sur `/tarifs`, vérifier les 3 cartes responsive et l'accordéon FAQ
- [ ] **Step 4**: Commit `feat(tarifs): page Tarifs avec 3 forfaits, options, programme Fondateur, FAQ`

---

### Task 9 : Page `/methode` + composant TimelineMethode

**Files:**
- Create: `src/components/ui/TimelineMethode.tsx`
- Create: `src/app/(public)/methode/page.tsx`
- Create: `src/app/(public)/methode/MethodeClient.tsx`

**TimelineMethode :**
- Composant client (`'use client'`) qui affiche 4 grandes étapes verticales numérotées
- Étape 2 (Mois 1) utilise `<AccordionItem>` × 4 (Semaine 1 audit & récup / Semaine 2 paramétrage / Semaine 3 formation & premiers tests / Semaine 4 bilan & décision)
- Style : ligne verticale entre étapes (CSS), numéros dans cercles colorés `var(--accent)`

**Page server :**
- Metadata "Comment ça se passe — Méthode OptiPro"
- JSON-LD `HowTo` optionnel (peut être ajouté plus tard si SEO le demande)

**Client (5 sections) :**
1. Hero "Comment ça se passe en vrai."
2. `<TimelineMethode />` — 4 étapes
3. Bloc "Vos outils, rien de nouveau" + `<MockupTableauDeBord />`
4. Bloc "Voilà comment je peux faire mieux pour moins cher" (PAS le mot "cheat code") avec lien vers `/pourquoi-ce-prix`
5. Bloc "Et si je ne suis pas satisfait ?"
6. CTA final

- [ ] **Step 1**: Créer `TimelineMethode.tsx`
- [ ] **Step 2**: Créer `page.tsx` server
- [ ] **Step 3**: Créer `MethodeClient.tsx`
- [ ] **Step 4**: Test dev sur `/methode`, vérifier que l'accordéon Étape 2 ouvre/ferme bien
- [ ] **Step 5**: Commit `feat(methode): timeline 4 étapes + accordéon mois 1`

---

### Task 10 : Page `/pourquoi-ce-prix` + AutomatedVsHuman

**Files:**
- Create: `src/components/ui/AutomatedVsHuman.tsx`
- Create: `src/app/(public)/pourquoi-ce-prix/page.tsx`
- Create: `src/app/(public)/pourquoi-ce-prix/PourquoiClient.tsx`

**AutomatedVsHuman :**
- 2 colonnes côte à côte responsive (stack en mobile)
- Colonne gauche "Automatisé (70%)" : OCR tickets, saisie auto, numérotation, synchro Pennylane, relances programmées, export FEC, notifications, dashboard temps réel
- Colonne droite "Humain — Moi (30%)" : décisions ambiguës, relations clients sensibles, anticipation des problèmes, adaptation cas par cas, conseils opérationnels, coordination prestataires, visios bilan

**Page server :** Metadata `{ absolute: 'Pourquoi ce prix — Le calcul honnête | OptiPro' }`

**Client (8 sections) :**
1. Hero "Pourquoi je peux faire ça à 750€/mois. Sans bullshit."
2. Bloc 1 : D'où je viens (récit 10 ans + reformulation marché : "Côté employeur, ce profil coûte aujourd'hui environ 7 000€/mois charges comprises")
3. Bloc 2 : Pourquoi 750€ et pas 2 500€ (calcul mi-temps 29€/h, 70% automatisé, gestion 8-10 clients)
4. Bloc 3 : `<AutomatedVsHuman />`
5. Bloc 4 : Pourquoi c'est durable (pas un prix d'appel — sans chiffrer l'infra ; pas de bureau/équipe/loyer ; franchise TVA ; objectif 8-10 clients fidèles long terme)
6. Bloc 5 : Pourquoi un comptable ne peut pas faire ça (complémentarité, certificateur vs opérationnel)
7. Bloc 6 : Pourquoi je limite à 8-10 clients (qualité > quantité, liste d'attente quand plein)
8. Double CTA final (réserver appel / poser questions)

- [ ] **Step 1**: Créer `AutomatedVsHuman.tsx`
- [ ] **Step 2**: Créer `page.tsx` server
- [ ] **Step 3**: Créer `PourquoiClient.tsx` avec les 8 sections
- [ ] **Step 4**: Test dev sur `/pourquoi-ce-prix`
- [ ] **Step 5**: Commit `feat(pourquoi-ce-prix): page récit transparent + complémentarité comptable`

---

## Phase C — Refonte Homepage (1 tâche)

### Task 11 : Réécrire la Homepage

**Files:**
- Modify: `src/app/(public)/page.tsx`
- Modify: `src/app/(public)/HomePageClient.tsx`

**Note importante :** lire `HomePageClient.tsx` avant pour comprendre les animations GSAP existantes. Conserver les patterns de parallax/stagger qui restent pertinents pour les nouveaux blocs ; retirer ceux qui ne s'appliquent plus.

**Server (`page.tsx`) :**
- Metadata avec **nouveau pitch** : title "OptiPro — Le bras droit administratif des artisans" (default), description "Assistant administratif externalisé pour artisans et petites TPE du bâtiment. Devis, factures, trésorerie, relances — tout est piloté pour vous, à partir de 750€/mois."
- JSON-LD `Service` (AdministrativeService) via `<script type="application/ld+json">{JSON.stringify(...)}</script>`
- `<OfferCatalogJsonLd />`
- `<FAQJsonLd faq={FAQ_HOMEPAGE} />`

**Client (`HomePageClient.tsx`) — 9 sections :**
1. **Hero D4** :
   - Titre : "Le bras droit administratif des artisans."
   - 3 lignes en sous-titre : "Plus rapide qu'un(e) assistant(e). / Moins cher qu'un mi-temps. / Plus complet que les deux."
   - Description avec mention 750€ + tableau de bord
   - Ligne rassurance comptable : "✓ Votre comptable garde son rôle. Je m'occupe du reste : tout l'admin opérationnel."
   - 2 CTAs : "Réserver mon appel découverte (gratuit)" + "Voir les tarifs"
   - Bandeau "⚠ 3 places Fondateur disponibles — tarif progressif"
2. **Bloc problème** (3 colonnes pain points : devis envoyés tard, factures impayées, pas de visibilité tréso)
3. **Bloc solution** (4 cartes 2×2 : Devis / Facturation / Trésorerie / Comptable + 3 mentions complémentaires en ligne : Frais & dépenses, Planning & RDV, Coordination prestataires)
4. **Bloc tableau de bord** : titre "Vous gardez la main grâce à votre tableau de bord en temps réel" + `<MockupTableauDeBord />` + 3 bullets (à jour permanent / vous voyez ce que je fais / notifs Telegram ou Push)
5. **Bloc comparaison** : `<ComparisonCards />`
6. **Bloc témoignage** : déclaré mais **caché** par variable `const SHOW_TESTIMONIALS = false;` au début du component (à activer plus tard)
7. **Bloc Fondateur** : `<FondateurBanner variant="inline" />`
8. **FAQ** avec `<AccordionItem>` mappant `FAQ_HOMEPAGE`
9. **CTA final** : "Prêt à libérer 8-10h/mois et à reprendre la main sur votre admin ?" + bouton réserver appel

- [ ] **Step 1**: Lire `HomePageClient.tsx` actuel pour identifier les animations à conserver
- [ ] **Step 2**: Réécrire `page.tsx` (metadata + JSON-LD)
- [ ] **Step 3**: Réécrire `HomePageClient.tsx` (9 sections)
- [ ] **Step 4**: Test dev sur `/`, vérifier desktop + mobile (resize <640px)
- [ ] **Step 5**: Commit `feat(homepage): refonte complète avec pitch bras droit administratif`

---

## Phase D — Pages P2 (4 tâches)

### Task 12 : Page `/programme-fondateur`

**Files:**
- Create: `src/app/(public)/programme-fondateur/page.tsx`
- Create: `src/app/(public)/programme-fondateur/FondateurClient.tsx`

**Sections :**
1. Hero "3 places Fondateurs — fermeture dès le 3e signé"
2. Tableau de bascule complet : 3 forfaits × 4 périodes (M1 setup, M2-M3, M4-M6, M7+) — utiliser `computeFondateurPrice(forfait.price, period)` en boucle
3. Section contreparties (4 items contractuels, voir spec §2.8)
4. Section conditions de bascule (résiliation, pénalités si contreparties non livrées)
5. Calcul d'économie par forfait (P30 / P60 / P100 → totaux 6 mois) — détailler les chiffres dans une mini-table
6. CTA final → `/contact?cible=fondateur`

- [ ] **Step 1**: Créer `page.tsx` server
- [ ] **Step 2**: Créer `FondateurClient.tsx` avec tableau de bascule dynamique
- [ ] **Step 3**: Test dev sur `/programme-fondateur`
- [ ] **Step 4**: Commit `feat(fondateur): page dédiée Programme Fondateur avec tableau de bascule`

---

### Task 13 : Pages SEO `/services/serrurier` et `/services/electricien`

**Files:**
- Create: `src/app/(public)/services/serrurier/page.tsx`
- Create: `src/app/(public)/services/electricien/page.tsx`

**Architecture :** Inspirer du pattern de `/services/plombier/page.tsx` actuel (server component avec metadata locale + JSON-LD `LocalBusiness` enrichi). Pas besoin de Client component si la page est statique.

**Serrurier :**
- Metadata : "Assistant administratif pour serruriers — OptiPro PACA"
- Hero "L'assistant administratif des serruriers et métalliers"
- Pain points spécifiques : interventions urgentes 24/7, devis rapides nuit/week-end, suivi multi-clients, FEC bâtiment
- JSON-LD `LocalBusiness` enrichi avec `serviceType: 'LocksmithAdministrativeService'`
- Mention "Pilote 30 dès 750€/mois" avec lien `/tarifs`
- CTA `/contact?metier=serrurier`

**Électricien :**
- Metadata : "Assistant administratif pour électriciens — OptiPro PACA"
- Hero "L'assistant administratif des électriciens"
- Pain points : Consuel, devis chantier neuf vs rénovation, certifications, suivi multi-chantiers
- JSON-LD `LocalBusiness` enrichi avec `serviceType: 'ElectricianAdministrativeService'`
- CTA `/contact?metier=electricien`

- [ ] **Step 1**: Lire `/services/plombier/page.tsx` pour reproduire le pattern
- [ ] **Step 2**: Créer `serrurier/page.tsx`
- [ ] **Step 3**: Créer `electricien/page.tsx`
- [ ] **Step 4**: Test dev sur les 2 routes
- [ ] **Step 5**: Commit `feat(seo-local): pages /services/serrurier et /services/electricien`

---

### Task 14 : Réécrire `/services/plombier`

**Files:**
- Modify: `src/app/(public)/services/plombier/page.tsx`

- [ ] **Step 1**: Lire la page existante pour identifier le contenu actuel (probablement orienté "création de site")
- [ ] **Step 2**: Réécrire sous l'angle "L'assistant administratif des plombiers" :
  - Hero "L'assistant administratif des plombiers"
  - Pain points : pluri-interventions multi-clients, urgences fuite, devis rapides nécessaires, suivi facturation
  - Mention "Pilote 30 dès 750€/mois" avec lien `/tarifs`
  - CTA `/contact?metier=plombier`
  - Conserver le JSON-LD `LocalBusiness` enrichi mais l'adapter (description + serviceType)
- [ ] **Step 3**: Test dev sur `/services/plombier`
- [ ] **Step 4**: Commit `feat(seo-local): refonte /services/plombier sous angle assistant admin`

---

### Task 15 : Page `/temoignages` (coquille hors-nav)

**Files:** Create `src/app/(public)/temoignages/page.tsx`

**Page server simple :**
- Metadata "Témoignages — OptiPro" + canonical `/temoignages`
- Contenu placeholder transparent : "Premiers Fondateurs en cours de signature. Témoignages publiés à partir du M3 (août 2026)."
- Lien retour homepage
- Pas de lien dans la nav (ajout uniquement footer ou liens contextuels futurs)

- [ ] **Step 1**: Créer `temoignages/page.tsx`
- [ ] **Step 2**: Commit `feat(temoignages): coquille de page (hors-nav, à remplir M3 Fondateur)`

---

## Phase E — Migration (8 tâches)

### Task 16 : Header — Nav 4 entrées

**Files:** Modify `src/components/layout/Header.tsx`

- [ ] **Step 1**: Modifier le tableau `navLinks` (lignes 30-35) :

```typescript
const navLinks = [
    { href: '/le-service', label: 'Le service' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
];
```

- [ ] **Step 2**: Le CTA existant "Premier appel — gratuit" reste cohérent ; pas de modification nécessaire (sauf si Pierre demande "Réserver mon appel")
- [ ] **Step 3**: Le mobile menu mappe le même `navLinks`, donc auto-mis à jour
- [ ] **Step 4**: Test dev : vérifier desktop + mobile (burger affiche les 4 entrées)
- [ ] **Step 5**: Commit `feat(nav): simplification 4 entrées (Le service / Tarifs / À propos / Contact)`

---

### Task 17 : Footer — CGV + Blog, retrait Newsletter

**Files:** Modify `src/components/layout/Footer.tsx`

- [ ] **Step 1**: Lire le Footer actuel pour identifier les liens en place
- [ ] **Step 2**: Modifications :
  - Ajouter lien `/cgv`
  - Retirer tout lien Newsletter
  - Retirer lien Réalisations s'il existe
  - Conserver Mentions légales + Confidentialité
  - Ajouter lien `/blog` dans une section "Ressources" (puisqu'il sort de la nav principale)
- [ ] **Step 3**: Test dev : vérifier le footer en bas des pages
- [ ] **Step 4**: Commit `feat(footer): ajout CGV + Blog, retrait Newsletter et Réalisations`

---

### Task 18 : Layout public — metadata + JSON-LD

**Files:** Modify `src/app/(public)/layout.tsx`

- [ ] **Step 1**: Modifier metadata (lignes 7-29) :

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.opti-pro.fr'),
  title: {
    default: 'OptiPro — Le bras droit administratif des artisans',
    template: '%s | OptiPro',
  },
  description:
    'Assistant administratif externalisé pour artisans et petites TPE du bâtiment. Devis, factures, trésorerie, relances, comptable — tout est piloté pour vous, à partir de 750€/mois. Avec un tableau de bord temps réel inclus.',
  // ... reste identique (openGraph, twitter, geo)
};
```

- [ ] **Step 2**: Modifier le JSON-LD (lignes 31-115) :
  - `description` du `LocalBusiness` : "Assistant administratif externalisé pour artisans et TPE du bâtiment. Forfaits Pilote dès 750€/mois HT. Devis, factures, trésorerie, relances, préparation dossier comptable, tableau de bord temps réel inclus."
  - `priceRange` : remplacer `'Sur devis'` par `'750€-1500€/mois HT'`
  - Ajouter dans le `'@type'` : `['LocalBusiness', 'ProfessionalService', 'BusinessAdministrativeServices']` (ajouter le 3e type)
- [ ] **Step 3**: Test dev sur `/`, vérifier le HTML rendu (View Source)
- [ ] **Step 4**: Commit `feat(seo): refonte metadata + JSON-LD layout (assistant admin, 750€/mois)`

---

### Task 19 : Formulaire qualifiant V2 + API contact

**Files:**
- Modify: `src/app/(public)/contact/ContactPageClient.tsx`
- Modify: `src/app/api/contact/route.ts`

- [ ] **Step 1**: Lire `ContactPageClient.tsx` actuel pour identifier les champs existants (déjà : prénom, nom, email, téléphone, secteur d'activité, budget, urgence, message + URL `?cible=`)

- [ ] **Step 2**: Adapter le formulaire :
  - Conserver : prénom, nom, email, téléphone, message
  - **Renommer** champ "secteur" en `metier` (select : plombier / électricien / serrurier / peintre / menuisier / maçon / autre artisan / TPE services / autre)
  - **Ajouter** `salaries` (select : 0 / 1 / 2-3 / 4-5 / 6-8 / 9+)
  - **Ajouter** `volumeDocs` (select : ≤30 / 31-60 / 61-100 / 100+)
  - **Conserver** `cible` URL param mais accepter aussi `metier` URL param pour pré-remplir le select métier
  - **Ajouter** logique : si `?cible=fondateur`, cocher la radio "candidature Fondateur"
  - **Retirer** champs `budget` et `urgence` (devenus inutiles avec la nouvelle grille tarifaire claire)
  - **Ajouter** radio `typeDemande` : "Appel découverte standard" / "Candidater au programme Fondateur"

- [ ] **Step 3**: Adapter `route.ts` API :
  - Calculer `paliereVise` à partir de `volumeDocs` :
    - `≤30` → "Pilote 30 (750€/mois)"
    - `31-60` → "Pilote 60 (1 150€/mois)"
    - `61-100` → "Pilote 100 (1 500€/mois)"
    - `100+` → "Sur devis"
  - Inclure `paliereVise`, `metier`, `salaries`, `volumeDocs`, `typeDemande` dans l'email Resend (HTML enrichi)
  - Inclure ces champs dans les notes structurées de l'insert Supabase `clients`
  - Si `typeDemande === 'fondateur'`, ajouter mention "🌟 CANDIDATURE FONDATEUR" en haut de l'email + statut Supabase `prospect_fondateur` au lieu de `prospect`

- [ ] **Step 4**: Test dev :
  - Visiter `/contact?cible=fondateur` → vérifier que radio Fondateur est pré-cochée
  - Visiter `/contact?metier=serrurier` → vérifier que select métier pré-rempli
  - Soumettre le formulaire en mode dev (sans Resend) → vérifier que console.log affiche tous les nouveaux champs

- [ ] **Step 5**: Commit `feat(contact): formulaire qualifiant V2 + pré-qualification API`

---

### Task 20 : Suppressions (newsletter, dashboard, creation-site-web-vence, services/page.tsx)

**Files:** suppression de dossiers

- [ ] **Step 1**: Supprimer les dossiers et fichiers

```bash
cd "/Users/pierrelaurent/Desktop/Pierre/Projets Dev Pierre/OptiPro/.claude/worktrees/happy-napier-8951f9"
rm -rf src/app/dashboard
rm -rf "src/app/(public)/creation-site-web-vence"
rm -rf src/app/api/newsletter
rm -rf src/components/newsletter
rm -rf src/lib/newsletter
rm -f "src/app/(public)/services/page.tsx"
rm -f "src/app/(public)/services/OffersSection.tsx"
```

> Note : on supprime le `services/page.tsx` mais on garde le dossier `services/` pour `plombier/`, `serrurier/`, `electricien/`, `restaurateur/`. Le dossier sans `page.tsx` racine ne crée pas d'erreur Next.js — la route `/services` n'existe plus, elle sera redirigée par `next.config.ts`.

- [ ] **Step 2**: Identifier les imports cassés

```bash
grep -rn "newsletter" src/ --include="*.ts" --include="*.tsx" 2>/dev/null
grep -rn "creation-site-web-vence" src/ --include="*.ts" --include="*.tsx" 2>/dev/null
grep -rn "OffersSection" src/ --include="*.ts" --include="*.tsx" 2>/dev/null
grep -rn "/dashboard" src/ --include="*.ts" --include="*.tsx" 2>/dev/null
```

→ Corriger les imports/liens cassés au cas par cas dans Footer, layout, sitemap.ts.

- [ ] **Step 3**: Purger le cache Next (lesson 2026-05-05)

```bash
rm -rf .next
```

- [ ] **Step 4**: Type-check

```bash
npx tsc --noEmit
```

Expected: 0 erreur. Si erreur d'import → corriger.

- [ ] **Step 5**: Commit `chore(cleanup): supprimer newsletter, dashboard placeholder, creation-site-web-vence, services/page.tsx`

---

### Task 21 : Redirections 301

**Files:** Modify `next.config.ts`

- [ ] **Step 1**: Modifier la fonction `redirects()` :

```typescript
async redirects() {
  return [
    // EXISTANT
    {
      source: '/politique-de-confidentialite',
      destination: '/confidentialite',
      permanent: true,
    },
    // MODIFIÉ : /realisations va vers / (pas vers /services qui n'existe plus)
    {
      source: '/realisations',
      destination: '/',
      permanent: true,
    },
    // NOUVEAUX
    {
      source: '/services',
      destination: '/le-service',
      permanent: true,
    },
    {
      source: '/creation-site-web-vence',
      destination: '/',
      permanent: true,
    },
    {
      source: '/dashboard',
      destination: '/',
      permanent: true,
    },
    {
      source: '/dashboard/:path*',
      destination: '/',
      permanent: true,
    },
    // EXISTANT : non-www → www
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'opti-pro.fr' }],
      destination: 'https://www.opti-pro.fr/:path*',
      permanent: true,
    },
  ];
}
```

> Important : `source: '/services'` (sans `:path*`) matche **exactement** `/services` et ne touche pas `/services/plombier`, etc. Vérifier en test dev.

- [ ] **Step 2**: Test dev en navigation privée :
  - `http://localhost:3000/services` → 308 vers `/le-service`
  - `http://localhost:3000/services/plombier` → page s'affiche normalement (pas de redirect)
  - `http://localhost:3000/services/serrurier` → page s'affiche
  - `http://localhost:3000/dashboard` → 308 vers `/`
  - `http://localhost:3000/creation-site-web-vence` → 308 vers `/`

- [ ] **Step 3**: Commit `feat(redirects): 301 pour /services, /dashboard, /creation-site-web-vence`

---

### Task 22 : Sitemap

**Files:** Modify `src/app/sitemap.ts`

- [ ] **Step 1**: Réécrire `staticRoutes` :

```typescript
const staticRoutes: MetadataRoute.Sitemap = [
  { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${baseUrl}/le-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
  { url: `${baseUrl}/methode`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/pourquoi-ce-prix`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/programme-fondateur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/services/plombier`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/services/serrurier`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/services/electricien`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${baseUrl}/services/restaurateur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.65 },
  { url: `${baseUrl}/cgv`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  { url: `${baseUrl}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
];
```

> Retiré : `/services` (page principale, redirigée), `/services/restaurateur` mentionné dans la spec mais à conserver dans sitemap (la page existe), `/creation-site-web-vence` (supprimé). Pas besoin de mentionner `/temoignages` (hors-nav, pas indexable utile au démarrage).

- [ ] **Step 2**: Test dev : visiter `http://localhost:3000/sitemap.xml`, vérifier les URLs
- [ ] **Step 3**: Commit `feat(seo): sitemap mis à jour (le-service, tarifs, methode, pourquoi-ce-prix, fondateur, cgv, serrurier, electricien)`

---

### Task 23 : Page `/a-propos` — alignement récit

**Files:**
- Modify: `src/app/(public)/a-propos/page.tsx`
- Modify: `src/app/(public)/a-propos/AProposPageClient.tsx`

- [ ] **Step 1**: Lire la page actuelle pour identifier les blocs en place
- [ ] **Step 2**: Adapter le récit :
  - Conserver le parcours 10 ans logistique/exploitation
  - Reformuler la transition : "Aujourd'hui, je propose ces mêmes services d'exploitation et d'admin opérationnelle aux artisans et TPE qui n'ont pas les moyens d'un salarié à 7 000€ chargés."
  - Ajouter une section "Pourquoi je limite à 8-10 clients" (qualité > quantité, lien vers `/pourquoi-ce-prix`)
  - Conserver les valeurs si elles sont alignées (honnêteté, simplicité)
  - Mettre à jour les CTAs : `/tarifs` ou `/contact?cible=fondateur`
  - **Conserver les animations GSAP existantes** (lesson 2026-04-28 : pattern Server/Client split)
- [ ] **Step 3**: Adapter metadata : title `{ absolute: 'À propos — Pierre Laurent, fondateur OptiPro' }`
- [ ] **Step 4**: Test dev sur `/a-propos`
- [ ] **Step 5**: Commit `feat(a-propos): alignement récit nouveau positionnement assistant admin`

---

## Phase F — Vérification finale (1 tâche)

### Task 24 : Build, tests, Lighthouse

**Files:** aucun fichier modifié, juste vérification.

- [ ] **Step 1: Type-check complet**

```bash
npx tsc --noEmit
```

Expected: 0 erreur.

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: 0 erreur, warnings tolérés s'ils existent dans le code existant.

- [ ] **Step 3: Tests Jest**

```bash
npm run test
```

Expected: tous les tests passent (pricing.test.ts + PricingCard.test.tsx + tests existants).

- [ ] **Step 4: Build production**

```bash
rm -rf .next && npm run build
```

Expected: build réussi, pas d'erreur. Vérifier dans le rapport que toutes les pages sont générées :
- `/`, `/le-service`, `/tarifs`, `/methode`, `/pourquoi-ce-prix`
- `/programme-fondateur`, `/cgv`, `/temoignages`
- `/services/plombier`, `/services/serrurier`, `/services/electricien`, `/services/restaurateur`
- `/a-propos`, `/contact`, `/blog`
- `/mentions-legales`, `/confidentialite`

- [ ] **Step 5: Lighthouse mobile sur les 5 pages clés**

```bash
npm run dev
```

Dans Chrome DevTools (incognito) → Lighthouse mobile pour :
- `http://localhost:3000/`
- `http://localhost:3000/le-service`
- `http://localhost:3000/tarifs`
- `http://localhost:3000/methode`
- `http://localhost:3000/pourquoi-ce-prix`

Critère cible spec §8.1 : Score Performance + SEO + Accessibility > 90 sur chaque.

Si une page descend sous 90 → identifier le bloqueur (image trop lourde, JS bloquant, contraste faible) et corriger.

- [ ] **Step 6: Vérification manuelle des points critiques**

En navigation privée :
- **Homepage** : tous les blocs s'affichent, hero lisible, FAQ ouvre/ferme, mockup tableau de bord visible
- **Tarifs** : 3 cartes alignées, badge "Recommandé" sur Pilote 60, FAQ fonctionne, mention TVA en bas
- **Méthode** : timeline 4 étapes visible, accordéon Étape 2 ouvre/ferme
- **Pourquoi-ce-prix** : 6 blocs principaux, double CTA en bas
- **CGV** : texte juridique lisible, 10 sections, ancres internes éventuelles fonctionnent
- **Mobile** (resize <640px) : header collapse en burger, mockup grid → 1 colonne, cartes pricing s'empilent, lecture confortable sans scroll horizontal

Vérifier les redirections (en navigation privée) :
- `/services` → 308 vers `/le-service`
- `/dashboard` → 308 vers `/`
- `/creation-site-web-vence` → 308 vers `/`
- `/services/plombier` → page affichée (pas de redirect)
- `/services/serrurier` → page affichée
- `/services/electricien` → page affichée

- [ ] **Step 7: Commit final si modifications mineures de Lighthouse**

```bash
git add -A
git commit -m "fix: ajustements post-Lighthouse (perf, a11y, seo)"
```

- [ ] **Step 8: Pousser la branche**

```bash
git push -u origin claude/happy-napier-8951f9
```

---

## Self-review du plan vs spec

**1. Couverture du spec** :

| Section spec | Tâche du plan |
|---|---|
| §2.1 Pitch hero D4 | Task 11 (Homepage) |
| §2.2 Cible | Task 11, 13, 14 (mentions métiers) |
| §2.3 Forfaits 3 paliers | Task 1 (data), 8 (Tarifs), 11 (Homepage) |
| §2.4 Inclus dans tous les forfaits | Task 7, 8 (listes) |
| §2.5 Mise en route 750€ | Task 1 (constante), 8 (bloc dédié) |
| §2.6 Options additionnelles | Task 1 (data), 8 (cartes options) |
| §2.7 Engagement & résiliation | Task 6 (CGV), 8 (bloc dédié), 9 (Méthode) |
| §2.8 Programme Fondateur 3 slots | Task 1 (calcul), 4 (banner), 8 (tableau bascule), 12 (page dédiée), 6 (CGV) |
| §3 OptiBoard invisible | ✅ Aucune mention "OptiBoard" dans tout le plan |
| §4.1 Arborescence | Task 6, 7, 8, 9, 10, 12, 13, 14, 15 (toutes pages créées) |
| §4.2 Nav 4 entrées + CTA | Task 16 |
| §4.3 Parcours visiteur | Task 19 (formulaire qualifiant). Cal.com explicitement reporté §4.3 spec mention "à terme" |
| §5.1 Homepage sections | Task 11 |
| §5.2 Tarifs sections | Task 8 |
| §5.3 Méthode sections | Task 9 |
| §5.4 Pourquoi-ce-prix sections | Task 10 |
| §5.5 Programme Fondateur | Task 12 |
| §5.6 Contact V2 | Task 19 |
| §5.7 CGV | Task 6 |
| §5.8 Pages SEO locales | Task 13, 14 |
| §6.1 Suppressions | Task 20 |
| §6.2 Transformations | Task 11 (homepage), 16 (header), 17 (footer), 18 (layout), 19 (contact), 23 (a-propos), 14 (plombier) |
| §6.3 Créations | Task 6-15 |
| §6.4 Redirections 301 | Task 21 |
| §6.5 Sitemap | Task 22 |
| §7.1 Ton & vocabulaire | Appliqué dans rédactions Task 6-15 |
| §7.3 SEO | Task 5 (JSON-LD helpers), 18 (layout) |
| §7.4 Conformité juridique | Task 6 (CGV), 11 (mention comptable hero) |
| §7.5 Lessons | Task 18 (title absolute), 20 (rm .next), 11 (Server/Client split) |
| §8 Critères de livraison | Task 24 (Lighthouse + build + tests) |

**Gaps identifiés et acceptés** :
- ⚠️ **Cal.com intégration** : reportée. La spec §4.3 dit "lien Cal.com en réponse automatique" et §9 hors scope V1 implicitement. Le formulaire V2 (Task 19) prépare le terrain (pré-qualification), mais l'envoi auto du lien Cal.com n'est pas implémenté en V1. Pierre rappelle manuellement sous 24h.
- ⚠️ **Sous-domaine `app.opti-pro.fr`** : explicitement hors scope V1 (spec §9). ✅ Pas de tâche.
- ⚠️ **Refonte ligne édito blog** : explicitement reporté en phase 2 (spec §9). ✅ Pas de tâche.
- ⚠️ **Mockup interactif tableau de bord** : reporté en V2 (spec §9). ✅ Mockup statique illustré dans Task 4.
- ⚠️ **Témoignages page peuplée** : reporté (spec §9). ✅ Coquille créée Task 15, hors-nav.
- ⚠️ **Page `/programme-fondateur` avec formulaire dédié** : Task 12 redirige vers `/contact?cible=fondateur` (formulaire global avec radio Fondateur). Spec §9 mentionne "V1 = redirection vers /contact?cible=fondateur" — ✅ conforme.

**2. Scan de placeholders** :
- ✅ Pas de "TODO", "TBD", "à compléter" dans le code à produire.
- 🟡 Une mention `(à renseigner)` dans la CGV sur le SIREN de Pierre — **intentionnel** : Pierre fournit la valeur réelle au moment de la livraison.
- 🟡 Une mention `(coordonnées à compléter — Médiateur des entreprises ou équivalent)` dans la CGV — **intentionnel** : Pierre choisit un médiateur et fournit ses coordonnées.

**3. Cohérence des types** :
- `PiloteForfait`, `PiloteOption`, `PilotePeriod` définis Task 1, utilisés cohéremment Task 3, 5, 8, 12.
- `FaqItem` défini Task 2, utilisé Task 5, 8, 11.
- `ComparisonCard` défini Task 2, utilisé Task 3, 7, 11.
- Fonctions : `formatPrice`, `computeFondateurPrice`, `buildFaqJsonLd` — noms stables dans tout le plan.

✅ Pas d'incohérence détectée.

---

**Fin du plan.**
