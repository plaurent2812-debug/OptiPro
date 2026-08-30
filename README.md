# Pierre Laurent — Portfolio personnel

Site personnel de Pierre Laurent : projets, applications, outils, parcours et
centres d’intérêt.

## Intention

Le portfolio donne la priorité aux projets : aperçus dans le hero, galerie puis
coulisses de création. `/projets` détaille les idées, l’implication et l’état réel
de chacun. Le parcours professionnel reste directement accessible via
`/a-propos` et le CV imprimable via `/cv`, pour les contacts et recruteurs.
Il ne poursuit pas un objectif commercial.

## Stack

- Next.js 16 / React 19 / TypeScript
- CSS Modules et variables CSS
- Vercel Analytics
- déploiement Vercel sur `pierre-laurent.fr` ; anciens domaines `opti-pro.fr` et `www.opti-pro.fr` redirigés

Le site public est statique et ne dépend plus de Supabase, Resend ou d'un
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
