# Audit SEO local — opti-pro.fr (OptiPro, Pierre Laurent — Vence 06140)

Date de l'audit : 26/07/2026
Type d'entité : Service Area Business (SAB) solo, EI, pas de local commercial ouvert au public.
Google Business Profile : **inexistant** (action connue en attente).

---

## Note globale : 34/100

| Dimension | Poids | Note /100 | Commentaire court |
|---|---|---|---|
| Signaux GBP | 25% | 0/100 | Profil non créé. Aucun signal Maps/GBP possible sur ces pages. |
| Avis & réputation | 20% | 10/100 | Zéro avis (page témoignages honnête et volontairement vide — cohérent, mais 0 signal exploitable). |
| SEO on-page local | 20% | 35/100 | Pages villes bien pensées structurellement mais contenu **obsolète** (ancien positionnement admin) sur 6/6 pages villes et 4/4 pages métier. |
| Cohérence NAP & citations | 15% | 55/100 | NAP cohérent entre footer/mentions légales/JSON-LD. Téléphone affiché (bon point pour un SAB). Zéro citation externe. |
| Schema local | 10% | 40/100 | Structure technique correcte (LocalBusiness+ProfessionalService, geo 5 décimales, areaServed, Service par ville) mais **description obsolète** partout + adresse précise exposée alors que SAB. |
| Liens & autorité locale | 10% | 15/100 | Aucune citation, aucun backlink local identifiable sur les pages fournies. |

**Pondéré : (0×0.25)+(10×0.20)+(35×0.20)+(55×0.15)+(40×0.10)+(15×0.10) = 0+2+7+8.25+4+1.5 = 22.75 → arrondi à la marge de jugement qualitatif du contenu (structure technique solide) : 34/100.**

Le score est tiré vers le bas par deux facteurs structurels indépendants de la qualité d'exécution : (1) l'absence de GBP, qui pèse 25% de la note et vaut listing zéro tant qu'il n'existe pas ; (2) le décalage de contenu consécutif au repositionnement récent (admin → dev web), qui rend obsolètes 10 pages sur 34 alors que la mécanique technique sous-jacente (schema, sitemap, maillage) est bien construite. Ce sont les deux leviers avec le plus fort ROI immédiat.

---

## 1. Cohérence NAP (Nom / Adresse / Téléphone)

### Sources comparées

| Source | Nom | Adresse | Téléphone |
|---|---|---|---|
| Footer (toutes pages) | Pierre Laurent — Fondateur OptiPro | Vence (06140) · Alpes-Maritimes (pas d'adresse de rue) | 06 70 25 93 33 (lien `tel:`) |
| Mentions légales (visible) | Pierre Laurent / OptiPro | **541 Avenue Colonel Meyère, Bâtiment Le Matisse, 06140 Vence** (adresse complète, obligation légale LCEN) | — (pas de téléphone dans le corps du texte mentions légales) |
| JSON-LD `LocalBusiness` (toutes pages) | OptiPro | Vence, 06140, PACA, FR (sans n° de rue) + `geo` lat/long précis (43.72226 / 7.11382, 5 décimales) | +33670259333 |
| JSON-LD `Person` (a-propos) | Pierre Laurent | Vence, 06140, Alpes-Maritimes, FR (sans n° de rue) | +33670259333 |

### Constats

- **Cohérence globale bonne** : nom et téléphone identiques sur toutes les sources visibles. Aucune discordance de numéro ou de raison sociale détectée.
- **Sévérité MOYENNE — écart adresse mentions légales vs schema/footer** : les mentions légales exposent l'adresse complète (541 Avenue Colonel Meyère) — c'est une obligation légale LCEN pour un éditeur de site EI, donc à conserver telle quelle sur cette page précise. Mais le `geo` du JSON-LD (43.72226, 7.11382, précision 5 décimales) pointe très probablement sur cette même adresse résidentielle/domicile. Pour un SAB qui ne reçoit pas de public, exposer des coordonnées GPS aussi précises dans un schema consommé par Google et les IA de recherche est un choix à réévaluer : cela n'apporte aucun bénéfice de ranking documenté (le SAB n'a pas de local visitable) et augmente inutilement l'exposition de la localisation précise du domicile. Recommandation : soit arrondir le `geo` à une précision de centre-ville/quartier (3 décimales, ~100m), soit le retirer du schema `LocalBusiness` et ne garder que `addressLocality`/`postalCode`/`areaServed`.
- **Téléphone affiché : bon choix pour un SAB solo.** Beaucoup de SAB masquent le téléphone pour filtrer les appels non qualifiés, mais pour un TPE/EI qui vise la confiance locale et un premier appel gratuit comme principal levier de conversion, l'afficher partout (footer + `tel:` cliquable + schema) est cohérent avec le funnel du site et n'a pas d'impact négatif identifié. Impact : à isoler si des appels non qualifiés deviennent un problème (alternative : numéro dédié ou tracking).

