# Analyse SXO — opti-pro.fr
Date : 26/07/2026 · Méthode : SERP backwards analysis (WebSearch, top résultats organiques observés)

---

## 0. Finding transversal (le plus important, avant même les SERP)

Le site est en pleine transition de positionnement : l'accueil (`index.html`), `/tarifs` et `/le-service` ont été **refondus** vers « sites vitrines + web apps + outils métier » (dernier commit git : *« refonte accueil, tarifs, le-service, à-propos »*). Mais **10 pages n'ont pas suivi** :

| Page | Title actuel (cache HTML) |
|---|---|
| `/services/nice`, `/antibes`, `/cannes`, `/grasse`, `/mougins`, `/cagnes-sur-mer` | *« Assistant administratif à [Ville] — Bras droit admin & opérationnel »* |
| `/services/plombier`, `/electricien`, `/serrurier`, `/restaurateur` | *« Assistant administratif pour [métier] — OptiPro PACA »* |

Ces pages vendent encore l'**ancienne offre** (externalisation admin, devis 650€-1950€/mois ou 75€/h) — un service qui n'existe plus dans l'offre actuelle (990€/1390€ site + 79€/129€ maintenance). Pire : le schema `LocalBusiness` de l'accueil (`index.html`) contient toujours la description "Externalisation de l'admin opérationnel... pack mensuel de 650€/mois à 1 950€/mois" — Google voit donc un JSON-LD contradictoire avec le H1 et les CTA visibles de la même page.

**Conséquence directe pour cet audit** : les requêtes « création site internet nice » et « site internet plombier » n'ont **aucune page OptiPro pertinente à comparer aujourd'hui** — les URLs qui devraient cibler ces requêtes parlent d'un tout autre service. Le mismatch n'est pas seulement un problème de type de page vs SERP, c'est un problème de fond : la page existe, mais raconte la mauvaise histoire.

---

## 1. Requête par requête

### 1.1 « création site internet artisan »
**SERP observée** : 100% agences web / freelances dev (Geoffreyleduc, Tolteck [éditeur logiciel BTP avec contenu SEO], Petitefabrik, Ingenius, Rc2i). Fourchettes de prix affichées en SERP : 1600€-2000€ HT, structuré en offre commerciale directe (page service + tarif visible).
**Intention** : commerciale, comparative. L'internaute compare des agences avant de demander un devis.
**Page OptiPro correspondante** : aucune URL dédiée exacte — la requête devrait matcher `/` ou `/le-service` (positionnement générique artisan/TPE, pas de page "création-site-internet-artisan" isolée).
**Verdict** : type de page ALIGNÉ (accueil = page service générique avec tarif visible, comme les concurrents observés) mais **absence de page dédiée** = dilution. L'accueil doit porter tout le poids de cette requête générique face à des concurrents qui ont une URL 100% optimisée sur l'expression exacte.
**Recommandation** : soit accepter que l'accueil capte cette requête en secondaire (réaliste pour un fondateur solo), soit créer une page `/creation-site-internet-artisan` uniquement si du temps de contenu est disponible — pas prioritaire vu la concurrence (agences avec historique de netlinking).

