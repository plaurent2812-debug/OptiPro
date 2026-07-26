# Audit qualité de contenu / E-E-A-T — opti-pro.fr
Repositionnement juin 2026 : « bras droit administratif » → « dev opérationnel » (sites vitrines 990€/1390€, web apps sur devis, maintenance 79€/129€ mois). Cible : artisans/TPE Alpes-Maritimes.

Date d'audit : 26 juillet 2026. Basé sur le cache HTML des 34 pages (34 fichiers) + code source Next.js.

---

## 1. NOTE GLOBALE : 42/100

Le site souffre d'un **repositionnement business inachevé** : environ un tiers des pages (10 pages `/services/*` + `/contact`) et la totalité des 14 articles de blog restent sur l'ancien métier (« bras droit administratif », 650-1950€/mois, 75€/h). Ce n'est pas un résidu cosmétique — ce sont des pages entières, avec leurs propres tarifs, FAQ et schema.org, qui contredisent l'offre actuelle (990€/1390€ site vitrine). En revanche, les pages cœur du nouveau positionnement (accueil, /le-service, /tarifs, /à-propos) sont bien construites, honnêtes sur les preuves (page /temoignages exemplaire), et le profil de Pierre Laurent (10 ans logistique + reconversion dev, référence SAPAL) est un vrai signal E-E-A-T différenciant.

---

## 2. ALIGNEMENT POSITIONNEMENT — Tableau article par article (blog)

Tous les articles ci-dessous ont été rédigés/publiés avant ou pendant le pivot (dates affichées : 25 mars → 13 mai 2026) et adressent le métier **admin externalisé**, pas le métier **dev web**. Sur chaque article : bio auteur bas de page identique et obsolète (« Aujourd'hui consultant indépendant à Vence — j'aide les artisans, TPE et PME ops à reprendre le contrôle de leur temps »), CTA de fin d'article vers packs admin (650-1950€/mois) qui n'existent plus dans l'offre commerciale actuelle, bloc « À lire aussi » qui boucle uniquement entre articles admin (aucun maillage vers /tarifs, /le-service ou pages ville/métier actuelles).

| # | Article | Sujet réel | Verdict | Justification |
|---|---|---|---|---|
| 1 | qu-est-ce-qu-un-bras-droit-administratif | Définition + tarifs bras droit admin | **Supprimer** ou **rediriger 301 → /le-service** | Contenu 100% ancien métier, mots-clés visés (« bras droit administratif ») hors cible nouvelle offre. Aucune valeur pour un prospect dev web. |
| 2 | comment-deleguer-devis-plombier | Déléguer devis à un assistant admin | **Supprimer/301** | Cas client chiffré (« plombier Cagnes-sur-Mer accompagné depuis 4 mois ») entièrement bâti sur l'ancienne offre (Pack Croissance 1200€/mois). Contradictoire avec l'offre actuelle. |
| 3 | 5-erreurs-admin-perdre-5000-euros-artisan | 5 erreurs de gestion admin | **Supprimer/301** | S'appuie sur « 30 artisans accompagnés/audités ces 18 derniers mois » — invérifiable et incompatible avec le calendrier du nouveau business (voir §6). |
| 4 | externaliser-admin-ou-embaucher-guide-decision | Comparatif externalisation vs embauche | **Supprimer/301** | Sujet et CTA 100% ancien métier (Pack Croissance, Pack Pilotage). |
| 5 | cout-cache-admin-tpe-calcul-complet | Calcul du coût caché de l'admin | **Supprimer/301** | Idem, CTA final vers Pack Croissance 1200€/mois. |
| 6 | externaliser-admin-vs-expert-comptable-difference | Bras droit vs expert-comptable | **Supprimer/301** | Idem. |
| 7 | facturation-artisan-gagner-du-temps | Optimiser sa facturation (outils) | **Réécrire** possible | Contenu outillage (Pennylane, Indy) plus générique/moins auto-promotionnel de l'ancienne offre — mais CTA et bio restent à corriger. Angle « productivité outillage » réutilisable si retravaillé côté dev/automatisation. |
| 8 | facturation-electronique-2026-2027-artisan-tpe | Réforme facturation électronique PDP | **Réécrire** (prioritaire) | Sujet réglementaire à forte valeur/SEO, indépendant du positionnement. Mais CTA final factuellement faux : « OptiPro accompagne la transition... inclus dans tous les packs mensuels » — ces packs n'existent plus. À corriger d'urgence (promesse commerciale non tenable). |
| 9 | ia-pour-artisan-par-ou-commencer-quand-on-est-pas-tech | Usages IA simples pour artisans | **Garder, réécrire CTA/bio** | Bon contenu, générique et intemporel, aligné avec le positionnement « dev + IA ». Juste corriger bio auteur et CTA de fin. |
| 10 | outils-qui-font-perdre-temps-artisans | 5 outils qui font perdre du temps | **Réécrire** | Contenu outillage réutilisable mais s'appuie sur « 9 artisans sur 10 » invérifiable (voir §6) et CTA vers diagnostic admin. |
| 11 | 3-prompts-qui-font-gagner-5h-par-semaine-artisan | 3 prompts IA copiables | **Garder, corriger CTA/bio** | Meilleur article du lot : concret, actionnable, sans promesse commerciale fausse (CTA renvoie vers « diagnostic gratuit », pas vers un pack admin explicite). Aligné avec le nouveau positionnement IA/dev. |
| 12 | site-web-artisan-combien-ca-coute | Combien coûte un site web artisan | **Garder** (déjà aligné) | Seul article structurellement aligné avec le nouveau business. Juste corriger bio auteur en bas de page. Bon candidat pilier SEO. |
| 13 | reporting-hebdo-excel-3h-en-4-minutes | Automatiser un reporting Excel avec l'IA | **Réécrire cible** | Bon contenu technique mais cible un « directeur logistique/transport », pas un artisan/TPE — hors persona du nouveau site. CTA vers « intervention OptiPro » (scripts Python) crédible mais à repositionner. |
| 14 | automatiser-devis-artisan | Automatiser ses devis (Pennylane, Dolibarr...) | **Réécrire** | Contenu outillage réutilisable, CTA vers diagnostic gratuit générique — à retravailler pour coller à l'offre web app/site vitrine plutôt qu'admin. |

