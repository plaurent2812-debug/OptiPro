# Pivot transitoire — OptiPro Mission

> Spec design — 2026-05-10
> Pierre Laurent, OptiPro
> Branche : `claude/transitoire-mission`

---

## 1. Contexte & motivation

### 1.1 Pourquoi ce pivot transitoire

Le repositionnement Pilote 30/60/100 (PR #2 mergée le 2026-05-10) a livré un site cohérent autour d'un **service récurrent à forfait fixe**, propulsé par un outil interne (OptiBoard) qui automatise 70% du travail.

**Problème** : OptiBoard n'est pas finalisé. Il faut encore environ 8 semaines pour avoir un outil suffisamment solide pour soutenir un client Pilote en production. Pendant cette période, **vendre un forfait Pilote serait malhonnête** (la promesse "dashboard temps réel + automatisation" n'est pas livrable).

**Solution** : pivot transitoire sur un modèle **"mission ponctuelle ou accompagnement régulier" facturé à l'heure ou en pack d'heures**. Inspiré de Reactiv'Pro (concurrent qui performe sur ce modèle), mais positionné un cran plus haut grâce au parcours Factory + 10 ans exploitation.

Cette phase transitoire dure ~8 semaines (jusqu'à mi-juillet 2026), période durant laquelle :
- OptiBoard est finalisé en parallèle
- 1-3 clients sont signés en mode "heures" → génère du CA immédiat
- 1-2 témoignages sont obtenus (SAPAL en priorité)
- Le terrain est appris pour valider ce que doit faire OptiBoard

À l'issue, **bascule vers le pitch Pilote** quand OptiBoard est prêt. Les clients "heures" peuvent rester sur leur formule OU basculer sur Pilote.

### 1.2 Objectif business de la phase transitoire

- Atteindre **1 500 à 3 000€/mois récurrents** dès le M2 (1-2 clients en Pack 20h ou 30h)
- Obtenir **1 témoignage écrit SAPAL** dans les 2 semaines
- Obtenir **1-2 nouveaux clients** dans les 6 semaines
- **Ne pas surpromettre** : pas de mention OptiBoard, pas de dashboard temps réel, pas de Programme Fondateur

### 1.3 Ce qu'on NE veut PAS faire

- ❌ Mentionner OptiBoard publiquement
- ❌ Annoncer une date de sortie de Pilote
- ❌ Garder les forfaits Pilote 30/60/100 affichés (vendrait du vide)
- ❌ Garder le Programme Fondateur (n'a plus de sens sans le service Pilote)
- ❌ Détruire le travail Pilote (composants, data, helpers) → tout reste utilisable

---

## 2. Offre commerciale transitoire

### 2.1 Pitch principal (hero homepage)

**Titre** : *"Le bras droit des artisans, indépendants et TPE."*

**Sous-titre (1 paragraphe)** :
> Pas un assistant. Pas un consultant. Quelqu'un qui prend en charge ce qui vous freine — devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en accompagnement régulier.

**Baseline + prix** :
> Je gère, vous restez sur le terrain. À partir de 600€/mois.

**Pas de bandeau Fondateur** (retiré). Pas de mention OptiBoard, dashboard temps réel, ou automatisation IA.

### 2.2 Cible

**Inchangée** par rapport au Pilote :
- Artisans (plomberie, électricité, peinture, serrurerie, etc.)
- Indépendants (consultants, formateurs, prestataires techniques)
- TPE B2B techniques (bâtiment, mobilier urbain comme SAPAL, événementiel, équipement)
- Zone géo : France entière (priorité PACA mais 100% à distance possible)

**Élargissement** : on n'enferme plus sur "bâtiment" — on accepte mobilier urbain, événementiel, métiers techniques B2B.

### 2.3 Modèle tarifaire — heures + packs

| Offre | Tarif HT | Logique |
|---|---|---|
| **Mission à l'heure** | **80€/h** | Tarif marché responsable d'exploitation indépendant confirmé débutant. Pour missions ponctuelles ou découverte. |
| **Pack 10h/mois** | **720€/mois** (-10%) | 72€/h équivalent — pour les besoins légers récurrents |
| **Pack 20h/mois** | **1 400€/mois** (-12%) | 70€/h équivalent — la cible la plus probable, suivi ADV régulier |
| **Pack 30h/mois** | **1 950€/mois** (-19%) | 65€/h équivalent — accompagnement complet |
| **Au-delà** | sur devis | TPE structurée, accompagnement >30h/mois |

**Justification prix (affichée page Tarifs sous le grid de packs)** :
> *10 ans en pilotage d'exploitation et de logistique. Mon engagement : que mon intervention vous rapporte plus qu'elle vous coûte.*

→ Pas de mention "Factory 7 M€" en hero ou en tarifs (intimidant pour TPE). Détails complets en page À propos.

**TVA** : franchise art. 293 B du CGI. Mention en bas de page Tarifs (inchangée vs Pilote).

### 2.4 Conditions d'engagement

| Offre | Engagement |
|---|---|
| **Mission à l'heure** | Aucun. Devis à la mission, payé à l'exécution. |
| **Pack mensuel** | 1 mois reconductible tacitement. Préavis de résiliation : 15 jours fin de mois. |
| **Au-delà 30h/mois** | Sur devis avec conditions négociées (souvent 3 mois minimum) |

**Pas de cycle 3 mois** (différent du Pilote). La période transitoire vend de la flexibilité.

### 2.5 Inclus dans tous les packs

- Communication via WhatsApp dédié (réponse jour ouvré sous 4h)
- Visio bilan mensuelle (30 min) en accompagnement régulier (Pack 10h+)
- Outils du client utilisés (Pennylane, Sage, Excel, etc.) — pas d'imposition d'outil
- Reporting mensuel des heures consommées par tâche
- Données client = propriété client (export à tout moment)

**Pas inclus / pas mentionné** : dashboard temps réel, OptiBoard, automatisation IA, hotline 9h-17h (le terme "hotline" sonne SaaS, on évite).

### 2.6 Périmètre des missions acceptées

**Domaines** :
- **ADV** : devis, commandes, facturation, suivi commercial
- **Suivi de projet / chantier** : coordination prestataires, rétroplanning, réception
- **Trésorerie & relances** : suivi des paiements, relances factures impayées
- **Organisation & process** : structuration des outils, optimisation des flux
- **Coordination prestataires externes** : comptable, banquier, assureur, fournisseurs
- **Préparation comptable** : dossier mensuel pour le comptable, sans certification

**Hors périmètre** (à mentionner en page À propos) :
- Management direct d'équipe permanente
- Comptabilité réglementée (certification, liasse fiscale, paie)
- Conseil fiscal ou juridique
- Représentation légale du dirigeant

---

## 3. Architecture du site transitoire

### 3.1 Pages à transformer

| Page | Statut | Type de modif |
|---|---|---|
| `/` (Homepage) | Refonte du hero + pricing | Modif moyenne |
| `/tarifs` | Refonte complète | Modif majeure (3 cartes Pilote → 3 cartes Packs heures) |
| `/le-service` | Adaptation copy | Modif légère |
| `/methode` | Adaptation copy (pas de Mois 1 setup) | Modif moyenne |
| `/pourquoi-ce-prix` | Adaptation pricing | Modif légère |
| `/programme-fondateur` | **Désactivation** (redirect ou hidden) | Suppression |
| `/temoignages` | Activation si SAPAL témoignage obtenu | Optionnel |
| `/cgv` | Adaptation conditions (heures vs forfait, préavis 15j) | Modif moyenne |
| `/contact` | Formulaire qualifiant V2 → V3 (palier → pack heures) | Modif moyenne |
| `/a-propos` | Inchangée principalement (le récit est déjà bon) | Très légère |
| `/services/plombier`, `/services/serrurier`, `/services/electricien`, `/services/restaurateur` | Adaptation copy (mention "mission") | Modif légère |

### 3.2 Pages à conserver telles quelles

- `/blog` et `/blog/[slug]` : aucune modif (contenu blog évolutif et neutre)
- `/mentions-legales`, `/confidentialite` : aucune modif
- `/admin/*` : aucune modif (back-office privé)

### 3.3 Composants à conserver / adapter / désactiver

**Conserver tels quels** (utilisables en V2 Pilote) :
- `MockupTableauDeBord` ⚠️ — **à retirer des pages publiques** transitoire (ne reflète pas une réalité actuelle). Composant gardé dans le repo pour V2.
- `AccordionItem`, `Button`, `Logo`, `PricingCard` (utilisable avec adaptation des data)
- `ComparisonCards` (adapter le contenu : remplacer "vs Pilote 60" par "vs assistant·e classique")
- `FAQJsonLd`, `OfferCatalogJsonLd` (adaptation des données)
- `safeJsonLd` (helper transverse)

**Désactiver / hidden** :
- `FondateurBanner` (pas utilisé en transitoire, gardé pour V2)
- `AutomatedVsHuman` (pas utilisé — repose sur l'argument "70% automatisé" qui ne marche que si OptiBoard existe)

**Refondre les données** :
- `src/data/pricing.ts` : remplacer `PILOTE_FORFAITS` par `MISSION_PACKS` (3 packs heures + tarif horaire)
- `src/data/faq.ts` : adapter `FAQ_HOMEPAGE` et `FAQ_TARIFS` (questions sur les heures, le préavis, le périmètre)
- `src/data/comparison.ts` : adapter pour cible transitoire

### 3.4 Nav et footer

**Header** : nav inchangée (Le service / Tarifs / À propos / Contact). CTA "Premier appel — gratuit" conservé.

**Footer** : inchangé (liens légaux, blog, contact, LinkedIn).

### 3.5 Redirection `/programme-fondateur`

Cette page existe sur main (Task 12 Pilote). En transitoire, on **désactive** sans supprimer le fichier :
- Option A : retourner un `notFound()` (404 propre)
- Option B : rediriger 307 (temporaire) vers `/`
- Option C : afficher une page "Programme suspendu — revient prochainement"

**Recommandation : Option B** (redirect 307 temporaire). Au retour V2, on supprime simplement la redirection.

### 3.6 Sitemap

Retirer `/programme-fondateur` du sitemap. Reste inchangé pour le reste.

---

## 4. Spécifications par page

### 4.1 Homepage `/`

**Sections (ordre vertical), version transitoire :**

1. **Hero** :
   - h1 : *"Le bras droit des artisans, indépendants et TPE."*
   - Sous-titre : *"Pas un assistant. Pas un consultant. Quelqu'un qui prend en charge ce qui vous freine — devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en accompagnement régulier."*
   - Baseline + prix : *"Je gère, vous restez sur le terrain. À partir de 600€/mois."*
   - 2 CTAs : "Réserver mon appel découverte (gratuit)" + "Voir les tarifs"
   - **Retiré** : 3 lignes "Plus rapide / Moins cher / Plus complet", rassurance comptable, bandeau Fondateur, mention "tableau de bord temps réel inclus"

2. **Bloc problème** : conservé (3 pain points concrets — devis tardifs, factures oubliées, pas de visibilité tréso)

3. **Bloc solution** : adapté
   - Conserver les 4 cartes (Devis / Facturation / Trésorerie / Préparation comptable) mais **changer les descriptions** pour ne plus mentionner "tableau de bord temps réel" ou "automatisation"
   - Exemple Devis : ~~"Envoyés sous 1h après votre vocal WhatsApp. Signature en ligne."~~ → *"Devis structurés, rapides, conformes. Envoyés sans délai après votre brief."*

4. **Bloc tableau de bord** : **RETIRÉ** complètement (`MockupTableauDeBord` enlevé de la homepage). Remplacé par un bloc texte simple "Comment on travaille ensemble" en 3 étapes (Brief / Réalisation / Reporting).

5. **Bloc comparaison** : adapter le contenu de `ComparisonCards`
   - Carte 1 : "vs un(e) assistant(e) indépendant·e" — différenciation par expérience (10 ans exploitation) et tarif
   - Carte 2 : "vs un mi-temps salarié" — différenciation par flexibilité (pas d'engagement long), pas de charges
   - Carte 3 : "vs un cabinet comptable" — différenciation par périmètre (opérationnel vs réglementaire)

6. **Bloc témoignage** : `SHOW_TESTIMONIALS = false` reste, à activer dès que SAPAL témoigne

7. **Bloc programme Fondateur** : **RETIRÉ** complètement

8. **FAQ** : adapter `FAQ_HOMEPAGE` (5 questions :
   - "Vous remplacez mon comptable ?" → conservée
   - ~~"Et si je ne suis pas satisfait ? Le 1er mois est un test..."~~ → adaptée : "Je travaille à l'heure ou en pack. Pas d'engagement long, préavis 15 jours."
   - "Comment je vous transmets les infos ?" → conservée (WhatsApp)
   - "C'est conforme RGPD et facturation électronique ?" → conservée
   - ~~"Combien ça coûte exactement pour mon activité ?"~~ → adaptée : "Comment je calcule mes tarifs ?" (8h estimées si X devis/mois → Pack 10h, etc.)
   )

9. **CTA final** : "Prêt à libérer 5-10h par semaine ?" + bouton réserver appel

### 4.2 Page `/tarifs`

**Sections (12 actuelles → 9 transitoires) :**

1. Hero : *"Un tarif clair. À l'heure ou en pack. Sans engagement long."*
2. **RETIRÉ** : bandeau Fondateur sticky en haut
3. **3 cartes Packs** (au lieu de 3 forfaits Pilote) :
   - Pack 10h — 720€/mois
   - Pack 20h — 1 400€/mois (Recommandé)
   - Pack 30h — 1 950€/mois
4. **Bloc "Mission à l'heure"** (nouveau) : 80€/h HT, idéal pour découverte ou besoin ponctuel, pas d'engagement
5. **Inclus dans tous les packs** : 5-6 items (WhatsApp dédié, visio bilan mensuelle, outils client utilisés, reporting heures, données propriété client, conformité RGPD)
6. **RETIRÉ** : bloc Mise en route 750€ (n'existe pas en transitoire — pas d'onboarding spécial)
7. **Bloc options** : conserver Stripe, Coordination prestataires, Reporting personnalisé, Multi-société. Retirer "Préparation paie" (positionne trop "salarié") ? À discuter — décision : **garder mais reformuler**
8. **Bloc engagement & résiliation** : 1 mois reconductible tacitement, préavis 15 jours fin de mois, données exportables
9. **Comparateur "ça coûte combien ailleurs"** : conserver mais comparer au Pack 20h (le plus probable) au lieu de Pilote 60
10. **RETIRÉ** : Programme Fondateur + tableau bascule (-50%/-25%)
11. FAQ tarifs : adapter (5 questions sur heures, calcul, dépassement, TVA, Stripe)
12. Mention TVA : conservée
13. CTA final : conservé

### 4.3 Page `/le-service`

**Modif légère** : adapter principalement le hero et les sections qui mentionnent "tableau de bord temps réel inclus".

- Hero h1 : *"Tout votre admin opérationnel. Pris en charge."* → conservé
- Sous-titre : remplacer mention "à partir de 690€/mois" par *"à partir de 600€/mois"*, retirer "tableau de bord temps réel inclus"
- 7 livrables : conservés tels quels (Devis / Facturation / Frais / Trésorerie / Planning / Préparation comptable / Coordination prestataires)
- **Retirer** la section MockupTableauDeBord
- ComparisonCards : adapté (cf. 4.1 bloc 5)
- FondateurBanner inline : **retiré**
- CTA final : conservé

### 4.4 Page `/methode`

**Modif moyenne** : pas de "Mois 1 setup à 750€" en transitoire. La méthode devient plus linéaire.

**Nouvelle timeline 3 étapes (au lieu de 4)** :
1. **L'appel découverte** (30 min visio gratuite) — conservé tel quel
2. **Le démarrage** (au lieu de "Mois 1 Mise en route") :
   - Premier rendez-vous de cadrage (1h, sur la 1ère mission ou les premières heures)
   - Compréhension des outils en place
   - Validation du périmètre
   - Aucun setup payant — c'est inclus dans les premières heures consommées
3. **Le quotidien** : conservé (vocaux WhatsApp, je gère, reporting heures)
4. ~~Le rythme régulier~~ : fusionné dans étape 3

**Section "Comment je peux faire mieux pour moins cher"** : **conservée** mais reformulée pour retirer mention "outil interne qui automatise 70%". Remplacer par :

> *Voilà comment je peux faire mieux pour moins cher.
> 10 ans d'expérience en pilotage d'exploitation et de logistique me permettent d'aller vite sur ce qui freine les TPE : l'organisation, les processus, le pilotage. Là où un assistant junior passe 1h, je passe 15 minutes. Là où une agence facture un audit à 3000€, j'écoute et je fais.*

→ Pas d'OptiBoard, pas de "70% automatisé", juste l'expérience.

### 4.5 Page `/pourquoi-ce-prix`

**Modif légère** :
- Hero : *"Pourquoi 80€/h. Le calcul honnête."*
- Bloc 1 "D'où je viens" : conservé (récit 10 ans + 7000€ chargé)
- Bloc 2 "Pourquoi 80€ et pas 150€" : adapté
  - Une heure de consultant en cabinet : 150-300€
  - Une heure d'un cadre indépendant senior : 100-150€
  - **Moi (responsable d'exploitation indépendant débutant) : 80€**
  - C'est mon tarif d'entrée. Quand mes témoignages s'accumulent et que ma réputation grandit, ce tarif évoluera.
- Bloc 3 "AutomatedVsHuman" : **RETIRÉ** (repose sur OptiBoard)
- Bloc 4 "Pourquoi c'est durable" : conservé, adapter pour retirer mention "outil interne"
- Bloc 5 "Pourquoi pas un comptable" : conservé tel quel
- Bloc 6 "Pourquoi je limite à 8-10 clients" : conservé

### 4.6 Page `/programme-fondateur`

**Désactivation** : redirect 307 vers `/` (temporaire). La page reste dans le code source pour réactivation V2.

Implémentation : remplacer le contenu de `page.tsx` par :

```typescript
import { redirect } from 'next/navigation';
export default function ProgrammeFondateurPage() {
  redirect('/');
}
```

Aucune metadata exportée. Next.js gère la redirection au server-side.

Alternative plus propre : ajouter une redirection dans `next.config.ts` (à coordonner avec les redirections existantes).

### 4.7 Page `/contact`

**Modif moyenne** : formulaire qualifiant V2 → V3

**Champs du formulaire (révisés)** :
- Conservés : prénom, nom, email, téléphone, métier, message
- **Adaptés** :
  - "Volume estimé documents/mois" → **"Heures estimées de besoin par mois"** (select : 1-5h ponctuel / 5-10h / 10-20h / 20-30h / 30h+ / Je ne sais pas)
  - "Type demande standard/fondateur" → **"Type de besoin"** (Mission ponctuelle / Accompagnement régulier / Je ne sais pas encore)
- Retiré : "Salariés" (moins pertinent en mission ponctuelle)
- Conservé : URL params (`?metier=` toujours utile)

**Backend** (`route.ts` API) : adapter la pré-qualification :
- "1-5h ponctuel" → Mission à l'heure
- "5-10h" → Pack 10h
- "10-20h" → Pack 20h
- "20-30h" → Pack 30h
- "30h+" → Sur devis

### 4.8 Page `/cgv`

**Modif moyenne** : adapter les sections tarifs et engagement.

- Section 3 (Tarifs) : remplacer Pilote 30/60/100 par Mission 80€/h + Pack 10h/20h/30h
- Section 4 (Engagement) : 1 mois reconductible tacitement, préavis 15 jours (au lieu de cycles 3 mois + préavis 1 mois)
- Section 5 (Programme Fondateur) : **RETIRÉE**
- Le reste : inchangé (identification, périmètre exclu, données, RGPD, responsabilité, force majeure, médiation)

### 4.9 Page `/a-propos`

**Modif très légère** : le récit actuel est globalement bon (timeline complète, valeurs).

À adapter :
- Item de timeline "OptiPro" actuel mentionne *"dès 750€/mois"* → adapter à *"à partir de 600€/mois"*
- Item OptiPro : remplacer *"je suis le bras droit administratif de mes clients"* par *"je prends en charge l'administratif opérationnel de mes clients — sur une mission ponctuelle ou en accompagnement régulier"*
- **Ajouter une mention explicite "no management direct"** dans la section valeurs ou en bas de timeline OptiPro

Phrase à ajouter (dans la section "Trois principes" ou en valeur additionnelle) :
> *"Aujourd'hui je me recentre sur le pilotage et l'organisation — coordination, structuration, optimisation. Le management quotidien des équipes reste entre vos mains, je ne m'y substitue pas."*

### 4.10 Pages `/services/{plombier,serrurier,electricien,restaurateur}`

**Modif légère par page** : adapter les CTA et le pricing affiché.

- Mention de prix : remplacer "à partir de 690€/mois Pilote 30" par *"à partir de 600€/mois (Pack 10h)"* ou *"80€/h"*
- CTA : conservés (lien vers `/contact?metier=...`)
- Reste : inchangé

---

## 5. Décisions transversales

### 5.1 Ton & vocabulaire

- **Vocabulaire métier** (pas tech) : retirer "dashboard temps réel", "automatisation IA", "outil interne", "OCR", "70% automatisé"
- **Mots clés à utiliser** : "missions", "accompagnement régulier", "à l'heure", "heures dédiées", "réactif", "flexible"
- **Phrase tueur** : "Pas un assistant. Pas un consultant." (déjà validée)
- Reste du ton : honnête, direct, vouvoiement courtois

### 5.2 Photos & identité visuelle

- Conservée intégralement (palette, fonts Outfit/Space Grotesk, animations GSAP, charte)
- Pas de refonte graphique

### 5.3 SEO

- Metadata pages : adapter les titres/descriptions (retirer "Pilote", "750€/mois")
- JSON-LD `Service` : adapter `priceRange: '600€-1950€/mois HT'` et description
- JSON-LD `OfferCatalog` : `MISSION_PACKS` au lieu de `PILOTE_FORFAITS`
- JSON-LD `FAQPage` : adapter `FAQ_HOMEPAGE` et `FAQ_TARIFS`
- Sitemap : retirer `/programme-fondateur`

### 5.4 Conformité juridique

- CGV adaptées : préavis 15 jours, pas de Programme Fondateur
- "Votre comptable garde son rôle" : conservée en page Tarifs et CGV
- Pas de paie réglementaire : conservé

### 5.5 OptiBoard — invisibilité totale

- **Aucune mention** d'OptiBoard publiquement (ni dans le code commenté visible, ni dans le copy)
- Pas de capture d'écran de l'outil
- Pas de promesse de "tableau de bord temps réel"
- Le mockup `MockupTableauDeBord` reste dans le repo (pour réactivation V2) mais **n'est plus monté sur aucune page publique**

### 5.6 Lessons à appliquer (de `tasks/lessons.md`)

- Ne pas inventer de chiffres (témoignages cachés tant que pas signés)
- Server/Client component split conservé
- `title: { absolute }` pour bypass le template du layout
- Pattern JSON-LD inline standard du repo : `<script type="application/ld+json">{safeJsonLd(data)}</script>` (jamais d'injection HTML brute)

---

## 6. Critères de succès

### 6.1 Critères de livraison (techniques)

- [ ] 9 pages adaptées (homepage, tarifs, le-service, methode, pourquoi-ce-prix, cgv, contact, /services/*)
- [ ] `/programme-fondateur` désactivée (redirect ou notFound)
- [ ] Data refondues (pricing, faq, comparison)
- [ ] Composants UI conservés (FondateurBanner, MockupTableauDeBord, AutomatedVsHuman gardés dans le repo mais non montés)
- [ ] Sitemap mis à jour
- [ ] Tests Jest passent (17+/17+)
- [ ] tsc : 0 erreur
- [ ] Lint : 0 erreur
- [ ] Build production : OK

### 6.2 Critères de succès business (4 semaines post-livraison)

- [ ] **1 témoignage SAPAL** publié (objectif S+2 — semaine 2)
- [ ] **2-3 RDV découverte** prospects qualifiés
- [ ] **1 client signé** en Pack 10h, 20h ou 30h (objectif M+1)
- [ ] **2 clients signés** (objectif M+2)

---

## 7. Hors scope V1 transitoire

- Page Cal.com ou intégration calendrier (reportée à V2 Pilote)
- Création de pages SEO additionnelles
- Nouveau post LinkedIn d'annonce (à faire séparément, hors plan technique)
- Refonte graphique
- Témoignages page peuplée (vide tant que SAPAL pas signé)

---

## 8. Plan de bascule retour V2 Pilote (juillet 2026)

Quand OptiBoard sera prêt :

1. Créer une nouvelle branche `claude/retour-pilote` depuis `main` au moment T
2. **Revert sélectif** des commits de cette PR transitoire (préserver les améliorations transverses si certaines)
3. **OU** créer une nouvelle PR qui ramène le pitch Pilote en utilisant le commit hash de `main` actuel (avant cette PR) comme point de référence
4. Re-tester sur preview Vercel avant bascule prod
5. Communiquer la bascule sur LinkedIn (post officiel "OptiBoard est prêt — voici notre nouvelle offre Pilote")

→ Cette PR transitoire est conçue pour être **réversible en 1 commit** si on garde un cleanup soigné.

---

## 9. Risques identifiés & mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| **Confusion prospects qui ont vu le Pilote avant** | Moyenne | Faible | Le pivot est cohérent (assistant admin → mission). Pas besoin d'explication publique. Les prospects qui demandent : *"avant je voyais Pilote 30/60/100"* → *"j'ajuste mon offre selon les besoins, contactez-moi pour discuter"* |
| **Reactiv'Pro fait 45€/h, je suis à 80€/h. Différence justifiable ?** | Moyenne | Moyen | Phrase "10 ans en pilotage d'exploitation et de logistique" justifie. Si trop d'objections, possible ajustement à 70€/h dans un 2e temps |
| **Aucun client signé en 4 semaines** | Faible | Élevé | Plan B : Approche directe LinkedIn auprès de 5 prospects connus (artisans Vence, anciens collègues). Tarification flexible sur les 2-3 premiers clients (négociation OK) |
| **SAPAL ne donne pas de témoignage** | Moyenne | Moyen | Témoignages activés dès qu'un autre client signe et accepte. Pas bloquant pour démarrer la commercialisation |
| **OptiBoard prend plus de 8 semaines** | Moyenne | Moyen | La phase transitoire est extensible. Tant que ça génère du CA, on peut prolonger jusqu'à 12 semaines sans casser le récit. Au-delà, repenser. |
| **Cassure SEO suite à modifs des metadata** | Faible | Faible | Les URLs ne changent pas. Seuls les titles et descriptions évoluent. SEO stable globalement |

---

**Fin de spec.**