### 1.2 « création site internet nice » — la plus concurrentielle testée
**SERP observée** : uniquement des agences web installées à Nice avec présence commerciale ancienne (Adveris "15 ans d'expertise", Sortlist [annuaire comparateur d'agences], Agence Dilo, CB&COM, eMaginance, Capitaine Site). Toutes proposent showcase + e-commerce + full digital (souvent bien plus large que le périmètre OptiPro).
**Intention** : commerciale locale, forte concurrence agences établies + 1 annuaire (Sortlist) qui capte une position par l'agrégation d'offres.
**Page OptiPro correspondante** : `/services/nice` — mais cette page parle d'assistant administratif, pas de création de site. **Mismatch total de contenu**, indépendamment du type de page.
**Verdict** : MISMATCH CRITIQUE. Même en supposant une page correctement réécrite pour "création site internet Nice", la requête est très concurrentielle (agences avec 10-15 ans d'ancienneté, gros volume de pages, netlinking local). Une chance réaliste = quasi nulle à court/moyen terme pour un fondateur solo sans budget SEO.
**Recommandation** : ne pas investir dans le combat frontal "Nice" tel que formulé. Si la page `/services/nice` doit être réécrite (elle DOIT l'être pour cohérence de l'offre), viser plutôt de la longue traîne locale moins disputée (ex. "création site vitrine artisan Nice", "site internet pas cher artisan Alpes-Maritimes") plutôt que l'expression générique disputée par des agences installées.

### 1.3 « site internet plombier »
**SERP observée** : mix agences spécialisées métier (Aerialgroup, Aleo) + éditeurs SaaS avec pages "combien ça coûte / comment créer" à forte intention info (Wix blog, Simplebo à 50€HT/mois, Thomas-Gaillard guide, WPMarmite guide WordPress, Webgazelle à 99,90€HT/mois). Présence marquée de contenus **hybrides info + commercial** (guides détaillés qui vendent en creux leur propre solution).
**Intention** : mixte info/commerciale — recherche de "comment faire" autant que de prestataire.
**Page OptiPro correspondante** : `/services/plombier` — également en décalage total (assistant administratif, pas site web).
**Verdict** : MISMATCH CRITIQUE de contenu. Mais côté type de page, le SERP montre une opportunité réelle : des guides/comparatifs de type "combien coûte un site plombier" performent, pas seulement des pages vente pure. Le format article-blog + page service combinés a du potentiel.
**Recommandation** : réécrire `/services/plombier` en page service "création site vitrine pour plombier" avec cas d'usage concrets (urgences 24/7, devis en ligne, avis Google) — moins concurrentiel que "Nice" générique car niche métier + zone géographique réduite (PACA vs national). Bon ratio effort/chance si combiné à du contenu blog complémentaire.

### 1.4 « combien coûte un site internet artisan » (requête info)
**SERP observée** : 100% articles de blog long-format (Webbay, WebTensor, Webipro, Pictogramaweb, Thaislaboure [dev freelance], Loonce) donnant des fourchettes de prix (600€-2500€, parfois jusqu'à 5000€) avec structuration en paliers de prix + ROI + coûts récurrents (hébergement, maintenance).
**Intention** : 100% informationnelle, early-funnel, comparative avant achat.
**Page OptiPro correspondante** : `blog_site-web-artisan-combien-ca-coute.html` — **c'est exactement le bon type de page** (article long, 7334 mots, H2 structurés : "Pourquoi un site est indispensable", "Les 4 options et leurs vrais coûts", "Ce qu'un bon site doit avoir", "Les 4 pièges", "SEO local", "Mon conseil honnête").
**Verdict** : ALIGNÉ. C'est la meilleure page du site du point de vue SXO. Format, longueur et angle (transparence tarifaire + honnêteté) correspondent au consensus SERP. Point d'amélioration technique : ni schema `Article` ni `FAQPage` détecté dans le head du HTML de cet article (alors que l'accueil, elle, a un FAQPage) — à ajouter pour capter un featured snippet potentiel sur "combien coûte".
**Recommandation** : conserver ce format, ajouter un schema Article + FAQPage à l'article, et créer un maillage interne fort vers `/tarifs` (CTA "voir mes tarifs actuels" en fin d'article) puisque l'intention est info → l'objectif est de faire basculer vers la page commerciale.

### 1.5 « création site internet vence » (siège de l'EI, requête la moins concurrentielle testée)
**SERP observée** : agences web génériques ciblant la ville via pages géo-dupliquées à faible différenciation (WebFrance 999€, HL-Développement 700€, MWS-Médoc, 842-Concept, Axeoweb, IdealCom, EscaladE, LV Digitale). Aucune de ces agences n'est basée à Vence — ce sont des pages "ville" produites en masse par des agences opérant sur toute la France/région. Ancienneté et autorité de domaine visiblement faibles à modérées (beaucoup de petites structures).
**Intention** : commerciale locale, mais SERP peu qualitative — occupée par des pages géo génériques sans réel ancrage local.
**Page OptiPro correspondante** : aucune page `/services/vence` n'existe (seule Vence apparaît comme siège dans le schema LocalBusiness et le footer).
**Verdict** : OPPORTUNITÉ MANQUÉE. C'est la requête où OptiPro a l'avantage compétitif le plus net : Pierre Laurent EST à Vence (vs des agences qui ciblent Vence depuis Nice/Cannes/ailleurs sans y être implantées). Le SERP n'est pas dominé par des acteurs locaux forts — la barrière à l'entrée est basse.
**Recommandation** : PRIORITÉ. Créer une page `/services/vence` (ou transformer une page ville existante) axée "création site internet à Vence" avec ancrage local réel (adresse, NAP cohérent avec le schema `geo` déjà présent sur l'accueil, témoignage local si possible). Meilleur ratio effort/chance du panel testé.

### 1.6 Requête web apps / outils métier : « application web sur mesure gestion devis factures artisan »
**SERP observée** : 100% éditeurs SaaS génériques (ChantierFlow, Tactidevis, Kolirys, JLogiciels, SO-FA, Costructor) — produits packagés en abonnement, pas de développeurs sur-mesure. Aucune agence de dev sur-mesure ne ressort en top résultats.
**Intention** : commerciale, mais orientée "logiciel prêt à l'emploi" plutôt que "prestataire qui développe pour moi".
**Page OptiPro correspondante** : aucune page dédiée — seule mention en bloc générique sur l'accueil ("Web app / outil métier — Sur devis") et `/le-service`.
**Verdict** : MISMATCH DE MARCHÉ (pas seulement de page). Le SERP est structuré par des produits SaaS avec featurelist et pricing par abonnement, pas par des offres de développement sur-mesure. OptiPro ne peut pas rivaliser sur ces mots-clés génériques — l'utilisateur qui tape ça cherche un outil à installer, pas un développeur à embaucher.
**Recommandation** : ne pas viser cette requête générique. Le sur-mesure se vend par recommandation, bouche-à-oreille, LinkedIn et contenu de démonstration (études de cas), pas par SEO informationnel générique — le SEO n'est pas le bon canal d'acquisition pour ce service. Concentrer les pages web apps sur des études de cas nommées ("Comment j'ai remplacé le tableau Excel de [tel client]") plutôt que sur des mots-clés produits.

---

## 2. Scoring personas — accueil (`/`) et `/tarifs`

Test : la persona trouve-t-elle en moins de 10 secondes *quoi, pour qui, combien, comment contacter* ?

### Persona 1 — Artisan plombier, 45 ans, pressé, peu tech
- **Quoi** : H1 "Je construis les outils web que vos concurrents n'ont pas encore" — trop abstrait et orienté marketing pour ce persona ; il faut lire le sous-titre pour comprendre "sites vitrines, web apps, outils métier". **Perte de 3-4 secondes précieuses.**
- **Pour qui** : "artisans et TPE en PACA" apparaît dans le sous-titre — correct, rapide à voir.
- **Combien** : visible en scroll immédiat sur l'accueil (990€ / 1390€ / dès 79€), et `/tarifs` est explicite et bien structuré (title "Des tarifs clairs. Des livrables définis.").
- **Comment contacter** : CTA "Réserver un appel gratuit" présent en hero + sticky header + footer. Bon.
- **Verdict** : correct sur 3/4 critères, mais le H1 accroche trop tard ce persona qui n'a pas le temps de décoder une punchline. **Recommandation : un H1 plus direct type "Sites internet et outils pour artisans, dès 990€" gagnerait ce persona en 2 secondes au lieu de 6.**

### Persona 2 — Gérante de TPE comparant 3 devis
- **Quoi/Combien** : `/tarifs` répond bien — grille claire, FAQ intégrée, périmètre défini. Bon pour la comparaison.
- **Pour qui** : cohérent, artisans/TPE explicite.
- **Comment contacter** : CTA clair, "premier appel gratuit" réduit la friction de prise de contact (pas de formulaire long).
- **Point de friction** : aucun élément de preuve sociale visible immédiatement sur l'accueil (pas d'avis clients affichés en hero/au-dessus de la ligne de flottaison) — `/temoignages` existe mais est une page séparée, donc un clic supplémentaire pour la comparaison qu'elle fait activement (elle compare 3 prestataires, la preuve sociale est décisive à ce stade).
- **Verdict** : bon sur le fond tarifaire, mais manque de réassurance immédiate (témoignages, nombre de clients, avis Google) sur les pages où elle atterrit en premier.

### Persona 3 — Restaurateur cherchant à digitaliser ses réservations
- **Quoi** : ni l'accueil ni `/tarifs` ne mentionnent "réservation" — le persona doit inférer que "outil métier sur mesure" couvre son besoin. La page `/services/restaurateur` existerait pour ça mais elle est actuellement... une page "assistant administratif pour restaurateurs" (cf. section 0), donc ne répond pas du tout à son besoin de réservation en ligne.
- **Pour qui** : le mot "restaurateur" n'apparaît nulle part dans le contenu à jour (accueil/tarifs/le-service) — seul `/services/restaurateur` le mentionne, mais avec le mauvais service.
- **Combien** : "Web app / outil métier — Sur devis" est trop vague pour ce persona qui a un besoin précis (système de réservation) et voudrait au moins un ordre de grandeur.
- **Comment contacter** : CTA présent mais le persona n'a pas eu de validation que son cas d'usage est couvert avant de cliquer — risque d'abandon avant contact.
- **Verdict** : le plus mal servi des trois. Aucune page ne traite son besoin réel aujourd'hui. **Priorité : soit réécrire `/services/restaurateur` avec un cas d'usage "système de réservation" concret et un exemple de fourchette de prix indicative, soit ajouter un exemple "réservation en ligne" dans le bloc web app de l'accueil/`/le-service`.**

---

## 3. Priorisation — où investir vs où abandonner

### À viser (bon ratio chance/effort)
1. **`combien coûte un site internet artisan`** — page déjà quasi alignée, gains rapides (ajouter schema Article/FAQPage, renforcer maillage vers `/tarifs`).
2. **`création site internet vence`** — meilleure opportunité géographique inexploitée, SERP peu qualitative, avantage d'implantation réelle non exploité.
3. **`site internet plombier`** et variantes métier PACA (électricien, serrurier) — moins concurrentiel que "Nice" générique, format hybride info+service qui marche en SERP, mais nécessite une réécriture complète (le contenu actuel est hors-sujet).
4. Longue traîne locale (ex. "site vitrine artisan Alpes-Maritimes", "création site pas cher artisan 06") plutôt que les têtes de requête ville pure.

### À abandonner ou dépriorister
1. **`création site internet nice`** — SERP saturée d'agences installées depuis 10-15 ans, aucune chance réaliste sans budget netlinking ; ne pas investir de temps de contenu dédié au-delà d'une page de cohérence NAP minimale.
2. **`application web sur mesure gestion devis factures artisan`** (et variantes génériques web app) — SERP dominée par des éditeurs SaaS, mauvais fit d'intention ; ce service se vend hors-SEO (réseau, études de cas, recommandation).
3. **`création site internet artisan`** (générique national) — trop large, concurrence agences installées ; laisser l'accueil capter en secondaire sans page dédiée.

---

## 4. Limitations de cette analyse
- Analyse basée sur les résultats WebSearch au moment de l'audit (pas d'accès direct à la SERP Google rendue, pas de position ni volume de recherche réels — aucun chiffre de ce type n'a été inventé).
- Pas de vérification des featured snippets / PAA / AI Overview réels (WebSearch ne restitue pas ces éléments de mise en forme SERP de façon fiable) — à valider manuellement dans un navigateur si besoin de précision sur ces features.
- L'ampleur du mismatch de contenu sur les pages `/services/*` (section 0) a été détectée par l'extraction directe du cache HTML (title/H1/description), pas par une exploration ligne à ligne de chaque page — recommandé de relire chaque page en entier avant réécriture pour vérifier qu'aucun bloc de contenu "sites web" n'est déjà présent plus bas dans la page.
- Aucune donnée d'analytics (trafic actuel, taux de conversion réel) n'a été utilisée — le scoring persona est qualitatif, basé sur la structure de contenu observée dans le cache HTML.

---

## 5. Prochaines étapes suggérées
- `/seo page` sur `/services/nice` et `/services/plombier` pour un audit détaillé page par page avant réécriture.
- `/seo schema` pour corriger le schema `LocalBusiness` de l'accueil (description obsolète "externalisation admin 650-1950€/mois") et ajouter Article/FAQPage à l'article blog analysé en 1.4.
- `/seo local` si les pages villes sont réécrites, pour vérifier la cohérence GBP/NAP après refonte.
