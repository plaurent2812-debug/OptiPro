# Audit GEO — opti-pro.fr
Date de l'audit : 26 juillet 2026
Périmètre analysé : 34 pages en cache (accueil, tarifs, le-service, à-propos, 10 pages services métier/ville, 12 articles blog, pages légales, témoignages, contact, blog index)

---

## CONSTAT MAJEUR : désynchronisation entité suite au repositionnement

Le commit `6a7040d` (10 juin 2026, "feat(repositionnement): dev opérationnel artisans/TPE") a changé le positionnement du site de **"assistant administratif externalisé"** vers **"développeur web sur mesure / sites & outils métier"**. Cette refonte n'a été appliquée qu'à 4 pages (accueil, `/tarifs`, `/le-service`, `/a-propos`). Les 10 pages `/services/*` (métier + ville) sont restées figées sur l'ancien positionnement, tout comme `public/llms.txt` (dernière mise à jour réelle : 13 mai 2026, avant le repositionnement) et la constante `LAST_CONTENT_UPDATE` du sitemap (`src/app/sitemap.ts`, toujours au 13 mai 2026).

Conséquence directe pour un moteur IA qui crawle l'ensemble du domaine : deux entités contradictoires coexistent sous le même nom "OptiPro" :
- Entité A (nouvelle, majoritaire en poids de page — accueil/tarifs) : développeur web, sites vitrines 990-1390€, web apps sur devis.
- Entité B (ancienne, présente sur 10 URLs services + llms.txt) : assistant administratif externalisé, packs 650-1950€/mois, 75€/h.

C'est le problème n°1 de cet audit : un moteur IA qui synthétise plusieurs pages du même domaine (ce qui est le mode normal de Google AI Overviews et Perplexity) va probablement produire une réponse incohérente ou citer l'ancienne offre pour des requêtes comme "OptiPro plombier" ou "OptiPro Nice tarif".

---

## GEO Health Score global : 58/100

| Dimension | Score | Poids | Contribution |
|---|---|---|---|
| Citabilité | 62/100 | 25% | 15,5 |
| Lisibilité structurelle | 68/100 | 20% | 13,6 |
| Contenu multi-modal | 35/100 | 15% | 5,25 |
| Signaux d'autorité & marque | 48/100 | 20% | 9,6 |
| Accessibilité technique | 82/100 | 20% | 16,4 |
| **Total** | | | **60,35 → 58/100** (ajusté à la baisse pour l'incohérence d'entité, facteur transversal non capturé par les 5 colonnes) |

---

## 1. llms.txt

**Statut : présent mais obsolète (contenu erroné, pas "manquant" mais pire — trompeur).**

