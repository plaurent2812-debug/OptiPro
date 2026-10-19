# Pierre Laurent — Opérations, applications et sites pour entreprises

Site de Pierre Laurent : en quelques secondes, l’étendue de son savoir-faire
(opérations et logistique, applications web et mobiles, automatisation, IA et
data) et l’offre OptiPro de sites vitrines pour les TPE et PME des
Alpes-Maritimes.

## Intention

L’accueil présente un plan de lignes : chaque compétence est une ligne, chaque
preuve réelle une station. `/optipro` détaille l’offre (tarifs, déroulé, FAQ)
avec un appel direct par téléphone ou e-mail, sans formulaire. `/projets`,
`/a-propos` et `/cv` gardent le détail des réalisations et du parcours.
Les prix et coordonnées ne se modifient qu’à un seul endroit :
`src/data/offer.ts`. Aucun projet ni aucune donnée Pharmagreen n’est présenté.

## Stack

- Next.js 16 / React 19 / TypeScript
- CSS Modules et variables CSS
- Vercel Analytics
- déploiement Vercel sur `pierre-laurent.fr` ; anciens domaines `opti-pro.fr` et `www.opti-pro.fr` redirigés

Le site public est statique et ne dépend ni de Supabase, ni de Resend, ni d'un
back-office.

## Commandes

```bash
npm run typecheck
npm run lint
npm test
```

`npm run build` et tout déploiement nécessitent l'autorisation explicite de
Pierre avant exécution.

## Archive de l'ancien site

L'ancien site commercial est conservé dans le tag Git
`archive/client-site-2026-08-29`. Voir
`docs/ARCHIVE_SITE_CLIENTS_2026-08-30.md` pour le détail.
