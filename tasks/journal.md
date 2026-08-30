# Journal de sessions — OptiPro

> Entrées antéchronologiques (la plus récente en haut).
> Format : date, PRs/commits, modifs BD, modifs structurantes, leçons, en suspens, stats.

## 2026-08-30 — Refonte minimaliste et ajout de Ro Nutritionniste / Odysio

### PRs et commits poussés sur `main`
- PR #6 — refonte minimaliste et futuriste du site personnel, fusionnée au commit `0fdc12a`.
- `781dbb7` — nouveau hero en environnement de développement HTML/CSS, typographie réduite,
  réseau neuronal animé et harmonisation des pages publiques.
- `b29fa8b` — restauration du script `test:ci` attendu par le workflow GitHub.
- `60100a4` — consignation du premier déploiement de la refonte.
- PR #7 — ajout de Ro Nutritionniste et Odysio, fusionnée au commit `6a7ed22`.
- `10f9c77` — ajout des deux projets, de leurs visuels et de leurs états réels.
- `c54a310` — consignation de leur publication en production.

### Modifications BD / infrastructure
- Aucune modification de base de données, de schéma Supabase ou de variable d’environnement.
- Deux cycles Preview → CI → Production validés via GitHub et Vercel.
- Production finale Vercel `dpl_EjZKq1UhQx4a8Jeo5g75BbS4cQ4u` au statut `READY`, avec
  `www.opti-pro.fr` et ses routes principales contrôlés en HTTP 200.

### Modifications fonctionnelles structurantes
- Direction visuelle simplifiée : textes moins imposants, interface bleu nuit inspirée de Vivva,
  terminal animé, curseur, scan lumineux et réseau neuronal CSS en mouvement.
- Ro Nutritionniste ajouté comme prototype web avancé avec une fenêtre navigateur et le déploiement
  Preview fonctionnel ; aucune affirmation de livraison publique définitive.
- Odysio ajouté comme application iOS/TestFlight volontairement mise en pause, sans faux lien App Store.
- Accueil et page Projets passent de deux à quatre projets ; nouveaux visuels locaux optimisés par Next Image.

### Vérifications
- TypeScript et ESLint validés localement puis dans GitHub Actions.
- 9 tests structurels verts ; builds Next.js GitHub et Vercel validés.
- Accueil, page Projets et nouveaux fichiers image contrôlés sur le domaine public.
- Aucun log d’erreur Production trouvé dans la fenêtre Vercel consultée après déploiement.

### Leçon ajoutée
- Le workflow appelait `npm run test:ci` alors que seul `npm test` existait : garder les scripts du
  manifeste synchronisés avec les commandes exactes de `.github/workflows/ci.yml`.

### Points en suspens / à reprendre
- L’alias stable `ro-nutritionniste.vercel.app` renvoie encore une 404 ; OptiPro pointe donc vers le
  déploiement Preview fonctionnel et immuable en attendant une vraie publication du projet de Romain.
- Odysio reste volontairement en pause ; widget, achat sandbox et lancement public ne sont pas présentés
  comme terminés sur le site.
- GitHub Actions signale la dépréciation de Node.js 20 pour `actions/checkout@v4` et
  `actions/setup-node@v4` ; avertissement non bloquant à traiter lors d’une prochaine maintenance CI.
- `AGENTS.md` reste un fichier local non suivi et n’a été inclus dans aucun commit de cette session.

### Stats de session
- 7 commits, dont 2 PRs fusionnées.
- 21 fichiers touchés : 4 ajoutés, 17 modifiés, +650 / -362 lignes.
- 2 nouveaux projets publiés et 2 déploiements Production validés.

## 2026-08-29 → 2026-08-30 — OptiPro devient le site personnel de Pierre

**Décision structurante** : arrêt définitif des missions client. Le domaine OptiPro est conservé comme site
personnel pour présenter ProbaLab, Ferdinand, les futurs projets, le parcours et les centres d’intérêt de Pierre,
sans offre commerciale ni posture de studio.

### Commits poussés sur `main` et déployés en production
- `4cffb8c` — première transformation de la vitrine client en studio de produits personnels
- `921cb6c` — recentrage éditorial complet sur Pierre, ses projets et son parcours
- `7d52610` — correction de l’image sociale pour rendre le build de production compatible
- `b8e0d9d` — consignation de la première mise en production du site personnel
- `18a15a6` — nettoyage d’une variante visuelle résiduelle sur ProbaLab
- `a3ec992` — retrait complet des portraits et renforcement de l’identité abstraite IA / interface système

### Modifications BD / infrastructure
- Aucune modification de données ni de schéma Supabase.
- Toutes les variables Supabase et Resend ont été retirées de Vercel après validation du fonctionnement statique.
- Le projet Supabase OptiPro reste `INACTIVE`, intact et non supprimé : sa sauvegarde est bloquée par la limite
  de deux projets actifs du plan Free, déjà utilisée par ProbaLab et Ferdinand.
- Tag de retour arrière créé : `archive/client-site-2026-08-29`.

### Modifications fonctionnelles structurantes
- Suppression des services, tarifs, contenus commerciaux, blog d’acquisition, formulaire, CRM/admin et crons.
- Site actif limité à Accueil, Projets, Parcours, Contact, Mentions légales et Confidentialité.
- ProbaLab et Ferdinand présentés comme projets personnels ; aucune promesse de prestation ou appel commercial.
- Nouvelle direction sombre et technologique : noyau IA, flux de données, télémétrie et animations CSS, sans
  reprise de marque Marvel et sans portrait de Pierre.
- LinkedIn confirmé dans le footer et sur la page Contact ; anciens fichiers de portrait supprimés et URL en 404.

