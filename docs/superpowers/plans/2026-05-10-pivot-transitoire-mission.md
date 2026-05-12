# Pivot transitoire OptiPro Mission — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adapter le site opti-pro.fr (actuellement sur le pitch Pilote 30/60/100) vers une offre transitoire "Mission" (80€/h + Packs 10h/20h/30h) pendant 8 semaines, le temps de finaliser OptiBoard. Branche réversible pour retour Pilote en juillet 2026.

**Architecture:** On part du `main` actuel (commit `b902de5`) qui contient toute la refonte Pilote. La branche `claude/transitoire-mission` adapte le contenu (pas la structure) en 10 tâches. Les composants UI (PricingCard, ComparisonCards, FondateurBanner, MockupTableauDeBord, AccordionItem, AutomatedVsHuman) sont conservés dans le repo. Les data sont refondues (PILOTE_FORFAITS → MISSION_PACKS, FAQ adaptées, comparison adaptée). Les pages sont éditées avec une priorité au **copy** (texte) et à la **suppression de blocs liés à OptiBoard**.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5. Pas de Tailwind, pas de CSS Modules — styles inline avec variables CSS. Tests Jest. Pattern Server (metadata + JSON-LD) / Client (animations GSAP). Pattern JSON-LD : `<script type="application/ld+json">{safeJsonLd(data)}</script>`.

---

## File Structure

### Fichiers à modifier

| Fichier | Changement | Phase |
|---|---|---|
| `src/data/pricing.ts` | Ajouter export `MISSION_PACKS` + `MISSION_HOURLY_RATE` + `formatPrice` (existant). Conserver `PILOTE_FORFAITS` côté code (pour réactivation V2) mais ne plus les utiliser depuis les pages publiques. | A |
| `src/data/pricing.test.ts` | Ajouter tests pour `MISSION_PACKS` et `MISSION_HOURLY_RATE` | A |
| `src/data/faq.ts` | Adapter `FAQ_HOMEPAGE` (5 questions) et `FAQ_TARIFS` (5 questions) au pitch transitoire | A |
| `src/data/comparison.ts` | Adapter les 3 ComparisonCards (référence Pack 20h au lieu de Pilote 60) | A |
| `src/app/(public)/HomePageClient.tsx` | Hero refondu, retrait MockupTableauDeBord, retrait Fondateur, FAQ adaptée | B |
| `src/app/(public)/page.tsx` | Metadata + JSON-LD adaptés (priceRange transitoire) | B |
| `src/app/(public)/tarifs/TarifsClient.tsx` | Refonte majeure : Packs heures au lieu de Pilote, suppression Mise en route et Programme Fondateur | B |
| `src/app/(public)/tarifs/page.tsx` | Metadata adaptée | B |
| `src/app/(public)/le-service/LeServiceClient.tsx` | Hero adapté, MockupTableauDeBord retiré, FondateurBanner retiré | C |
| `src/app/(public)/le-service/page.tsx` | Metadata + JSON-LD adaptés | C |
| `src/app/(public)/methode/MethodeClient.tsx` | Timeline 4→3 étapes, section "outil interne" reformulée | C |
| `src/app/(public)/methode/page.tsx` | Metadata adaptée | C |
| `src/app/(public)/pourquoi-ce-prix/PourquoiClient.tsx` | Hero adapté (80€/h), AutomatedVsHuman retiré, bloc 4 reformulé | C |
| `src/app/(public)/pourquoi-ce-prix/page.tsx` | Metadata adaptée | C |
| `src/app/(public)/contact/ContactPageClient.tsx` | Formulaire V3 (heures au lieu de docs) | D |
| `src/app/api/contact/route.ts` | Backend pré-qualification adaptée (heures → pack) | D |
| `src/app/(public)/cgv/page.tsx` | Section 3 (tarifs) + section 4 (engagement) adaptées, section 5 (Fondateur) retirée | D |
| `src/app/(public)/a-propos/AProposPageClient.tsx` | Item timeline OptiPro adapté (600€/mois, mission), phrase no-management ajoutée | D |
| `src/app/(public)/programme-fondateur/page.tsx` | Désactivation via `redirect('/')` | D |
| `src/app/(public)/services/plombier/page.tsx` | Adaptation prix (600€/mois + 80€/h) | D |
| `src/app/(public)/services/serrurier/page.tsx` | Adaptation prix | D |
| `src/app/(public)/services/electricien/page.tsx` | Adaptation prix | D |
| `src/app/(public)/services/restaurateur/page.tsx` | Adaptation prix | D |
| `src/app/sitemap.ts` | Retirer `/programme-fondateur` du sitemap | D |

### Fichiers à conserver tels quels (à NE PAS toucher)

