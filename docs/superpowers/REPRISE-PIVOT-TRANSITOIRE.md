# Reprise du pivot transitoire OptiPro Mission

> Document de reprise pour démarrer une nouvelle conversation Claude Code.
> Créé le 2026-05-10.

---

## 🎯 État actuel

**Branche** : `claude/transitoire-mission` (créée depuis `main` le 2026-05-10)

**Worktree** : `/Users/pierrelaurent/Desktop/Pierre/Projets Dev Pierre/OptiPro/.claude/worktrees/transitoire-mission/`

**Commits actuels sur la branche** :
- `a4ee9b8` docs(spec): pivot transitoire OptiPro Mission (8 semaines)
- `18a3cdc` docs(plan): plan d'implémentation pivot transitoire Mission (10 tâches)

**Statut** : ⏸️ **Spec et plan rédigés et committés. En attente d'exécution.**

---

## 📚 Contexte stratégique (essentiel)

### Pourquoi ce pivot

Le repositionnement Pilote 30/60/100 (PR #2 mergée le 2026-05-10) a livré un site cohérent autour d'un **service récurrent à forfait fixe**, propulsé par un outil interne (OptiBoard) qui automatise 70% du travail.

**Problème** : OptiBoard n'est pas finalisé. Encore ~8 semaines de dev. Vendre un forfait Pilote maintenant serait malhonnête (la promesse "dashboard temps réel + automatisation" n'est pas livrable).

**Solution** : pivot transitoire sur un modèle **"mission ponctuelle ou accompagnement régulier" facturé à l'heure ou en pack d'heures**. Inspiré de Reactiv'Pro (concurrent qui performe), mais positionné un cran plus haut grâce au parcours Factory + 10 ans exploitation.

### Timeline

- **Maintenant → mi-juillet 2026** : phase transitoire Mission (cette PR)
- **Mi-juillet 2026** : finalisation OptiBoard
- **Juillet 2026** : bascule retour Pilote (nouvelle PR qui revert cette PR transitoire)

### Objectifs business de la phase transitoire

- 1 témoignage SAPAL publié (S+2)
- 2-3 RDV découverte prospects qualifiés
- 1 client signé en Pack 10h/20h/30h (M+1)
- 2 clients signés (M+2)
- 1 500 à 3 000€/mois récurrents dès M2

---

## 💼 Offre commerciale transitoire — récap

### Pitch principal (hero)

> **Le bras droit des artisans, indépendants et TPE.**
>
> Pas un assistant. Pas un consultant. Quelqu'un qui prend en charge ce qui vous freine — devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en accompagnement régulier.
>
> Je gère, vous restez sur le terrain. À partir de 600€/mois.

### Tarification

| Offre | Prix HT | Cible |
|---|---|---|
| **Mission à l'heure** | 80€/h | Missions ponctuelles, découverte |
| **Pack 10h/mois** | 720€/mois (-10%, 72€/h équivalent) | Besoins légers récurrents |
| **Pack 20h/mois** ⭐ | 1 400€/mois (-12%, 70€/h équivalent) | Cible la plus probable, suivi ADV régulier |
| **Pack 30h/mois** | 1 950€/mois (-19%, 65€/h équivalent) | Accompagnement complet |
| Au-delà | sur devis | TPE structurée |

### Conditions

- **Mission à l'heure** : aucun engagement, devis par mission
- **Pack mensuel** : 1 mois reconductible tacitement, **préavis 15 jours fin de mois**
- TVA non applicable (franchise art. 293 B du CGI)

### Justification prix (page Tarifs)

> *10 ans en pilotage d'exploitation et de logistique. Mon engagement : que mon intervention vous rapporte plus qu'elle vous coûte.*

### Ce qu'on ne fait PAS

- ❌ Mentionner OptiBoard publiquement
- ❌ Promettre dashboard temps réel ou automatisation IA
- ❌ Maintenir Programme Fondateur (désactivé temporairement)
- ❌ Management direct d'équipe permanente
- ❌ Comptabilité réglementée (certification, liasse fiscale, paie)

---

## 🔧 Plan d'exécution — 10 tâches en 4 phases

### Phase A — Sources de données (3 tâches)

**Task 1** : Adapter `src/data/pricing.ts` + tests
- Ajouter `MISSION_PACKS` (3 packs) et `MISSION_HOURLY_RATE` (80€)
- Conserver `PILOTE_FORFAITS` côté code (réversibilité V2)
- Ajouter 4 tests Jest pour les nouvelles exports

