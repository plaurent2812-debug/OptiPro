# pierre-laurent.fr — Instructions projet

Site de vente de l’offre OptiPro (création de sites internet pour TPE et PME), édité par Pierre Laurent, entrepreneur individuel à Vence. Dépôt GitHub : `plaurent2812-debug/OptiPro`.

## Ce que le site est, et n’est plus
- Un site statique de 11 pages qui vend **uniquement** l’offre de création de sites OptiPro. Le parcours, le CV et les applications sont des preuves secondaires.
- Il n’y a plus de back-office, de base de données, de formulaire ni d’API : Supabase, Pennylane, Resend et React PDF ont été retirés. Ne pas les réintroduire sans demande explicite (un test l’interdit).
- Domaine : `pierre-laurent.fr` (DNS chez OVH). `opti-pro.fr` (DNS chez IONOS) et `www` redirigent en 308 ; garder ces redirections au moins jusqu’en avril 2027 (migration Search Console).

## Stack
- Next.js 16 (App Router), React 19, TypeScript ; pages prérendues en statique.
- CSS Modules + variables CSS dans `src/app/globals.css` (pas de Tailwind). Thème sombre unique.
- Polices : Geist, et Geist Mono pour les valeurs chiffrées (`next/font`).
- Seule dépendance hors Next : `@vercel/analytics`, chargé en production uniquement.
- Déploiement : Vercel, à chaque fusion sur `main`. CI GitHub : lint, typecheck, tests, build.

## Pages
- `/` accueil de vente · `/optipro` offre et tarifs · `/optipro/vence` page locale · `/optipro/transport` page de prospection transporteurs (liée seulement depuis `/optipro`) · `/optipro/prix-site-internet` guide des prix
- `/projets` réalisations · `/a-propos` Qui suis-je · `/contact` · `/cv` (noindex, hors sitemap) · `/mentions-legales` · `/confidentialite`
- Anciennes URL : redirections dans `next.config.ts`. Une règle précise se place avant la règle générale qui la recouvre.

## Sources uniques de vérité (`src/data/`)
- `offer.ts` : prix, conditions, délai, coordonnées. Aucune page n’écrit un prix ou un contact en dur.
- `proof.ts` : mesure Lighthouse affichée (médiane de 3 passages mobile, datée). À remesurer avec la même méthode après chaque refonte de l’accueil.
- `market.ts` : chiffres du guide des prix, tous relevés sur la source citée.
- `projects.ts`, `profile.ts` : réalisations et parcours, avec leur statut réel.

## Règles de contenu
- Ne jamais inventer un chiffre, un client, un avis ou une référence. Une statistique ne s’écrit qu’après avoir lu la phrase exacte dans sa source.
- Ne pas écrire que Pierre code lui-même : formulation validée « je conçois et je réalise », sans parler de code ni d’IA.
- Exemples = vrais sites, avec leur statut (« Démonstration », « En ligne ») ; pas de maquette fictive.
- L’adresse personnelle n’apparaît que dans les mentions légales, jamais dans les données structurées.
- Le poste salarié actuel n’apparaît que sur le CV.
- Typographie française : espace insécable avant les deux-points, guillemets « ».

## Référencement
- Chaque page déclare `title`, `description`, `alternates.canonical` et `...shareMeta(...)` (`src/lib/share-meta.ts`) : un `openGraph` de page remplace celui du layout, image comprise.
- JSON-LD global (Person, ProfessionalService, WebSite) dans `src/app/(public)/layout.tsx` ; JSON-LD de page sérialisé avec `safeJsonLd`.
- Toute nouvelle page publique entre dans `src/app/sitemap.ts` et reçoit au moins un lien interne.
- Ne pas répéter le suffixe du gabarit de titre : utiliser `title: { absolute: … }` pour les pages commerciales.

## Vérifier avant de livrer
- `npm test` (contrat du site, `scripts/site-contract.test.mjs`), `npm run lint`, `npm run typecheck`, `npm run build`.
- Le contrat de tests verrouille le positionnement et les contenus validés : le faire évoluer avec le changement, ne pas le contourner.
- Contrôler le HTML du build pour les balises, puis la production après déploiement. Attendre le déploiement par le statut GitHub du commit, sans interroger le site en boucle (protection anti-robot de Vercel).
- Publication : branche, PR, fusion seulement sur autorisation explicite de Pierre.

## Suivi
- `tasks/todo.md`, `tasks/lessons.md`, `tasks/journal.md` : à lire en début de session ; ils restent locaux, hors commit.
- Comptes : Search Console sur le compte Gmail personnel (propriété de domaine) et sur le compte Workspace opti-pro.fr (migration) ; fiche Google OptiPro sur le compte Workspace.

## Pièges connus
- Next.js 16 + React 19 : pas d’options expérimentales en production.
- Images Open Graph (`ImageResponse`) : tout conteneur à plusieurs enfants porte `display: flex`.
- Apparition au défilement : le HTML serveur n’est jamais masqué ; pas d’`opacity: 0` en CSS.
- Navigateur intégré masqué : animations et chargements différés gelés ; recouper avec une capture ou Chrome headless avant de conclure à un bug.