- `src/app/(public)/blog/**` (contenu blog évolutif)
- `src/app/(public)/mentions-legales/page.tsx`
- `src/app/(public)/confidentialite/page.tsx`
- `src/app/admin/**` (back-office privé)
- `src/components/ui/PricingCard.tsx` (utilisable tel quel)
- `src/components/ui/FondateurBanner.tsx` (conservé dans le repo, non monté)
- `src/components/ui/MockupTableauDeBord.tsx` (conservé dans le repo, non monté)
- `src/components/ui/AutomatedVsHuman.tsx` (conservé dans le repo, non monté)
- `src/components/ui/AccordionItem.tsx`
- `src/components/ui/ComparisonCards.tsx` (le composant — c'est `comparison.ts` qui change)
- `src/components/seo/*.tsx`
- `src/lib/json-ld.ts` (`safeJsonLd`)
- `eslint.config.mjs`, `jest.config.mjs`, `tsconfig.json`

### Aucun fichier à supprimer

→ Tout reste réversible.

---

## Plan d'implémentation par tâches

Le plan est organisé en **4 phases** de complexité croissante :

- **Phase A** : Adaptation des sources de données. 3 tâches.
- **Phase B** : Refonte des 2 pages principales (Homepage + Tarifs). 2 tâches.
- **Phase C** : Adaptation des 3 pages support (Le service, Méthode, Pourquoi-ce-prix). 3 tâches.
- **Phase D** : Migration finale (CGV, À propos, contact, programme-fondateur, services SEO, sitemap). 2 tâches.

**Total : 10 tâches.**

Chaque tâche est autonome et committable.

---

## Phase A — Sources de données

### Task 1 : Adapter `src/data/pricing.ts` + tests

**Files:**
- Modify: `src/data/pricing.ts`
- Modify: `src/data/pricing.test.ts`

- [ ] **Step 1: Lire l'état actuel**

```bash
cat src/data/pricing.ts
cat src/data/pricing.test.ts
```

Vérifier ce qui existe : `PILOTE_FORFAITS`, `PILOTE_OPTIONS`, `MISE_EN_ROUTE_PRICE`, `MISE_EN_ROUTE_FONDATEUR_PRICE`, `computeFondateurPrice`, `formatPrice`, `PILOTE_VISIBILITE`.

- [ ] **Step 2: Ajouter les nouvelles exports en TÊTE du fichier (sans rien retirer)**

Ajouter après les interfaces existantes et avant `PILOTE_VISIBILITE` :

```typescript
// === MISSION (offre transitoire mai-juillet 2026) ===

export interface MissionPack {
  id: 'pack-10' | 'pack-20' | 'pack-30';
  name: string;
  hours: number;
  monthlyPrice: number; // HT/mois
  hourlyEquivalent: number; // arrondi à l'euro
  discount: number; // % vs tarif horaire
  cible: string;
  recommended?: boolean;
}

/**
 * Tarif horaire des missions ponctuelles ou packs.
 * Référence : responsable d'exploitation indépendant confirmé débutant.
 */
export const MISSION_HOURLY_RATE = 80;

export const MISSION_PACKS: MissionPack[] = [
  {
    id: 'pack-10',
    name: 'Pack 10h',
    hours: 10,
    monthlyPrice: 720,
    hourlyEquivalent: 72,
    discount: 10,
    cible: 'Pour les besoins légers et récurrents (suivi ADV léger, relances).',
  },
  {
    id: 'pack-20',
    name: 'Pack 20h',
    hours: 20,
    monthlyPrice: 1400,
    hourlyEquivalent: 70,
    discount: 12,
    cible: 'Pour un suivi ADV régulier ou un accompagnement multi-tâches.',
    recommended: true,
  },
  {
    id: 'pack-30',
    name: 'Pack 30h',
    hours: 30,
    monthlyPrice: 1950,
    hourlyEquivalent: 65,
    discount: 19,
    cible: 'Pour un accompagnement complet de votre admin opérationnelle.',
  },
];
```

- [ ] **Step 3: Ajouter les tests dans `pricing.test.ts`**

Ajouter après les tests existants :

```typescript
import {
  MISSION_PACKS,
  MISSION_HOURLY_RATE,
} from './pricing';

describe('mission pricing', () => {
  test('MISSION_HOURLY_RATE is 80', () => {
    expect(MISSION_HOURLY_RATE).toBe(80);
  });

  test('MISSION_PACKS has 3 entries with correct prices and hours', () => {
    expect(MISSION_PACKS).toHaveLength(3);
    expect(MISSION_PACKS[0]).toMatchObject({ id: 'pack-10', hours: 10, monthlyPrice: 720, hourlyEquivalent: 72 });
    expect(MISSION_PACKS[1]).toMatchObject({ id: 'pack-20', hours: 20, monthlyPrice: 1400, hourlyEquivalent: 70, recommended: true });
    expect(MISSION_PACKS[2]).toMatchObject({ id: 'pack-30', hours: 30, monthlyPrice: 1950, hourlyEquivalent: 65 });
  });

  test('MISSION_PACKS discounts compute correctly vs hourly rate', () => {
    // Pack 10h : 720/10 = 72€/h vs 80€/h → 10% de remise
    expect(Math.round((1 - MISSION_PACKS[0].monthlyPrice / (MISSION_PACKS[0].hours * MISSION_HOURLY_RATE)) * 100)).toBe(10);
    // Pack 20h : 1400/20 = 70€/h vs 80€/h → 12.5% (arrondi à 12 dans la spec, à 13 par Math.round)
    // On utilise le champ déclaré (12)
    expect(MISSION_PACKS[1].discount).toBe(12);
    expect(MISSION_PACKS[2].discount).toBe(19);
  });

  test('Only Pack 20h is marked as recommended', () => {
    const recommended = MISSION_PACKS.filter((p) => p.recommended);
    expect(recommended).toHaveLength(1);
    expect(recommended[0].id).toBe('pack-20');
  });
});
```

- [ ] **Step 4: Lancer les tests**

```bash
npx jest src/data/pricing.test.ts
```

Expected: PASS — tous les tests existants + 4 nouveaux passent. Si un test "discount" échoue, ajuster le calcul ou la valeur du champ.

- [ ] **Step 5: Type-check**

```bash
npx tsc --noEmit
```

Expected: 0 erreur nouvelle.

- [ ] **Step 6: Commit**

```bash
git add src/data/pricing.ts src/data/pricing.test.ts
git commit -m "feat(data): ajouter MISSION_PACKS (transitoire 8 semaines)

3 packs heures (10h/20h/30h) + tarif horaire 80€ pour la phase
transitoire en attendant OptiBoard. PILOTE_FORFAITS conservé en
parallèle pour la réactivation V2 prévue mi-juillet 2026.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2 : Adapter `src/data/faq.ts`

**Files:**
- Modify: `src/data/faq.ts`

- [ ] **Step 1: Lire l'état actuel**

```bash
cat src/data/faq.ts
```

- [ ] **Step 2: Remplacer FAQ_HOMEPAGE et FAQ_TARIFS**

Conserver le helper `buildFaqJsonLd` et l'interface `FaqItem`. Remplacer le contenu des deux tableaux par :

```typescript
export const FAQ_HOMEPAGE: FaqItem[] = [
  {
    question: 'Vous remplacez mon comptable ?',
    answer:
      "Non. Je gère l'admin opérationnel (devis, facturation, suivi, fournisseurs, relances), votre comptable garde sa mission de certification, liasse fiscale et conseil fiscal. Je lui livre un dossier propre chaque mois — il gagne du temps, vous économisez.",
  },
  {
    question: "Pas d'engagement long ?",
    answer:
      "Je travaille à l'heure (mission ponctuelle) ou en pack mensuel reconductible tacitement. Pour les packs, le préavis de résiliation est de 15 jours fin de mois. Vous gardez la main.",
  },
  {
    question: 'Comment je vous transmets les infos depuis le chantier ?',
    answer:
      "Vocal, photo ou message WhatsApp. Je réponds sous 4h en jour ouvré. Vous n'avez aucun logiciel à apprendre.",
  },
  {
    question: 'C’est conforme RGPD et facturation électronique 2026-2027 ?',
    answer:
      "Oui. Toutes vos données sont hébergées en Europe. La facturation électronique (réforme PDP) est intégrée dans la préparation des factures que je gère via vos outils existants (Pennylane, Sage, etc.).",
  },
  {
    question: 'Comment je calcule combien d’heures il me faut ?',
    answer:
      "Estimation rapide : 1 devis ≈ 30-45 min, 1 facture ≈ 15-20 min, 1 relance ≈ 10 min. Pour ~10 devis et 15 factures par mois avec un peu de suivi, le Pack 10h (720€) suffit. Pour un accompagnement plus complet (incluant trésorerie + coordination fournisseurs), c'est plutôt le Pack 20h (1 400€). On en discute en appel découverte.",
  },
];

export const FAQ_TARIFS: FaqItem[] = [
  {
    question: 'Comment fonctionne la facturation des heures ?',
    answer:
      "En pack mensuel : forfait fixe quel que soit le nombre exact d'heures consommées (dans la limite du pack). En mission ponctuelle : tarif horaire 80€/h HT, facturation au temps réellement passé (arrondi au quart d'heure supérieur).",
  },
  {
    question: 'Et si je dépasse mon pack un mois ?',
    answer:
      "Si dépassement ponctuel (1 mois isolé) : facturation des heures supplémentaires à 80€/h HT. Si dépassement récurrent (>20% pendant 2 mois consécutifs) : on bascule au pack supérieur le mois suivant. Pas de surfacturation cachée.",
  },
  {
    question: 'Et si je sous-consomme un mois ?',
    answer:
      "Les heures du pack mensuel ne se reportent pas. Si vous sous-consommez 2 mois consécutifs, on bascule au pack inférieur. Mon objectif n'est pas de vous facturer du vide.",
  },
  {
    question: 'TVA ?',
    answer:
      "Tarifs HT. Franchise en base de TVA (art. 293 B du CGI) — pas de TVA à payer en plus pour vous.",
  },
  {
    question: 'Stripe : qui paie les frais ?',
    answer:
      "Si vous choisissez l'option Stripe (paiement en ligne pour vos clients), les frais sont refacturés en transparence (1,4% + 0,25€ par transaction réussie). Vous voyez chaque détail.",
  },
];
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/data/faq.ts
git commit -m "feat(data): adapter FAQ homepage et tarifs (pitch mission)

Questions adaptées au modèle horaire + pack au lieu du Pilote :
- Pas d'engagement long, préavis 15 jours
- Calcul des heures (devis 30-45min, facture 15-20min)
- Dépassement / sous-consommation des packs

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3 : Adapter `src/data/comparison.ts`

**Files:**
- Modify: `src/data/comparison.ts`

- [ ] **Step 1: Lire l'état actuel**

```bash
cat src/data/comparison.ts
```

- [ ] **Step 2: Remplacer les 3 ComparisonCards**

Le Pack 20h (1 400€/mois) devient la référence comparée. Remplacer le tableau `COMPARISON_CARDS` par :

```typescript
import { MISSION_PACKS, formatPrice } from './pricing';

// On compare au Pack 20h (le palier recommandé)
const refPack = MISSION_PACKS[1]; // pack-20

export const COMPARISON_CARDS: ComparisonCard[] = [
  {
    vs: 'Un(e) assistant(e) indépendant(e)',
    eux: "45-60€/h pour 20-30h/mois (900€ à 1 800€). Profil junior, focus exécution, sans expérience opérationnelle senior.",
    moi: `${formatPrice(refPack.monthlyPrice)} pour 20h/mois (${refPack.hourlyEquivalent}€/h équivalent). 10 ans en pilotage d'exploitation et logistique, je vais 2-3 fois plus vite sur ce qui compte vraiment.`,
  },
  {
    vs: 'Un mi-temps salarié(e)',
    eux: "~2 300€/mois chargés, engagement 18-24 mois, charges patronales, congés payés, gestion RH. Vous portez le risque.",
    moi: `${formatPrice(refPack.monthlyPrice)} en pack mensuel reconductible. Préavis 15 jours, zéro charge sociale, zéro paperasse RH. Vous testez sans risque.`,
  },
  {
    vs: 'Un cabinet comptable',
    eux: "Périmètre limité à la comptabilité réglementée. Pas de devis client, pas de relances, pas de pilotage des fournisseurs, pas de coordination chantier.",
    moi: "Je gère tout l'admin opérationnel quotidien. Votre comptable garde sa mission réglementaire — je lui livre un dossier propre chaque mois.",
  },
];
```

- [ ] **Step 3: Vérifier que `ComparisonCard` est toujours exporté**

L'interface `ComparisonCard` doit rester en haut du fichier. Vérifier après modification.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add src/data/comparison.ts
git commit -m "feat(data): adapter ComparisonCards (référence Pack 20h)

3 comparaisons révisées : assistant indé / mi-temps salarié / cabinet
comptable. Référence Pack 20h (1400€/mois) au lieu de Pilote 60.
Mention 10 ans pilotage exploitation dans la carte assistant.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase B — Refonte Homepage + Tarifs (les 2 pages principales)

### Task 4 : Refondre Homepage

**Files:**
- Modify: `src/app/(public)/page.tsx`
- Modify: `src/app/(public)/HomePageClient.tsx`

- [ ] **Step 1: Adapter `page.tsx`** (server)

Modifier les metadata pour refléter le nouveau positionnement. Conserver la structure JSON-LD existante mais ajuster :
- `priceRange` du LocalBusiness/Service : `'600€-1950€/mois HT'` (au lieu de la fourchette Pilote)
- Description : remplacer "tableau de bord temps réel inclus" par "missions ponctuelles ou packs mensuels, à l'heure ou au mois"
- Conserver `<FAQJsonLd faq={FAQ_HOMEPAGE} />` (les data ont déjà été adaptées en Task 2)
- Retirer `<OfferCatalogJsonLd />` si présent (n'a plus de sens, et le composant lit `PILOTE_FORFAITS` qu'on ne veut pas exposer publiquement)

- [ ] **Step 2: Refondre `HomePageClient.tsx`** — sections par sections

**Section Hero (lignes 138-309 environ)** : remplacer entièrement le contenu par :

```tsx
<section
  data-hero-section
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
```

→ Retiré : 3 lignes "Plus rapide / Moins cher / Plus complet", rassurance comptable explicite, bandeau Fondateur. Le bandeau de rassurance comptable est intégré naturellement via la FAQ.

**Section bloc problème (lignes ~311-380)** : à conserver telle quelle.

**Section bloc solution (lignes ~382-440)** : adapter les descriptions des 4 cartes :

```tsx
const SOLUTION_CARDS = [
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
```

**Section "Bloc tableau de bord" (avec MockupTableauDeBord)** : **RETIRER ENTIÈREMENT**. Identifier la section dans le code (probablement entre le bloc solution et le bloc comparaison) et la supprimer.

**Section bloc comparaison** : aucune modif côté JSX (le composant `ComparisonCards` charge les data déjà adaptées en Task 3).

**Section témoignages** : `SHOW_TESTIMONIALS = false` → conservé tel quel.

**Section programme Fondateur (avec FondateurBanner)** : **RETIRER ENTIÈREMENT**. Identifier la section et la supprimer.

**Section FAQ** : aucune modif côté JSX (les data viennent de Task 2).

**Section CTA final** : adapter le H2 :

```tsx
<h2>Prêt à libérer 5 à 10h par semaine ?</h2>
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Si une erreur : composant `MockupTableauDeBord` ou `FondateurBanner` importé mais non utilisé. **Retirer l'import** (laisser les fichiers .tsx eux-mêmes intacts dans `src/components/ui/`).

- [ ] **Step 4: Dev preview**

```bash
npm run dev
```

Visiter `http://localhost:3000/` et vérifier :
- Hero épuré sans bandeau Fondateur
- Pas de mockup dashboard
- Pas de section Fondateur
- 4 cartes solution avec nouvelles descriptions
- FAQ avec les 5 nouvelles questions

Stopper le dev server après vérification.

- [ ] **Step 5: Commit**

```bash
git add src/app/\(public\)/page.tsx src/app/\(public\)/HomePageClient.tsx
git commit -m "feat(homepage): refonte hero + retrait blocs mockup et Fondateur

Hero épuré 'Le bras droit des artisans, indépendants et TPE',
mention 600€/mois, retrait du bandeau Fondateur, du MockupTableauDeBord
et de la section Programme Fondateur. Descriptions des 4 cartes
solution adaptées pour ne plus mentionner 'tableau de bord temps réel'
ou 'automatisation'.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5 : Refondre page `/tarifs`

**Files:**
- Modify: `src/app/(public)/tarifs/page.tsx`
- Modify: `src/app/(public)/tarifs/TarifsClient.tsx`

C'est la tâche la plus volumineuse de ce plan. La page actuelle a **13 sections** alignées sur Pilote — on la ramène à 10 sections alignées sur Mission.

- [ ] **Step 1: Adapter `page.tsx`** (server)

- Metadata `title.absolute` : `'Tarifs — Missions OptiPro'`
- Description : `"À l'heure ou en pack mensuel : 80€/h, Pack 10h 720€/mois, Pack 20h 1 400€/mois, Pack 30h 1 950€/mois. Sans engagement long, préavis 15 jours."`
- Retirer `<OfferCatalogJsonLd />` (lit `PILOTE_FORFAITS` qu'on ne veut plus exposer publiquement). Si besoin de structure SEO, le créer plus tard pour MISSION_PACKS.
- Conserver `<FAQJsonLd faq={FAQ_TARIFS} />` (data adaptées Task 2)

- [ ] **Step 2: Refondre `TarifsClient.tsx`** — sections par sections

**Imports à ajuster** : remplacer `PILOTE_FORFAITS, PILOTE_OPTIONS, MISE_EN_ROUTE_PRICE, computeFondateurPrice, formatPrice, type PilotePeriod` par `MISSION_PACKS, MISSION_HOURLY_RATE, PILOTE_OPTIONS, formatPrice`. Retirer `import FondateurBanner from ...` et `import PricingCard from ...` (on va recréer des cartes inline pour les packs).

**Section 1 — Hero** :

```tsx
<section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
  <h1>Un tarif clair. À l&apos;heure ou en pack. Sans engagement long.</h1>
  <p>Mission ponctuelle ou accompagnement régulier — vous payez ce que vous consommez.</p>
</section>
```

**Section 2 — Bandeau Fondateur sticky** : **RETIRER ENTIÈREMENT**.

**Section 3 — 3 cartes Packs (au lieu de 3 forfaits Pilote)** :

```tsx
<section>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
    {MISSION_PACKS.map((pack) => (
      <article key={pack.id} style={{
        padding: '2rem 1.75rem',
        background: 'var(--background)',
        border: pack.recommended ? '2px solid var(--accent)' : '1px solid var(--border)',
        borderRadius: '1.25rem',
        marginTop: pack.recommended ? '0.85rem' : 0,
        position: 'relative',
        boxShadow: pack.recommended ? '0 8px 32px var(--accent-light)' : 'none',
      }}>
        {pack.recommended && (
          <span style={{
            position: 'absolute', top: '-0.85rem', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--accent)', color: 'var(--on-accent)',
            padding: '0.3rem 0.85rem', borderRadius: '999px',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
          }}>Recommandé</span>
        )}
        <h3>{pack.name}</h3>
        <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>{pack.cible}</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '1rem 0 0.25rem' }}>
          {formatPrice(pack.monthlyPrice)}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}>HT par mois</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0' }}>
          <li>✓ {pack.hours} heures dédiées par mois</li>
          <li>✓ {pack.hourlyEquivalent}€/h équivalent (-{pack.discount}% vs tarif horaire)</li>
          <li>✓ Heures non reportées d&apos;un mois sur l&apos;autre</li>
          <li>✓ Reconductible tacitement — préavis 15 jours</li>
        </ul>
        <Link href="/contact" style={{
          display: 'block', textAlign: 'center', padding: '0.85rem 1.25rem',
          background: pack.recommended ? 'var(--accent)' : 'var(--primary)',
          color: pack.recommended ? 'var(--on-accent)' : 'var(--on-primary)',
          borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600,
        }}>
          Réserver mon appel
        </Link>
      </article>
    ))}
  </div>
  <p style={{ textAlign: 'center', color: 'var(--secondary)', marginTop: '2rem' }}>
    Au-delà de 30h/mois → devis sur mesure.
  </p>
