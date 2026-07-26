# Audit SEO technique — www.opti-pro.fr

Date de l'audit : 2026-07-26
Périmètre : cache HTML de 34 pages, robots.txt, sitemap.xml, code source Next.js 16 (App Router), headers HTTP via curl ciblé.

---

## 1. Constats OK (ce qui fonctionne bien)

- **HTTPS + HSTS** : `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` présent sur toutes les réponses testées (home, 404, redirects). Bon niveau de préchargement HSTS.
- **En-têtes de sécurité complets** : CSP, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` — tous présents sur toutes les pages (définis globalement dans `next.config.ts`).
- **`X-Powered-By` supprimé** (`poweredByHeader: false` dans `next.config.ts`) — bonne pratique de fuite d'information.
- **Redirection non-www → www** fonctionnelle et en 308 (permanent), cohérente avec la stratégie de consolidation déclarée en commentaire dans `next.config.ts`.
- **Redirections des anciennes routes dépubliées** (`/methode`, `/pourquoi-ce-prix`, `/services`, `/realisations`, `/dashboard`, `/politique-de-confidentialite`, `/creation-site-web-vence`) : toutes en 308 vers une page pertinente, aucune en 404. C'est exactement ce qui était demandé.
- **404 propre** : une URL inexistante renvoie bien un vrai statut `HTTP 404` (pas un soft-404 en 200), avec une page 404 custom (`x-matched-path: /404`).
- **Canonicals cohérents sur les 34 pages en cache** : tous en `https://www.opti-pro.fr/...`, sans trailing slash, aucune incohérence www/non-www ou http/https détectée.
- **Un seul `<h1>` par page**, sur les 34 pages analysées — aucune page avec 0 ou plusieurs H1.
- **`viewport` présent sur les 34 pages** (`width=device-width, initial-scale=1`).
- **`lang="fr"`** correctement positionné sur `<html>`.
- **Rendu SSR confirmé** : le contenu textuel principal (H1, prix "990€", "75€/h", "650€", "1 950€" sur `/tarifs`, corps des articles de blog) est bien présent dans le HTML brut retourné par le serveur, pas seulement injecté par hydratation React côté client. Le payload RSC (`__next_f.push`) est un complément, pas une dépendance pour l'affichage du contenu.
- **Structured data (JSON-LD) présent sur toutes les pages** : `LocalBusiness`/`ProfessionalService` + `WebSite` en global, `Article`/`BlogPosting` (probable, 2e bloc) sur les pages de blog. Données `geo`, `areaServed`, `openingHoursSpecification`, `telephone` correctement renseignées pour le SEO local.
- **Images optimisées via `next/image`** avec `width`/`height` explicites (ex. `a-propos.html` : `width="180" height="180"`, `srcSet` responsive) — bonne pratique anti-CLS et anti-layout-shift.
- **Cache-Control correct sur les assets statiques** : images (`public, max-age=31536000, immutable`) et chunks JS/CSS Next (`public,max-age=31536000,immutable`), configuré dans `next.config.ts`.
- **robots.txt propre** : `Disallow: /admin` et `/api`, autorisations explicites pour GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot — bonne gestion des crawlers IA. Sitemap correctement référencé.
- **meta robots CGV volontaire et correct** : `index, follow: false` sur `/cgv` (défini explicitement dans `src/app/(public)/cgv/page.tsx`), pour empêcher la dilution de PageRank via une page légale sans intérêt SEO — usage légitime, pas une erreur.

---

## 2. Problèmes identifiés (par sévérité)

### CRITIQUE

**C1. Quatre pages métier totalement orphelines du maillage interne**
`/services/plombier`, `/services/serrurier`, `/services/electricien`, `/services/restaurateur` sont présentes dans le sitemap.xml (priority 0.7/0.65) et possèdent un contenu et des balises title/description dédiées, mais **aucun lien `<a href>` sur les 34 pages en cache ne pointe vers elles**. Seules les occurrences dans les balises `<meta>` canonical/OG et JSON-LD (auto-référence) les mentionnent — pas de vrai lien de navigation.
- Cause confirmée dans le code : `src/components/layout/Footer.tsx` (lignes 87-95) ne liste que les 6 pages villes (`/services/nice`, `/services/cannes`, `/services/antibes`, `/services/grasse`, `/services/mougins`, `/services/cagnes-sur-mer`) dans le bloc "Interventions à". Les 4 pages métier ne sont linkées nulle part — ni footer, ni nav, ni cross-links entre elles, ni depuis `/le-service` ou la home.
- Impact : ces pages ne reçoivent aucun PageRank interne, sont plus lentes à crawler/indexer, et risquent d'être ignorées par Google au profit des pages villes qui sont, elles, bien maillées.

### HAUTE

**H1. Chaîne de redirection à 2 sauts pour `http://opti-pro.fr/`**
`http://opti-pro.fr/` → `https://opti-pro.fr/` (308, upgrade automatique Vercel) → `https://www.opti-pro.fr/` (308, règle custom `next.config.ts`). Confirmé via `curl -sIL`. Un visiteur ou un crawler partant de la version http non-www subit deux redirections au lieu d'une seule directe vers la destination finale. Chaque saut consomme du budget de crawl et retarde légèrement le TTFB perçu.
- Fichier concerné : `next.config.ts`, règle `redirects()` — la condition `has: [{ type: 'host', value: 'opti-pro.fr' }]` ne matche que sur le host, donc Vercel traite d'abord l'upgrade https (niveau plateforme, hors contrôle applicatif) avant que la règle custom ne s'applique.
- Recommandation : configurer la redirection http→https directement au niveau du domaine dans le dashboard Vercel (Domains → Redirect) pour pointer `opti-pro.fr` (http et https) directement vers `https://www.opti-pro.fr` en un seul saut, en complément ou remplacement de la règle applicative.