**Task 2** : Adapter `src/data/faq.ts`
- Refondre `FAQ_HOMEPAGE` (5 questions sur heures, packs, préavis)
- Refondre `FAQ_TARIFS` (5 questions sur dépassement, sous-consommation, TVA)

**Task 3** : Adapter `src/data/comparison.ts`
- 3 ComparisonCards révisées (référence Pack 20h au lieu de Pilote 60)

### Phase B — Refonte pages principales (2 tâches lourdes)

**Task 4** : Refondre Homepage (`page.tsx` + `HomePageClient.tsx`)
- Hero épuré nouveau pitch
- Retirer Mockup tableau de bord
- Retirer section Programme Fondateur
- Adapter 4 cartes solution (descriptions sans "tableau de bord temps réel")
- FAQ avec nouvelles questions

**Task 5** : Refondre `/tarifs` (`page.tsx` + `TarifsClient.tsx`)
- 13 sections → 10 sections
- 3 cartes Packs heures au lieu de 3 forfaits Pilote
- Nouveau bloc "Mission à l'heure 80€/h"
- Retirer Programme Fondateur + Mise en route 750€ + tableau bascule
- Adapter comparateur sur Pack 20h

### Phase C — Adaptation pages support (3 tâches)

**Task 6** : Adapter `/le-service`
- Retirer Mockup et FondateurBanner
- Adapter pricing (600€/mois)
- 7 livrables conservés

**Task 7** : Adapter `/methode` + `TimelineMethode`
- Timeline 4 étapes → 3 étapes
- Reformuler bloc "comment je bosse" (sans "70% automatisé")

**Task 8** : Adapter `/pourquoi-ce-prix`
- Hero "Pourquoi 80€/h"
- Retirer bloc AutomatedVsHuman (repose sur OptiBoard)
- Adapter bloc 2 (calcul 80€ vs 150€)

### Phase D — Migration finale (2 tâches)

**Task 9** : Pages secondaires (CGV, À propos, Contact V3, services SEO)
- CGV : tarifs mission + préavis 15j + retirer section 5 (Fondateur)
- À propos : adapter timeline OptiPro + ajouter valeur "Pilote, pas manager"
- Contact V3 : formulaire heures estimées + type besoin (au lieu de docs + fondateur)
- API contact : pré-qualification heures → pack
- 4 pages services SEO : adapter prix

**Task 10** : Désactivation /programme-fondateur + sitemap + vérifications finales
- `redirect('/')` sur la page programme-fondateur
- Retirer du sitemap
- Type-check + lint + tests Jest + build production OK
- Dev preview de toutes les pages
- Push branche

---

## ✅ Garanties de réversibilité (V2 retour Pilote en juillet 2026)

Tout est conçu pour être **revertable en 1 commit** :

- `PILOTE_FORFAITS` reste dans `pricing.ts` (à côté de `MISSION_PACKS`)
- `FondateurBanner.tsx` reste dans `src/components/ui/` (juste non importé)
- `MockupTableauDeBord.tsx` reste dans `src/components/ui/`
- `AutomatedVsHuman.tsx` reste dans `src/components/ui/`
- `FondateurClient.tsx` reste dans `src/app/(public)/programme-fondateur/`
- `OfferCatalogJsonLd.tsx` reste dans `src/components/seo/`

Au retour V2, on crée `claude/retour-pilote` depuis `main` (post-merge transitoire) et on revert les commits de cette PR.

---

## 🚀 Commande pour démarrer la nouvelle conversation

Ouvre une nouvelle session Claude Code dans le worktree :

```bash
cd "/Users/pierrelaurent/Desktop/Pierre/Projets Dev Pierre/OptiPro/.claude/worktrees/transitoire-mission"
```

Puis dis à Claude :

> "Reprends l'exécution du pivot transitoire OptiPro Mission. Le spec et le plan sont déjà écrits et committés. Lis le doc `docs/superpowers/REPRISE-PIVOT-TRANSITOIRE.md`, puis le plan `docs/superpowers/plans/2026-05-10-pivot-transitoire-mission.md`, et démarre l'exécution en mode subagent-driven à partir de la Task 1. À la fin de chaque tâche, dispatche un spec compliance reviewer puis un code quality reviewer comme dans le pivot Pilote."

---

## 📂 Documents de référence

