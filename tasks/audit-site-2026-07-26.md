# Audit complet du site www.opti-pro.fr — 26 juillet 2026

Audit mené sur les 34 pages du sitemap (crawl complet, toutes en HTTP 200), le code source, et 7 analyses spécialisées : technique, contenu/E-E-A-T, schema.org, performance (Lighthouse local), SEO local, GEO (visibilité IA), SXO (analyse des SERP réelles).

## Score global : ≈ 60/100

| Domaine | Poids | Note | Source |
|---|---|---|---|
| SEO technique | 22 % | 78 | Audit crawl + code |
| Qualité de contenu | 23 % | 42 | Audit E-E-A-T + alignement offre |
| On-page (titles/H1/meta) | 20 % | ~55 | Structure saine, mais 11 pages sur 34 au message obsolète (estimation) |
| Schema / données structurées | 10 % | 42 | Extraction + validation JSON-LD |
| Performance (CWV) | 10 % | ~85 | Lighthouse lab mobile 95-97, LCP 2,6-2,9 s limite (pas de field data CrUX, quota PSI épuisé) |
| Visibilité IA (GEO) | 10 % | 58 | Audit citabilité + llms.txt |
| Images | 5 % | ~70 | Peu d'images réelles ; icône manifest incohérente (estimation) |

La note n'est pas le plus important : **une seule cause racine tire presque tous les domaines vers le bas**.

---

## Le constat central : le repositionnement de juin est inachevé

La refonte « dev opérationnel » (commit 6a7040d) n'a été appliquée qu'à 4 pages : accueil, /tarifs, /le-service, /a-propos. **Tout le reste du site vend encore l'ancienne offre « bras droit administratif » à 650-1950 €/mois** :

| Surface encore sur l'ancienne offre | Détail | Fichier source |
|---|---|---|
| **Page /contact** (pire cas — page de conversion finale) | H1 : « Déléguer votre admin, à partir de 650€/mois » + formulaire qualifiant « Métier / Heures estimées par mois » | `src/app/(public)/contact/ContactPageClient.tsx` |
| **JSON-LD LocalBusiness global** (injecté sur les 34 pages) | Description « externalisation admin », tarifs 75 €/h et 650-1950 €/mois — contradiction directe avec le H1 visible de l'accueil | `src/app/(public)/layout.tsx` |
| **6 pages villes** (Nice, Cannes, Antibes, Grasse, Mougins, Cagnes) | Title « Assistant administratif à [Ville] », Service + FAQPage JSON-LD non migrés | `src/data/services.ts`, `CityServicePage.tsx` |
| **4 pages métier** (plombier, serrurier, électricien, restaurateur) | Title « Assistant administratif pour [métier] » | `src/data/services.ts`, `LandingPage.tsx` |
| **6 articles de blog sur 14** | 100 % ancien métier (CTA vers des « packs » qui n'existent plus) | `src/data/blog/` |
| **llms.txt** | Décrit encore l'offre admin (proposition de remplacement prête dans l'annexe geo.md) | `public/llms.txt` |
| **CGV** | Mentionnent encore 650 €, 75 €/h, « bras droit » | page /cgv |

Conséquences concrètes :
- Un prospect qui arrive sur /contact depuis l'accueil voit deux offres contradictoires **au moment de convertir**.
- Google reçoit un JSON-LD qui contredit le contenu visible de chaque page.
- Un moteur IA (ChatGPT, Perplexity…) qui synthétise « OptiPro » voit deux entreprises différentes sous le même nom.
- Les requêtes « création site internet [ville/métier] » n'ont aucune page pertinente : les URLs existent mais racontent la mauvaise histoire.

---

## Détail par domaine

### Technique — 78/100 (le point fort)
**Bon** : SSR réel (contenu dans le HTML brut), canonicals cohérents sur 34/34 pages (https + www, sans slash), 1 seul H1 par page, headers de sécurité complets (HSTS, CSP, nosniff, X-Frame-Options), anciennes routes /methode et /pourquoi-ce-prix bien en 308, robots.txt propre, cache statique OK, mobile sans overflow horizontal (vérifié à 375 px).
**À corriger** :
- Les 4 pages métier sont **orphelines** : aucun lien interne ne les pointe (le footer ne liste que les villes) — `src/components/layout/Footer.tsx` l.87-95.
- `http://opti-pro.fr` fait 2 redirections en chaîne au lieu d'une (config domaine Vercel).
- `LAST_CONTENT_UPDATE` codé en dur au 2026-05-13 dans `src/app/sitemap.ts` l.7 — le sitemap sous-déclare la fraîcheur de la refonte.
- Lien `/admin/login` dans le footer public (signal de crawl inutile).