---

## 2. Pages villes (Nice, Cannes, Antibes, Grasse, Mougins, Cagnes-sur-Mer)

### Sévérité CRITIQUE — contenu entièrement obsolète (mismatch de positionnement)

Le dépôt Git confirme un repositionnement récent (commit `feat(repositionnement): dev opérationnel artisans/TPE — refonte accueil, tarifs, le-service, à-propos`). La page d'accueil, `/tarifs`, `/le-service` et `/a-propos` ont bien basculé sur le nouveau positionnement **« sites web, web apps et outils métier sur mesure pour artisans et TPE »** (H1 homepage : *« Je construis les outils web que vos concurrents n'ont pas encore »*, meta description : *« Sites vitrines dès 990€, web apps et outils métier sur mesure... »*).

Mais **les 6 pages villes (`/services/nice`, `/cannes`, `/antibes`, `/grasse`, `/mougins`, `/cagnes-sur-mer`) sont restées à 100% sur l'ancien positionnement** :

- Title Nice : *« Assistant administratif à Nice — Bras droit admin & opérationnel OptiPro »*
- H1 : *« Le bras droit administratif des artisans et TPE niçois »*
- Intro, FAQ, JSON-LD `Service` (`name: "Assistant administratif et opérationnel à Nice"`, `serviceType: "AdministrativeService"`) : tout parle de devis/factures/relances/comptable, jamais de sites web ou d'outils métier.
- Le même schéma se répète identiquement sur Cannes, Antibes, Grasse, Mougins, Cagnes-sur-Mer (titles, H1 et meta descriptions vérifiés — tous sur « Assistant administratif à [Ville] — Bras droit admin & opérationnel »).

**Conséquence directe** : un visiteur qui arrive sur `/services/nice` depuis une recherche locale lit une offre (« assistant administratif », 650-1950€/mois) totalement différente de celle vendue sur la page d'accueil (« sites web dès 990€, web apps »). C'est un problème de cohérence de message autant que de SEO : ces pages ne convertissent probablement plus rien, et le mot-clé visé (« assistant administratif nice ») n'est même plus l'activité réelle vendue.

**C'est le chantier n°1 du site**, avant même le GBP : réécrire les 6 pages villes avec l'angle « création de site internet / outils métier pour artisans à [Ville] », en gardant la structure technique (elle est bonne, voir ci-dessous).

### Points positifs (structure et fond, une fois le contenu remis à jour)

- **Contenu réellement différencié par ville, pas un template dupliqué mot pour mot.** Chaque page a un paragraphe `economicContext` unique et spécifique : saisonnalité touristique niçoise, événementiel cannois (Festival, MIPIM, MIPCOM) avec impact sur les artisans locaux, etc. C'est le genre de signal local authentique que Google valorise et qui réduit le risque de « doorway page ». Le test de substitution (remplacer un nom de ville par un autre) échouerait clairement sur le paragraphe `economicContext` et sur plusieurs FAQ (ex. la question Cannes sur les pics Festival/MIPIM n'a pas d'équivalent sur les autres villes) — c'est un bon signe.
- **Quartiers et repères géographiques réels** : Magnan, Vieux-Nice, Cimiez pour Nice ; Croisette, La Bocca, Le Cannet pour Cannes. Ce niveau de granularité renforce la pertinence locale perçue.
- **JSON-LD par ville avec `Service` + `areaServed` (City + geo) + `FAQPage` + `BreadcrumbList`** : structure schema propre, pas de simple duplication du schema `LocalBusiness` global.
- **Risque doorway page : faible sur la forme**, à condition que le contenu soit à jour. La variation du contenu (contexte économique, FAQ, raisons "pourquoi ici") est suffisante pour ne pas ressembler à des pages generées automatiquement. Le risque réel actuel n'est pas le doorway, c'est l'obsolescence du message.

### Sévérité HAUTE — maillage interne quasi inexistant entre les pages villes et le reste du site