</section>
```

**Section 4 — Mission à l'heure (nouveau bloc)** :

```tsx
<section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
  <div style={{
    padding: '2rem',
    background: 'rgba(14, 165, 233, 0.05)',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  }}>
    <div>
      <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Mission à l&apos;heure</h2>
      <p style={{ margin: '0.5rem 0 0', color: 'var(--secondary)' }}>
        Pour les missions ponctuelles, sans engagement.
      </p>
    </div>
    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
      {MISSION_HOURLY_RATE}€/h HT
    </div>
  </div>
</section>
```

**Section 5 — Inclus dans tous les packs** : remplacer les 10 items Pilote par 6 items mission :

```tsx
const INCLUS_DANS_TOUS = [
  'WhatsApp dédié (réponse sous 4h en jour ouvré)',
  'Visio bilan mensuelle (30 min)',
  'Utilisation de VOS outils (Pennylane, Sage, Excel, etc.) — pas d\'imposition',
  'Reporting mensuel détaillé des heures consommées par tâche',
  'Conformité RGPD + facturation électronique 2026-2027',
  'Vos données restent votre propriété — export à tout moment',
];
```

**Section 6 — Mise en route** : **RETIRER ENTIÈREMENT**.

**Section 7 — Options additionnelles** : conserver `PILOTE_OPTIONS` mais filtrer pour retirer "Préparation paie" et le titre du bloc devient "Options" (au lieu de "Options additionnelles"). Si nécessaire, créer une constante locale `MISSION_OPTIONS` qui clone `PILOTE_OPTIONS` sans le "paie-prep".

**Section 8 — Engagement & résiliation** : remplacer le contenu par :

```tsx
<p>
  <strong>Mission à l&apos;heure</strong> : aucun engagement. Devis à la mission, payé à l&apos;exécution.
