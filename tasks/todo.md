# TODO — OptiPro

## Pivot site personnel — EN COURS le 2026-08-30

Décision owner : arrêt définitif des missions client. OptiPro devient le site personnel de
Pierre Laurent, centré sur ses projets, son parcours, ses centres d’intérêt et ce qu’il crée.
ProbaLab et Ferdinand sont les projets actuels, sans transformer le site en vitrine produit.
Direction visuelle :
univers technologique sombre et cinématographique, interface système originale, sans reprise
de marques ou d'éléments Marvel.

- [x] Archive Git locale créée : tag `archive/client-site-2026-08-29`
- [x] Branche de travail créée : `codex/refonte-studio-produits`
- [x] Nouvelle identité éditoriale et visuelle implémentée
- [x] Discours de « studio / product builder » retiré au profit d’un vrai site personnel non commercial
- [x] Pages actives limitées à Accueil, Projets, À propos, Contact, Mentions légales, Confidentialité
- [x] ProbaLab et Ferdinand présentés comme produits personnels, pas comme clients
- [x] Tarifs, prestations, pages locales, blog commercial, formulaire, CRM/admin et crons retirés du code actif
- [x] Dépendances Supabase, Resend, GSAP, React PDF et composants admin retirés du manifeste npm
- [x] Redirections permanentes préparées pour les anciennes URL publiques
- [x] Portrait retiré du site et des fichiers publics à la demande de Pierre
- [x] Hero et page Parcours remplacés par une interface abstraite IA / automatisation, sans visage
- [x] Lien LinkedIn confirmé dans le footer et sur la page Contact
- [x] TypeScript + lint + tests structurels sans build
- [x] Validation visuelle locale desktop/mobile, navigation, images, redirections et console navigateur
- [x] Build Next.js de production validé : 12/12 pages statiques générées avec Next.js 16.3.3
- [x] Déploiement Vercel Production validé sur `www.opti-pro.fr` : commit `7d52610`, statut READY,
      pages et redirections HTTP, rendu desktop/mobile, navigation, images et console contrôlés
- [x] Variables Vercel Supabase et Resend retirées après validation de la version statique ;
      `vercel env ls` confirme qu’il ne reste aucune variable sur `optipro-website`
- [ ] Sauvegarde de la base OptiPro avant suppression : bloquée car le quota Supabase Free autorise déjà
      2 projets actifs (ProbaLab et Ferdinand). Le projet OptiPro reste `INACTIVE`, intact et non supprimé.

## Repositionnement CDI temps plein dès septembre 2026 — TERMINÉ le 2026-07-27
Pierre reprend un CDI temps plein en septembre. OptiPro devient une activité secondaire
(soirs/week-ends) + SAPAL conservé en parallèle. Décisions actées : site en acquisition filtrée
(pas GBP), back-office abandonné comme chantier actif, facturation via un outil externe.

- [x] Délai site vitrine 3 → 4 semaines (62 occurrences, 12 pages services/villes + accueil + CGV + llms.txt + 1 article blog)
- [x] Contact : « Réponse garantie sous 24h · lundi-vendredi 9h-18h » → « Réponse sous 48h » (8 occurrences ContactPageClient + 2 metadata + contact.md)
- [x] JSON-LD `openingHoursSpecification` (Mon-Fri 9h-18h) retiré de layout.tsx — incohérent avec un CDI temps plein
- [x] Offre web app dépriorisée (hero accueil, hero /le-service, bandeau pages ville) — reste vendue, juste plus en avant-plan
- [x] llms.txt et /a-propos : reformulés pour ne plus affirmer un temps plein sur OptiPro
- [x] GBP : abandonné, retiré du todo (voir section SEO ci-dessous, action annulée)
- [x] Intégration Pennylane retirée : 10 fichiers supprimés (lib/pennylane.ts, sync-actions.ts,
      sync-helpers.ts, PennylaneSyncButton.tsx, PennylaneButton.tsx, PennylaneSourceBadge.tsx,
      route cron non authentifiée /api/cron/sync-pennylane — CRON_SECRET absent en prod, faille corrigée),
      8 fichiers mixtes nettoyés (devis/factures actions + pages + confidentialite.tsx)
- [x] validateFactureAction/markFactureAsPaidAction simplifiées : suivi de statut local uniquement,
      la facture officielle (PDF, Factur-X) est désormais émise via un outil de facturation externe
- [x] 3 composants orphelins supprimés (reliquats « bras droit administratif ») : OptiboardTeaser,
      TimelineMethode, AutomatedVsHuman — jamais importés
