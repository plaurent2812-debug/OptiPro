# Audit Schema.org (JSON-LD) — opti-pro.fr

Périmètre : 34 pages en cache HTML + code source Next.js (`src/app/(public)`, `src/components/seo`, `src/data`).
Contexte business réel : OptiPro = création de sites web pour artisans/TPE (Pierre Laurent, EI, Vence 06140). Offres actuelles : Site vitrine 990€, Site vitrine Pro 1390€, web app sur devis, maintenance 79€/mois (Essentiel) et 129€/mois (Pro).

**Constat central : le site est en état de migration inachevée.** Deux positionnements coexistent dans le JSON-LD : l'ancien ("Le bras droit administratif des artisans", 75€/h, packs 650€/1200€/1950€/mois) injecté par le layout global et par les pages `/services/*`, et le nouveau ("sites web sur mesure", 990€/1390€) injecté sur `/`, `/le-service`, `/tarifs`, `/a-propos`. C'est la source de quasiment toutes les incohérences de cet audit.

---

## 1. Inventaire par page (86 blocs JSON-LD sur 34 pages)

Tous les blocs sont du JSON-LD valide (0 JSON cassé), `@context` correct (`https://schema.org`), aucune entité HTML échappée résiduelle détectée dans le HTML rendu (`&apos;` etc. — le composant `safeJsonLd` protège correctement contre l'injection, RAS sur ce point précis).

| Page | Blocs JSON-LD détectés | Positionnement du bloc LocalBusiness |
|---|---|---|
| index.html (/) | LocalBusiness+ProfessionalService, WebSite, Service, FAQPage | **ancien** (desc. 75€/h, 650-1950€) |
| le-service.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList, Service | ancien |
| tarifs.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList, FAQPage | ancien |
| a-propos.html | LocalBusiness+ProfessionalService, WebSite, Person, BreadcrumbList | ancien |
| contact.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList, ContactPage | ancien |
| temoignages.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList (**pas de Review/AggregateRating**) | ancien |
| blog.html | LocalBusiness+ProfessionalService, WebSite, Blog (7 BlogPosting imbriqués), BreadcrumbList | ancien |
| blog/[slug] × 13 articles | LocalBusiness+ProfessionalService, WebSite, BlogPosting, BreadcrumbList | ancien |
| services/{nice,antibes,cannes,grasse,mougins,cagnes-sur-mer} × 6 | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList, Service (`AdministrativeService`), FAQPage | ancien |
| services/{electricien,plombier,restaurateur,serrurier} × 4 | idem + `AggregateOffer` 650€/1950€ explicite | ancien |
| cgv.html | LocalBusiness+ProfessionalService, WebSite | ancien |
| mentions-legales.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList | ancien |
| confidentialite.html | LocalBusiness+ProfessionalService, WebSite, BreadcrumbList | ancien |

Note : `/methode` n'est pas présent dans le cache HTML fourni (34 fichiers analysés, aucun `methode.html`) — le fichier source `src/app/(public)/methode/page.tsx` existe, cette page n'a donc pas pu être auditée sur le rendu réel. À vérifier séparément.

---

## 2. Erreurs et incohérences, par sévérité

### CRITIQUE

**C1 — Le bloc `LocalBusiness`/`ProfessionalService` global (injecté par `src/app/(public)/layout.tsx`, présent sur les 34 pages) décrit l'ancien métier avec des tarifs obsolètes.**
Champ `description` identique sur les 34 pages :
> « Externalisation de l'admin opérationnel pour artisans, indépendants et TPE. Mission ponctuelle (75€/h) ou pack mensuel reconductible (de 650€/mois à 1 950€/mois). »

Ces prix (75€/h, 650€, 1950€) ne correspondent à aucune offre actuelle (990€/1390€/79€/129€). Un moteur de recherche ou un LLM qui lit ce schema — présent sur *toutes* les pages, y compris la page d'accueil — comprend qu'OptiPro fait de l'externalisation administrative facturée à l'heure, alors que le H1, les metadata et le contenu visible de `/`, `/le-service` et `/tarifs` annoncent des sites web à prix fixe. C'est une contradiction Organization vs Service/Offer sur la même page, qui nuit à la fois au SEO classique (Google peut ignorer ou mal classer l'entité) et au GEO (citation IA incohérente).