</p>
<p>
  <strong>Pack mensuel</strong> : 1 mois reconductible tacitement.
</p>
<p>
  <strong>Résiliation</strong> : par email à p.laurent@opti-pro.fr, préavis 15 jours fin de mois.
</p>
<p>
  <strong>Vos données</strong> restent les vôtres, exportables à tout moment.
</p>
```

**Section 9 — Comparateur "ailleurs"** : adapter pour comparer au Pack 20h.

```tsx
const COMPARATEUR_ROWS = [
  { label: 'Mi-temps salarié(e) interne', price: '~2 300€/mois', detail: 'chargés, + équipement, + formation, + gestion RH' },
  { label: 'Assistant·e indépendant·e (20h/mois)', price: '900-1 200€/mois', detail: 'profil junior, sans expérience opérationnelle senior' },
  { label: 'Cabinet comptable + admin externe', price: '800-1 200€/mois cumulés', detail: 'coordination à votre charge' },
  { label: 'OptiPro Pack 20h', price: '1 400€/mois', detail: '10 ans en pilotage exploitation, préavis 15 jours, zéro charge', highlight: true },
];
```

**Section 10 — Programme Fondateur + Tableau bascule** : **RETIRER ENTIÈREMENT**.

**Section 11 — FAQ** : aucune modif JSX (data viennent de Task 2). Conserver `FAQ_TARIFS`.

**Section 12 — Mention TVA** : conservée.

**Section 13 — CTA final** : adapter le H2 :

```tsx
<h2>Pas sûr du pack adapté ? Discutons-en.</h2>
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Dev preview**