**H2. `lastmod` du sitemap figé au 2026-05-13 malgré la refonte de juin 2026**
Confirmé dans `src/app/sitemap.ts` ligne 7 : `const LAST_CONTENT_UPDATE = new Date('2026-05-13');` — une constante codée en dur, utilisée pour 20 des 21 routes statiques (home, `/le-service`, `/tarifs`, `/contact`, `/a-propos`, `/temoignages`, `/blog`, les 10 pages `/services/*`, `/cgv`, `/mentions-legales`, `/confidentialite`). Le commentaire du fichier indique une intention délibérée ("Google ignore les lastmod dynamiques type `new Date()`"), ce qui est vrai en principe — mais la valeur n'a manifestement pas été mise à jour lors de la refonte de juin 2026 mentionnée dans le commit `6a7040d` ("refonte accueil, tarifs, le-service, à-propos"). Le sitemap ment actuellement sur la fraîcheur du contenu de ces 4 pages précisément.
- Recommandation : mettre à jour manuellement `LAST_CONTENT_UPDATE` (ou mieux, une date par route affectée) à chaque refonte de contenu significative. Envisager un objet de dates par route plutôt qu'une constante unique globale, pour ne pas re-dater artificiellement des pages non touchées (CGV, mentions légales) à chaque modification de la home.

### MOYENNE

**M1. Lien public vers `/admin/login` alors que `/admin` est disallow en robots.txt**
`Footer.tsx` (ligne 155-161) expose un lien "Espace Pro" vers `/admin/login` sur toutes les pages publiques, alors que `robots.txt` bloque `/admin`. Ce n'est pas une erreur bloquante (Google n'indexera pas le contenu, juste potentiellement l'URL nue sans description — "indexed though blocked by robots.txt"), mais c'est un signal de crawl inutile envoyé sur chacune des 34 pages. Sans impact SEO majeur mais à surveiller dans Search Console (couverture).

**M2. Pas de `hreflang`**
Aucune balise `hreflang` détectée sur la home (0 occurrence). Le site est mono-langue FR ciblant une zone géographique française (PACA), donc l'absence n'est pas un vrai problème dans l'état actuel — à mentionner seulement si une version anglophone ou une extension hors France est envisagée.

### BASSE

**B1. `robots.ts` répète `GPTBot`, `Bingbot`, etc. individuellement mais le `User-Agent: *` autorise déjà tout**
Le bloc générique `{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }` couvre déjà tous les crawlers IA listés individuellement (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot) puisqu'aucun de ces user-agents n'est par ailleurs restreint. Les entrées individuelles sont redondantes mais inoffensives — elles documentent explicitement l'intention (utile pour audit humain), donc pas de correctif obligatoire, juste une note de clarté.

**B2. SIREN "à renseigner" dans les CGV**
Hors périmètre SEO technique strict, mais noté au passage : `src/app/(public)/cgv/page.tsx` ligne 25 contient `SIREN : <em>(à renseigner)</em>`. Sans lien direct avec le crawl/indexation, mais à corriger pour la conformité légale (mentions obligatoires EI).

---

## 3. Recommandations concrètes classées par fichier

| Fichier | Action |
|---|---|
| `src/components/layout/Footer.tsx` | Ajouter des liens vers `/services/plombier`, `/services/serrurier`, `/services/electricien`, `/services/restaurateur` (ex. nouveau bloc "Métiers" dans le footer, à côté du bloc "Interventions à" existant), ou les intégrer dans la nav de `/le-service`. Sans lien interne, ces pages resteront quasi invisibles pour Google malgré leur présence en sitemap. |
| `next.config.ts` (ou config domaine Vercel) | Supprimer le double saut de redirection pour `http://opti-pro.fr/` — configurer la redirection http→https→www directement au niveau du domaine Vercel pour un 301/308 unique. |
| `src/app/sitemap.ts` | Mettre à jour `LAST_CONTENT_UPDATE` (2026-05-13) pour refléter la refonte de juin 2026, ou passer à un mapping de dates par route pour éviter de re-dater tout le site à chaque petite modification. |
| `src/components/layout/Footer.tsx` | Évaluer si le lien `/admin/login` doit rester public en pied de page (alternative : le déplacer hors du footer commun, ou ajouter `rel="nofollow"` explicite sur ce lien précis puisque la destination est de toute façon disallow). |
| `src/app/(public)/cgv/page.tsx` | Renseigner le SIREN réel (conformité légale, hors SEO). |

---

## 4. Non testé / hors périmètre de cet audit

- Mesures Core Web Vitals réelles (LCP/INP/CLS chiffrés) : nécessitent CrUX/PageSpeed Insights en conditions réelles, non disponibles depuis une simple inspection de code/HTML. Les seuls indices structurels relevés (images `next/image` avec dimensions explicites, CSS chargé via chunks avec `data-precedence`) sont favorables mais ne remplacent pas une mesure de terrain.
- Validation formelle du schema.org JSON-LD (Rich Results Test) — présence confirmée, validité syntaxique non vérifiée ligne à ligne au-delà d'un contrôle visuel.
- IndexNow (Bing/Yandex/Naver) : aucune trace d'intégration détectée dans le code exploré (pas de vérification exhaustive de tous les fichiers du repo pour cet aspect précis).
