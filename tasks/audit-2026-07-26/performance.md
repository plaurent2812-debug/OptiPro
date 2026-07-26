# Audit Performance / Core Web Vitals — opti-pro.fr

Date : 26/07/2026
Site : https://www.opti-pro.fr (Next.js 16 App Router, Vercel, next/font, GSAP)

## ⚠️ Note méthodologique importante

**L'API PageSpeed Insights a échoué sur tous les appels** (HTTP 429 — `"Quota exceeded for quota metric 'Queries' and limit 'Queries per day'"`). Aucune donnée CrUX field data (28 jours, réel utilisateurs) n'a donc pu être récupérée aujourd'hui — la clé/quota associée à ce projet Google Cloud est épuisée pour la journée. **Aucun score PSI n'est utilisé dans ce rapport.**

En remplacement, j'ai exécuté **Lighthouse CLI 13.4.1 en local** (Chrome headless installé sur la machine), avec throttling simulé (`--throttling-method=simulate`), sur 4 pages en mobile + la home en desktop. Ce sont des données de **lab** (environnement contrôlé, un seul run), pas des données de terrain — elles sont représentatives des capacités techniques du site mais ne remplacent pas le comportement réel des visiteurs (réseau, device, cache navigateur). **À recouper avec CrUX/PSI dès que le quota se régénère (minuit Pacific Time).**

Tous les chiffres ci-dessous proviennent de mesures réelles (Lighthouse JSON, curl, lecture directe du code source et du HTML mis en cache). Aucun chiffre n'est estimé ou inventé.

---

## 1. Résultats Lighthouse (lab, mobile sauf mention contraire)

| Page | Score Perf | LCP | CLS | TBT | Speed Index | FCP | Poids total |
|---|---|---|---|---|---|---|---|
| `/` (mobile) | **96/100** | 2.74s | 0 | 15ms | 2.4s | 0.92s | — |
| `/` (desktop) | **100/100** | 0.55s | 0 | 0ms | 0.79s | 0.26s | 398 KiB |
| `/tarifs` (mobile) | **97/100** | 2.57s | 0 | 47ms | 2.0s | 1.22s | 370 KiB |
| `/services/plombier` (mobile) | **96/100** | 2.58s | 0 | 32ms | 3.1s | 0.92s | 387 KiB |
| `/blog` (mobile) | **95/100** | 2.90s | 0 | 47ms | 1.3s | 1.12s | 460 KiB |

