# Repositionnement OptiPro — Offre "Pilote" assistant admin externalisé

> Spec design — 2026-05-09
> Pierre Laurent, OptiPro

---

## 1. Contexte & motivation

### 1.1 Pourquoi ce repositionnement

Le positionnement actuel d'OptiPro ("conseil & développement d'outils numériques sur mesure pour artisans/TPE") ne convertit pas. Après échanges avec des dirigeants de TPE, le constat est net :

- L'offre conseil/dev sur mesure est **trop floue** pour la cible
- Les artisans n'achètent pas du "conseil" — ils achètent du **résultat opérationnel**
- Le ticket d'entrée actuel (audit, devs custom) est **trop élevé** et trop ponctuel
- Pas de récurrence revenu, donc pas de prévisibilité business

Le nouveau positionnement transforme OptiPro en **service récurrent à valeur claire** : un assistant administratif externalisé pour artisans et TPE du bâtiment, propulsé par un outil interne propriétaire (nom interne : OptiBoard, jamais exposé publiquement) qui automatise 70% du travail répétitif.

### 1.2 Objectif business

- Atteindre **3 400€/mois récurrents** dès le M7 (3 clients tarif plein) → permet de quitter le CDI
- Sécuriser une trajectoire vers 8-10 clients récurrents = **30-50k€/an récurrents**
- Construire 3 témoignages clients qualifiés en 6 mois pour autoriser un marketing crédible

---

## 2. Offre commerciale

### 2.1 Pitch principal (hero homepage)

**Titre** : *"Le bras droit administratif des artisans."*

**Sous-titre 3 lignes** :
- *Plus rapide qu'un(e) assistant(e).*
- *Moins cher qu'un mi-temps.*
- *Plus complet que les deux.*

**Description** :
> Devis, factures, trésorerie, relances — tout est piloté pour vous, à partir de 750€/mois. Avec un tableau de bord temps réel inclus.

**Clarification rassurance comptable (impératif juridique)** :
> ✓ Votre comptable garde son rôle. Je m'occupe du reste : tout l'admin opérationnel.

### 2.2 Cible

**Cible primaire (90% du marketing)** :
- Artisans et petites TPE des **métiers du bâtiment et du second œuvre**
- Du solo au TPE 5-8 personnes
- Métiers : plomberie, électricité, peinture, maçonnerie, menuiserie, **serrurerie/métallerie**, carrelage, chauffage/clim, couverture, rénovation, multi-services bâtiment
- Zone géo : **PACA prioritaire**, mais France entière acceptée (service 100% à distance)

**Cible secondaire opportuniste (10%)** :
- TPE de services structurés en croissance qui matchent les forfaits
- Pas de communication dédiée

### 2.3 Forfaits "Pilote"

Trois paliers basés sur le volume mensuel de documents (devis + factures cumulés) :

| Forfait | Prix HT/mois | Volume | Cible typique |
|---|---|---|---|
| **Pilote 30** | 750€ | ≤30 documents, ≤50 frais, 1 société | Artisan solo ou avec 1 salarié |
| **Pilote 60** ⭐ | 1 150€ | ≤60 documents, ≤100 frais, 1 société | Artisan + 1-3 salariés |
| **Pilote 100** | 1 500€ | ≤100 documents, ≤200 frais, 1 société | TPE 4-8 personnes |
| Au-delà | sur devis | — | — |

**Mention TVA** : *"Tarifs HT — TVA non applicable, art. 293 B du CGI"* (apparaît systématiquement page Tarifs, page Service, footer).

### 2.4 Inclus dans tous les forfaits