- [x] Colonnes Supabase pennylane_* laissées en base (nullable, sans FK, aucun impact)
- Vérifs : tsc 0 erreur, build 46 pages OK, 24/24 tests Jest, vérif visuelle /contact /accueil /services/nice

### En suspens
- [ ] Variables d'env `PENNYLANE_API_TOKEN` et `NEXT_PUBLIC_PENNYLANE_COMPANY_SLUG` à retirer manuellement
      de `.env.local` et du dashboard Vercel (pas d'accès direct depuis le code)
- [ ] `public/index.md` et `public/services.md` restent obsolètes (ancienne grille tarifaire pré-juin) —
      passif préexistant non traité cette session, hors périmètre

## En cours — Corrections audit site (2026-07-26)
Audit complet : voir tasks/audit-site-2026-07-26.md (score ≈60/100). Cause racine : le repositionnement de juin n'a touché que 4 pages — tout le reste vend encore l'offre admin 650-1950€/mois.

### 🔴 Critique (cohérence de l'offre) — TERMINÉ le 2026-07-26
- [x] /contact : H1 + formulaire refondus (activité / offre visée avec vrais prix / situation) — ContactPageClient.tsx + route API + email de préqualification
- [x] JSON-LD LocalBusiness global réaligné + ajout OfferCatalog (5 offres réelles) — src/app/(public)/layout.tsx
- [x] Réécriture des 10 pages /services/* (4 métiers + 6 villes) sur le positionnement web, différenciées, avec maillage interne
- [x] CTA faux dans l'article facturation-electronique corrigé
- [x] CGV réécrites pour la prestation web (devis, délais, PI du code, garanties) + SIREN renseigné
- [x] public/llms.txt réécrit intégralement
- [x] Bonus trouvés en cours de route : manifest PWA + image OpenGraph (partages sociaux) étaient encore « bras droit administratif — dès 650€/mois »
- [x] Bonus : /methode et /pourquoi-ce-prix (code mort, 100% ancienne offre) supprimés — les redirects 301 existaient déjà ; lien interne mort corrigé dans /temoignages
- [x] Bonus : 4 pages métier ajoutées au footer (elles étaient orphelines), /admin/login passé en rel=nofollow, LAST_CONTENT_UPDATE du sitemap à jour
- Vérifs : tsc 0 erreur, build 52 pages OK, JSON-LD valide sur 7 pages testées (FAQ = HTML), 19/20 pages sans résidu (reste le blog)

### ⚠️ À valider par Pierre (hypothèses posées dans les CGV)
- [ ] Modalités de paiement CGV : j'ai écrit « 40% à la commande, solde à la livraison, 30 jours date de facture » — ce n'était nulle part sur le site, à confirmer ou corriger
- [ ] Délai de réclamation de 14 jours après livraison + réemploi des briques techniques génériques : à valider juridiquement

### 🟠 Haute — blog TERMINÉ le 2026-07-26
- [x] Blog : 6 articles supprimés + 301 ciblées par sujet, 8 conservés et réalignés (CTA, angle, maillage interne)
- [x] Bio auteur corrigée (centralisée dans ArticleClient.tsx → les 8 articles d'un coup) + accroches /blog
- [x] Stats invérifiables retirées : « 30 artisans accompagnés » et « 9 artisans sur 10 » (articles supprimés ou reformulés),
      cas plombier Cagnes requalifié en « exemple type » (confirmé composite par Pierre), « devis sous 24h = 80% signature »
      supprimé — vérification faite : **cette étude CAPEB n'existe pas**, tout comme les attributions INSEE (42€/h, 60-90 jours)
- [x] Les 2 seules stats conservées sont sourcées et vérifiées page ouverte : CAPEB Baromètre ARTISANTE (42% des artisans,
      charge admin 25-75%) et Banque de France ODP 2024 (retard moyen 13,6 j au T4). J'ai corrigé au passage une citation
      CAPEB inexacte (« 10 à 25% du temps ») que la source ne dit pas.
- [ ] Maillage : 4 pages métier orphelines (Footer.tsx l.87-95) + liens croisés ville↔métier
- [ ] Schema : OfferCatalog sur /tarifs + Article/FAQPage sur l'article « combien coûte un site »
- [ ] sitemap.ts : LAST_CONTENT_UPDATE figé au 2026-05-13 (l.7)

### 🟡 Moyenne
- [x] Page /services/vence créée le 2026-07-26 — angle « je suis sur place » (les 7 concurrents de la SERP sont
      des agences non implantées qui génèrent une page par commune). Ancrage local vérifié : marché ARTISA'VENCE,
      Cité historique, place Clemenceau. SIREN cité en FAQ comme preuve d'implantation. Priorité sitemap 0.9
      (la plus haute des pages ville), liens entrants depuis le footer (donc toutes les pages) + Cagnes-sur-Mer.
      NB : les « 400 commerces » et « 2476 entreprises » vus en recherche n'ont PAS été utilisés — page source
      mairie en 404, chiffres non vérifiables.
- [x] Perf TERMINÉ le 2026-07-27 :
      · payload RSC : cause réelle trouvée (≠ audit) — les objets `Article` complets, HTML inclus (76 KB), étaient
        envoyés au client alors que les cartes n'affichent que 5 champs. Type `ArticleCard` + projection explicite.
        Mesuré à nombre d'articles égal : /blog 156→55 KB (−65%), article 105→68 KB (−35%), JS inutilisé 48→27 KiB,
        TBT 50→20 ms, poids transféré 450→350 KiB
      · icônes PWA carrées 192/512 + maskable (safe-zone Android), palette réduite : 512 à 16,9 KiB au lieu de 44,8.
        logo.png (63 KiB) hors du chemin critique. JSON-LD logo : dimensions réelles 800×255 rétablies
      · `display: "swap"` explicite sur les 2 polices
      · code mort supprimé : ProjectCard, RoiCalculator, ComparisonCards, OfferCatalogJsonLd + comparison.ts
        (2 embarquaient GSAP). projects.ts CONSERVÉ (données réelles SAPAL/ProbaLab, reco E-E-A-T de l'audit)
      · config Jest : elle scannait .claude/worktrees/ → 7 suites en échec étrangères au projet. Corrigé, 24 tests verts
      · bug d'animation corrigé : `gsap.from` sur sélecteur string laissait du contenu à opacity 0 (hero /blog,
        hero /a-propos, cartes). Helper src/lib/gsap-reveal.ts + pattern set/to scopé au ref racine
      NB : l'audit se trompait sur les imports GSAP — ils étaient déjà corrects (gsap + ScrollTrigger seul)
- [ ] Recouper le LCP avec les données terrain (CrUX/PSI) : quota PageSpeed épuisé les 26 et 27/07, à refaire
- [ ] Vercel : redirection directe http/apex → https://www (chaîne de 2 redirects actuellement)
- [ ] Accueil : preuve sociale plus tôt + exemple « réservation en ligne » (persona restaurateur)

### ⚪ Basse
- [ ] Retirer le lien /admin/login du footer public

## Terminé — Refonte positionnement « dev opérationnel » (2026-06-10 → finalisé 2026-07-26/27)
Repositionnement : bras droit admin → dev opérationnel (sites vitrines, web apps, outils métier).
Offres : Vitrine 990€ / Vitrine Pro 1 390€ / Web app sur devis / Maintenance 79€ & 129€/mois.
Le commit du 10/06 n'avait touché que 4 pages (accueil, tarifs, le-service, à-propos) — tout le reste
(contact, 10 pages services, blog, CGV, llms.txt, manifest, OG image) a été aligné les 26-27/07, voir sections ci-dessus.

## Terminé — Refonte hero homepage inspirée pierrelegoux.fr (2026-05-12)
- [x] Analyse pierrelegoux.fr (palette, typo, structure, animations CSS pures)
- [x] Démo HTML 6 variantes hero (`public/demo-hero.html`)
- [x] Choix Pierre : V6 (bras droit XXL 2 lignes) + Option B (« bras » et « droit » en orange) + Fond 6A (grille animée + lueur balayante)
- [x] Variables sémantiques globals.css (`--ink`, `--ink-muted`, `--brand-soft`, `--surface-soft`, `--line`, `--ease-signature`)
- [x] CSS Module `src/app/(public)/home.module.css`
- [x] Refonte hero `HomePageClient.tsx` (animation mot-par-mot, CTA pill noir, lien secondaire texte)
- [x] tsc --noEmit OK, dev server 200 OK
- [ ] Phase 2 plus tard : refondre les autres sections (problème/solution/comparaison/FAQ) avec les mêmes tokens

## Terminé — Refonte site vitrine (2026-03-28)
- [x] Repositionnement OptiBoard → OptiPro (conseil & dev sur mesure)
- [x] Nouveau hero avec "La Méthode OptiPro" (4 étapes)
- [x] 4 sections services immersives avec mockups HTML/CSS
- [x] Page Services (timeline + Pierre + CTA)
- [x] Page Réalisations (2 projets placeholder)
- [x] Page Contact (formulaire simplifié)
- [x] Mentions légales LCEN + Politique de confidentialité RGPD
- [x] Navigation et footer mis à jour
- [x] Animations premium (parallax, stagger, micro-interactions)
- [x] Typographie Space Grotesk + Outfit
- [x] Header scroll shadow + nav underline animations
- [x] Mockups animés (barres, entrées staggerées, tilt 3D, chat Telegram)
- [x] Suppression fichiers OptiBoard
- [x] Merge + déploiement en prod

## En cours — Back-office admin
### Brainstorming (validé)
- [x] Approche choisie : routes /admin/* dans le même Next.js
- [x] Stack : Supabase Auth + DB (nouveau projet "OptiPro")
- [x] Schéma BDD validé : tables clients, audits, audit_answers
- [x] Structure des pages validée (dashboard, clients, audit, PDF)
- [x] 5 catégories d'audit : outils, gestion admin, données, tâches répétitives, points de friction

### À faire — Design (reprendre ici)
- [ ] Finir le spec design (écrire le doc + self-review)
- [ ] Validation du spec par Pierre
- [ ] Écrire le plan d'implémentation

### À faire — Implémentation
- [ ] Créer projet Supabase "OptiPro" (eu-west-3 ou eu-central-1)
- [ ] Créer les tables (clients, audits, audit_answers) + RLS
- [ ] Supabase Auth (email/password)
- [ ] Middleware Next.js pour protéger /admin/*
- [ ] Page login (/admin/login)
- [ ] Dashboard (/admin)
- [ ] CRUD clients (/admin/clients, /admin/clients/new, /admin/clients/[id])
- [ ] Formulaire d'audit structuré (/admin/audit/new)
- [ ] Vue/édition audit (/admin/audit/[id])
- [ ] Génération rapport PDF (/admin/audit/[id]/pdf)
- [ ] Tests + vérification
- [ ] Déploiement

## Terminé — Optimisation SEO Phase 1+2 (2026-03-31)
- [x] Corriger domaine sitemap.ts (optipro.fr → www.opti-pro.fr)
- [x] Ajouter pages légales au sitemap
- [x] Corriger robots.ts (bloquer /admin + fixer URL sitemap)
- [x] Ajouter metadata Homepage (server component wrapper)
- [x] Ajouter metadata Contact (server component wrapper)
- [x] Améliorer titles/descriptions Services + Réalisations
- [x] Ajouter JSON-LD Organization + LocalBusiness (Vence 06140)
- [x] Ajouter metadataBase + canonical URLs + OG par page
- [x] Ajouter manifest.ts (PWA)
- [x] Ajouter Cache-Control headers + HSTS
- [x] Build vérifié sans erreurs

## Terminé — SEO Phase 3 (2026-03-31)
- [x] FAQ structurée avec FAQSchema (5 questions, page Services)
- [x] Service schema JSON-LD (4 services, page Services)
- [x] BreadcrumbList schema sur toutes les pages
- [x] Canonical URLs sur toutes les pages
- [x] Build vérifié sans erreurs

## À faire — SEO (actions manuelles Pierre) — PROCHAIN CHANTIER
- [x] ~~Créer le Google Business Profile~~ — abandonné le 2026-07-27 : incompatible avec la disponibilité
      réduite dès septembre (CDI temps plein), un GBP génère des demandes locales qui ne seraient pas honorées.
- [ ] Inscrire le site dans Google Search Console (permettra aussi de récupérer le LCP terrain / CrUX, cf. todo perf)
- [ ] Tester avec Google Rich Results Test après déploiement

## À faire — Site vitrine (plus tard)
- [ ] Remplir les vrais projets dans src/data/projects.ts (SAPAL + autre)
- [ ] Ajouter photo de Pierre dans la section Services
- [ ] Enrichir la page Services (FAQ, détails par étape)
- [ ] Espace client (Niveau 3 — futur)

## En cours — Animations GSAP /a-propos + blog (2026-04-28)
- [x] AProposPageClient : timeline hero + ScrollTrigger philosophie
- [x] AProposPageClient : timeline parcours scrubbed line + dot stagger
- [x] AProposPageClient : valeurs staggered + CTA pulse glow
- [x] Blog [slug] : split en page.tsx + ArticleClient.tsx
- [x] ArticleClient : barre progression scrub + entrée breadcrumb/titre
- [x] ArticleClient : reveal h2/h3 du contenu + sidebar slide
- [x] Blog list page : ScrollTrigger.batch sur cards
- [x] prefers-reduced-motion via gsap.matchMedia
- [x] tsc --noEmit OK