**C2 — Les 10 pages `/services/*` (villes + métiers) déclarent un `Service` "Assistant administratif externalisé" avec `serviceType: AdministrativeService`, `AggregateOffer` lowPrice 650€/highPrice 1950€, et un `FAQPage` détaillant les anciens packs (Essentiel 10h/650€, Croissance 20h/1200€, Pilotage 35h/1950€, mission 75€/h HT).**
Exemple exact (`services_electricien.html`) :
> « Combien ça coûte pour un électricien indépendant ? » → « Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. »

Ces 10 pages (villes : Nice, Antibes, Cannes, Grasse, Mougins, Cagnes-sur-Mer ; métiers : électricien, plombier, restaurateur, serrurier) n'ont pas été migrées vers l'offre de création de sites web. Elles sont en contradiction frontale avec `/tarifs` (990€/1390€) et avec le reste du site. Si un client clique depuis Google sur une page ville et lit "1950€/mois" alors qu'il pensait acheter un "site vitrine à 990€", c'est une perte de confiance et un signal de contenu incohérent pour Google (E-E-A-T).

**C3 — Le composant `OfferCatalogJsonLd.tsx` (`src/components/seo/OfferCatalogJsonLd.tsx`), s'il était un jour rebranché sur `/tarifs`, générerait un `OfferCatalog` avec les `MISSION_PACKS` de l'ancien modèle (nom : "Packs mensuels OptiPro — Assistant administratif & opérationnel externalisé").** Il n'est actuellement importé nulle part (vérifié par grep), donc pas de bug en prod sur ce point précis, mais c'est une dette technique à corriger avant toute réutilisation.

### MAJEUR

**M1 — Absence d'`OfferCatalog`/`Offer` structurée sur `/tarifs`.**
La page `/tarifs` n'a qu'un `BreadcrumbList` + `FAQPage` ; les 4 offres réelles (Site vitrine 990€, Site vitrine Pro 1390€, web app sur devis, maintenance 79€/129€) ne sont déclarées dans aucun schema `Offer`/`OfferCatalog`. Seul un `AggregateOffer` (990-1390€, 2 offres) existe sur `/` et `/le-service`, mais il ne couvre pas la maintenance ni la web app sur devis, et n'est pas présent sur `/tarifs` elle-même — la page la plus stratégique pour ce schema.