Source : rapports JSON complets dans `/private/tmp/.../scratchpad/audit/lighthouse/*.report.json` (home) et `home_desktop`, `tarifs_mobile`, `plombier_mobile`, `blog_mobile` (mêmes clés d'audit, sans extension).

### Statut Core Web Vitals (estimation lab uniquement — seuils 2026)

| Métrique | Seuil "Good" | Mesure lab | Statut lab |
|---|---|---|---|
| LCP | ≤2.5s | 2.57s–2.90s (mobile) | **Limite / légèrement au-dessus** sur toutes les pages testées en mobile (tarifs 2.57s, plombier 2.58s, home 2.74s, blog 2.90s) |
| CLS | ≤0.1 | 0 (toutes pages) | **Bon** — aucun décalage de layout mesuré |
| TBT (proxy INP en lab) | ≤200ms (bon TBT) | 15–47ms | **Bon** — le TBT lab est très favorable, mais TBT n'est pas INP : à confirmer avec CrUX |

**Important** : le TBT (Total Blocking Time) est un proxy lab pour l'interactivité, mais **INP est une métrique de terrain uniquement** (mesurée sur de vraies interactions utilisateur), non calculable par Lighthouse. Un TBT très bas est un bon indicateur mais ne garantit pas un INP "good" au 75e percentile — seul CrUX/PSI field data peut le confirmer.

Le LCP est le point de vigilance : en lab mobile throttlé, toutes les pages testées sont juste au-dessus ou à la limite du seuil "Good" (2.5s). Sur données de terrain réelles (généralement plus favorables que le lab throttlé simulé si le device de l'utilisateur est meilleur, ou moins favorables sur réseau 3G/4G faible), le résultat peut basculer dans un sens ou l'autre — à vérifier avec CrUX dès que possible.

---

## 2. Mesures TTFB (curl, temps réel, hors lab)

```
curl -o /dev/null -w "TTFB=%{time_starttransfer}s TOTAL=%{time_total}s"
```

| Page | TTFB | Temps total | HTTP | Poids HTML |
|---|---|---|---|---|
| `/` | 0.075s | 0.083s | 200 | 49 144 octets |
| `/tarifs` | 0.073s | 0.080s | 200 | 75 994 octets |
| `/services/plombier` | 0.095s | 0.101s | 200 | 77 554 octets |
| `/blog` | 0.078s | 0.096s | 200 | **226 653 octets** |
| `/blog/site-web-artisan-combien-ca-coute` | 0.076s | 0.086s | 200 | 99 135 octets |

**TTFB excellent partout** (73–95ms, largement sous le seuil de 200ms). Confirmé aussi par l'audit Lighthouse `server-response-time` : 17–22ms sur toutes les pages testées. Aucun problème serveur/edge — Vercel Edge Network fonctionne bien ici.

---

## 3. Analyse de la page `/blog` (226 KB de HTML — la plus lourde du site)

Cause identifiée par lecture directe du HTML en cache (`blog.html`) :

- La page contient **44 balises `<script>` inline** (React Server Components payload / hydration data pour la liste des articles), pour un poids cumulé de **~196 KB** sur les 226 KB totaux — soit **~86% du poids de la page**.
- C'est le payload RSC (React Server Component) sérialisé inline dans le HTML pour hydrater la liste d'articles côté client (probablement via `BlogListClient.tsx`, qui importe GSAP pour les animations d'entrée des cards).
- Il ne s'agit **pas** d'images ou de CSS surchargés : le blog liste vraisemblablement toutes les métadonnées d'articles (15 articles identifiés dans le cache) dans le flux RSC d'un coup, plutôt que par pagination/streaming progressif.

**Recommandation** : envisager une pagination ou un chargement progressif (infinite scroll avec `loading` state / streaming Suspense) de la liste d'articles plutôt que de tout sérialiser en un seul payload RSC. Fichier concerné : `src/app/(public)/blog/BlogListClient.tsx` et la page serveur associée `src/app/(public)/blog/page.tsx`.

---

## 4. Analyse du code source

### 4.1 Polices (bon niveau global)

Fichier : `src/app/layout.tsx`
```ts
const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
```
- Utilisation de **`next/font/google`** : auto-hébergement correct, **aucune requête externe vers `fonts.googleapis.com`** confirmée par grep sur le HTML (0 occurrence).
- Les fichiers woff2 sont **préchargés** (`<link rel="preload" ... as="font">`) et servis avec `Cache-Control: public, max-age=31536000, immutable` (vérifié via `curl -I`).
- Poids mesuré des 2 fichiers de police (via `network-requests` Lighthouse) : 31.7 KiB + 22.0 KiB = **53.7 KiB** — raisonnable pour 2 familles.
- Point à vérifier manuellement (non visible dans le HTML statique) : `display: 'swap'` n'est pas explicitement passé aux fonctions `Outfit()`/`Space_Grotesk()` dans le code lu — `next/font` applique `font-display: optional` par défaut si non spécifié, ce qui peut créer un léger effet FOUT/FOIT selon la config. **Recommandation** : ajouter explicitement `display: "swap"` dans les deux appels pour garantir un comportement prévisible et éviter tout risque de CLS lié aux fonts.

### 4.2 Images

- **Aucune balise `<img>` HTML native détectée** dans le HTML rendu de la home (`grep -c '<img'` → 0), ce qui suggère un usage cohérent de `next/image` pour les visuels affichés (ou un rendu purement CSS/SVG en dur pour cette page).
- **Problème identifié** : `public/logo.png` (800×255 px, **63.4 KiB**, format PNG non compressé/non WebP) est chargé sur la home avec **priorité réseau "High"**, confirmé par l'audit `network-requests` de Lighthouse (`"priority": "High"`, `"resourceSize": 64734`).
  - Origine : `src/app/manifest.ts` déclare cette image comme icône PWA avec `sizes: '512x512'`, alors que le fichier réel est **800×255 px** — dimensions incohérentes avec la taille déclarée (le fichier n'est même pas carré).
  - Le même fichier est aussi référencé dans le JSON-LD `Organization.logo` de `src/app/(public)/layout.tsx:96` (`width: 200, height: 60` déclaré ici — donc 3 déclarations de dimensions différentes pour le même fichier physique : 512×512 dans le manifest, 200×60 dans le JSON-LD, 800×255 réel).
  - Impact : 63.4 KiB téléchargés en priorité haute dès le chargement de la home pour une ressource qui n'est ni affichée visuellement dans le viewport, ni correctement dimensionnée pour son usage PWA déclaré.
  - **Recommandation** : générer une vraie icône carrée 512×512 (et idéalement un jeu d'icônes maskable 192/512 en WebP ou PNG optimisé <10 KiB) dédiée au manifest, distincte du logo horizontal utilisé pour le JSON-LD/SEO. Fichiers concernés : `src/app/manifest.ts`, `public/logo.png`, `src/app/(public)/layout.tsx`.

### 4.3 Scripts / JS

- 27 balises `<script>` au total sur la home, dont 12 avec `async`/`defer` — le reste correspond aux scripts Next.js RSC/hydratation standards gérés par le framework (non bloquants par défaut avec App Router).
- Chunks JS les plus lourds identifiés (`network-requests`, home mobile) :
  - `0h4bq73pogmtb.js` — **70.9 KiB**
  - `04q2la2157iut.js` — **45.7 KiB**
  - `0kb-3_x3ib7st.js` — **38.7 KiB**
- Audit Lighthouse `unused-javascript` : **51 KiB** de JS estimé inutilisé sur la home, **73 KiB sur `/tarifs`**, 49 KiB sur `/services/plombier`, 48 KiB sur `/blog` — cohérent avec le fait que **GSAP est importé dans 6 fichiers** (`HomePageClient.tsx`, `BlogListClient.tsx`, `ArticleClient.tsx`, `AProposPageClient.tsx`, `ProjectCard.tsx`, `AuditCta.tsx`) via `import gsap from 'gsap'` (import global, pas de tree-shaking par plugin), ce qui charge l'ensemble de la lib sur chaque page utilisant un de ces composants, même si seule `ScrollTrigger` est utilisée.
  - **Recommandation** : ces composants sont déjà `'use client'` donc ne bloquent pas le SSR, mais un import plus ciblé (`import { gsap } from 'gsap/dist/gsap'` + import explicite du seul plugin `ScrollTrigger`) réduirait le JS transféré sur les pages qui n'utilisent qu'une partie de l'API GSAP.
- Cache-Control des chunks statiques `/_next/static/` : vérifié via `curl -I` → `Cache-Control: public, max-age=31536000, immutable` — **optimal**, comportement natif Next.js/Vercel, aucune action requise.

### 4.4 CSS

- 2 fichiers CSS uniquement référencés sur la home (`0rz5cskmw3sxy.css` = 5.7 KiB, `0fmptvighhva9.css`), cohérent avec l'usage de CSS Modules du projet — pas de framework CSS lourd, pas de CSS bloquant additionnel détecté.

### 4.5 Configuration Next.js (`next.config.ts`)

- Headers de sécurité (CSP, HSTS, etc.) et Cache-Control bien configurés pour les assets statiques (`png|jpg|jpeg|webp|svg|ico|woff2` → 1 an immutable).
- Aucune configuration `images.formats` ou `images.minimumCacheTTL` personnalisée trouvée dans `next.config.ts` — le comportement d'optimisation d'image reste sur les valeurs par défaut de Next.js (AVIF/WebP automatique via `next/image`, à condition que les composants utilisent bien ce composant pour toutes les images visuelles — non vérifiable exhaustivement sans parcourir tous les composants `src/`).

---

## 5. Problèmes classés par sévérité

### 🔴 Sévérité élevée
1. **`logo.png` (63.4 KiB, 800×255px) chargé en priorité haute sur la home** alors que le manifest le déclare en 512×512 — incohérence de dimensions + poids inutile sur le chemin critique mobile. Fichiers : `src/app/manifest.ts`, `public/logo.png`.
2. **LCP mobile lab entre 2.57s et 2.90s sur toutes les pages testées** — juste à la limite ou légèrement au-dessus du seuil "Good" (2.5s). À confirmer/infirmer avec CrUX field data dès que le quota PSI est disponible, car c'est la seule métrique qui n'est pas clairement "Good" dans les mesures actuelles.

### 🟡 Sévérité moyenne
3. **Page `/blog` : 196 KB de payload RSC inline sur 226 KB de HTML total (~86%)** — pas de pagination/streaming progressif de la liste d'articles. Fichiers : `src/app/(public)/blog/page.tsx`, `src/app/(public)/blog/BlogListClient.tsx`.
4. **JS inutilisé estimé 48–73 KiB par page** (GSAP importé en entier dans 6 composants sans tree-shaking par plugin). Fichiers : `HomePageClient.tsx`, `BlogListClient.tsx`, `ArticleClient.tsx`, `AProposPageClient.tsx`, `ProjectCard.tsx`, `AuditCta.tsx`.
5. **3 déclarations de dimensions différentes pour le même fichier `logo.png`** (512×512 manifest, 200×60 JSON-LD, 800×255 réel) — incohérence à nettoyer, source de confusion et de mauvais dimensionnement.

### 🟢 Sévérité faible / points positifs à préserver
6. `display: "swap"` non explicite sur les 2 fonctions `next/font` — à ajouter par précaution même si aucun CLS n'a été mesuré (CLS = 0 partout).
7. TTFB excellent (73–95ms) partout — aucune action requise, Vercel Edge fonctionne bien.
8. CLS = 0 sur toutes les pages testées — aucune action requise.
9. Cache-Control des assets statiques déjà optimal (1 an, immutable).
10. Fonts déjà auto-hébergées via `next/font`, pas de requête bloquante vers Google Fonts.

---

## 6. Recommandations priorisées (impact attendu)

| # | Action | Fichier(s) | Impact attendu |
|---|---|---|---|
| 1 | Remplacer l'icône du manifest par une vraie image carrée 512×512 optimisée (<10 KiB), distincte du logo JSON-LD | `src/app/manifest.ts`, nouvelle image dédiée | Libère ~55 KiB sur le chemin critique mobile de la home — impact direct sur LCP/temps de chargement initial |
| 2 | Ajouter `display: "swap"` explicite aux deux appels `next/font` | `src/app/layout.tsx` | Sécurise le comportement de rendu du texte, prévient tout FOIT sur connexions lentes |
| 3 | Revoir le chargement de la liste `/blog` (pagination ou Suspense/streaming) pour réduire le payload RSC inline | `src/app/(public)/blog/page.tsx`, `BlogListClient.tsx` | Réduction potentielle de ~150-190 KB sur le poids HTML de `/blog`, amélioration du parsing/hydratation |
| 4 | Importer GSAP de façon plus ciblée (plugin explicite au lieu de l'import global) dans les 6 composants clients | `HomePageClient.tsx`, `BlogListClient.tsx`, `ArticleClient.tsx`, `AProposPageClient.tsx`, `ProjectCard.tsx`, `AuditCta.tsx` | Réduction du JS inutilisé (48-73 KiB mesurés par Lighthouse), TBT déjà bon mais marge de sécurité pour l'INP terrain |
| 5 | Recouper ce rapport avec CrUX field data / PSI dès régénération du quota (minuit PT) | — | Confirmer si le LCP mobile réel (utilisateurs) est "Good" ou "À améliorer" — actuellement à la limite en lab uniquement |

---

## 7. Sources des données

- Lighthouse CLI 13.4.1, Chrome headless local, throttling simulé : `/private/tmp/claude-501/.../scratchpad/audit/lighthouse/home_mobile.report.json`, `home_mobile.report.html`, `home_desktop`, `tarifs_mobile`, `plombier_mobile`, `blog_mobile`
- PageSpeed Insights API : **échec HTTP 429 sur tous les appels** (quota quotidien épuisé) — aucune donnée field/CrUX utilisée dans ce rapport
- `curl -w "%{time_starttransfer}"` sur 5 URLs en direct (26/07/2026)
- `curl -I` sur un chunk `/_next/static/chunks/` pour vérifier Cache-Control
- Lecture directe : `next.config.ts`, `src/app/layout.tsx`, `src/app/manifest.ts`, `src/app/(public)/layout.tsx`, `package.json`, et grep ciblés sur les 34 fichiers HTML en cache dans `scratchpad/audit/pages/`