- **Devis** : création (à partir d'un vocal/photo WhatsApp), envoi, signature en ligne, archivage
- **Facturation** : émission, envoi, relances automatiques (J+15, J+30, J+45), encaissement — connecté Pennylane (ou autre via API), conforme à la facturation électronique 2026-2027 (PDP)
- **Frais & dépenses** : OCR auto + classement par chantier/catégorie
- **Trésorerie & pilotage** : tableau de bord temps réel + reporting mensuel commenté
- **Planning & RDV** : calendrier mis à jour, **notifs Telegram OU Push** (au choix du client), rappels clients
- **Préparation du dossier mensuel** pour le comptable (export FEC, mise en forme)
- **Tableau de bord temps réel** (interface client accessible via `app.opti-pro.fr` à terme — voir section 3 pour la stratégie de marque)
- **Hotline WhatsApp dédiée + appels** (9h-17h jours ouvrés)
- **Visio bilan toutes les 2 semaines** (30 min)

**Note explicite** : la **paie n'est PAS incluse** (métier réglementé du comptable). OptiPro peut, en option, **préparer les éléments variables** pour le comptable.

### 2.5 Mise en route (Mois 1)

**750€ HT — facturé une seule fois.**

Inclut :
- Audit de l'existant (devis, factures, outils en place)
- Reprise de l'historique (clients, projets, devis, factures)
- Paramétrage Pennylane + Stripe (si option) + WhatsApp + Telegram
- Configuration du tableau de bord client
- Formation 30 min en visio
- Premiers devis & factures envoyés ensemble
- 1ère visio bilan en fin de mois

**À l'issue du M1, le client décide** : continuer (cycles 3 mois) ou arrêter (sans frais, sans engagement).

### 2.6 Options additionnelles

| Option | Tarif |
|---|---|
| **Stripe — paiement en ligne** | +30€/mois forfait + frais Stripe refacturés (1.4% + 0,25€/transaction) |
| **Coordination prestataires (léger, <30 min/sem)** | +50€/mois |
| **Coordination prestataires (régulier, 30 min - 1h/sem)** | +120€/mois |
| **Coordination prestataires (soutenu, 1-2h/sem)** | +220€/mois |
| **Coordination prestataires (intense, >2h/sem)** | sur devis |
| **Setup KPI custom (one-shot)** | 150€ |
| **Pack reporting avancé** | +120€/mois (jusqu'à 5 KPI custom + ajustements illimités) |
| **Multi-société / Holding / SCI** | sur devis (entre +50% et +70% du forfait par entité additionnelle) |
| **Préparation éléments variables de paie (jusqu'à 3 salariés)** | +50€/mois (+20€/salarié au-delà) — *transmission au comptable, OptiPro ne fait PAS la paie* |

**Suppléments NON proposés** (raison : hors expertise) :
- Veille fiscale (métier comptable)
- Bulletins de paie (métier comptable)
- Visios supplémentaires payantes (incohérent avec positionnement partenaire)

### 2.7 Engagement & résiliation

- **Mois 1** : mise en route, sans engagement à l'issue
- **À partir du M2** : cycles de **3 mois renouvelables tacitement**
- **Résiliation** : possible à chaque date anniversaire (M4, M7, M10…) avec **préavis de 1 mois**
- **Données** : restent la propriété du client, exportables à tout moment

### 2.8 Programme Fondateur (max 3 slots)

Pour les **3 premiers clients signés**, tarif progressif sur 6 mois en échange de contreparties marketing :

**Tarif progressif (Pilote 60 en exemple) :**
| Période | Tarif | Réduction |
|---|---|---|
| M1 (Mise en route) | 375€ | -50% (au lieu de 750€) |
| M2-M3 | 575€/mois | -50% (au lieu de 1 150€) |
| M4-M6 | 865€/mois | -25% |
| M7+ | 1 150€/mois | tarif plein |

**Contreparties contractuelles exigées :**
- ✅ Témoignage écrit signé à M3 (utilisable site web + LinkedIn + Facebook)
- ✅ Témoignage vidéo court (2-3 min) à M6 (utilisable site + réseaux + pubs)
- ✅ Autorisation de communication active pendant les 6 premiers mois
- ✅ **2 recommandations minimum** à des confrères artisans/TPE bâtiment dans les 6 mois

**Conditions de bascule :**
- Si à M6 le client n'est pas content → résiliation sans frais (préavis 1 mois depuis M6)
- Si témoignage non livré à M3 → bascule au tarif normal dès M4 (pas de -25%)
- Si recommandations non livrées à M6 → bascule normale (le contenu marketing créé reste utilisable)

**Argument commercial à utiliser dès la prospection :**
> *"Je lance ma nouvelle offre d'assistant admin pour artisans. Je cherche 3 partenaires fondateurs qui m'accompagnent sur les 6 premiers mois en échange d'un tarif progressif très avantageux. Une fois les 3 places prises, c'est terminé. Vous voulez en discuter ?"*

**Économie projetée sur 3 Fondateurs (mix 1×P30, 1×P60, 1×P100)** :
- Sans remise : 20 400€ (6 mois)
- Avec remise : 13 440€
- **Investissement marketing : 6 960€** sur 6 mois
- **À M7 : 3 400€/mois récurrents** = objectif "quitter CDI" atteint
- ROI : ratio 1:5,9 sur 12 mois

---

## 3. Identité OptiBoard

**Décision** : OptiBoard **disparaît du marketing public**, devient un sous-domaine technique.

- **Aucune mention "OptiBoard"** sur le site public opti-pro.fr
- L'interface client est appelée *"votre tableau de bord"* / *"votre espace OptiPro"* / *"l'interface de pilotage"*
- **URL technique** : `app.opti-pro.fr` (sous-domaine cohérent avec la marque principale)
- **Page `/pourquoi-ce-prix`** mentionne *"un outil interne qui automatise 70% du travail répétitif"* sans le nommer
- **Le nom OptiBoard est conservé en interne** (repo, identité technique, actif réutilisable plus tard)

**Implication technique** (à traiter en phase 2) : DNS OVH + déploiement Vercel pour pointer le projet OptiBoard sur `app.opti-pro.fr`.

---

## 4. Architecture du site

### 4.1 Arborescence cible

```
/                          Homepage — pitch "bras droit administratif"
/le-service                Détail du service inclus
/tarifs                    Forfaits Pilote 30/60/100 + options + Fondateur
/methode                   Comment ça se passe (M1, quotidien, hebdo)
/pourquoi-ce-prix          Récit transparent + complémentarité comptable
/programme-fondateur       Page dédiée (effet rareté SEO)
/temoignages               Coquille créée mais hors-nav au démarrage
/a-propos                  Pierre + parcours (réécriture)
/blog                      Articles SEO (réorientation édito en phase 2)
/contact                   Formulaire qualifiant V2
/services/plombier         SEO local (existant, à réécrire)
/services/restaurateur     SEO local (existant, à conserver tel quel)
/services/serrurier        SEO local (NOUVEAU)
/services/electricien      SEO local (NOUVEAU)
/cgv                       Conditions générales (NOUVEAU)
/mentions-legales          (existant)
/confidentialite           (existant)
```

### 4.2 Navigation principale (4 entrées)

```
Le service | Tarifs | À propos | Contact
```

**CTA principal partout** : *"Réserver mon appel découverte (gratuit, 30 min)"*

**CTA secondaire (depuis Tarifs et Programme Fondateur)** : *"Candidater au programme Fondateur"*

Le blog et témoignages restent accessibles depuis le **footer** + via les liens internes contextualisés.

### 4.3 Parcours visiteur cible

```
[Source : pub Facebook PACA / LinkedIn / SEO]
       ↓
[Homepage : pitch + 3 cartes humaines + tableau de bord + Fondateur]
       ↓
[Si curiosité prix → /tarifs]   [Si curiosité méthode → /methode]
       ↓                                ↓
       └─────[Si doute prix → /pourquoi-ce-prix]──────┘
                          ↓
[Conversion → /contact (formulaire qualifiant)]
                          ↓
[Pré-qualification automatique → mail avec lien Cal.com]
                          ↓
[Appel découverte 30 min Pierre]
                          ↓
[Devis envoyé sous 24h → signature → onboarding M1 démarre]
```

---

## 5. Spécifications de pages

### 5.1 Homepage `/`

**Sections (ordre vertical) :**

1. **Hero** : pitch + sous-titre 3 lignes + description + clarification comptable + 2 CTAs + bandeau "3 places Fondateur disponibles"
2. **Bloc problème** (3 colonnes, format pain points) :
   - "Devis envoyés 3 jours après la visite"
   - "Factures impayées qui s'accumulent"
   - "Aucune visibilité sur votre trésorerie"
3. **Bloc solution** (4 cartes en grid 2×2) : Devis / Facturation / Trésorerie / Comptable + 3 mentions complémentaires (Frais, Planning, Coordination)
4. **Bloc tableau de bord** : **mockup illustré** (composant React stylisé — pas de screenshot réel — affichant mobile + desktop côte à côte avec widgets simplifiés : CA, factures à relancer, trésorerie nette, prochains événements) + texte rassurance "vous gardez la main"
5. **Bloc comparaison** : **3 cartes humaines** (vs assistant·e indé / vs mi-temps / vs cabinet comptable) — pas de tableau dense
6. **Bloc témoignage** : **CACHÉ tant qu'aucun témoignage Fondateur n'est signé**. Apparaît dès M3 du 1er Fondateur.
7. **Bloc programme Fondateur** : tableau de bascule simplifié + CTA "Candidater"
8. **FAQ rapide (5 questions)** :
   - "Vous remplacez mon comptable ?"
   - "Et si je ne suis pas satisfait ?"
   - "Comment je vous transmets les infos depuis le chantier ?"
   - "C'est conforme RGPD et facturation électronique 2026-2027 ?"
   - "Combien ça coûte exactement pour mon activité ?"
9. **CTA final** : "Réserver mon appel découverte"

### 5.2 Page `/tarifs`

**Sections :**

1. **Hero tarifs** : "Un tarif clair. Tout inclus. Aucune mauvaise surprise."
2. **Bandeau Fondateur sticky** en haut
3. **3 cartes forfaits** (Pilote 30 / Pilote 60 ⭐ "Recommandé" / Pilote 100) — sans label "Le plus choisi" tant qu'il n'y a pas de stats réelles
4. **Liste "Inclus dans tous les forfaits"** (10 items)
5. **Bloc Mise en route** (M1, 750€)
6. **4 cartes options** (Stripe / Coordination / Reporting / Multi-société)
7. **Bloc engagement & résiliation** (transparence)
8. **Comparateur "ça coûte combien ailleurs ?"** (format texte aligné, pas tableau)
9. **Programme Fondateur** (section dédiée avec tableau de bascule)
10. **FAQ tarifs (5 questions)**
11. **CTA final**

**Mention TVA en bas de page** : *"Tarifs HT — TVA non applicable, art. 293 B du CGI"*

### 5.3 Page `/methode`

**Sections :**

1. **Hero méthode** : "Comment ça se passe en vrai."
2. **Timeline 4 grandes étapes** :
   - **Étape 1** : L'appel découverte (30 min visio gratuite, 5-6 questions, devis sous 24h)
   - **Étape 2** : Le mois 1 — Mise en route (4 sous-étapes en **accordéon dépliable** : audit / paramétrage / formation / bilan)
   - **Étape 3** : Le quotidien (vocaux/photos WhatsApp → actions → notifs)
   - **Étape 4** : Le rythme régulier (visio bi-mensuelle, hotline 9h-17h, reporting mensuel)
3. **Bloc "vos outils, rien de nouveau"** : WhatsApp + tableau de bord + notifs (mockup illustré)
4. **Bloc "Voilà comment je peux faire mieux pour moins cher"** : explication outil interne (sans mot "cheat code") + 30% humain expertise 10 ans + lien vers `/pourquoi-ce-prix`
5. **Bloc "et si je ne suis pas satisfait ?"** : M1 test, cycles 3 mois, données exportables
6. **CTA final**

### 5.4 Page `/pourquoi-ce-prix`

**Sections :**

1. **Hero** : "Pourquoi je peux faire ça à 750€/mois. La question que tout le monde me pose, et la réponse complète. Sans bullshit."
2. **Bloc 1 — D'où je viens** : récit 10 ans CDI exploitation + reformulation marché (*"Côté employeur, ce profil coûte aujourd'hui environ 7 000€/mois charges comprises"*)
3. **Bloc 2 — Pourquoi 750€ et pas 2 500€** : calcul honnête mi-temps salarié (29€/h) → 70% automatisé → gestion 8-10 clients en parallèle
4. **Bloc 3 — Automatisé vs Humain** : 2 colonnes côte à côte (70% / 30%) avec liste détaillée
5. **Bloc 4 — Pourquoi c'est durable** : "Pas un prix d'appel" — infrastructure cloud légère (sans chiffrer), pas de bureau/équipe/loyer, franchise TVA, objectif 8-10 clients fidèles long terme
6. **Bloc 5 — Pourquoi un comptable ne peut pas faire ça** : complémentarité, certificateur vs opérationnel
7. **Bloc 6 — Pourquoi je limite à 8-10 clients** : qualité > quantité, liste d'attente quand plein
8. **CTA final** : double CTA (réserver appel / poser questions)

### 5.5 Page `/programme-fondateur` (nouvelle, page dédiée)

**Sections :**

1. **Hero** : "3 places Fondateurs — fermeture dès le 3e signé"
2. **Tableau de bascule** détaillé pour les 3 forfaits
3. **Contreparties claires** (témoignage M3, vidéo M6, comm 6 mois, 2 recommandations)
4. **Conditions de bascule** (résiliation, pénalités si contreparties non livrées)
5. **Calcul d'économie** par forfait (ex. Pilote 60 → ~3 400€ d'économie sur 6 mois)
6. **Formulaire de candidature dédié** (différent du formulaire contact général)
7. **CTA** : "Candidater au programme Fondateur"

### 5.6 Page `/contact` (refonte formulaire)

**Champs du formulaire qualifiant V2** :
- Prénom, Nom (obligatoires)
- Métier (liste déroulante : plombier / électricien / serrurier / peintre / menuisier / maçon / autre artisan / TPE services / autre)
- Salariés (0 / 1 / 2-3 / 4-5 / 6-8 / 9+)
- Volume estimé devis+factures par mois (≤30 / 31-60 / 61-100 / 100+)
- Téléphone + email
- Créneau préféré pour appel (matin / après-midi / soir)
- Type de demande : *Appel découverte standard* / *Candidater au programme Fondateur*
- Message libre (optionnel)

**Backend** :
- Pré-qualification automatique → calcule le palier visé (Pilote 30/60/100 selon volume estimé)
- Réponse mail automatique avec **lien Cal.com** pour réserver le créneau (si pré-qualifié) OU réponse manuelle de Pierre sous 24h (si profil ambigu)
- Stockage Supabase CRM avec toutes les infos structurées

### 5.7 Page `/cgv` (nouvelle, juridique)

Conditions Générales de Vente formalisées :
- Identification du prestataire (Pierre Laurent EI, SIREN, adresse Vence)
- Description du service Pilote
- Tarifs HT applicables (avec mention TVA non applicable art. 293 B CGI)
- Engagement (M1 test → cycles 3 mois)
- Résiliation (préavis 1 mois à date anniversaire)
- Programme Fondateur (clause spécifique avec contreparties contractuelles)
- Données personnelles & RGPD (renvoi vers `/confidentialite`)
- Propriété des données client (exportables, restituées à la résiliation)
- Limitation de responsabilité (pas de remplacement comptable, pas de paie réglementaire)
- Force majeure
- Litiges (médiation conso obligatoire pour TPE/artisans)
- Droit applicable et juridiction

### 5.8 Pages SEO locales `/services/[metier]`

**3 pages** (au démarrage) :
- `/services/plombier` (existante, à réécrire)
- `/services/serrurier` (NOUVELLE)
- `/services/electricien` (NOUVELLE)

**Conservée tel quel** : `/services/restaurateur` (cible secondaire opportuniste).

**Structure type** (pour les 3 nouvelles + réécriture plombier) :
1. Hero adapté au métier ("Le bras droit administratif des plombiers" / "des serruriers" / "des électriciens")
2. Pain points spécifiques au métier (pour serrurier : interventions urgentes 24/7 → facturation rapide ; pour électricien : suivi des chantiers Consuel ; pour plombier : pluri-interventions multi-clients)
3. Mention forfaits Pilote (renvoi `/tarifs`)
4. CTA "Réserver appel découverte"
5. JSON-LD `LocalBusiness` enrichi avec mention métier

---

## 6. Plan de migration

### 6.1 Phase 1 — Suppressions

| Fichier/Route | Action |
|---|---|
| `src/app/(public)/services/page.tsx` | Réécriture totale → devient `/le-service` |
| `src/app/dashboard/` | Suppression (mockup placeholder inutile) |
| `src/app/(public)/creation-site-web-vence/` | Suppression + redirect 301 vers `/` |
| `src/app/api/newsletter/*` (4 routes) | Suppression (newsletter retirée) |
| `src/components/newsletter/` | Suppression |

### 6.2 Phase 2 — Transformations

| Route | Action |
|---|---|
| `/` | Réécriture totale Homepage |
| `/services` (page principale) | Renommée `/le-service` (réécriture) |
| `/a-propos` | Réécriture (récit aligné nouveau positionnement) |
| `/contact` | Adaptation formulaire qualifiant V2 + intégration Cal.com |
| `/services/plombier` | Réécriture (angle assistant admin) |
| `/blog` | Reste, ligne édito recentrée en phase 2 (post-livraison) |

**Composants :**
- `src/components/layout/Header.tsx` : nav 4 entrées (Le service, Tarifs, À propos, Contact)
- `src/components/layout/Footer.tsx` : ajout lien CGV, retirer Newsletter, retirer Réalisations si présent
- `src/components/seo/*` : adapter JSON-LD (nouveau pitch, prix d'entrée 750€, service ≠ création de sites)

### 6.3 Phase 3 — Créations

**Pages prioritaires (P1) — bloquantes pour la livraison :**
- `/le-service`
- `/tarifs`
- `/methode`
- `/pourquoi-ce-prix`
- `/cgv`

**Pages secondaires (P2) :**
- `/programme-fondateur`
- `/temoignages` (coquille hors-nav)
- `/services/serrurier`
- `/services/electricien`

**Composants nouveaux :**
- `MockupTableauDeBord` (composant illustré mobile + desktop)
- `CartesComparaison3` (vs assistant·e / vs mi-temps / vs cabinet comptable)
- `BlocFondateur` (bandeau + carte programme)
- `TimelineMethode` (4 étapes avec accordéon dépliable)
- `FormulaireQualifiant` (refonte contact V2 + intégration Cal.com)

**Intégrations externes :**
- **Cal.com** : compte créé + lien créneau envoyé par email post-pré-qualification
- **Sous-domaine `app.opti-pro.fr`** : reporté en phase 2 (post-livraison initiale, à la signature du 1er Fondateur)

### 6.4 Phase 4 — Redirections 301 (préserver SEO acquis)

Configurer dans `next.config.ts` :
```ts
async redirects() {
  return [
    { source: '/services', destination: '/le-service', permanent: true },
    { source: '/creation-site-web-vence', destination: '/', permanent: true },
    { source: '/realisations', destination: '/', permanent: true }, // si encore indexé
    { source: '/dashboard', destination: '/', permanent: true }, // si encore indexé
  ];
}
```

### 6.5 Sitemap mis à jour

```ts
const staticRoutes: MetadataRoute.Sitemap = [
  { url: baseUrl, priority: 1.0 },
  { url: `${baseUrl}/le-service`, priority: 0.9 },
  { url: `${baseUrl}/tarifs`, priority: 0.95 },
  { url: `${baseUrl}/methode`, priority: 0.85 },
  { url: `${baseUrl}/pourquoi-ce-prix`, priority: 0.8 },
  { url: `${baseUrl}/programme-fondateur`, priority: 0.85 },
  { url: `${baseUrl}/contact`, priority: 0.8 },
  { url: `${baseUrl}/a-propos`, priority: 0.7 },
  { url: `${baseUrl}/blog`, priority: 0.7 },
  { url: `${baseUrl}/services/plombier`, priority: 0.7 },
  { url: `${baseUrl}/services/restaurateur`, priority: 0.65 },
  { url: `${baseUrl}/services/serrurier`, priority: 0.7 },
  { url: `${baseUrl}/services/electricien`, priority: 0.7 },
  { url: `${baseUrl}/cgv`, priority: 0.4 },
  { url: `${baseUrl}/mentions-legales`, priority: 0.3 },
  { url: `${baseUrl}/confidentialite`, priority: 0.3 },
];
```

---

## 7. Décisions transversales

### 7.1 Ton & vocabulaire

- **Tutoiement éditorial implicite** via "vous" (formel, pro) — un artisan préfère le "vous" pour un prestataire
- **Phrases courtes**, ton direct, pas de jargon
- **Honnêteté assumée** : "Sans bullshit", "Aucune mauvaise surprise", "Pas un prix d'appel"
- **"Je"** au lieu de "nous" → assume l'engagement personnel (ton avantage compétitif)
- **Vocabulaire artisan** : chantier, devis, facture, vocal, photo, comptable — éviter "automation", "API", "stack"
- **Formulation inclusive** : *"un(e) assistant(e)"* systématiquement

### 7.2 Identité visuelle (à préserver)

- Pas de refonte graphique. On garde la charte actuelle (Outfit + Space Grotesk, palette en place, animations GSAP)
- Adaptation des composants existants pour les nouveaux contenus
- **Mockup illustré tableau de bord** : nouveau composant React stylisé, cohérent avec la charte

### 7.3 SEO

- **Métadonnées cohérentes** sur toutes les nouvelles pages (titre + description + OG)
- Mention TVA en bas des pages tarifs/service
- JSON-LD `LocalBusiness` à jour avec :
  - Nouveau pitch ("bras droit administratif")
  - Prix d'entrée 750€
  - Service principal : "AdministrativeService" plutôt que "WebDesign"
  - Zone : Vence (06140) + serviceArea France
- Pas de surcharge mots-clés — ton naturel
- Schema.org `OfferCatalog` sur `/tarifs` (3 forfaits Pilote)
- Schema.org `FAQPage` sur Homepage et `/tarifs`

### 7.4 Conformité juridique

- **Mention "votre comptable garde son rôle"** dans le hero homepage (limite légale : tu ne fais pas de comptabilité)
- **Pas de paie réglementaire** dans le scope (option = uniquement préparation des éléments variables transmis au comptable)
- **CGV obligatoires** avec :
  - Description claire du périmètre
  - Limitation de responsabilité (pas de certification comptable, pas de bulletin de paie)
  - Médiation conso obligatoire pour TPE/artisans
  - Clause RGPD complète

### 7.5 Lessons à appliquer (du fichier `tasks/lessons.md`)

- ❌ **Ne jamais inventer de chiffres** : pas de "98% de satisfaction" ou de "+50 clients" tant que pas vrai. Témoignages cachés tant que pas signés.
- ✅ **Pierre ne fait pas de marketing** au sens SEO/réseaux sociaux pour clients. Cohérent : on vend de l'admin, pas du marketing.
- ✅ **Pennylane API V2** : conforme aux conventions découvertes dans les lessons (`deadline`, `raw_currency_unit_price`, `exempt`, `unit: 'piece'`)
- ✅ **Server Component + Client Component split** quand animations GSAP nécessaires (pattern déjà éprouvé)
- ✅ **Title metadata** : utiliser `title: { absolute: '...' }` quand le template du layout est défini, pour éviter `X | OptiPro | OptiPro`

---

## 8. Critères de succès

### 8.1 Critères de livraison (V1 du repositionnement)

- [ ] 5 pages P1 livrées (`/`, `/le-service`, `/tarifs`, `/methode`, `/pourquoi-ce-prix`, `/cgv`)
- [ ] Nav simplifiée à 4 entrées
- [ ] Formulaire qualifiant V2 + intégration Cal.com fonctionnelle
- [ ] Pages SEO locales `/services/serrurier` et `/services/electricien` créées
- [ ] Toutes redirections 301 en place
- [ ] Sitemap + robots.txt à jour
- [ ] CGV juridiquement valides
- [ ] Build OK, type-check OK, déploiement Vercel sans erreur
- [ ] Lighthouse mobile > 90 sur toutes les pages publiques

### 8.2 Critères de succès business (3-6 mois post-livraison)

- [ ] **3 Fondateurs signés** dans les 8 semaines après le lancement
- [ ] **Premier témoignage écrit** publié à M3 (Fondateur 1)
- [ ] **3 400€/mois récurrents** atteints à M7 (objectif "quitter CDI")
- [ ] **Premier témoignage vidéo** publié à M6
- [ ] **2 recommandations Fondateur** activées et converties en RDV découverte

---

## 9. Hors scope (V1)

Pour clarté — ces éléments ne sont **PAS** dans la livraison initiale :

- Sous-domaine `app.opti-pro.fr` (reporté à la signature du 1er Fondateur)
- Refonte de la ligne éditoriale du blog (phase 2, post-livraison)
- SMS notifications (Twilio) — reporté
- Mockup interactif du tableau de bord (statique illustré uniquement en V1)
- Page `/temoignages` peuplée (vide tant que pas de témoignage)
- Refonte graphique / charte / logo
- Pages SEO additionnelles (peintre, maçon, menuisier, carreleur) — au fil du trafic réel
- Formulaire de candidature spécifique sur `/programme-fondateur` (V1 = redirection vers `/contact?cible=fondateur`)

---

## 10. Risques identifiés & mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| **Aucun Fondateur signé en 8 semaines** | Moyenne | Critique | Plan B : approche directe à des artisans connus (réseau personnel, anciens collègues, voisinage Vence) avec offre Fondateur + alternativement, lancer une campagne Facebook PACA dès la livraison |
| **SEO temporairement dégradé** (changement de structure) | Haute | Modéré | Redirections 301 systématiques, console Google Search à surveiller post-livraison, sitemap à pinger |
| **Confusion offre dans la prospection** (pivot trop brutal) | Moyenne | Modéré | Migration progressive : ancienne offre `/services` redirigée vers `/le-service`, mais SAPAL prévenu et continuité contractuelle |
| **Limite juridique frôlée** (paraître concurrencer un comptable) | Faible | Critique | Mention "votre comptable garde son rôle" en hero + section dédiée page `/pourquoi-ce-prix` + CGV avec limitation de responsabilité claire |
| **Volume Fondateur sous-estimé** (un client génère plus de docs/mois que prévu) | Moyenne | Faible | Clause de revoyure 90 jours dans le contrat (bascule palier supérieur si dépassement +30% sur 2 mois consécutifs) |
| **Pierre absent (CDI, vacances, maladie)** | Faible | Élevé | Visios bilan bi-mensuelles (pas hebdo) protègent la capacité ; communication client transparente en cas d'indisponibilité ; pas de promesse SLA en V1 |

---

**Fin de spec.**