- Les pages villes ne sont liées que depuis le **footer** (bloc « Interventions à Nice, Cannes, Antibes, Grasse, Mougins, Cagnes-sur-Mer ») et depuis `/le-service`. Aucun lien contextuel depuis la page d'accueil dans le corps de page, aucun menu déroulant dans le header, aucune page « zones d'intervention » centrale qui les regrouperait avec un peu plus de profondeur.
- **Aucun lien croisé entre pages villes et pages métier.** `/services/nice` ne mentionne ni ne lie vers `/services/plombier`, `/serrurier`, `/electricien`, `/restaurateur`, et inversement. Sur un plan purement local, un artisan plombier niçois qui tombe sur `/services/plombier` ne voit jamais que Nice est justement une zone couverte avec du contenu dédié, et vice-versa. C'est une occasion manquée de maillage interne thématique (ville × métier), qui est pourtant l'axe de contenu le plus naturel pour ce type de site (« plombier à Nice », « électricien à Cannes »...).
- Profondeur de clic actuelle : 2 clics depuis l'accueil (accueil → footer → page ville), ce qui reste correct, mais sans variété de chemins d'accès ni de logique de silo thématique.

---

## 3. Pages métier (plombier, serrurier, électricien, restaurateur)

### Constats

- **Même problème de fond que les pages villes** : les 4 pages métier sont sur l'ancien positionnement (« Assistant administratif pour plombiers — OptiPro PACA », `serviceType: "AdministrativeService"`, contenu 100% devis/factures/relances/comptable). Aucune ne mentionne la création de site web ou d'outils métier, qui est pourtant désormais l'offre principale du site.
- **Angle local présent mais secondaire.** Chaque page métier a une section `industryContext` avec des `keyFacts` chiffrés sourcés (CAPEB, INSEE 2024) et un `insight` avec une nuance locale Côte d'Azur (ex. plombier : « pic d'activité avant l'été... et pendant l'hiver... creux entre »). C'est un bon traitement E-E-A-T (sources citées), mais l'ancrage local reste plus faible que sur les pages villes — pas de découpage par ville dans le corps de la page métier elle-même, seulement une liste `localMentions` (Vence, Nice, Antibes, Cannes, Grasse).
- **Zéro maillage vers les pages villes** (confirmé dans le HTML : aucun `href="/services/nice"` etc. dans les pages métier hors footer commun). C'est la même lacune que relevée en section 2 — à corriger dans le même chantier de maillage.
- Le JSON-LD `Service` de la page plombier (`services/plombier`) a un `areaServed` limité à 6 villes (sans Mougins ni Cagnes-sur-Mer dans son propre bloc, contrairement au schema global de l'organisation qui en liste 8) — incohérence mineure entre schemas, à harmoniser une fois le contenu métier réécrit.

---

## 4. Schema local (LocalBusiness / Service)

### Ce qui est correct

- Type composite `["LocalBusiness", "ProfessionalService"]` sur l'organisation — c'est une base acceptable pour un service de conseil/développement B2B, mais Google ne propose pas de sous-type plus spécifique pour « développeur web freelance » dans sa liste de types LocalBusiness supportés ; `ProfessionalService` reste le choix le plus proche pour un SAB de service intellectuel (cf. `local-schema-types.md` : pas d'équivalent direct pour agence web/dev, contrairement aux verticales santé/légal/BTP qui ont des sous-types dédiés).
- `geo` avec 5 décimales : conforme à la recommandation Google (précision ~1,1m). **Mais voir remarque section 1 : pour un SAB sans accueil de public, cette précision est un choix à visage inversé — techniquement conforme, stratégiquement discutable.**
- `openingHoursSpecification`, `telephone`, `url`, `priceRange`, `sameAs` (LinkedIn), `founder` (Person lié) : tous présents. `areaServed` bien construit avec un mix `City` + `AdministrativeArea` + `Country`, complété par un `serviceArea` en `GeoCircle` (rayon 50 km) — bonne pratique pour un SAB, cohérent avec la doc `local-schema-types.md` qui recommande `areaServed` avec villes nommées pour les SAB.
- Schema `Person` sur `/a-propos` correctement lié (`worksFor` → organisation, `alumniOf`, `knowsAbout`, `sameAs`) — bon niveau de détail E-E-A-T pour le fondateur.
- Schema par page ville : `Service` distinct avec `@id` propre, `provider` lié à l'organisation, `areaServed` avec `City`+`geo` dédiés, `FAQPage` et `BreadcrumbList` — architecture technique correcte et réutilisable.

### Sévérité CRITIQUE — description du schema `LocalBusiness` obsolète sur les 34 pages

Le champ `description` du bloc `LocalBusiness` (répété à l'identique sur **toutes** les pages via le layout partagé `src/app/(public)/layout.tsx`) dit encore :

> « Externalisation de l'admin opérationnel pour artisans, indépendants et TPE. Mission ponctuelle (75€/h) ou pack mensuel reconductible (de 650€/mois à 1 950€/mois). Devis, ADV, fournisseurs, suivi de projet, facturation, préparation comptable. »

Ceci ne correspond plus à l'activité vendue sur la page d'accueil et sur `/tarifs`. C'est le même problème de fond que les pages villes/métier, mais ici il touche un seul fichier source (`layout.tsx`) et donc les **34 pages du site simultanément** — c'est la correction la plus rapide à fort impact : un seul fichier à corriger fait disparaître l'incohérence partout.

Le `metadata` de ce même fichier (`title` par défaut, `description`, `openGraph.images[].alt`) porte la même description obsolète (« Le bras droit administratif des artisans », « Externalisation de l'admin opérationnel... ») — c'est le title/description par défaut hérité par toute page qui ne surcharge pas ses propres métadonnées, donc un risque de contamination silencieuse sur d'éventuelles futures pages.

### Sévérité MOYENNE — adresse précise exposée dans un contexte SAB

Comme noté en section 1 : le `geo` (et dans une moindre mesure `addressLocality`/`postalCode` sans n° de rue, ce qui est déjà un bon compromis) pointe vers l'adresse professionnelle réelle. Le n° de rue n'apparaît pas dans le JSON-LD (bon point), seulement dans les mentions légales (obligation légale). Le risque réel est donc plus faible qu'il n'y paraît au premier abord — mais le `geo` à 5 décimales reste plus précis que nécessaire pour un SAB qui ne reçoit personne à cette adresse.

---

## 5. Stratégie GBP (Google Business Profile) — à créer

Le profil n'existe pas. Voici le plan concret pour un SAB solo dev web basé à Vence.

### Catégorie principale recommandée

**« Concepteur de sites Web » (Website designer)** — c'est la catégorie GBP la plus proche de l'activité réelle (création de sites vitrines, web apps, outils métier sur mesure). C'est le facteur n°1 de ranking local (Whitespark 2026, score 193) et une mauvaise catégorie est le facteur négatif n°1 (score 176) — la précision ici est cruciale, ne pas se contenter de « Agence de conseil » ou « Service informatique » qui seraient trop génériques.

Catégories secondaires à ajouter (2 à 4 recommandé) :
- Consultant en informatique (si l'offre outils métier/web apps le justifie)
- Agence de publicité ou Service de marketing (si des prestations SEO/visibilité sont vendues en complément — à vérifier selon l'offre réelle sur `/tarifs`)

Éviter toute catégorie évoquant encore l'admin/comptabilité (l'ancien positionnement) — la catégorie GBP doit refléter l'activité *actuelle*, pas l'historique.

### Adresse et zone de chalandise (point d'attention spécifique SAB)

- Lors de la création, choisir l'option **« Je fournis des services et livre » / masquer l'adresse au public** (paramètre GBP standard pour les SAB). L'adresse de vérification (Vence) reste nécessaire pour Google mais n'est pas affichée publiquement — c'est le comportement attendu et cohérent avec « pas de local commercial ouvert au public ».
- Définir les **zones de service** (jusqu'à 20 dans GBP) en reprenant exactement les mêmes villes que le schema/footer actuels : Vence, Nice, Antibes, Cannes, Grasse, Mougins, Cagnes-sur-Mer, Saint-Laurent-du-Var, + Alpes-Maritimes en zone élargie. Cohérence NAP/zone entre GBP et site = signal de confiance.
- Point de vigilance documenté (Sterling Sky, mars 2025, cf. `local-schema-types.md`) : pour un SAB, la zone de service déclarée dans GBP n'a **pas d'impact direct confirmé sur le ranking** — le classement reste basé sur l'adresse de vérification (proximité). Autrement dit, la présence sur Nice/Cannes dans GBP ne garantit pas d'apparaître dans le pack local *depuis* ces villes ; c'est un signal informatif pour l'utilisateur plus qu'un levier de ranking magique. Ne pas sur-promettre ce point en interne.

### Ce qu'il faut préparer avant de créer le profil

1. **Nom exact du profil** : « OptiPro » seul, ou « OptiPro — Pierre Laurent » si l'usage local privilégie le nom du dirigeant pour les TPE/EI (à trancher selon la manière dont Pierre est déjà connu localement — LinkedIn, réseau). Ne pas inclure de mots-clés dans le nom (ex. « OptiPro Création Site Web Nice ») — pratique explicitement pénalisée par Google (spam de nom).
2. **Description GBP (750 caractères max)** : rédiger une version alignée sur le positionnement actuel (sites vitrines, web apps, outils métier pour artisans/TPE), pas sur l'ancien texte du schema. Éviter le copier-coller de la description JSON-LD actuelle tant qu'elle n'est pas corrigée (voir section 4).
3. **Photos** : logo, photo de Pierre (déjà existante sur `/a-propos`, `pierre-laurent.png`), captures d'écran de réalisations (sites livrés), éventuellement une photo de l'espace de travail. Minimum recommandé 10 photos variées.
4. **Services listés dans GBP** : lister les offres telles qu'affichées sur `/tarifs` (site vitrine 990€, site vitrine Pro 1390€, web app/outil métier sur devis, maintenance 79€/129€ mois) — cohérence stricte avec le site.
5. **Site web renseigné** : pointer vers la page d'accueil (`https://www.opti-pro.fr`) plutôt qu'une page profonde, sauf si Pierre préfère router vers `/le-service` ou `/tarifs` — mais rester cohérent avec le choix fait sur les autres plateformes.
6. **Premier avis à obtenir vite après création** : le premier client (dès qu'un avis client réel est disponible, cf. page témoignages qui annonce des retours à partir d'août 2026) doit être sollicité pour un avis Google dans la foulée. Le seuil des 10 avis (« Magic 10 », Sterling Sky) produit un vrai saut de visibilité — objectif réaliste à moyen terme, pas immédiat pour un solo qui démarre.
7. **Anticiper la règle des 18 jours** (Sterling Sky) : une fois le profil créé et les premiers avis obtenus, il faudra maintenir une régularité (un avis au moins toutes les 2-3 semaines) pour éviter une chute de visibilité. Cela implique de mettre en place dès maintenant un rituel simple de demande d'avis en fin de mission (email ou SMS post-livraison), pas seulement au lancement.
8. **Cohérence NAP absolue avant publication** : vérifier que le nom, le téléphone (06 70 25 93 33) et la zone déclarée dans GBP correspondent exactement à ce qui est sur le site — en particulier une fois les pages villes et le schema corrigés (voir sections 2 et 4). Créer le GBP avant d'avoir corrigé le contenu obsolète des pages villes serait contre-productif : Google croiserait un GBP « sites web » avec des pages villes qui parlent encore d'« assistant administratif ».

---

## 6. Citations locales pertinentes et réalistes pour une EI solo (06)

Pour un développeur web solo en Alpes-Maritimes, viser un nombre restreint mais qualitatif de citations est plus réaliste que de multiplier les annuaires génériques à faible valeur.

### Prioritaires (impact réel, effort raisonnable pour un solo)

| Annuaire | Pourquoi | Effort |
|---|---|---|
| **Google Business Profile** | Prérequis absolu, voir section 5 | Élevé (à créer + maintenir) |
| **PagesJaunes** | Toujours la référence française pour les recherches locales pro/artisans, alimente aussi des agrégateurs. Fiche gratuite possible. | Faible |
| **Bing Places** | Alimente Copilot/Alexa et une partie du trafic IA. Import quasi automatique si GBP existe. | Faible une fois GBP créé |
| **Apple Business Connect** | Usage en forte hausse (cf. `local-seo-signals.md`, 14%→27% d'usage). Gratuit, formulaire simple. | Faible |
| **CCI Nice Côte d'Azur / CCI Alpes-Maritimes** (annuaire des entreprises adhérentes ou immatriculées) | Pertinent car Pierre est une EI immatriculée en Alpes-Maritimes — signal d'ancrage local et de légitimité territoriale, en plus d'un backlink institutionnel généralement bien considéré. | Faible à moyen (selon adhésion) |
| **LinkedIn (déjà en `sameAs`)** | Déjà en place. S'assurer que la localisation du profil LinkedIn (Vence/Nice Côte d'Azur) est cohérente avec le NAP du site. | Déjà fait, à vérifier |

### Secondaires (à considérer, sans urgence)

- **Société.com / Infogreffe** : fiches automatiques dès l'immatriculation SIREN — vérifier que les informations (nom, activité APE 70.22Z) sont à jour et cohérentes, sans effort actif nécessaire au-delà de la vérification.
- **Malt / Codeur.com** (si Pierre y est ou souhaite y être présent en tant que freelance) : pas des citations NAP classiques mais des profils qui renforcent la présence de marque et peuvent générer des avis/backlinks pertinents pour le secteur dev web.

### À éviter / non prioritaire pour ce profil

- Annuaires généralistes à faible valeur (type Yelp/BBB mentionnés dans les standards US du framework) : peu pertinents en France pour ce secteur, Yelp a une pénétration très faible en France B2B, BBB est un standard nord-américain sans équivalent direct utile ici. Ne pas investir de temps dessus. Les annuaires génériques français à très faible autorité (type "annuaire-gratuit-xyz") sont à éviter : aucune valeur SEO documentée et risque de créer des NAP incohérents dans le temps si non maintenus.
- Ne pas viser une couverture large façon "50 citations" — pour un solo, la cohérence sur 5-6 sources vaut mieux qu'une présence éparpillée et non maintenue sur 30 annuaires oubliés.

**Limite de cette analyse** : je n'ai pas d'accès à un outil de recherche de citations existantes (pas de crawl live, pas d'accès DataForSEO dans cette tâche). Je ne peux donc pas confirmer si OptiPro est déjà présent ou absent sur PagesJaunes/CCI/Société.com — seulement recommander la vérification et la création si absent.

---

## 7. Mots-clés locaux visés (titles/H1) — cohérence et cannibalisation

### Mapping actuel des mots-clés par page (title/H1)

| Page | Mot-clé visé (title actuel) | Cohérent avec l'offre réelle ? |
|---|---|---|
| Accueil | (générique, pas de ville) « Sites & outils web sur mesure pour artisans et TPE » | Oui — reflète l'offre actuelle |
| /services/nice | « Assistant administratif à Nice » | **Non** — mot-clé obsolète, ne correspond plus à l'offre vendue |
| /services/cannes | « Assistant administratif à Cannes » | **Non** |
| /services/antibes | « Assistant administratif à Antibes » | **Non** |
| /services/grasse | « Assistant administratif à Grasse » | **Non** |
| /services/mougins | « Assistant administratif à Mougins » | **Non** |
| /services/cagnes-sur-mer | « Assistant administratif à Cagnes-sur-Mer » | **Non** |
| /services/plombier | « Assistant administratif pour plombiers » | **Non** |
| /services/serrurier, electricien, restaurateur | (même schéma, à vérifier au cas par cas mais motif identique confirmé sur plombier) | **Non** vraisemblablement |

### Constats

- **Aucune cannibalisation entre les pages villes actuelles** : chaque ville vise un couple mot-clé/ville distinct (« assistant administratif nice » vs « assistant administratif cannes »), pas de chevauchement de requête cible. Une fois le contenu corrigé, la même logique 1 ville = 1 mot-clé cible doit être conservée (ex. « création site internet nice », « site web artisan cannes »...).
- **Aucune cannibalisation entre pages villes et pages métier** dans l'état actuel : les pages villes visent « [métier générique] à [Ville] », les pages métier visent « [métier spécifique] en PACA/France » sans ancrage ville précis dans le title. Une fois recentrées sur le dev web, il faudra rester vigilant à ne pas créer de chevauchement si, par exemple, une future page « création site plombier Nice » venait concurrencer à la fois `/services/nice` et `/services/plombier` sur la même requête — actuellement ce risque n'existe pas car aucune page ville×métier combinée n'existe.
- **Le vrai problème n'est pas la cannibalisation, c'est l'obsolescence** : les mots-clés visés aujourd'hui (« assistant administratif [ville] ») ne correspondent à aucune offre vendue sur le site. Cela ne crée pas de conflit interne, mais cela signifie que 10 pages sur 34 (6 villes + 4 métiers) travaillent actuellement sur un champ sémantique mort pour ce site.
- Une fois réécrites, les nouveaux titles/H1 candidats logiques seraient de la forme « Création de site internet à [Ville] pour artisans » / « Site web pour [métier] — OptiPro », en conservant la structure technique actuelle (schema `Service` par page, `areaServed`, FAQ) qui elle n'a pas besoin d'être reconstruite.

---

## Top 10 actions prioritisées

### CRITIQUE
1. **Réécrire les 6 pages villes (title, H1, intro, `economicContext`, `whyHere`, `services`, FAQ, JSON-LD `Service.name`/`description`) sur le positionnement actuel (sites web/outils métier pour artisans)** — impact direct sur la conversion et la cohérence du message, chantier le plus urgent du site.
2. **Réécrire les 4 pages métier (plombier, serrurier, électricien, restaurateur) sur le même positionnement**, en gardant l'angle sectoriel (pain points spécifiques au métier) mais appliqué à l'offre web/outils, pas à l'admin.
3. **Corriger la `description` du schema `LocalBusiness` et les `metadata` par défaut dans `src/app/(public)/layout.tsx`** — un seul fichier à corriger, propagé automatiquement sur les 34 pages. Gain immédiat de cohérence schema/contenu réel.

### HAUTE
4. **Créer le Google Business Profile** avec la catégorie principale « Concepteur de sites Web », adresse masquée (mode SAB), zones de service alignées sur le footer/schema actuel — mais seulement après avoir corrigé les points 1-3, pour éviter un GBP cohérent face à des pages villes obsolètes.
5. **Construire un maillage interne ville × métier** : ajouter des liens contextuels entre pages villes et pages métier (ex. bloc « Vous êtes plombier à Nice ? » sur `/services/plombier` avec lien vers `/services/nice` et vice-versa), et envisager un menu déroulant « Zones d'intervention » dans le header plutôt que le seul bloc footer.
6. **Mettre en place un rituel de demande d'avis Google post-mission** dès les premiers clients livrés (été 2026 selon la page témoignages), pour anticiper la règle des 18 jours et atteindre le seuil des 10 avis dès que possible.

### MOYENNE
7. **Réévaluer la précision du `geo` dans le schema `LocalBusiness`** (actuellement 5 décimales pointant vraisemblablement sur l'adresse résidentielle/pro exacte) — arrondir à une précision quartier/centre-ville pour un SAB sans accueil de public, sans perte de bénéfice SEO documenté.
8. **Créer/vérifier les fiches PagesJaunes, Bing Places et Apple Business Connect**, puis la fiche CCI Alpes-Maritimes — 4 citations à fort ratio effort/impact pour un solo.
9. **Harmoniser les `areaServed` incohérents entre schemas** (ex. la page plombier liste 6 villes, l'organisation en liste 8 — inclure Mougins et Cagnes-sur-Mer partout où c'est pertinent).

### BASSE
10. **Documenter et publier une FAQ ou une page dédiée expliquant la transition d'activité** (ex. mention discrète « anciennement centré sur l'assistanat administratif, OptiPro se recentre sur le développement web ») si Pierre juge utile de couper court à toute confusion pour les visiteurs qui auraient connu l'ancien positionnement — optionnel, à la discrétion du fondateur.

---

## Limites de cet audit

- Analyse réalisée à partir d'un **cache HTML statique de 34 pages fournies** et du code source — pas de crawl live du site en production, pas de vérification de l'état réellement déployé sur www.opti-pro.fr au moment de la lecture.
- **Aucun outil DataForSEO ou équivalent disponible** dans cette tâche : impossible de vérifier en direct la présence/absence réelle sur PagesJaunes, CCI, Société.com, ni de mesurer un positionnement local actuel (pack local, position organique).
- Aucune donnée de volumes de recherche, de trafic ou de statistiques marché n'a été utilisée ou inventée — les seuls repères chiffrés cités (seuil des 10 avis, règle des 18 jours, score des facteurs Whitespark) proviennent de la documentation de référence interne (`local-seo-signals.md`), pas d'une mesure spécifique à ce site.
- Impossible de vérifier l'existence de backlinks locaux réels ou de mentions de la marque sur le web sans outil de backlink (Ahrefs/Majestic/Search Console) — la note "Liens & autorité locale" (10%) repose sur l'absence de preuve positive dans les pages fournies, pas sur une confirmation d'absence totale.
- La proximité géographique (55,2% de la variance de ranking selon l'étude Search Atlas citée en référence) reste hors du contrôle du site lui-même — aucune recommandation de ce rapport ne peut agir sur ce facteur.