1. **Spec design complet** : `docs/superpowers/specs/2026-05-10-pivot-transitoire-mission-design.md` (466 lignes)
2. **Plan d'implémentation détaillé** : `docs/superpowers/plans/2026-05-10-pivot-transitoire-mission.md` (1 224 lignes)
3. **Ce doc de reprise** : `docs/superpowers/REPRISE-PIVOT-TRANSITOIRE.md`
4. **CV de Pierre** (pour justification du parcours) : `/Users/pierrelaurent/Desktop/Administratifs/Travail/CV/Pierre LAURENT CV 2025.pdf`

---

## 🧭 Décisions clés à conserver en tête

### Pour le hero homepage

- ✅ Titre : *"Le bras droit des artisans, indépendants et TPE."*
- ✅ Cible élargie (pas seulement bâtiment — inclut indépendants, mobilier urbain SAPAL, etc.)
- ✅ Ouverture mission ponctuelle ET accompagnement régulier
- ❌ Pas de bandeau de remplacement du Fondateur (hero épuré)

### Pour le récit fondateur

- ✅ Background détaillé (Factory, GL Events, etc.) en page À propos uniquement
- ✅ Mention "10 ans en pilotage d'exploitation et de logistique" en justification page Tarifs
- ❌ Pas de mention Factory ou montants en M€ dans le hero (intimidant pour TPE)
- ✅ Valeur "Pilote, pas manager" en page À propos : version douce :
  > *"Aujourd'hui je me recentre sur le pilotage et l'organisation — coordination, structuration, optimisation. Le management quotidien des équipes reste entre vos mains, je ne m'y substitue pas."*

### Pour le comparateur Tarifs

- ✅ Comparer au Pack 20h (1 400€/mois) — la cible la plus probable
- ✅ Mi-temps salarié ~2 300€/mois (référence intimidante)
- ✅ Assistant·e indé 900-1 200€ (junior, sans expérience opérationnelle senior)
- ✅ Cabinet comptable 800-1 200€ (périmètre limité à la compta)

### Pour le LinkedIn (à faire après le site)

Tâche distincte non incluse dans ce plan technique. À adresser après exécution :
- Bannière LinkedIn alignée nouveau pitch (sans mention OptiBoard)
- Bio à réécrire (style direct Reactiv'Pro)
- Post tournant pour annoncer le repositionnement (style "je lance officiellement une nouvelle offre")
- Plan éditorial 4 semaines (2 posts/semaine)

---

## ⚠️ Points d'attention pendant l'exécution

### 1. Le bloc rassurance comptable du hero

L'hero Pilote actuel a une rassurance comptable explicite *"Votre comptable garde son rôle"*. Décision spec : **retiré du hero transitoire**, intégré naturellement dans la FAQ ("Vous remplacez mon comptable ?"). À surveiller pendant l'exécution.

### 2. Composants UI retirés mais conservés

Lors de l'édition des pages, **ne pas supprimer les fichiers** :
- `src/components/ui/MockupTableauDeBord.tsx`
- `src/components/ui/FondateurBanner.tsx`
- `src/components/ui/AutomatedVsHuman.tsx`
- `src/app/(public)/programme-fondateur/FondateurClient.tsx`

Juste **retirer les imports** dans les pages qui les utilisent.

### 3. Erreurs lint préexistantes (admin code)

L'ESLint config a un override (`eslint.config.mjs`) qui rétrograde les erreurs admin/pdf/pennylane en warnings. Ne pas modifier cette config — elle protège la CI.

### 4. Tests Jest existants

Les tests `pricing.test.ts` et `PricingCard.test.tsx` doivent continuer à passer. Task 1 ajoute 4 nouveaux tests pour `MISSION_PACKS`.

### 5. JSON-LD pattern

Toujours utiliser : `<script type="application/ld+json">{safeJsonLd(data)}</script>` (jamais d'injection HTML brute).

---

## 🎁 Workflow recommandé pour la nouvelle session

1. **Lire ce doc de reprise** (5 min)
2. **Lire la section 2 du spec** (offre commerciale — 3 min)
3. **Lire les 3 premières tâches du plan** (Phase A — 5 min)
4. **Dispatcher Task 1** en mode subagent-driven
5. **Spec reviewer** après Task 1
6. **Code quality reviewer** après spec OK
7. **Marquer Task 1 complete dans TodoWrite**
8. Enchaîner Tasks 2-10 sur le même modèle

**Temps estimé total** : 2-4h pour les 10 tâches selon vitesse des subagents.

---

**Fin du doc de reprise.**