**Synthèse blog : 6 à supprimer/rediriger, 6 à réécrire (CTA + parfois angle), 2 à garder en l'état (juste corriger bio/CTA).** Aucun article ne traite frontalement le nouveau métier (« pourquoi un artisan a besoin d'un site », « comment se passe un projet de web app ») hormis l'article n°12 — c'est un trou de contenu à combler en priorité.

---

## 3. RÉSIDUS D'ANCIEN DISCOURS SUR LES PAGES PRINCIPALES

| Page | Résidu trouvé | Sévérité |
|---|---|---|
| `/contact` | **H1 : « Déléguer votre admin, à partir de 650€/mois »** — contredit tout le reste du site (990€/1390€). Page de conversion finale du tunnel. | 🔴 Critique |
| `/contact` | Sous-titre : « Je vous propose ensuite une mission ponctuelle ou un pack mensuel adapté. » | 🔴 Critique |
| Layout global (`layout.tsx`, JSON-LD schema.org, toutes pages) | Description meta globale : « Externalisation de l'admin opérationnel... à partir de 650€/mois » + variante « Mission ponctuelle (75€/h) ou pack mensuel... de 650€/mois à 1 950€/mois » | 🔴 Critique (impacte le schema.org de chaque page) |
| `/temoignages` | « Seules les heures effectuées sont facturées » / « comment je vais traiter votre admin » | 🟠 Modéré |
| `cgv.html` (CGV) | Titre/description : « Conditions Générales de Vente d'OptiPro — missions ponctuelles et packs mensuels d'admin opérationnel » + tarifs Pack Essentiel 650€/mois cités en dur | 🔴 Critique (document contractuel obsolète) |
| Tous les articles de blog (14/14) | Bio auteur : « Aujourd'hui consultant indépendant à Vence — j'aide les artisans, TPE et PME ops à reprendre le contrôle de leur temps » | 🟠 Modéré (répété 14 fois) |
| `src/app/api/contact/route.ts` | Logique métier fait encore référence à « Pack Essentiel — 10h (650€/mois) » | 🟠 Modéré (vérifier si ce code est mort ou actif) |