### Contenu — 42/100
- **Blog : 6 articles à supprimer/rediriger 301, 5 à réécrire, 3 à garder** (tableau détaillé en annexe content.md). Les 3 à garder : « site-web-artisan-combien-ca-coute » (déjà aligné, candidat pilier), « 3-prompts-qui-font-gagner-5h » et « ia-pour-artisan-par-ou-commencer » (corriger CTA/bio).
- **Statistiques invérifiables à retirer ou valider** (règle : jamais de chiffres inventés) : « 30 artisans accompagnés ces 18 derniers mois », « 9 artisans sur 10 », et le cas client chiffré « plombier à Cagnes-sur-Mer » qui contredit la politique zéro-faux-témoignage de /temoignages.
- **CTA factuellement faux** dans l'article facturation électronique : « inclus dans tous les packs mensuels » — ces packs n'existent plus.
- Pages villes : similarité faible (~13-15 %), pas un problème de doorway. Pages métier : jusqu'à **77,5 % de recouvrement** plombier/serrurier — à différencier lors de la réécriture.
- **Bon** : /temoignages honnête (aucun faux avis — c'est un vrai signal de confiance), référence SAPAL réelle bien exploitée.

### Schema.org — 42/100
- JSON-LD 100 % valide syntaxiquement, BlogPosting/Person/BreadcrumbList bien formés.
- Mais LocalBusiness global obsolète (voir constat central) + Service/FAQPage non migrés sur les 10 pages /services/*.
- **Manque : OfferCatalog sur /tarifs** alors que les 5 offres réelles (990 €, 1390 €, web app sur devis, maintenance 79/129 €) sont parfaitement structurables.
- Dette dormante : `OfferCatalogJsonLd.tsx`, `offers.ts`, `pricing.ts` contiennent encore l'ancien modèle MISSION_PACKS.

### Performance — lab excellent, à confirmer sur le terrain
- Lighthouse mobile : 95-97/100 (desktop 100). TTFB 73-95 ms. CLS = 0 partout. TBT 15-47 ms.
- **LCP mobile lab 2,57-2,90 s** — à la limite du seuil « Good » (2,5 s). Pas de field data (quota PSI épuisé pendant l'audit) : à recouper via Search Console/CrUX.
- `/blog` : 226 KB de HTML dont **196 KB de payload RSC** (liste d'articles non paginée) — `BlogListClient.tsx`.
- GSAP importé en entier dans 6 composants : 48-73 KiB de JS inutilisé mesurés.
- `logo.png` (800×255, 63 KiB) déclaré `512x512` dans `src/app/manifest.ts` et préchargé en priorité haute.

### SEO local — 34/100
- Structure des pages villes saine (contenu local unique) mais fond obsolète.
- **GBP toujours pas créé** (action en attente depuis mars) : catégorie « Concepteur de sites Web », mode zone de chalandise (adresse masquée), à créer **après** correction des pages.
- Aucun maillage croisé ville ↔ métier.

### GEO / visibilité IA — 58/100
- **Bon** : robots.txt exemplaire (tous les crawlers IA autorisés), SSR propre, auteur et dates sur les articles, prix en texte clair sur les pages à jour.
- llms.txt obsolète (remplacement prêt dans geo.md), passages trop courts sur /tarifs pour la citation RAG, preuve sociale limitée à SAPAL.

### SXO — où investir, où renoncer (SERP réelles analysées)
**À viser (meilleur ratio effort/chance)** :
1. « combien coûte un site internet artisan » — l'article existant est déjà le bon format ; ajouter schema Article/FAQPage + CTA vers /tarifs.
2. **« création site internet vence » — la meilleure opportunité inexploitée** : SERP faible (pages géo génériques d'agences non locales), Pierre y est réellement implanté, aucune page n'existe.
3. Pages métier réécrites « création site vitrine pour plombier/électricien » + longue traîne locale (« site vitrine artisan Alpes-Maritimes »).

**À abandonner** :
- « création site internet nice » en frontal : SERP saturée d'agences installées depuis 10-15 ans — garder une page Nice propre mais sans y investir davantage.
- Les requêtes génériques « application web sur mesure » : SERP 100 % éditeurs SaaS, mauvais fit d'intention. Le sur-mesure se vend par études de cas et réseau, pas par SEO générique.

**Personas** : le H1 de l'accueil (« Je construis les outils web que vos concurrents n'ont pas encore ») est une bonne punchline mais lent à décoder pour un artisan pressé — un sous-titre chiffré plus direct aiderait. Persona le plus mal servi : le restaurateur cherchant la réservation en ligne (aucune page ne traite ce cas d'usage).

---

## Plan d'action priorisé

### 🔴 Critique — cette semaine (cohérence de l'offre)
1. **/contact** : réécrire H1 + formulaire (projet : vitrine/web app/maintenance au lieu de métier/heures par mois) — `ContactPageClient.tsx`. *~1 h, impact conversion maximal.*
2. **JSON-LD LocalBusiness global** : réécrire la description + retirer 75 €/h et 650-1950 € — `src/app/(public)/layout.tsx`. *~30 min, corrige les 34 pages d'un coup.*
3. **Réécrire les 10 pages /services/*** sur la nouvelle offre — `src/data/services.ts` + composants. Prioriser les 4 métiers (potentiel SERP réel), différencier plombier/serrurier. *~1-2 jours.*
4. **CTA mensonger** de l'article facturation électronique (« inclus dans tous les packs mensuels »). *~10 min.*
5. **CGV** : aligner sur les prestations actuelles (990/1390 €, maintenance). *~1 h, aussi juridique.*
6. **llms.txt** : remplacer par la version proposée en annexe geo.md. *~15 min.*

### 🟠 Haute — sous 2 semaines
7. **Tri du blog** : 6 suppressions/301, 5 réécritures, 3 conservations (tableau annexe content.md) + corriger bio auteur partout.
8. **Retirer/valider les stats invérifiables** (« 30 artisans », « 9 sur 10 », cas plombier Cagnes).
9. **Maillage** : ajouter les 4 pages métier au footer ou à une section, liens croisés ville ↔ métier — `Footer.tsx`.
10. **Schema** : OfferCatalog sur /tarifs (avec les vrais prix), Article + FAQPage sur l'article pilier « combien ça coûte ».
11. **sitemap.ts** : remettre `LAST_CONTENT_UPDATE` à jour (et idéalement le dériver des dates réelles).

### 🟡 Moyenne — ce mois-ci
12. **Créer le Google Business Profile** (après les corrections 1-3) — catégorie « Concepteur de sites Web », mode SAB.
13. **Page /services/vence** — la meilleure opportunité SERP du panel testé.
14. Performance : icône PWA carrée dédiée (remplacer logo.png dans `manifest.ts`), pagination /blog, imports GSAP ciblés, `display: "swap"` sur next/font.
15. Config domaine Vercel : redirection directe http/apex → https://www (éviter la chaîne).
16. Accueil : preuve sociale visible plus tôt + un exemple « réservation en ligne » dans le bloc web app (persona restaurateur).

### ⚪ Basse
17. Retirer le lien /admin/login du footer public.

---

## Ce qui est déjà bon (à préserver)
SSR propre, canonicals parfaits, sécurité headers complète, redirections 308 propres, robots.txt IA exemplaire, mobile sans défaut structurel, performance lab excellente, page témoignages honnête, référence SAPAL réelle, article pilier « combien coûte un site » déjà aligné avec ce que Google récompense.

## Annexes (rapports détaillés)
Copiées dans `tasks/audit-2026-07-26/` : `technical.md`, `content.md` (tableau des 14 articles), `schema.md` (exemples JSON-LD prêts), `performance.md`, `local.md` (plan GBP), `geo.md` (llms.txt de remplacement prêt), `sxo.md` (analyse SERP par requête).

## Limites de l'audit
Pas de données Search Console/CrUX/GA (credentials non configurés — quota PSI public épuisé pendant l'audit), pas de données backlinks, positions SERP observées qualitativement via recherche web (aucun volume de recherche estimé). Aucun chiffre de ce rapport n'est inventé : tout provient de mesures réelles (crawl, Lighthouse local, curl, extraction HTML/JSON-LD, SERP observées).