Visiter `http://localhost:3000/tarifs` et vérifier :
- 3 cartes packs (10h, 20h, 30h) avec Pack 20h recommandé
- Bloc Mission à l'heure 80€/h
- Pas de Programme Fondateur ni Mise en route
- Engagement 15 jours mentionné
- Comparateur sur Pack 20h
- FAQ avec les 5 nouvelles questions tarifs
- Mention TVA en bas

- [ ] **Step 5: Commit**

```bash
git add src/app/\(public\)/tarifs/
git commit -m "feat(tarifs): refonte complète page Tarifs (mission au lieu de Pilote)

3 cartes Packs heures (10h/20h/30h) + bloc 80€/h. Préavis 15 jours.
Retrait Programme Fondateur, Mise en route, tableau de bascule.
Comparateur ajusté sur Pack 20h.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase C — Adaptation des 3 pages support

### Task 6 : Adapter `/le-service`

**Files:**
- Modify: `src/app/(public)/le-service/page.tsx`
- Modify: `src/app/(public)/le-service/LeServiceClient.tsx`

- [ ] **Step 1: Adapter `page.tsx`** : metadata + JSON-LD `Service`. `priceRange: '600€-1950€/mois HT'`. Retirer `<OfferCatalogJsonLd />`.

- [ ] **Step 2: Adapter `LeServiceClient.tsx`** :
- Hero h1 : conservé ("Tout votre admin opérationnel. Pris en charge.")
- Sous-titre : remplacer la mention de prix par "à partir de 600€/mois" (Pack 10h). Retirer "tableau de bord temps réel inclus".
- 7 livrables : conservés
- **RETIRER** le bloc `<MockupTableauDeBord />` et son texte d'intro
- ComparisonCards : aucun changement JSX (data adaptées en Task 3)
- **RETIRER** `<FondateurBanner variant="inline" />`
- CTA final : conservé

- [ ] **Step 3: Type-check + dev preview** sur `/le-service`

- [ ] **Step 4: Commit**

```bash
git add src/app/\(public\)/le-service/
git commit -m "feat(le-service): adapter pricing 600€/mois + retirer mockup/Fondateur"
```

---

### Task 7 : Adapter `/methode`

**Files:**
- Modify: `src/app/(public)/methode/page.tsx`
- Modify: `src/app/(public)/methode/MethodeClient.tsx`
- Modify: `src/components/ui/TimelineMethode.tsx`

- [ ] **Step 1: Adapter `page.tsx`** : metadata (retirer mention "Mois 1 Mise en route")

- [ ] **Step 2: Adapter `TimelineMethode.tsx`** : passer de 4 étapes à 3 étapes
  - Étape 1 "L'appel découverte" : conservée
  - Étape 2 "Le démarrage" (nouveau nom au lieu de "Le mois 1 : Mise en route") :
    - Pas de prix mentionné
    - Pas d'AccordionItem (les 4 semaines disparaissent)
    - Liste simple : audit existant, validation périmètre, premier RDV cadrage
  - Étape 3 "Le quotidien" : conservée (vocaux WhatsApp, je gère, reporting)
  - Étape 4 "Le rythme régulier" : **fusionnée dans étape 3** (visio mensuelle, etc.)

- [ ] **Step 3: Adapter `MethodeClient.tsx`** :
  - Hero conservé
  - `<TimelineMethode />` conservé (mais le composant lui-même a changé Step 2)
  - Bloc "Vos outils, rien de nouveau" : conservé + `<MockupTableauDeBord />` **RETIRÉ**
  - Bloc "Comment je peux faire mieux pour moins cher" : reformuler le contenu pour retirer mention "outil interne" et "70% automatisé". Nouvelle version :

```tsx
<h2>Et moi, comment je bosse ?</h2>
<p><strong>Voilà comment je peux faire mieux pour moins cher.</strong></p>
<p>
  10 ans d&apos;expérience en pilotage d&apos;exploitation et de logistique me permettent
  d&apos;aller vite sur ce qui freine les TPE : l&apos;organisation, les processus, le pilotage.