**M2 — `temoignages.html` n'a aucun schema `Review`/`AggregateRating` alors que le composant `ReviewJsonLd.tsx` existe et est bien appelé dans le code (`src/app/(public)/temoignages/page.tsx`).**
Le composant a une garde explicite : `if (testimonials.length === 0 || !aggregate) return null;`. Le fichier `src/data/testimonials.ts` a `TESTIMONIALS: Testimonial[] = []` (liste vide, page en état "honnête" volontairement — le contenu visible de la page l'explique clairement : "Les premiers clients sont en cours d'onboarding"). **C'est le comportement correct et volontaire** — aucun schema Review ne doit être ajouté avant l'obtention de vrais témoignages, conformément à la contrainte de ne jamais inventer de données. Point positif à noter, pas une erreur.

**M3 — Pas de schema `Article`/`BlogPosting` unique cohérent pour `blog.html` (page liste).**
La page liste utilise `@type: "Blog"` avec un tableau `blogPost` listant 7 des 13 articles seulement (visible dans l'extrait analysé) — à vérifier si c'est une pagination intentionnelle ou une troncature. Chaque article individuel (`/blog/[slug]`) a en revanche un `BlogPosting` complet et correct (voir §3).

**M4 — Incohérence de `serviceType` entre pages "service".**
`/le-service` et `/` utilisent `serviceType: "WebDevelopment"` (cohérent avec le nouveau métier). Les 10 pages `/services/*` utilisent `serviceType: "AdministrativeService"` (ancien métier). Un même type d'entité (`Service` OptiPro) est donc typé différemment selon la page — mauvais signal de cohérence d'entité pour Google.

### MINEUR / INFO

**I1 — FAQPage présent sur 12 pages (index, tarifs, 10 pages services).** Google a restreint les rich results FAQ aux sites gouvernementaux et de santé depuis août 2023 — OptiPro (site commercial) n'est pas éligible au rich snippet FAQ dans les résultats Google. Ce n'est pas une erreur de code, mais l'attente d'un rich result FAQ dans la SERP ne se matérialisera pas. **Conserver ces FAQPage n'est pas nuisible** : elles restent utiles pour la citation par les moteurs IA (ChatGPT, Perplexity, Gemini — GEO), qui exploitent volontiers ce balisage même sans lien avec les rich results Google. Recommandation : garder tel quel, ne pas investir plus dans ce format pour un gain Google, mais ne pas le retirer pour le gain GEO.

**I2 — `priceRange: "€€-€€€"` sur le bloc LocalBusiness.** Générique et peu informatif ; avec des offres fixes (990€/1390€) il serait plus précis d'utiliser `"€€"` seul ou de retirer ce champ au profit de l'`AggregateOffer` déjà présent sur `/` et `/le-service`.

**I3 — `openingHoursSpecification` (09:00-18:00 lun-ven) déclaré alors qu'OptiPro est un service à distance (créations de sites, pas de boutique physique).** Champ non faux mais dont la pertinence pour du dev web à distance est discutable — LocalBusiness suppose un établissement physique visitable, ce qui n'est probablement pas le modèle réel (à confirmer : Pierre Laurent reçoit-il des clients à Vence ou opère-t-il 100% à distance ? Le texte des pages villes dit "Le service est 100% à distance"). Si 100% à distance, `LocalBusiness` n'est pas le type le plus adapté (voir §4).

**I4 — Dates ISO 8601 correctes** sur tous les `BlogPosting` (`datePublished`/`dateModified` en `YYYY-MM-DD`) — conforme.

**I5 — Positions `BreadcrumbList` séquentielles et correctes** sur les 34 pages (aucune anomalie détectée par validation automatique) — conforme.

**I6 — Pas de doublon de blocs de même `@type` sur une même page** — conforme (le layout injecte une fois LocalBusiness+WebSite, la page injecte le reste).

---

## 3. Ce qui est correct et à ne pas casser en corrigeant le reste

- `safeJsonLd()` (`src/lib/json-ld.ts`) échappe correctement les `<` pour éviter la fermeture prématurée de `<script>` — bonne pratique XSS, à conserver.
- `@context: "https://schema.org"` (https, pas http) partout — conforme.
- URLs absolues partout dans les JSON-LD (`https://www.opti-pro.fr/...`) — conforme.
- `BlogPosting` : `headline`, `description`, `datePublished`, `dateModified`, `author` (avec `@id` lié à Person), `publisher` (avec `@id` lié à Organization), `image`, `mainEntityOfPage` — tous les champs requis/recommandés Google sont présents et bien formés.
- `Person` (`/a-propos`) : `name`, `jobTitle`, `worksFor` (@id), `address`, `sameAs`, `knowsAbout`, `alumniOf` — complet, aucune donnée inventée détectée (LinkedIn réel, Afipe réel selon contenu visible).
- Pas de schema déprécié utilisé (aucun `HowTo`, aucun `SpecialAnnouncement`, aucun `CourseInfo`/`EstimatedSalary`/`LearningVideo`).
- `ReviewJsonLd.tsx` a une garde anti-données-vides bien pensée — ne génère rien tant qu'il n'y a pas de vrais témoignages. C'est exactement le comportement recommandé.

---

## 4. Opportunités manquantes et JSON-LD prêt à l'emploi

### 4.1 PRIORITÉ 1 — Corriger le bloc Organization global (layout.tsx)

Remplacer la `description` obsolète dans `src/app/(public)/layout.tsx` (ligne 48-49) par une version alignée sur le positionnement actuel. Utiliser les données déjà présentes ailleurs dans le code (`page.tsx` de l'accueil) :

```json
{
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.opti-pro.fr/#organization",
  "name": "OptiPro",
  "description": "Création de sites vitrines (990€ et 1 390€), web apps et outils métier sur mesure pour artisans et TPE. Maintenance mensuelle dès 79€/mois. Premier appel gratuit.",
  "priceRange": "€€"
}
```
(conserver tous les autres champs déjà présents : `address`, `geo`, `areaServed`, `serviceArea`, `founder`, `telephone`, `sameAs`, `logo`, `image`.)

Si l'activité est bien 100% à distance (confirmé par le texte des pages `/services/*`), envisager de retirer `openingHoursSpecification` ou d'ajouter `"telephone"`-only contact sans horaires de boutique, et documenter explicitement `areaServed: France` plutôt que le rayon `GeoCircle` de 50km, qui contredit "j'accepte les électriciens partout en France" lu dans le contenu des pages métiers.

### 4.2 PRIORITÉ 1 — Migrer le Service + FAQPage des 10 pages /services/*

Remplacer dans `CityServicePage.tsx` et dans chaque `page.tsx` sous `/services/{métier}` le bloc `Service` obsolète par l'équivalent web dev, sur le modèle déjà en place sur `/le-service` :

```json
{
  "@type": "Service",
  "@id": "https://www.opti-pro.fr/services/electricien#service",
  "name": "Création de sites vitrines et outils métier pour électriciens",
  "serviceType": "WebDevelopment",
  "description": "Sites vitrines (990€ et 1 390€) et outils métier sur mesure pour électriciens indépendants et TPE : présentation en ligne, devis en ligne, fiche Google My Business, SEO local.",
  "provider": { "@id": "https://www.opti-pro.fr/#organization" },
  "areaServed": "FR",
  "audience": { "@type": "Audience", "name": "Électriciens, électriciens du bâtiment, installateurs RGE" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "990",
    "highPrice": "1390",
    "priceCurrency": "EUR",
    "offerCount": 2
  }
}
```

Et réécrire les questions/réponses du `FAQPage` de ces 10 pages qui mentionnent encore 75€/h et les packs 650-1950€ (au minimum : `services_electricien`, `services_plombier`, `services_restaurateur`, `services_serrurier`, `services_nice`, `services_antibes`, `services_cannes`, `services_grasse`, `services_mougins`, `services_cagnes-sur-mer`). Le contenu visible (H1, texte) de ces pages doit être vérifié en parallèle — s'il décrit encore l'admin externalisé, la correction schema seule ne suffira pas (cohérence markup ↔ contenu visible = critère Google).

### 4.3 PRIORITÉ 2 — OfferCatalog structuré sur /tarifs

`/tarifs` n'a actuellement aucun schema `Offer`. Ajouter, avec les vrais tarifs (source : metadata de `tarifs/page.tsx` et `le-service/page.tsx`) :

```json
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Offres OptiPro — Sites vitrines et outils web sur mesure",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Site vitrine",
      "price": "990",
      "priceCurrency": "EUR",
      "description": "Site vitrine 3 à 4 pages, hébergement 1 an, nom de domaine et adresse email professionnelle inclus.",
      "seller": { "@id": "https://www.opti-pro.fr/#organization" }
    },
    {
      "@type": "Offer",
      "name": "Site vitrine Pro",
      "price": "1390",
      "priceCurrency": "EUR",
      "description": "Site vitrine + formulaire de contact fonctionnel, fiche Google My Business et SEO local.",
      "seller": { "@id": "https://www.opti-pro.fr/#organization" }
    },
    {
      "@type": "Offer",
      "name": "Web app / outil métier sur mesure",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Sur devis, après un premier appel gratuit"
      },
      "seller": { "@id": "https://www.opti-pro.fr/#organization" }
    },
    {
      "@type": "Offer",
      "name": "Maintenance Essentiel",
      "price": "79",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 79,
        "priceCurrency": "EUR",
        "unitText": "MONTH"
      },
      "seller": { "@id": "https://www.opti-pro.fr/#organization" }
    },
    {
      "@type": "Offer",
      "name": "Maintenance Pro",
      "price": "129",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 129,
        "priceCurrency": "EUR",
        "unitText": "MONTH"
      },
      "seller": { "@id": "https://www.opti-pro.fr/#organization" }
    }
  ]
}
```
Note : ne pas réutiliser `OfferCatalogJsonLd.tsx` tel quel — il faut d'abord le reconstruire avec `offers.ts`/`pricing.ts` mis à jour (eux-mêmes obsolètes, voir C3), sinon le bug C3 se propage.

### 4.4 PRIORITÉ 3 — Corriger le serviceType incohérent sur les Service génériques

Sur `/` et `/le-service`, `serviceType: "WebDevelopment"` est correct et à conserver comme référence pour la migration de 4.2.

### 4.5 Ne pas ajouter

- **FAQPage supplémentaire** : ne pas en ajouter de nouvelles pour le seul bénéfice Google (site commercial, non éligible rich result FAQ depuis août 2023). Celles qui existent déjà peuvent rester pour le bénéfice GEO/IA, à condition que leur contenu soit correct (voir 4.2).
- **Review/AggregateRating sur /temoignages** : NE PAS ajouter avant l'obtention de vrais témoignages. `TESTIMONIALS` est vide dans `src/data/testimonials.ts`, la page l'explique honnêtement au visiteur. Ajouter un `AggregateRating` fictif ou "de démarrage" serait une donnée inventée et un risque de pénalité Google (rich results avis basés sur du faux contenu = violation des guidelines).
- **HowTo, SpecialAnnouncement, CourseInfo/EstimatedSalary/LearningVideo** : non détectés sur le site — bien, ne pas en introduire (déprécié).

---

## 5. Éligibilité rich results Google — récapitulatif

| Type de rich result | Présent sur le site | Éligible Google aujourd'hui | Commentaire |
|---|---|---|---|
| Breadcrumb | Oui (quasi toutes les pages) | Oui | Positions séquentielles correctes, conforme |
| FAQ | Oui (12 pages) | **Non pour un site commercial** (restreint gov/santé depuis 08/2023) | Utile pour GEO/IA seulement, pas pour la SERP Google |
| Article/BlogPosting | Oui (13 articles) | Oui, si E-E-A-T et Core Web Vitals suffisants | Champs requis présents (headline, datePublished, author, image) |
| LocalBusiness (Knowledge Panel / local pack) | Oui | Oui, mais **description contradictoire avec le contenu visible** (voir C1) — risque de non-affichage ou mauvaise info affichée | Corriger avant d'attendre un effet local pack |
| Product/Offer rich snippet | Absent sur /tarifs | Potentiel oui si OfferCatalog structuré ajouté (voir 4.3) | À ajouter |
| Review/AggregateRating (étoiles SERP) | Absent (volontairement) | Non éligible sans vrais avis | Ne rien faire tant qu'il n'y a pas de témoignages réels |
| Sitelinks Search Box / WebSite | Oui (`WebSite` + `@id`) | Oui | Conforme |

---

## 6. Résumé des actions par ordre de priorité

1. **Critique** — Corriger la `description` du bloc `LocalBusiness` global dans `layout.tsx` (75€/h, 650-1950€/mois → 990€/1390€, sites web).
2. **Critique** — Migrer le `Service` + `FAQPage` des 10 pages `/services/*` (villes + métiers) vers le positionnement dev web, en cohérence avec le contenu visible de ces pages (à vérifier en parallèle).
3. **Majeur** — Ajouter un `OfferCatalog`/`Offer` structuré sur `/tarifs` avec les 5 vraies offres (990€, 1390€, web app sur devis, 79€/mois, 129€/mois).
4. **Dette technique** — Nettoyer ou supprimer `OfferCatalogJsonLd.tsx`, `offers.ts` et `pricing.ts` (contiennent l'ancien modèle MISSION_PACKS) avant toute réutilisation, pour éviter de réintroduire le bug C3.
5. **Info** — Ne pas ajouter de Review avant de vrais témoignages ; ne pas investir davantage dans FAQPage pour un gain Google (déjà indisponible pour site commercial) mais les conserver pour le bénéfice GEO.