**10 pages `/services/*` entières (4 pages métier : électricien/plombier/restaurateur/serrurier + 6 pages ville : Nice/Cannes/Antibes/Grasse/Mougins/Cagnes-sur-Mer)** sont in extenso sur l'ancien positionnement : H1 « Le bras droit administratif des artisans... », meta description « Externalisation administrative... Dès 650€/mois ou 75€/h », FAQ détaillant Pack Essentiel/Croissance/Pilotage, aucune mention de site web ou dev. Ce sont les pages les plus exposées au trafic local (SEO ville) et elles vendent un produit qui n'existe plus.

---

## 4. PAGES VILLES ET PAGES MÉTIER — Similarité et risque doorway

Méthode : extraction du texte hors header/footer/nav, comparaison par recouvrement de séquences de 6 mots consécutifs (n-grams), noms de ville/métier neutralisés pour isoler la structure du texte.

### Pages villes (nice, cannes, antibes, grasse, mougins, cagnes-sur-mer)

| Paire | Recouvrement (jaccard) | Recouvrement (overlap sur le plus petit texte) |
|---|---|---|
| nice / cannes | 11,8% | 21,5% |
| nice / antibes | 12,0% | 21,7% |
| nice / grasse | 12,9% | 23,8% |
| nice / mougins | 11,9% | 21,9% |
| nice / cagnes-sur-mer | 11,9% | 22,4% |
| cannes / grasse | 14,7% | 25,9% |
| cannes / cagnes-sur-mer | 14,2% | 25,6% |
| grasse / mougins | 14,6% | 25,7% |
| (moyenne sur les 15 paires) | **~13%** | **~23%** |

**Verdict villes : risque doorway modéré, pas critique.** Le recouvrement structurel réel (~13-15% en jaccard, ~22-26% en overlap) montre que chaque page ville a un contenu propre substantiel (spécificités locales : Festival/MIPIM à Cannes, parfumerie à Grasse, clientèle internationale à Mougins, Sophia Antipolis à Antibes). Ce n'est pas du duplicate content pur. Le problème n'est pas la similarité mais le **sujet obsolète** commun aux 6 pages (voir §3).

### Pages métier (électricien, plombier, restaurateur, serrurier)

| Paire | Recouvrement (jaccard) | Recouvrement (overlap sur le plus petit texte) |
|---|---|---|
| plombier / serrurier | **61,9%** | **77,5%** |
| électricien / plombier | 42,9% | 60,7% |
| électricien / serrurier | 39,6% | 56,9% |
| plombier / restaurateur | 35,9% | 52,8% |
| électricien / restaurateur | 32,0% | 49,1% |
| restaurateur / serrurier | 33,2% | 50,6% |