</p>
<p>
  Là où un assistant junior passe 1h, je passe 15 minutes. Là où une agence facture un audit à
  3000€, j&apos;écoute et je fais.
</p>
<p>
  Pas de magie. Pas d&apos;outil miracle. Juste 10 ans à voir tomber les mêmes problèmes et à
  trouver les bonnes solutions.
</p>
```

  - Bloc "Et si je ne suis pas satisfait" : adapter le texte pour mentionner préavis 15 jours et pas "M1 mois test"

- [ ] **Step 4: Type-check + dev preview** sur `/methode`

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/TimelineMethode.tsx src/app/\(public\)/methode/
git commit -m "feat(methode): timeline 3 étapes + texte sans OptiBoard"
```

---

### Task 8 : Adapter `/pourquoi-ce-prix`

**Files:**
- Modify: `src/app/(public)/pourquoi-ce-prix/page.tsx`
- Modify: `src/app/(public)/pourquoi-ce-prix/PourquoiClient.tsx`

- [ ] **Step 1: Adapter `page.tsx`** : metadata avec mention "80€/h" et "le calcul honnête"

- [ ] **Step 2: Adapter `PourquoiClient.tsx`** :
  - Hero h1 : *"Pourquoi 80€/h. Le calcul honnête."* (au lieu de "750€/mois")
  - Bloc 1 "D'où je viens" : conservé (récit 10 ans + 7000€ chargé)
  - Bloc 2 "Pourquoi 80€ et pas 150€" : adapté

```tsx
<h2>Pourquoi 80€ et pas 150€</h2>
<p>
  Le marché du conseil opérationnel se découpe ainsi :
</p>
<ul>
  <li>Consultant en cabinet : <strong>150-300€/h</strong></li>
  <li>Cadre indépendant senior reconnu : <strong>100-150€/h</strong></li>
  <li>Moi (responsable d&apos;exploitation indépendant en démarrage) : <strong>80€/h</strong></li>
  <li>Assistant·e administratif·ve indépendant·e : <strong>45-60€/h</strong></li>
</ul>
<p>
  80€/h, c&apos;est mon tarif d&apos;entrée. Il reflète mon expérience (10 ans en pilotage
  d&apos;exploitation) sans gonfler artificiellement par mon ancienneté en tant qu&apos;indépendant.
</p>
<p>
  Quand mes témoignages s&apos;accumulent et que ma réputation grandit, ce tarif évoluera. C&apos;est
  le bon moment pour me prendre — j&apos;ai l&apos;expérience d&apos;un cadre senior au tarif d&apos;un
  indépendant qui démarre.
</p>
```

  - Bloc 3 `<AutomatedVsHuman />` : **RETIRER ENTIÈREMENT** (l'argument 70% automatisé n'a pas de sens sans OptiBoard)
  - Bloc 4 "Pourquoi c'est durable" : reformuler pour retirer mention "outil interne" :

```tsx
<h2>Pourquoi c&apos;est durable</h2>
<p>
  Beaucoup de prestataires cassent leurs prix au démarrage pour vous attraper, puis montent
  progressivement.
</p>
<p><strong>Pas moi.</strong></p>
<p>Le tarif 80€/h tient parce que :</p>
<ul>
  <li>Je n&apos;ai pas de bureau, pas d&apos;équipe à payer, pas de loyer commercial</li>
  <li>Je suis en franchise TVA donc 0€ de TVA à reverser</li>
  <li>Je travaille à distance — pas de déplacement à facturer</li>
  <li>Je me limite à 8-10 clients pour rester réactif et qualitatif</li>
</ul>
<p>
  <strong>Mon objectif :</strong> 8-10 clients fidèles à long terme. Pas 50 clients qui partent
  après 6 mois.
</p>
```

  - Bloc 5 "Pourquoi pas un comptable" : conservé tel quel
  - Bloc 6 "Pourquoi je limite à 8-10 clients" : conservé tel quel
  - Bloc 7 CTA final : conservé