### Vérifications et production
- TypeScript, ESLint, 5 tests structurels, `npm audit --omit=dev` et build Next.js validés.
- Build final : 12/12 pages statiques générées avec Next.js 16.3.3.
- Rendus desktop et mobile, menu mobile, liens LinkedIn, pages et console navigateur vérifiés localement puis
  sur `https://www.opti-pro.fr`.
- Déploiement final Vercel `dpl_GNk97fG4AvZwXoThmg6tchWj7pEQ` au statut `READY`.
- En-têtes de sécurité contrôlés ; anciennes URL de portrait confirmées en 404.

### Leçons et points en suspens
- Aucune nouvelle leçon ajoutée à `tasks/lessons.md` pendant cette session.
- Seul point en suspens : sauvegarder puis décider du devenir du projet Supabase OptiPro lorsque le quota le
  permettra. Aucune suppression de données n’a été effectuée.

### Stats de session
- 6 commits depuis l’archive ; 166 fichiers touchés (+3710 / -29559 lignes).
- 131 fichiers supprimés, 10 ajoutés et 25 modifiés.
- 1 nouvelle production publique validée sur le domaine principal.

## 2026-07-26 → 2026-07-27 — Audit complet + correction du repositionnement + déblocage déploiement

**Contexte** : le repositionnement « dev opérationnel » du 10 juin (commit `6a7040d`) n'avait touché que 4 pages.
Audit complet demandé, puis correction intégrale, puis découverte que rien n'était déployé depuis 46 jours.

### Commits sur `main` (tous poussés et déployés en production)
- `b381af1` — fix(repositionnement) : /contact (H1+formulaire+API), JSON-LD global + OfferCatalog, 10 pages
  /services/* réécrites, CGV, llms.txt, manifest PWA + image OG (bras droit → dev web), /methode et
  /pourquoi-ce-prix supprimés (code mort derrière des 301 existants), footer (4 pages métier + nofollow admin)
- `bf2e0ed` — fix(blog) : 6 articles supprimés + 301 ciblées par sujet, 8 conservés réalignés (CTA/angle/maillage),
  bio auteur, purge de statistiques CAPEB/INSEE non sourçables (vérification factuelle menée, voir lessons.md)
- `b8856d4` — feat(seo) : page /services/vence créée (meilleure opportunité SERP identifiée par l'audit)
- `e468396` — perf : payload RSC du blog (-65% sur /blog, -35% par article), icônes PWA optimisées, code mort
  supprimé (4 composants + comparison.ts), bug d'animation GSAP corrigé (contenu resté à opacity:0), config Jest
- `f75bea3` — fix(deploy) : retrait du cron horaire Pennylane qui bloquait tout déploiement Vercel depuis le 10/06

### Modification BD / infra hors code
- Pierre a résilié l'abonnement Pennylane en cours de session (2026-07-27). Cron de sync retiré de `vercel.json`
  à sa demande ; le reste de l'intégration (19 fichiers) volontairement laissé en l'état — voir todo.md.
- **Déploiement Vercel débloqué en direct via `vercel --prod --yes`** après correction du cron (le déploiement
  automatique GitHub→Vercel était cassé depuis 46 jours sans que personne s'en aperçoive).

### Modifications fonctionnelles structurantes
- Fin du chantier de repositionnement entamé le 10/06 : le site est maintenant à 100% cohérent sur l'offre
  dev web (990€/1390€/sur devis/79-129€), plus aucun résidu « bras droit administratif » détecté.
- Type `ArticleCard` introduit pour ne plus sérialiser le HTML complet des articles vers les pages liste/sidebar.
- Nouveau pattern d'animation GSAP (`src/lib/gsap-reveal.ts`) : état CSS de départ toujours visible, révélation
  immédiate des éléments déjà à l'écran — à réutiliser pour toute future animation de scroll-reveal.

### Leçons ajoutées à tasks/lessons.md (8 entrées, 2026-07-26 et 2026-07-27)
Points clés : un repositionnement est un chantier transverse (grep manifest/OG/llms.txt, pas que les pages
visibles) ; vérifier les stats sourcées en ouvrant la source, pas en faisant confiance à la citation ; ne pas
conclure à un bug d'animation depuis `getComputedStyle` seul dans un navigateur automatisé (volet masqué =
ticker gelé) ; sur Vercel Hobby, un cron plus fréquent que quotidien bloque **tout** le déploiement, pas que lui.

### Points en suspens / à reprendre
- **Prochain chantier** : créer le Google Business Profile (catégorie « Concepteur de sites Web », mode SAB) —
  plus rien ne le bloque techniquement maintenant que le positionnement est cohérent.
- CGV : deux hypothèses posées par Claude à valider par Pierre (modalités de paiement 40%/solde, délai de
  réclamation 14 jours) — voir todo.md section dédiée.
- Intégration Pennylane : décision à prendre (désactiver les boutons de sync / tout retirer / laisser en l'état).
- LCP à recouper avec les données terrain CrUX/PSI dès inscription Search Console (quota API épuisé les 2 jours
  de l'audit).
- Recommandations de l'audit non encore traitées : redirection directe apex→www (chaîne de 2 actuellement),
  preuve sociale plus tôt sur l'accueil, exemple réservation en ligne pour le persona restaurateur.

### Stats de session
- 5 commits, 61 fichiers modifiés (+3888 / -3451 lignes)
- 1 audit complet (7 rapports spécialisés dans `tasks/audit-2026-07-26/`)
- 1 nouvelle page créée (/services/vence), 6 articles de blog supprimés, 2 pages de code mort supprimées
  (/methode, /pourquoi-ce-prix) + 4 composants + 1 fichier data
- 1 incident déploiement résolu (46 jours sans mise en production, cause : cron horaire sur plan Hobby)

<!-- Les entrées sont ajoutées en fin de session -->