**Verdict métiers : risque doorway réel, notamment plombier/serrurier (77,5% de recouvrement).** Ces 4 pages partagent une structure quasi identique (« Quels sont les vrais blocages d'un [métier] indépendant » / « Pack Croissance — 20h » / mêmes FAQ) avec substitution du nom de métier et de quelques détails sectoriels. Combiné au fait que ces 4 pages vendent un produit obsolète, elles sont candidates à la suppression/refonte complète plutôt qu'à un simple toilettage.

---

## 5. E-E-A-T

| Facteur | Constat | Score /100 |
|---|---|---|
| **Experience (20%)** | SAPAL Signalisation (plateforme B2B, catalogue 2 500+ références, portail client, intégrations API) est une référence concrète et cohérente entre `/à-propos`, `/le-service` et `/tarifs`. ProbaLab.net (SPA Next.js/Supabase, paris sportifs) existe dans `src/data/projects.ts` mais n'apparaît dans aucune page HTML crawlée (`/à-propos`, `/le-service`) — projet référence non exploité côté contenu public. Un seul projet web (SAPAL) mis en avant réellement, ce qui est cohérent avec une activité qui démarre (juin 2026) mais reste un signal d'expérience limité en volume. | 55/100 |
| **Expertise (25%)** | Parcours de Pierre Laurent détaillé et cohérent sur `/à-propos` : 10 ans opérations/logistique (DBS Drive, Factory, Eddifis, GL Events Live), chiffres opérationnels (7 M€ ADV, 8 500 références, filiale créée). Reconversion dev via Claude Code/Cursor explicitement assumée (transparence rare et positive). Le risque : un développeur autodidacte depuis quelques mois qui propose du "web app sur mesure" à des TPE — l'expertise technique dev elle-même n'est étayée que par 1 projet (SAPAL), pas de portfolio plus large, pas de certification technique. | 50/100 |
| **Authoritativeness (25%)** | Aucune mention presse, aucun backlink externe visible dans le contenu, pas de profil LinkedIn détaillé au-delà du lien. Le compteur "Top 150 Champions de la Croissance Les Échos/Statista 2023" cité sur `/à-propos` concerne l'employeur (Factory), pas OptiPro — c'est correctement attribué mais ne construit pas l'autorité d'OptiPro lui-même. Aucun avis Google/Trustpilot agrégé (cohérent avec l'absence totale de témoignages, voir ci-dessous). | 35/100 |
| **Trustworthiness (30%)** | Point fort réel : la page `/temoignages` est un cas d'école de transparence — elle affiche explicitement l'absence de témoignages plutôt que d'en inventer, explique pourquoi, donne un calendrier honnête (premiers témoignages écrits ~août 2026, vidéo ~M6). Mentions légales et CGV présentes. Coordonnées complètes (téléphone, email, adresse Vence). **Mais** : CGV encore basées sur l'ancien business model (packs admin), ce qui crée une incohérence contractuelle/légale avec l'offre affichée sur `/tarifs`. Le H1 obsolète de `/contact` (650€/mois admin) nuit directement à la confiance au moment critique de la conversion. | 60/100 |

**Score E-E-A-T pondéré : (55×0,20)+(50×0,25)+(35×0,25)+(60×0,30) = 11+12,5+8,75+18 = 50,25/100**

Point notable positif à souligner : `src/data/testimonials.ts` confirme au niveau code que `TESTIMONIALS = []` (tableau vide, aucun témoignage inventé) — cohérence totale entre le code et le discours affiché sur la page publique. C'est le signal E-E-A-T le plus solide du site.

---

## 6. STATISTIQUES INVÉRIFIABLES DÉTECTÉES (contrainte anti-invention)

Pierre exige des chiffres réels uniquement. Les éléments suivants dans les articles de blog présentent des statistiques présentées comme des faits vécus, sans preuve ni source citée, et potentiellement incompatibles avec la chronologie réelle du business (activité démarrée en mai 2026 selon `/temoignages`, aucun client publié dans `testimonials.ts`) :

| Article | Citation | Problème |
|---|---|---|
| 5-erreurs-admin-perdre-5000-euros-artisan | « Sur les 30 artisans que j'ai accompagnés ou audités ces 18 derniers mois... » | 18 mois d'accompagnement contredit le calendrier "OptiPro a démarré en mai 2026" affiché sur `/temoignages`. Chiffre non sourcé, non vérifiable. |
| outils-qui-font-perdre-temps-artisans | « ... je vois revenir chez 9 artisans sur 10 » | Ratio précis sans échantillon ni méthode déclarés. |
| comment-deleguer-devis-plombier | Cas client détaillé : « plombier-chauffagiste de Cagnes-sur-Mer que j'accompagne depuis 4 mois... 38 ans, 10 ans d'activité, 2 salariés, ~14 000€ CA/mois » + métriques avant/après (18→22 devis/mois, taux signature 60%→85%, impayés 4200€→600€, ROI +10 800€) | Cas client présenté comme réel et chiffré dans le détail, alors qu'aucun témoignage client n'est publié ailleurs sur le site (page `/temoignages` dit explicitement qu'aucun client n'a encore autorisé de témoignage). Incohérence forte entre cet article et la transparence affichée sur `/temoignages`. **Point à vérifier en priorité avec Pierre : ce cas est-il réel et anonymisé, ou illustratif/composite ?** Si composite, doit être requalifié clairement en "exemple type" plutôt que présenté comme un accompagnement réel. |
| cout-cache-admin-tpe-calcul-complet | Cas type "artisan plombier TPE 3 personnes, Cagnes-sur-Mer" avec CA 250 000€, taux d'impayé 4-8% "selon études Banque de France et CAPEB" | La mention d'études CAPEB/Banque de France n'est pas sourcée (pas de lien, pas de référence précise) — à vérifier ou retirer si la source ne peut être produite. |
| Plusieurs articles | « Étude CAPEB 2023 : un devis envoyé sous 24h se signe à 80%... » (repris tel quel dans 3 articles différents) | Chiffre répété sans lien vers l'étude source — à vérifier son existence réelle avant de le laisser en ligne (repris mot pour mot, donc une seule vérification suffit pour les 3 occurrences). |
| facturation-artisan-gagner-du-temps | « Résultat couramment rapporté par les utilisateurs (témoignages publics éditeurs) : taux d'impayés divisé par 2 à 3 » | Formulation floue ("témoignages publics éditeurs" sans lien) — limite l'exposition mais reste une affirmation chiffrée non sourcée. |

**Recommandation : tout chiffre présenté comme un résultat client réel (cas Cagnes-sur-Mer notamment) doit être soit supprimé, soit requalifié explicitement en exemple pédagogique fictif ("exemple type", "cas illustratif"), soit remplacé par un vrai cas quand un premier client OptiPro dev web sera au dossier.** Le risque n'est pas seulement éthique : la page `/temoignages` prouve que Pierre applique une politique stricte de non-invention — ces articles sont en contradiction interne avec cette politique affichée.

---

## 7. ON-PAGE — Titles / Meta descriptions / H1

### Longueurs

| Page | Title (car.) | Meta desc (car.) | H1 |
|---|---|---|---|
| index | 55 | 138 | Je construis les outils web que vos concurrents n'ont pas encore. |
| le-service | 62 | 132 | Sites vitrines, web apps et outils métier sur mesure. |
| tarifs | 51 | 118 | Des tarifs clairs. Des livrables définis. |
| a-propos | 44 | 179 | Pierre Laurent |
| contact | 42 | 108 | **Déléguer votre admin, à partir de 650€/mois** ⚠ |
| temoignages | 33 | 133 | Ce que disent les clients OptiPro |
| services_nice | 79 | 170 | Le bras droit administratif des artisans et TPE niçois ⚠ |
| services_cannes | 81 | 165 | Le bras droit administratif des artisans et TPE cannois ⚠ |
| services_antibes | 84 | 163 | Le bras droit administratif des artisans et TPE antibois ⚠ |
| services_grasse | 82 | 152 | Le bras droit administratif des artisans et TPE grassois ⚠ |
| services_mougins | 82 | 145 | Le bras droit administratif des artisans et TPE mouginois ⚠ |
| services_cagnes-sur-mer | 90 | 150 | Le bras droit administratif des artisans et TPE cagnois ⚠ |
| services_plombier | 61 | 143 | L'assistant administratif des plombiers ⚠ |
| services_electricien | 61 | 168 | L'assistant administratif des électriciens ⚠ |
| services_restaurateur | 65 | 154 | L'assistant administratif des restaurateurs ⚠ |
| services_serrurier | 60 | 172 | L'assistant administratif des serruriers ⚠ |

Titles trop longs (>60 car., risque de troncature Google) : les 6 pages ville (79-90 caractères) et les 4 pages métier (60-65 caractères, à la limite). Toutes portent le même pattern générique « Assistant administratif à [ville] — Bras droit admin & opérationnel OptiPro | OptiPro » — répétition de la marque deux fois dans le title (« OptiPro » en fin de pattern ET dans le suffixe « | OptiPro »), gaspillage de caractères utiles.

Meta descriptions cohérentes en longueur (108-179 caractères, la cible optimale ~150-160 est globalement respectée) mais 100% orientées ancien positionnement pour les 10 pages services.

### Doublons / structure

- **Pattern de title dupliqué** : les 6 pages ville partagent exactement le même gabarit (« Assistant administratif à [Ville] — Bras droit admin & opérationnel OptiPro | OptiPro »), seul le nom de ville change — c'est un signal classique de pages générées par patron (SEO local), acceptable en volume mais à moderniser une fois le contenu villes réécrit pour le nouveau positionnement.
- **H1 dupliqué en structure** : « Le bras droit administratif des artisans et TPE [gentilé] » (6 fois) et « L'assistant administratif des [métier] » (4 fois) — dix H1 sur un total de 34 pages (29%) suivent ce schéma obsolète.
- **Balise title bien différenciée** sur les pages cœur nouveau positionnement (index, le-service, tarifs, à-propos, contact) — pas de doublon entre elles.
- **Aucune balise `<title>` vide ou manquante détectée** sur les 34 pages.

### Structure Hn des pages principales

- `index.html` : structure propre — 1 H1, 3 H2 (situations reconnues / prestations / FAQ / CTA final), H3 pour chaque carte produit. Bonne hiérarchie.
- `le-service.html` : 1 H1, 3 H2, 7 H3 — hiérarchie correcte, légèrement dense en H3 (dont "Compatible CDI" qui semble un résidu de ciblage salarié en reconversion, à vérifier le sens dans le contexte commercial B2C artisans).
- `tarifs.html` : 1 H1, 4 H2, 5 H3 (un H3 par offre) — clair.
- `a-propos.html` : 1 H1 (juste le prénom+nom, faible en mots-clés) suivi de nombreux H3 (parcours pro) — H1 pourrait être renforcé sémantiquement (ex : "Pierre Laurent — Développeur web pour artisans et TPE").
- Pages villes/métier : structure Hn interne cohérente et logique (Pourquoi/Ce que je prends en charge/FAQ), le problème n'est pas la structure mais le fond obsolète.

---

## 8. CONTENU MINCE

Rappel : le comptage brut des pages HTML inclut header/nav/footer identiques sur toutes les pages (~150-200 mots de "poids mort" par page). Les chiffres ci-dessous sont les comptages bruts observés ; le contenu utile réel est inférieur.

| Page | Mots (bruts, avec nav/footer) | Verdict |
|---|---|---|
| contact.html | 170 | 🔴 Contenu mince réel — une fois nav/footer retirés, il reste essentiellement le H1, un paragraphe et la FAQ. Acceptable pour une page de contact/conversion, mais à surveiller. |
| index.html | 621 | Correct pour une homepage (minimum recommandé 500 mots) — contenu utile net estimé ~400-450 mots après retrait nav/footer. Au-dessus du plancher mais sans marge. |
| le-service.html | 527 | Proche du plancher "page service" (min. usuel 800 mots) — contenu net probablement ~350-400 mots utiles. **Sous le plancher recommandé.** |
| tarifs.html | 680 | Contenu net ~500 mots utiles — correct pour une page tarifs (pas de minimum strict, la clarté prime sur le volume ici). |
| a-propos.html | 861 | Correct, bon niveau de détail biographique. |
| temoignages.html | 433 | Contenu net ~250-300 mots utiles — mince en volume mais c'est structurellement voulu (page volontairement sobre en attendant de vrais témoignages), donc pas un problème qualité au sens Google, plutôt un choix éditorial défendable. |
| Pages villes (moyenne) | ~800 | Au-dessus du plancher "page ville" (500-600 mots) en brut ; net probablement ~550-650 mots utiles — suffisant en volume, le problème est le sujet (obsolète), pas la longueur. |
| Pages métier (moyenne) | ~880 | Volume suffisant, même remarque. |
| Articles de blog (moyenne) | ~1500 | Bien au-dessus du plancher blog (1500 mots) pour la plupart — pas de problème de contenu mince sur le blog, au contraire (bonne profondeur). |

**Conclusion contenu mince : `/le-service` est la seule page du nouveau positionnement sous le plancher recommandé (page service, 800 mots).** C'est pourtant une page pivot du nouveau business — elle mériterait d'être enrichie (exemples de web apps, détail du processus, FAQ dédiée) plutôt que /contact qui reste volontairement courte pour ne pas freiner la conversion.

---

## 9. MAILLAGE INTERNE

- **Blog → pages business : quasiment inexistant.** Sur les 14 articles, le seul lien interne récurrent en fin d'article est le CTA vers "Réserver un appel" (généralement `/contact`, parfois implicite). Le bloc "À lire aussi" ne pointe jamais vers `/tarifs`, `/le-service`, ou une page ville/métier — il boucle en permanence sur 3 articles fixes (« Comment déléguer ses devis... », « 5 erreurs admin... », « Qu'est-ce qu'un bras droit administratif... »), qui sont eux-mêmes candidats à la suppression. C'est un maillage interne construit entièrement autour de l'ancien produit — à reconstruire de zéro.
- **Articles alignés nouveau positionnement (site-web-artisan-combien-ca-coute, 3-prompts, ia-pour-artisan) ne sont jamais mis en avant en "à lire aussi"** ailleurs sur le blog — ils sont orphelins du maillage alors qu'ils constituent le socle de contenu le plus réutilisable.
- **Pages métier/ville → entre elles : aucun lien croisé détecté** dans le texte extrait (pas de "voir aussi Nice/Cannes" sur la page Antibes, pas de lien plombier→électricien). Chaque page ville/métier est une île.
- **Pages métier/ville → /tarifs ou /le-service (nouvelle offre) : absent.** Logique puisque ces pages vendent encore l'ancienne offre — mais cela signifie qu'un visiteur arrivant sur une page ville ne découvre jamais l'offre actuelle (990€/1390€) sauf via le header commun.
- **Header/footer (present partout)** assurent un maillage minimal correct vers Le service/Tarifs/À propos/Contact/Blog/Témoignages — c'est le seul filet de sécurité qui relie l'ensemble du site au nouveau positionnement.

---

## 10. CONVERSION

### Points positifs
- Proposition de valeur claire et directe sur l'accueil : H1 "Je construis les outils web que vos concurrents n'ont pas encore." + sous-titre avec prix ("Sites vitrines à partir de 990€") dès le premier écran.
- Prix affichés explicitement sur `/tarifs`, `/le-service`, `index.html` et `/contact` (version alignée) — transparence tarifaire forte, rare et appréciée dans le secteur.
- CTA principal cohérent et répété : "Premier appel — gratuit" dans le header sur toutes les pages, "Réserver un appel gratuit" en CTA de section.
- FAQ présente sur les pages clés (index, contact, tarifs) traitant les objections courantes (différence avec une agence, qui gère la maintenance, comment se passe un projet).
- Formulation honnête et sans "urgence" artificielle ou dark pattern détecté.

### Points de friction / problèmes

| Problème | Sévérité |
|---|---|
| H1 de `/contact` contredit le prix annoncé partout ailleurs (650€/mois admin vs 990€ site vitrine) — un prospect qui clique sur "Réserver un appel" depuis l'accueil arrive sur une page qui semble vendre un autre produit. Risque de confusion ou d'abandon au moment critique. | 🔴 Critique |
| Les 10 pages `/services/*` (fort potentiel SEO local/métier) redirigent l'intégralité de leur trafic vers une offre obsolète — c'est une perte de conversion potentielle massive si ces pages reçoivent du trafic organique (recherches "plombier Nice", "électricien PACA", etc.), car le visiteur découvre un produit qui n'existe plus et doit re-comprendre l'offre actuelle via la nav. | 🔴 Critique |
| Aucune preuve sociale chiffrée disponible actuellement (témoignages vides) — assumé et expliqué honnêtement sur `/temoignages`, mais cela reste un point de friction réel pour la conversion tant que le premier vrai témoignage n'est pas publié (annoncé pour ~août 2026). | 🟠 Modéré, temporaire |
| Le blog (14 articles, probablement la plus grosse masse de contenu et de trafic SEO potentiel du site) ne convertit quasiment jamais vers l'offre actuelle : CTA vers packs admin obsolètes ou diagnostics génériques, jamais vers `/tarifs` avec les prix actuels. | 🔴 Critique |
| Pas de friction technique détectée sur le formulaire `/contact` lui-même (pas testé en soumission réelle, hors périmètre du cache HTML statique). | — non évalué |

---

## 11. RÉCAPITULATIF DES PROBLÈMES PAR SÉVÉRITÉ

### 🔴 Critique (à traiter en priorité, impact direct business/conversion/légal)
1. H1 + sous-titre de `/contact` sur l'ancien positionnement (650€/mois admin).
2. 10 pages `/services/*` (4 métier + 6 ville) entièrement sur l'ancien produit — title, meta, H1, FAQ, tarifs.
3. CGV (`cgv.html`) juridiquement basées sur l'ancien business model (packs admin) — incohérence contractuelle avec l'offre vendue sur `/tarifs`.
4. Meta description globale du layout (JSON-LD schema.org inclus) sur l'ancien positionnement — impacte le référencement structuré de tout le site.
5. 6 articles de blog dont les CTA font des promesses commerciales fausses ("inclus dans tous les packs mensuels" qui n'existent plus).
6. Cas client chiffré détaillé ("plombier Cagnes-sur-Mer, 4 mois d'accompagnement") potentiellement fictif ou anachronique, à faire valider par Pierre — contradiction avec la politique "zéro faux témoignage" affichée sur `/temoignages`.
7. Statistique "30 artisans accompagnés/audités ces 18 derniers mois" incompatible avec le calendrier affiché du business (démarrage mai 2026).

### 🟠 Modéré
8. Bio auteur obsolète répétée sur les 14 articles de blog.
9. Maillage interne du blog qui boucle sur lui-même sans jamais pointer vers l'offre actuelle.
10. Page `/le-service` sous le plancher de contenu recommandé pour une page service (527 mots bruts).
11. Statistiques CAPEB/Banque de France citées sans lien source, répétées dans plusieurs articles.
12. Similarité structurelle élevée entre pages métier (jusqu'à 77,5% plombier/serrurier) — risque doorway si le contenu était conservé tel quel après refonte.
13. Titles des pages ville/métier trop longs (jusqu'à 90 caractères) avec répétition de la marque.

### 🟡 Mineur
14. H1 de `/à-propos` peu riche en mots-clés (juste "Pierre Laurent").
15. Projet ProbaLab.net (présent dans le code `projects.ts`) absent de toute page publique visible — occasion manquée de renforcer le signal "Experience".
16. H3 "Compatible CDI" sur `/le-service` dont la pertinence commerciale mérite vérification.

---

## 12. RECOMMANDATIONS

**Priorité 1 — Corriger dans la semaine (risque conversion/légal) :**
- Réécrire le H1/sous-titre de `/contact` pour refléter l'offre actuelle (site vitrine 990€/1390€, pas 650€/mois admin).
- Mettre à jour les CGV pour décrire l'offre actuelle (sites vitrines, web apps, maintenance) et retirer les références aux packs admin.
- Corriger la meta description globale (`layout.tsx`) et tout schema.org associé.

**Priorité 2 — Décision produit sur les 10 pages `/services/*` et les 6 articles obsolètes :**
- Option A (recommandée si le SEO local ville reste stratégique) : réécrire les 6 pages ville pour le nouveau produit (site vitrine + web app pour artisans locaux), en conservant les spécificités locales déjà identifiées (saisonnalité, clientèle, événements) qui constituent la vraie valeur différenciante de ces pages.
- Option pour les 4 pages métier : vu leur similarité structurelle élevée (jusqu'à 77,5%), envisager une consolidation (moins de pages métier, mieux différenciées) plutôt qu'une réécriture 1:1 des 4 pages existantes.
- Rediriger en 301 les 6 articles de blog non réutilisables vers `/le-service` ou `/tarifs` plutôt que les supprimer sans redirection (préserver le éventuel jus SEO acquis).

**Priorité 3 — Combler le trou de contenu blog :**
- Le nouveau positionnement n'a quasiment aucun article dédié (seul "site-web-artisan-combien-ca-coute" est pleinement aligné). Prioriser des sujets comme : "Web app sur mesure vs Excel/papier : quand franchir le pas", "Comment se passe un projet de site vitrine avec OptiPro" (processus concret), un article détaillant le cas SAPAL comme étude de cas réelle.
- Reconstruire le bloc "À lire aussi" pour qu'il maille vers `/tarifs`, `/le-service` et les articles réellement alignés.

**Priorité 4 — Vérification factuelle avec Pierre (contrainte anti-invention) :**
- Confirmer ou clarifier le statut du cas client "plombier Cagnes-sur-Mer" (réel anonymisé / composite illustratif / à retirer).
- Vérifier la source réelle des chiffres CAPEB/Banque de France cités, ou les retirer.
- Clarifier "30 artisans accompagnés ces 18 derniers mois" au regard du calendrier réel du business.
- Mettre à jour la bio auteur des 14 articles pour refléter le positionnement actuel.

**Priorité 5 — Renforcement E-E-A-T :**
- Exploiter ProbaLab.net (déjà documenté dans le code) sur `/à-propos` ou `/le-service` en plus de SAPAL, pour montrer plus d'un projet réel.
- Enrichir `/le-service` (527 mots) pour dépasser le plancher recommandé, avec plus de détail sur le processus et des exemples concrets.
- Continuer la politique de transparence sur `/temoignages` — c'est le point fort E-E-A-T actuel du site, à ne pas dégrader en publiant des témoignages non vérifiés à l'avenir.