- [ ] **Step 3: Type-check + dev preview** sur `/pourquoi-ce-prix`

- [ ] **Step 4: Commit**

```bash
git add src/app/\(public\)/pourquoi-ce-prix/
git commit -m "feat(pourquoi): adapter pricing 80€/h + retirer AutomatedVsHuman/OptiBoard"
```

---

## Phase D — Migration finale

### Task 9 : Adapter pages secondaires (CGV, À propos, Contact, SEO services)

**Files:**
- Modify: `src/app/(public)/cgv/page.tsx`
- Modify: `src/app/(public)/a-propos/AProposPageClient.tsx`
- Modify: `src/app/(public)/contact/ContactPageClient.tsx`
- Modify: `src/app/api/contact/route.ts`
- Modify: `src/app/(public)/services/plombier/page.tsx`
- Modify: `src/app/(public)/services/serrurier/page.tsx`
- Modify: `src/app/(public)/services/electricien/page.tsx`
- Modify: `src/app/(public)/services/restaurateur/page.tsx`

#### 9.1 — `/cgv` adaptation

- [ ] **Section 3 (Tarifs)** : remplacer la liste `<ul>` actuelle (Pilote 30/60/100 + Mise en route 750€) par :

```html
<ul>
  <li>Mission à l'heure — 80€/h HT, facturation au temps réellement passé.</li>
  <li>Pack 10h — 720€/mois HT.</li>
  <li>Pack 20h — 1 400€/mois HT.</li>
  <li>Pack 30h — 1 950€/mois HT.</li>
  <li>Au-delà de 30h/mois — devis sur mesure.</li>
</ul>
```

- [ ] **Section 4 (Engagement)** : remplacer le contenu par :

```html
<p>
  La Mission à l'heure est sans engagement : devis par mission, payé à l'exécution.
</p>
<p>
  Les Packs mensuels sont reconductibles tacitement chaque mois. La résiliation est possible à tout
  moment avec un préavis de <strong>15 jours fin de mois</strong>, par email à
  p.laurent@opti-pro.fr.
</p>
```

- [ ] **Section 5 (Programme Fondateur)** : **SUPPRIMER ENTIÈREMENT** la section. Renuméroter les sections suivantes (6→5, 7→6, etc.).

#### 9.2 — `/a-propos` adaptation

- [ ] Dans le tableau `timeline`, item OptiPro : remplacer la description par :

```typescript
description:
  "J'ai quitté l'exploitation salariée pour proposer mon expérience aux artisans, indépendants et TPE qui n'ont pas les moyens d'embaucher un cadre. À partir de 600€/mois, je prends en charge ce qui vous freine — devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en accompagnement régulier. Je me limite à 8-10 clients pour rester réactif et qualitatif sur chacun.",
```

- [ ] Dans le tableau `valeurs`, ajouter ou modifier l'une des 3 valeurs pour intégrer la phrase no-management. Option : ajouter une 4e valeur :

```typescript
{
  icon: '\u{1F39B}\u{FE0F}',
  title: 'Pilote, pas manager',
  description:
    "Aujourd'hui je me recentre sur le pilotage et l'organisation — coordination, structuration, optimisation. Le management quotidien des équipes reste entre vos mains, je ne m'y substitue pas.",
},
```

#### 9.3 — `/contact` adaptation (formulaire V3)

- [ ] Dans `ContactPageClient.tsx` :
  - Conserver champs : prénom, nom, email, téléphone, métier, message
  - **Remplacer** "Volume estimé documents/mois" par **"Heures estimées par mois"** :

```typescript
<select name="heuresEstimees">
  <option value="">Choisir...</option>
  <option value="1-5">1-5h ponctuel</option>
  <option value="5-10">5-10h</option>
  <option value="10-20">10-20h</option>
  <option value="20-30">20-30h</option>
  <option value="30+">Plus de 30h</option>
  <option value="unknown">Je ne sais pas encore</option>
</select>
```

  - **Remplacer** "Type de demande standard/fondateur" par **"Type de besoin"** :

```typescript
<select name="typeBesoin">
  <option value="ponctuel">Mission ponctuelle</option>
  <option value="regulier">Accompagnement régulier</option>
  <option value="indecis">Je ne sais pas encore</option>
</select>
```

  - **Retirer** le champ "Salariés"
  - Conserver les URL params (`?metier=...`)

- [ ] Dans `route.ts` :
  - Calculer `packEstime` à partir de `heuresEstimees` :
    - "1-5" → "Mission à l'heure (80€/h)"
    - "5-10" → "Pack 10h (720€/mois)"
    - "10-20" → "Pack 20h (1 400€/mois)"
    - "20-30" → "Pack 30h (1 950€/mois)"
    - "30+" → "Sur devis"
  - Inclure `packEstime`, `heuresEstimees`, `typeBesoin`, `metier` dans l'email Resend (HTML)
  - Inclure ces champs dans les notes structurées de l'insert Supabase `clients`

#### 9.4 — `/services/{plombier,serrurier,electricien,restaurateur}` adaptation

- [ ] Pour chacune des 4 pages, modifier l'éventuelle mention de prix :
  - Remplacer "à partir de 690€/mois (Pilote 30)" par "à partir de 600€/mois (Pack 10h) ou 80€/h"
  - Conserver le reste tel quel (Hero, pain points, CTA)

#### 9.5 — Vérifications

- [ ] Type-check : `npx tsc --noEmit`
- [ ] Dev preview sur `/cgv`, `/a-propos`, `/contact`, `/services/plombier`

- [ ] **Commit**