- URL vérifiée : https://www.opti-pro.fr/llms.txt → HTTP 200.
- Fichier source : `public/llms.txt`, dernière modification git le 13 mai 2026 (commit `fix(seo): formulaire contact réparé + llms.txt FR aligné`), donc **avant** le repositionnement du 10 juin 2026.
- Contenu actuel : décrit intégralement l'ancienne offre "bras droit administratif" (packs 650€/1200€/1950€ par mois, 75€/h, "Vous remplacez mon expert-comptable ?", etc.). Aucune mention de création de sites web, de sites vitrines à 990€, ni de web apps — c'est-à-dire l'inverse exact de ce que l'accueil et `/tarifs` annoncent aujourd'hui.
- Structure du fichier : correcte sur la forme (positionnement, tarifs, FAQ, zone géo, identité légale, sources) — c'est un bon squelette, seul le fond doit être remplacé.
- **Impact** : un LLM qui lit `/llms.txt` en priorité (comportement attendu de plusieurs crawlers IA) recevra une description de service totalement différente de ce qu'un utilisateur trouve en visitant le site. Risque de citation erronée et de perte de confiance si l'écart est détecté.
- **RSL 1.0** : aucune licence RSL trouvée (`/rsl.xml` → 404, pas de balise `<link rel="license">` ni d'en-tête HTTP). Non bloquant à ce stade (adoption RSL encore marginale) mais à considérer si Pierre veut un jour monétiser/licencier le contenu du blog pour l'entraînement IA.

### llms.txt proposé (prêt à l'emploi)

```
# OptiPro — llms.txt

## En une phrase

OptiPro conçoit et développe des sites vitrines, web apps et outils métier sur mesure pour les artisans, indépendants et TPE en région PACA. Pierre Laurent, fondateur, allie 10 ans d'expérience opérationnelle en logistique/exploitation à une pratique du développement web via Claude Code et Cursor.

## Positionnement

OptiPro est le développeur web opérationnel des artisans, indépendants et TPE. Sites vitrines, web apps et outils métier sur mesure — un seul interlocuteur du premier appel à la mise en ligne, périmètre et livrables définis au devis dès le départ.

Cible principale : artisans du bâtiment (plombiers, électriciens, serruriers), restaurateurs, indépendants et petites TPE en région Provence-Alpes-Côte d'Azur (PACA). Projets réalisables à distance partout en France.

## Tarifs

Tous les tarifs sont hors taxes (HT). OptiPro n'est pas soumis à la TVA (franchise en base, article 293 B du CGI).

- **Site vitrine** : 990 € HT — 3 à 4 pages sur mesure, hébergement 1 an inclus, nom de domaine inclus, adresse email professionnelle. Livré en 3 semaines.
- **Site vitrine Pro** : 1 390 € HT — tout le pack Site vitrine + formulaire de contact fonctionnel, fiche Google My Business, SEO local. (Offre recommandée.)
- **Web app / outil métier sur mesure** : sur devis après un premier appel gratuit — catalogue produits, portail client, suivi de chantiers, gestion de commandes, tableaux de bord.
- **Maintenance Essentiel** : 79 €/mois HT — 1h/mois, mises à jour de contenu (textes, photos, horaires).
- **Maintenance Pro** : 129 €/mois HT — 2h/mois, mises à jour de contenu + petites évolutions, traitement prioritaire.

### Conditions

- Premier appel découverte gratuit de 30 minutes, sans engagement.
- Périmètre et livrables définis au devis avant tout démarrage — pas de dérive de coût.
- Le client reste propriétaire de son site et de son code à l'issue du projet.
- TVA non applicable — franchise en base, article 293 B du CGI.

## Ce qui est inclus dans chaque projet

- Un seul interlocuteur du premier appel à la mise en ligne (pas de commercial, pas de sous-traitance)
- Périmètre et livrables définis au devis
- Hébergement et nom de domaine inclus pour les sites vitrines
- Site référencé sur Google dès la mise en ligne
- Maintenance mensuelle optionnelle après livraison

## Ce que construit OptiPro

- **Sites vitrines** : présentation des services, formulaire de contact, hébergement et domaine inclus.
- **Web apps et outils métier** : catalogue produits, portail client, suivi de chantiers, gestion de commandes, tableaux de bord et reporting — pour remplacer le papier et Excel par une plateforme sur mesure.
- **Maintenance** : mises à jour de contenu et petites évolutions après mise en ligne.

## Référence client

SAPAL Signalisation : plateforme B2B avec catalogue de plus de 2 500 références, portail client et intégrations API.

## Qui est Pierre Laurent

Pierre Laurent, fondateur d'OptiPro, a 10 ans d'expérience opérationnelle en exploitation et logistique avant de se former au développement web via Claude Code et Cursor.

- 5 ans Responsable Logistique & Exploitation chez Factory : portefeuille ADV de 7 M€/an, supervision quotidienne de 15 à 20 artisans sous-traitants.
- Création d'une filiale de zéro chez Eddifis : entrepôt, déploiement complet de l'ERP EBP.
- Responsable d'agence chez DBS Drive : contact quotidien avec plombiers et chauffagistes.
- Responsable e-commerce opérations chez Toute la Nutrition : 400 commandes par jour.
- Responsable Logistique chez GL Events Live (exploitation événementielle) : équipe de 6 personnes.

En 2026, Pierre a quitté l'exploitation salariée pour se consacrer à temps plein à OptiPro. Ce parcours lui donne une connaissance directe des irritants métier des artisans — devis en retard, suivi de chantier éclaté dans Excel, absence de site trouvable sur Google — avant même d'écrire une ligne de code.

## Zone géographique

OptiPro est basé à Vence (06140), Alpes-Maritimes. Zone d'intervention : Nice, Cannes, Antibes, Grasse, Mougins, Cagnes-sur-Mer et le reste de la région PACA. Projets réalisables à distance partout en France.

## Identité légale

- Forme juridique : Entrepreneur Individuel (EI)
- SIREN : 934 301 987
- Code APE : 70.22Z (conseil pour les affaires et autres conseils de gestion)
- TVA : non applicable, article 293 B du CGI (franchise en base)
- Adresse : Vence (06140), Provence-Alpes-Côte d'Azur, France
- Site web : https://www.opti-pro.fr
- LinkedIn : https://www.linkedin.com/in/pierre-laurent-809410123

## Questions fréquentes

### Combien coûte un site vitrine pour artisan ?

990 € HT pour un site vitrine complet de 3 à 4 pages, avec hébergement 1 an, nom de domaine et adresse email professionnelle inclus. La version Pro à 1 390 € HT ajoute un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local.

### Qu'est-ce qu'un outil métier sur mesure ?

Une application web construite autour des process d'un artisan ou d'une TPE : suivi de chantiers, catalogue produits, portail client, gestion de commandes. Tout ce qui se gère aujourd'hui sur papier ou Excel peut devenir un outil web simple, accessible depuis n'importe quel appareil. Chiffrage sur devis après un premier appel gratuit.

### Qui s'occupe du site après la mise en ligne ?

Pierre, si le client le souhaite, via un forfait de maintenance mensuelle (79 €/mois pour 1h de mises à jour de contenu, ou 129 €/mois pour 2h avec petites évolutions et traitement prioritaire). Sans contrat de maintenance, le client reste propriétaire de son site et libre de le faire évoluer ailleurs.

### En quoi OptiPro est différent d'une agence web ?

Pierre a passé 10 ans en opérations et logistique avant de devenir développeur, ce qui lui donne une compréhension directe des contraintes de terrain des artisans (devis, planning, fournisseurs, stocks). Un seul interlocuteur, un périmètre et des livrables définis au devis, sans réunions à rallonge ni sous-traitance.

### Travaillez-vous avec des artisans hors PACA ?

Oui, les projets peuvent être réalisés à distance partout en France. La PACA reste la zone d'intervention prioritaire.

## Comment démarrer

1. Réserver un premier appel découverte gratuit : https://www.opti-pro.fr/contact
2. Brief du projet : objectifs, contraintes, contenu existant
3. Devis avec périmètre et livrables définis, sous 24-48h
4. Développement et livraison (site vitrine : environ 3 semaines)
5. Mise en ligne, puis maintenance mensuelle optionnelle

## Sources et autorité

- Site officiel : https://www.opti-pro.fr
- Page À propos : https://www.opti-pro.fr/a-propos
- Tarifs détaillés : https://www.opti-pro.fr/tarifs
- Le service : https://www.opti-pro.fr/le-service
- Blog : https://www.opti-pro.fr/blog

## Dernière mise à jour

26 juillet 2026
```

**Action de suivi indispensable** : ce nouveau llms.txt ne suffit pas seul — il faut aussi mettre à jour les 10 pages `/services/*` pour qu'elles reflètent la même entité (voir section Recommandations, priorité 1).

---

## 2. Citabilité passage-level (pages clés)

Méthodologie : lecture du texte HTML brut (hors scripts/styles), repérage des réponses directes en tête de section, de la longueur des paragraphes vs la fourchette optimale 134-167 mots, des listes/tableaux, et de l'énoncé clair des prix.

### Accueil (`/`) — Score citabilité : 72/100

- **Prix en texte clair citable** : oui — "Site vitrine — 990 €" et "Site vitrine Pro — 1 390 €" apparaissent en texte brut dans le HTML, pas seulement dans une image ou un composant visuel non extractible. Idem pour la FAQ : "990€ pour un site vitrine complet : 3 à 4 pages, hébergement 1 an, nom de domaine et adresse email professionnelle inclus." — c'est une phrase auto-suffisante, directement citable par un LLM.
- **FAQ en JSON-LD FAQPage** : présente, avec réponses complètes dans le HTML (contenu dans des `<div hidden>` d'accordéon, mais le texte reste présent et parsable — `hidden` n'empêche pas l'extraction par un crawler qui lit le DOM/HTML brut).
- **Réponse directe en tête de section** : le H1 "Je construis les outils web que vos concurrents n'ont pas encore" est accrocheur mais pas une réponse factuelle directe ; le sous-titre qui suit ("OptiPro est le dev opérationnel des artisans... Sites vitrines à partir de 990 €...") rattrape bien en donnant l'info concrète dès les 40 premiers mots.
- **Longueur des blocs** : les blocs de prestations ("Site vitrine — 990 €... 3 à 4 pages, hébergement 1 an, domaine, email pro.") sont très courts (15-20 mots), en dessous de la fourchette optimale 134-167 mots — bons pour une citation courte type "featured snippet" mais insuffisants comme passage autonome complet pour du RAG.
- **Structure** : 1 seul `<h1>`, 4 `<h2>` — hiérarchie correcte mais peu de `<h2>` en forme de question (seule la section FAQ l'est).

### `/tarifs` — Score citabilité : 80/100 (meilleure page du site sur ce critère)

- Tous les prix énoncés en clair et répétés sous plusieurs formes (liste à puces + tableau de cartes + FAQ) : "Site vitrine 990€ HT (3–4 pages, hébergement 1 an, domaine, email pro)", "Site vitrine Pro 1 390€ HT (+ formulaire fonctionnel, Google My Business, SEO local)", "Maintenance Essentiel 79€/mois HT", "Maintenance Pro 129€/mois HT".
- Précision fiscale citable et rare chez la concurrence : "TVA non applicable, franchise en base art. 293 B du CGI" — c'est le type de détail factuel spécifique qu'un LLM valorise pour une réponse précise.
- FAQ avec réponses complètes et auto-suffisantes ("Que comprend le prix d'un site vitrine ? 990€ tout compris : ... Pas de coûts cachés.").
- Reste perfectible : les paragraphes de réponse font 30-50 mots, sous la fourchette 134-167 — il manque des réponses plus développées type "combien coûte un site pour un plombier à Nice" qui combineraient contexte + prix + ce qui est inclus + délai en un seul bloc de ~150 mots.

### `/le-service` — Score citabilité : 65/100

- Contenu clair sur les 3 offres (sites vitrines, web apps, maintenance) avec prix répétés en cohérence avec `/tarifs`.
- Référence client concrète et citable : "SAPAL Signalisation : plateforme B2B catalogue 2 500+ références, portail client, intégrations API." — bon signal de preuve sociale factuelle, mais un LLM ne peut pas vérifier ce claim (pas de lien vers une étude de cas dédiée, pas de témoignage signé visible sur cette page).
- 3 `<h2>` seulement — structure moins granulaire que `/tarifs`, moins de points d'entrée pour un moteur qui cherche une réponse précise à une sous-question.

### Articles de blog (3 échantillons)

**`blog/site-web-artisan-combien-ca-coute` — Score citabilité : 85/100**
- Répond très directement à la requête probable "combien coûte un site pour artisan" : structure en 4 options de prix comparées ("DIY avec Wix... 0 à 300 €/an", puis les autres options), c'est exactement le format qu'une IA générative cite pour ce type de question comparative.
- Chiffre spécifique et concret sans invention apparente : "un formulaire de contact bien fait fait gagner 30 % de leads supplémentaires par rapport à un simple numéro de téléphone" — attribué en tant qu'affirmation de l'auteur, pas sourcé vers une étude externe nommée, donc un LLM pourrait le citer mais sans pouvoir vérifier la source.
- Auteur + date + JSON-LD BlogPosting complet (`datePublished`/`dateModified` : 2026-04-01).

**`blog/automatiser-devis-artisan` — Score citabilité : 78/100**
- Bon exemple de citation sourcée explicitement : "D'après les retours d'organisations professionnelles comme la CAPEB..., un artisan du bâtiment consacrerait en moyenne 15 à 20 % de son temps [à l'administratif]" — attribution nommée à une source (CAPEB), c'est le type de signal qui favorise la citation IA avec attribution de confiance.
- Calcul donné en clair et vérifiable dans le texte : "10 devis par semaine... 10 heures perdues. À 50 € de l'heure facturable (hypothèse haute, 48 semaines), c'est l'équivalent de 24 000 €..." — hypothèses explicitées, bon signal de transparence méthodologique.

**`blog/facturation-electronique-2026-2027-artisan-tpe` — Score citabilité : 82/100**
- Dates réglementaires précises et citables telles quelles : "Depuis le 1er septembre 2026... 1er septembre 2027..." — exactement le type de fait vérifiable qu'un LLM peut citer avec confiance sur une requête factuelle/réglementaire.
- Article daté du 13 mai 2026, sujet à forte volatilité réglementaire (mentionné explicitement : "le calendrier a déjà été reporté plusieurs fois") — bon réflexe de transparence, mais risque de désynchronisation future si le calendrier légal change sans mise à jour de l'article (`dateModified` à surveiller).

### Page métier (`/services/plombier`) — Score citabilité : 55/100

- Contenu détaillé et concret sur les irritants métier ("Vous sortez d'une fuite à 19h. Le devis pour la rénovation salle de bain ? Pas avant 3 jours...") — bien écrit, mais **le prix cité (650€/mois, 75€/h, Pack Croissance 1200€/mois) contredit celui de `/tarifs` et de l'accueil.** Un LLM qui synthétise cette page avec `/tarifs` produira une info tarifaire incohérente pour la requête "prix site web pour plombier OptiPro".
- Reste bien structuré et daté implicitement via le reste du site, mais le contenu factuel est obsolète.

### Page ville (`/services/nice`) — Score citabilité : 52/100

- Bonne contextualisation locale ("saisonnalité avril-octobre", "20 km de Vence") — signaux locaux pertinents et spécifiques (pas du texte générique dupliqué mot pour mot entre villes, bon point).
- Même problème que la page plombier : décrit "devis, facturation, relances, suivi fournisseurs" (l'ancienne offre admin) au lieu de sites web/outils métier. Incohérence d'entité qui pénalise fortement la fiabilité perçue par un moteur IA multi-pages.

---

## 3. Fraîcheur / datation

- **Articles de blog** : tous datés explicitement en affichage ("1 avril 2026", "15 avril 2026", "13 mai 2026") + JSON-LD `datePublished`/`dateModified` cohérents. Bon point, standard respecté.
- **Pages statiques** (accueil, tarifs, le-service, à-propos, services) : aucune date de mise à jour visible à l'écran — normal pour ce type de page, mais le signal `lastmod` du sitemap XML est la seule trace machine-lisible, et il est **figé au 13 mai 2026 pour toutes les 34 URLs**, y compris les 4 pages effectivement modifiées le 10 juin. La constante `LAST_CONTENT_UPDATE` dans `src/app/sitemap.ts` n'a pas été mise à jour lors du repositionnement.
- **Conséquence** : les crawlers IA qui utilisent `lastmod` pour prioriser le re-crawl (comportement documenté chez plusieurs moteurs) n'ont aucun signal indiquant que l'accueil, `/tarifs`, `/le-service` et `/a-propos` ont changé de contenu depuis mai — alors que c'est le changement le plus important de l'année pour ce site.

---

## 4. Signaux d'autorité pour les moteurs IA

- **Cohérence de l'entité "OptiPro"** : rompue par le repositionnement partiel décrit plus haut (nom cohérent, mais offre et proposition de valeur contradictoires selon les pages).
- **Auteur identifiable** : oui, bien fait. Chaque article de blog affiche "Pierre Laurent — Fondateur OptiPro · Vence (06)" avec lien vers `/a-propos`, et le JSON-LD `BlogPosting.author` pointe vers l'ancre `#pierre-laurent` sur cette page — bonne pratique d'entité liée (concept de "Person" schema.org rattaché à l'organisation).
- **À-propos détaillé** : oui, très complet — parcours professionnel chronologique (Factory, Eddifis, DBS Drive, Toute la Nutrition, GL Events Live), dates précises, réalisation concrète nommée (SAPAL Signalisation). C'est un des points forts du site pour l'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
- **JSON-LD structuré** : présent et de bonne qualité (`LocalBusiness`/`Organization` en `@graph` sur l'accueil, `Service`, `FAQPage`, `BlogPosting` sur les articles). C'est un signal d'entité fort pour les moteurs IA qui exploitent les graphes de connaissances.
- **Mentions de marque externes (Wikipedia, Reddit, YouTube, LinkedIn)** : impossible de vérifier de façon fiable la présence effective sur ces plateformes via les outils disponibles dans cet audit (recherche web non concluante techniquement). Ce qui est vérifiable depuis le site lui-même : un seul lien LinkedIn personnel de Pierre Laurent est cité dans `llms.txt` et probablement en footer ; aucune mention YouTube, aucune preuve de présence Reddit, pas d'entité Wikipedia (attendu pour une EI fondée en 2025-2026, non notoire). Étant donné la corrélation forte de YouTube (~0,737) avec la citation IA, l'absence de contenu vidéo est un manque structurel plus qu'un problème d'optimisation.
- **Témoignages/preuve sociale** : une page `/temoignages` existe (à explorer plus en détail si besoin), et une référence client nommée (SAPAL Signalisation) revient sur plusieurs pages (`/le-service`, `/a-propos`) — bon signal de cohérence factuelle, mais un seul client cité limite la diversité des preuves pour un LLM qui chercherait à corroborer la réputation via plusieurs sources indépendantes.

---

## 5. Accessibilité technique pour crawlers IA

- **robots.txt** : conforme aux bonnes pratiques GEO — autorise explicitement GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended et Bingbot, avec `Allow: /` pour chacun. Seuls `/admin` et `/api` sont bloqués (comportement attendu et sain, ce sont des zones privées). Sitemap déclaré. **Aucune action requise ici.**
- **Rendu SSR vs CSR** : le contenu principal est bien server-rendu — vérifié sur l'accueil : ~620 mots de texte extractibles en désactivant JS/scripts, JSON-LD complet présent dans le HTML brut livré au premier chargement (pas injecté après hydratation côté client). C'est un point fort net : cohérent avec Next.js App Router en SSR/SSG, pas de dépendance à l'exécution JS pour accéder au contenu clé.
- **FAQ en accordéon** : le texte des réponses est présent dans le DOM initial (`<div hidden>`), donc extractible par un crawler qui lit le HTML — pas un vrai problème d'accessibilité technique, juste un choix UI qui n'entrave pas les moteurs IA.
- **Structure sémantique** : `<main>` présent, hiérarchie `<h1>`/`<h2>` correcte et unique par page (1 seul H1 partout vérifié), mais usage de `<section>` limité à 1 par page sur les pages testées — la sémantique HTML5 (article, section imbriquées) pourrait être renforcée pour aider le découpage automatique de passages par les moteurs.
- **Métadonnées** : meta description, canonical, Open Graph complets sur l'accueil (title, description, locale, image avec dimensions et alt) — bon niveau de complétude technique SEO classique, qui sert aussi les moteurs IA pour le résumé de page.

---

## 6. Réponses aux requêtes probables des utilisateurs IA

| Requête probable | Le site y répond-il de façon extractible ? |
|---|---|
| "Combien coûte un site internet pour artisan ?" | **Oui, très bien** — répondu à 3 endroits cohérents : accueil (990€/1390€), `/tarifs` (détail complet + FAQ), et l'article de blog dédié `site-web-artisan-combien-ca-coute` (comparatif 4 options de marché). C'est la question la mieux couverte du site. |
| "Créer un site pour plombier" | **Partiellement, avec un risque de contradiction** — la page générique `/le-service` et `/tarifs` répondent bien (dev web, 990€). Mais la page dédiée `/services/plombier`, qui devrait être la réponse la plus spécifique et la plus autoritaire pour cette requête précise, décrit encore l'ancienne offre d'assistance administrative à 650€/mois. Un moteur IA qui privilégie la page la plus spécifique thématiquement (comportement probable) risque de citer l'information obsolète. |
| "OptiPro Nice tarif" / "OptiPro avis" | **Risque de réponse incohérente** — même problème que ci-dessus sur `/services/nice`. |
| "Site vitrine artisan délai de livraison" | Oui — "Livré en 3 semaines" apparaît en clair sur l'accueil et `/le-service`. |
| "Différence agence web vs OptiPro" | Oui, bien traité en FAQ sur l'accueil ("10 ans en opérations et logistique... un seul interlocuteur..."). |
| "Facturation électronique 2026 2027 obligation artisan" | Oui, très bien — article dédié avec dates réglementaires précises et calendrier clair. |

---

## Top 5 recommandations prioritaires

### 1. [Effort : moyen, ~1-2h] Aligner les 10 pages `/services/*` sur le nouveau positionnement
Les pages `/services/plombier`, `/services/electricien`, `/services/serrurier`, `/services/restaurateur`, `/services/nice`, `/services/cannes`, `/services/antibes`, `/services/grasse`, `/services/mougins`, `/services/cagnes-sur-mer` décrivent toutes l'ancienne offre "assistant administratif" (650-1950€/mois). C'est l'incohérence la plus dommageable de l'audit : elle affecte directement la fiabilité de toute réponse IA multi-pages sur "OptiPro + métier" ou "OptiPro + ville". Fichiers source probables : `src/app/(public)/services/plombier` et `src/data/services.ts`.

### 2. [Effort : faible, ~30 min] Remplacer `public/llms.txt` par la version repositionnée
Le fichier actuel décrit une offre qui n'existe plus sur le site public. Utiliser le contenu proposé en section 1 ci-dessus, puis mettre à jour la date de dernière modification.

### 3. [Effort : faible, ~15 min] Mettre à jour `LAST_CONTENT_UPDATE` dans `src/app/sitemap.ts`
La constante est figée au 13 mai 2026 alors que le contenu de l'accueil, `/tarifs`, `/le-service` et `/a-propos` a changé le 10 juin. Une fois les pages `/services/*` corrigées (recommandation 1), mettre également à jour leur `lastmod` respectif pour signaler le changement aux crawlers qui priorisent le re-crawl sur ce signal.

### 4. [Effort : moyen, ~2-3h] Enrichir les passages courts vers la fourchette 134-167 mots sur les pages à fort potentiel de citation
Les blocs de prix de l'accueil et `/tarifs` (15-50 mots) sont efficaces pour un extrait court mais trop courts pour servir de passage autonome complet en RAG. Prioriser une réponse enrichie type "Combien coûte un site pour un [métier] à [ville] ?" combinant en un seul paragraphe : contexte + prix + inclus + délai, sur `/tarifs` et sur les pages `/services/*` une fois repositionnées.

### 5. [Effort : élevé, dépend des ressources] Diversifier les preuves sociales et la présence multi-plateforme
Un seul client nommé (SAPAL Signalisation) est cité comme preuve sociale sur l'ensemble du site. Étant donné la corrélation forte de YouTube (~0,737) et de Reddit avec la citation par les moteurs IA, et la corrélation faible du Domain Rating (~0,266), l'investissement prioritaire pour la visibilité IA à moyen terme serait la création de contenu vidéo (démonstration de projets, témoignages clients filmés) plutôt que du link-building classique. Effort non estimable précisément sans décision de Pierre sur le format.

---

## Scores par plateforme (estimation qualitative, pas de mesure live DataForSEO effectuée dans cet audit)

| Plateforme | Estimation | Justification |
|---|---|---|
| Google AI Overviews | Moyen | JSON-LD complet, SSR propre, FAQ structurée — bons fondamentaux techniques ; mais l'incohérence tarifaire entre pages nuit à la confiance sur les requêtes locales/métier. |
| ChatGPT (recherche web) | Moyen-faible | Robots.txt ouvert et llms.txt présent (bon signal), mais le contenu de llms.txt contredit le site — risque de citation de l'ancienne offre. |
| Perplexity | Moyen | Bonne citabilité des articles de blog factuels (facturation électronique, comparatif prix) — ce sont exactement les formats que Perplexity favorise pour les requêtes informationnelles. |
| Bing Copilot | Moyen | Bingbot autorisé, SSR propre ; bénéficie des mêmes forces/faiblesses que Google AIO. |

*Aucun outil DataForSEO n'était disponible dans cette session pour une mesure de visibilité IA en direct ; ces scores sont qualitatifs, fondés sur l'analyse structurelle du contenu en cache.*
