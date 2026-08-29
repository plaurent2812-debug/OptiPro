# Archive du site OptiPro orienté clients

## Décision

Le 30 août 2026, Pierre Laurent confirme l'arrêt des missions client. Le site
OptiPro devient un portfolio personnel centré sur ProbaLab, Ferdinand et les
futurs produits numériques.

## Point de restauration

- commit précédent : `bab2f18`
- tag local : `archive/client-site-2026-08-29`
- branche de refonte : `codex/refonte-studio-produits`

Le tag contient l'intégralité de l'ancien site : prestations, tarifs, blog,
pages SEO locales, formulaire de contact et back-office.

## Décommission technique

La nouvelle version ne dépend plus de Supabase, Resend, React PDF ni des crons
Vercel. Les anciennes URL publiques disposent de redirections permanentes.

Le projet Supabase `OptiPro` (`flcxwimtscfonxbyxyvh`) était déjà inactif lors
de l'inventaire. Une restauration temporaire pour export a été refusée par le
quota Supabase Free, car ProbaLab et Ferdinand occupent les deux emplacements
actifs. Aucune donnée n'a été supprimée et aucun des deux projets actifs n'a
été mis en pause.

## Actions externes après validation et déploiement

1. retirer de Vercel les variables Supabase, Resend et Pennylane devenues inutiles ;
2. contrôler les anciennes routes et les métadonnées en Production ;
3. conserver le projet Supabase OptiPro inactif jusqu'à ce qu'un export soit
   possible, puis décider explicitement de sa suppression ;
4. conserver le domaine et l'adresse `p.laurent@opti-pro.fr`.