```bash
git add src/app/\(public\)/cgv/ src/app/\(public\)/a-propos/ src/app/\(public\)/contact/ src/app/api/contact/ src/app/\(public\)/services/
git commit -m "feat(transitoire): adapter CGV, À propos, Contact V3, pages SEO services

- CGV section 3 (tarifs mission) + section 4 (préavis 15j) + retrait Fondateur
- À propos timeline OptiPro adaptée + valeur 'Pilote, pas manager'
- Contact V3 : heures estimées + type besoin (au lieu de docs + fondateur)
- API contact : pré-qualification heures → pack
- Pages SEO services : prix 600€/mois + 80€/h

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 10 : Désactiver `/programme-fondateur` + sitemap + vérifications finales

**Files:**
- Modify: `src/app/(public)/programme-fondateur/page.tsx`
- Modify: `src/app/(public)/programme-fondateur/FondateurClient.tsx` (à supprimer du build si nécessaire)
- Modify: `src/app/sitemap.ts`

#### 10.1 — Désactiver `/programme-fondateur`

- [ ] Remplacer entièrement le contenu de `src/app/(public)/programme-fondateur/page.tsx` par :

```typescript
import { redirect } from 'next/navigation';

export default function ProgrammeFondateurPage(): never {
  redirect('/');
}
```

- [ ] Le fichier `FondateurClient.tsx` reste dans le repo (réactivation V2) mais n'est plus importé.

#### 10.2 — Retirer `/programme-fondateur` du sitemap

- [ ] Dans `src/app/sitemap.ts`, retirer l'entrée :

```typescript
{ url: `${baseUrl}/programme-fondateur`, ... },
```

#### 10.3 — Vérifications finales

- [ ] **Type-check**

```bash
npx tsc --noEmit
```

Expected: 0 erreur.

- [ ] **Lint**

```bash
npm run lint
```

Expected: 0 erreur (warnings préexistants tolérés via override ESLint).

- [ ] **Tests Jest**

```bash
npm run test
```

Expected: tous les tests passent (existants + nouveaux de Task 1).

- [ ] **Build production**

```bash
rm -rf .next && npm run build
```

Expected: build réussi. Vérifier que `/programme-fondateur` est listé comme `redirect` (308) dans le rapport.

- [ ] **Dev preview** :
  - `/` → hero épuré, pas de mockup, pas de Fondateur
  - `/tarifs` → 3 packs heures, pas de programme Fondateur
  - `/le-service` → pas de mockup, pas de FondateurBanner
  - `/methode` → 3 étapes au lieu de 4
  - `/pourquoi-ce-prix` → 80€/h, pas d'AutomatedVsHuman
  - `/cgv` → tarifs mission, préavis 15 jours
  - `/a-propos` → 4 valeurs incluant "Pilote, pas manager"
  - `/contact` → formulaire V3 (heures + type besoin)
  - `/services/plombier` → 600€/mois + 80€/h
  - `/programme-fondateur` → redirige vers `/`
  - `/sitemap.xml` → pas de `/programme-fondateur`

- [ ] **Commit final**

```bash
git add src/app/\(public\)/programme-fondateur/page.tsx src/app/sitemap.ts
git commit -m "feat(transitoire): désactiver /programme-fondateur + retrait sitemap

Page programme-fondateur redirige vers / via redirect() server-side.
FondateurClient.tsx conservé dans le repo pour réactivation V2 Pilote
en juillet 2026.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

- [ ] **Pousser la branche**

```bash
git push -u origin claude/transitoire-mission
```

---

## Self-review du plan vs spec

**1. Couverture du spec** :

| Section spec | Tâche du plan |
|---|---|
| §2.1 Pitch hero | Task 4 (Homepage) |
| §2.2 Cible élargie (artisans/indé/TPE) | Task 4 (Homepage) + Task 9.2 (À propos) |
| §2.3 Modèle tarifaire (80€/h + 3 packs) | Task 1 (data) + Task 5 (Tarifs) |
| §2.4 Engagement (préavis 15j) | Task 5 (Tarifs) + Task 9.1 (CGV) |
| §2.5 Inclus dans tous les packs | Task 5 (Tarifs section 5) |
| §2.6 Périmètre missions / hors périmètre | Task 9.2 (À propos valeur "Pilote, pas manager") |
| §3.1 Pages à transformer (11 pages) | Tasks 4-10 |
| §3.2 Pages à conserver | ✅ aucune modif |
| §3.3 Composants à conserver / désactiver | ✅ MockupTableauDeBord, FondateurBanner, AutomatedVsHuman gardés dans le repo, retirés des imports |
| §3.4 Nav et footer | ✅ inchangés |
| §3.5 Redirection /programme-fondateur | Task 10.1 |
| §3.6 Sitemap | Task 10.2 |
| §4.1 Homepage sections | Task 4 |
| §4.2 Tarifs sections | Task 5 |
| §4.3 Le service sections | Task 6 |
| §4.4 Methode sections | Task 7 |
| §4.5 Pourquoi-ce-prix sections | Task 8 |
| §4.6 Programme Fondateur redirect | Task 10.1 |
| §4.7 Contact V3 | Task 9.3 |
| §4.8 CGV adaptée | Task 9.1 |
| §4.9 À propos adaptée | Task 9.2 |
| §4.10 Pages SEO services | Task 9.4 |
| §5.1 Ton & vocabulaire | Appliqué partout |
| §5.3 SEO (metadata, JSON-LD) | Tasks 4, 5, 6, 7, 8 |
| §5.4 Conformité juridique | Task 9.1 (CGV) |
| §5.5 OptiBoard invisibilité | ✅ aucune mention publique |
| §5.6 Lessons | Pattern `safeJsonLd`, server/client split, `title.absolute` respectés |
| §6.1 Critères livraison technique | Task 10.3 |

**2. Scan de placeholders** :

- ✅ Pas de "TODO", "TBD" dans le code à produire.
- ✅ Tous les textes finaux sont écrits dans le plan (pas de "à compléter").
- ⚠️ Section CGV : conserver la mention SIREN "(à renseigner)" déjà présente dans la version Pilote — c'est intentionnel.

**3. Cohérence des types** :

- `MissionPack`, `MISSION_HOURLY_RATE`, `MISSION_PACKS` définis Task 1, utilisés Tasks 5, 9.
- `FaqItem`, `FAQ_HOMEPAGE`, `FAQ_TARIFS` adaptés Task 2, utilisés Tasks 4, 5.
- `ComparisonCard`, `COMPARISON_CARDS` adaptés Task 3, utilisés Tasks 4, 6.
- `formatPrice` réutilisée partout (déjà existante).

✅ Pas d'incohérence détectée.

---

**Fin du plan.**
