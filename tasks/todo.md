# TODO — OptiPro

## Design « chirurgical » — EN REVUE, PR à valider par Pierre (2026-10-21)

Demande : un visiteur doit percevoir immédiatement la qualité (« il est meilleur que les autres »), sans que le site en fasse trop. Audit fait sur la production (1440 et 390 px, accueil, /optipro, /projets).

### Diagnostic : ce qui brouille la perception de qualité
1. Premier écran surchargé : puce-icône, H1 sur 4 lignes (5 sur mobile, césure « Alpes-/Maritimes »), paragraphe calé en bas à droite avec un grand vide au-dessus, deux boutons, bandeau de quatre cases, puis seulement la vitrine. Six éléments avant la preuve visuelle.
2. Tous les titres crient : H2 à 56 px presque égaux au H1 à 76 px, six sections de structure identique (puce + icône, H2, lede, panneau). Monotonie = « généré ».
3. Icônes dans des carrés partout (kicker, étiquettes de section, livrables, métiers, carte tarif) : le tic le plus reconnaissable des templates SaaS.
4. Effets décoratifs cumulés : halo vert flouté derrière la vitrine, lueur sur les jauges, dégradé vert en haut de la carte tarif, filet dégradé du bloc d’appel. Discrets un à un, trop ensemble.
5. Boîtes dans des boîtes : preuves en boîte, navigateur en boîte, jauges dans un panneau, carte tarif à sous-boîtes.
6. Captures rognées en 16:9 : le premier écran de Ro est coupé au milieu de son titre ; la preuve principale paraît tronquée.
7. Numéro de fin de page à 10 rem : trop lourd par rapport au reste.
8. Rayons incohérents (10 / 12 / 14 / 20 / 42 px), poids typographiques flottants (450 / 500 / 550 / 600).

### Plan : polir, resserrer, retirer (design « Système » conservé)
- [x] A. Échelle typographique unique : H1 ≈ 56–64 px sur 2–3 lignes, H2 ≈ 36–40 px, ledes 18 px, Geist Mono pour les étiquettes numérotées (01–06) et les métadonnées de mesure.
- [x] B. Sections : étiquette en gris (mot seul, ni icône ni numéro, voir leçon) à la place de la puce-icône ; fil vertical conservé (signature) mais plus fin ; rythme alterné (pleine largeur / deux colonnes) ; livrables et métiers en listes nettes sans icônes.
- [x] C. Premier écran : kicker texte, H1 en deux phrases courtes, paragraphe aligné en haut, un bouton primaire + un lien, preuves en une ligne de faits séparés par des filets (sans boîte), vitrine sans halo et capture à son vrai cadrage, téléphone posé proprement.
- [x] D. Retrait des effets : halo, lueur des jauges, dégradés décoratifs. Un seul accent (vert), trois usages maximum par écran.
- [x] E. Carte tarif : une bordure, un fond, chiffres tabulaires, sélecteur mois/année plus net.
- [x] F. Fin de page : numéro ramené à ≈ 6–7 rem, même grille que le reste.
- [x] G. Mobile : titre sans césure, preuves en liste, barre d’appel fixe conservée.
- [x] H. Jetons : rayons ramenés à 3 valeurs (8 / 12 / 24), poids à 3 (400 / 500 / 600).
- [x] I. Vérification : captures avant/après dans `tasks/apercus-design/`, 29 tests du contrat, lint, typecheck, build ; Lighthouse 13.4 sur le build local (mobile : 100 et 96 en performance, 100 accessibilité et SEO, 96 bonnes pratiques en http local ; bureau : 100 performance, LCP 0,6 s).
- [ ] Après fusion : remesurer la production (3 passages mobile) et mettre à jour `src/data/proof.ts` si les valeurs changent.
- [ ] Hors périmètre, à décider : l’image de partage (opengraph-image.tsx) garde ses cartes à liseré vert ; le CLAUDE.md du projet cite encore `optipro.fr` comme domaine alors que le site vit sur `pierre-laurent.fr`.

Hors périmètre : textes, prix, structure des pages, données ; aucune nouvelle dépendance.

## Correction « je code moi-même » — PUBLIÉ le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/32 fusionnée en `52f4f09` (autorisation explicite de Pierre). Formulation neutre « je conçois et je réalise » sur l’accueil, Qui suis-je, /optipro, page transporteurs et Réalisations ; test anti-régression. Production vérifiée sur les 5 pages : plus aucune affirmation de code personnel.

## Accueil « signature » — PUBLIÉ le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/31 : Ro sur ordinateur + téléphone (captures refaites le 21/10), accueil −21 % / −29 %, comparatif déplacé sur /optipro, barre d’appel mobile qui apparaît après le premier écran. Aperçus avant/après dans `02 - Business/OptiPro - Prospection transport 06/apercus-accueil/`. Pierre a demandé à voir avant publication.
- [x] Fusionnée en `2975d55` (autorisation explicite de Pierre). Production remesurée (Lighthouse 12.8.2, mobile, 3 passages) : performance 98/99/99 (médiane 99), autres 100, LCP médian 2 119 ms (2,1 s), élément LCP = titre H1 ; ordinateur 100 partout. Identique à `proof.ts` : aucune mise à jour.

## Tous les métiers ; page transporteurs réservée à la prospection — PUBLIÉ le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/30 fusionnée en `ca6b53a` (autorisation explicite de Pierre). Accueil : « Un site pensé pour votre métier » (artisans du bâtiment, coiffure et beauté, commerces et restaurants, transport et services) ; menu sans « Transporteurs » ; /optipro/transport toujours en ligne (200), au sitemap, reliée uniquement depuis la carte « Transport et services » de /optipro. Production vérifiée : 0 lien transporteurs sur l’accueil et le contact, 1 sur /optipro ; captures de sites chargées dans Chrome headless (le volet intégré masqué bloquait le chargement différé, cf. leçon du 19/10).

## Passe complète « un prospect doit se dire : il est très fort » — PUBLIÉE le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/27 fusionnée en `928cd54` (Pierre : « fusionne la PR #27, j’autorise la fusion sans revue, puis remesure la production »). Production remesurée après déploiement, Lighthouse 12.8.2, accueil, mobile, 3 passages : performance 98 / 99 / 99 (médiane 99), accessibilité, bonnes pratiques et SEO à 100, LCP 2,0 s (médiane), CLS 0 ; ordinateur : 100 partout. Identique à `src/data/proof.ts` : aucune mise à jour nécessaire.
- [x] Photo de Pierre publiée (PR #28, `35cb8f3`) : accueil « Pourquoi moi » et Qui suis-je, 800 × 800 WebP 27 Ko. Production remesurée ensuite (3 passages mobile) : 99/100/100/100 inchangés, LCP 2,1 s ; valeur affichée mise à jour à 2,1 s à la demande de Pierre (PR #29, `5c45d7d`), vérifiée en production.
- [ ] À chaque refonte de l’accueil : remesurer la production et mettre à jour `src/data/proof.ts` (la prévisualisation Vercel est protégée et ne se mesure pas).

Décisions de Pierre : mise en ligne en 3 semaines ; inclus dans les 890 € : rédaction des textes, référencement local, rapport de vitesse Lighthouse ; « Poste actuel » Pharmagreen retiré de Qui suis-je (reste sur le CV).

### Audit (production, 21/10/2026)
- Mesure Lighthouse 12.8 (Chrome local, production) : accueil 99/100/100/100 sur mobile (LCP 2,0 s, CLS 0, TBT 0 ms, 254 Kio) et 100/100/100/100 sur bureau ; /optipro 100 partout. Le site ne montre nulle part cette preuve vérifiable.
- Premier écran clair (titre, prix, appel, vrais sites), mais aucun élément de différenciation : rien ne dit pourquoi Pierre plutôt qu’un autre.
- « Ce que vous obtenez » reste générique (4 promesses vagues) ; aucun livrable concret.
- Pas de comparaison avec les alternatives (agence, faire soi-même), alors que le guide a des repères sourcés.
- Pas de délai de mise en ligne ; pas de garanties mises en avant alors qu’elles existent (prix fixe, site au client, sans engagement après 12 mois).
- Qui suis-je affiche « Poste actuel : Responsable des Opérations, Pharmagreen » : un prospect peut douter de la disponibilité.

### Plan (design « Système » conservé, poussé plus loin)
- [x] Accueil : bandeau de preuves sous le titre (100/100 Lighthouse mesuré, prix affiché, site au client, basé à Vence) et panneau « Ce site, mesuré par Google Lighthouse » avec les vrais scores datés.
- [x] « Ce que vous obtenez » → livrables concrets et vérifiables (conception sur mesure, mobile, vitesse, référencement technique local, hébergement et domaine, 1 h de modifications), selon ce que Pierre confirme.
- [x] Comparatif honnête OptiPro / agence / faire soi-même, chiffres agence tirés du baromètre sourcé, aucun avis inventé.
- [x] Section « Garanties » : prix fixe, site et domaine au client, sans engagement après 12 mois, un seul interlocuteur.
- [x] Déroulé avec délai de mise en ligne (si Pierre en fixe un).
- [x] Copie plus affirmée et plus concrète sur l’accueil, /optipro et /optipro/transport ; Qui suis-je recentré sur le créateur de sites.
- [x] Vérifications : contrat de tests étendu, lint, build, captures 375/1440, nouvelle mesure Lighthouse ≥ 99 sur toutes les catégories.

## Guide « Combien coûte un site internet pour une TPE dans les Alpes-Maritimes ? » — PUBLIÉ le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/25 fusionnée en `ed8ca45` (Pierre : « puis publie »). Page /optipro/prix-site-internet ; chiffres uniquement tirés du baromètre La Fabrique du Net (relevé juillet 2026, consulté le 21/10/2026, data/market.ts) ou de l’offre. Production vérifiée dans un vrai navigateur (chiffres, source, JSON-LD Article, sitemap, liens depuis /optipro et l’accueil).
- [x] Conditions confirmées par Pierre et publiées (PR #26, `5b4230a`) : hébergement et nom de domaine compris, domaine au nom du client, site et contenus au client, après 12 mois sans engagement avec préavis d’un mois. Carte tarifaire, FAQ /optipro et guide. Rappel donné à Pierre : l’offre Hobby de Vercel est non commerciale, à prévoir pour héberger les sites clients.
- [ ] Hors site : fiche Google Business Profile, Search Console (+ demande d’indexation du guide), annuaires avec NAP identique, premiers avis clients.

## Vrais sites + zone France à distance — PUBLIÉ le 2026-10-21

PR https://github.com/plaurent2812-debug/OptiPro/pull/24 fusionnée en `ab57bfa` (Pierre : « puis publie »). Maquettes fictives retirées, Ro Nutritionniste / La Parallaxe / Le Fond du sujet à la place (statut réel affiché) ; « partout en France à distance » dans l’offre, la FAQ et le JSON-LD (areaServed France), titres locaux inchangés. Production vérifiée dans un vrai navigateur sur /, /optipro, /optipro/transport. Avant : PR #23 (offre avant GitHub sur /projets, `62120a1`).

## Repositionnement commercial du site — PUBLIÉ le 2026-10-21

Plan validé par Pierre (« lance le plan tel quel »). PR https://github.com/plaurent2812-debug/OptiPro/pull/22 fusionnée en `113bbc2` sur autorisation explicite de Pierre (« fusionne la PR #22, j’autorise la fusion sans revue »), CI verte, déploiement Vercel terminé. Production vérifiée : 11 routes en 200, titres et menu commerciaux, CV hors menu, Chrome headless à 375 et 1440 px sur 6 pages sans débordement ni erreur console.

Demande de Pierre : « Le site doit d'abord servir à vendre mes services bien avant servir de CV. » Choix validés : on vend **uniquement les sites internet OptiPro** (apps et automatisation = preuves de savoir-faire, sans offre) ; parcours et CV **en retrait** (hors accueil et navigation principale, toujours accessibles).

### Accueil `/` : page de vente
- [ ] Premier écran : « Création de site internet dans les Alpes-Maritimes », promesse « créé et géré pour vous », prix (890 € puis 79 €/mois), CTA Appeler + Voir l'offre ; visuel = maquette (exemple fictif) au lieu du schéma « Système ».
- [ ] Sections dans l'ordre : ce que vous obtenez (4 bénéfices tirés de l'offre) → exemples (3 maquettes) + sites réels réalisés (La Parallaxe, Le Fond du sujet, Ro Nutritionniste en démonstration) → tarif (`OfferCard`) → bloc « Transporteurs » vers `/optipro/transport` → « Pourquoi moi » court (10 ans de terrain, je développe aussi des outils) → appel final.
- [ ] Retirés de l'accueil : frise de carrière, graphique Factory et outils, vitrine des applications, section Parcours. Le schéma « Système » est déplacé sur `/a-propos` (liens recâblés).

### Navigation et métadonnées
- [ ] Menu : Offre et tarifs · Transporteurs · Réalisations · Qui suis-je · Contact (« Savoir-faire » et « Mon CV » sortent du menu ; CV dans le pied de page).
- [ ] Titre et description du site, Open Graph, image de partage, manifeste : orientés « création de site internet, Alpes-Maritimes ». `/optipro` garde Vence et Nice, l'accueil vise le département (pas de cannibalisation).
- [ ] JSON-LD : `ProfessionalService` OptiPro mis en avant, description « sites internet » ; `Person` inchangé dans les faits.

### Pages secondaires
- [ ] `/a-propos` → « Qui suis-je » : même contenu factuel, intro orientée confiance pour un client, schéma « Système », appel vers l'offre ; CV en lien secondaire.
- [ ] `/contact` : focalisé sur le site internet (plus « applications, opérations ») ; `/projets` : renvoi vers l'offre en fin de page.
- [ ] Contrat de tests mis à jour (accueil commercial, CV hors navigation principale, aucune donnée inventée).

### Vérification
- [ ] lint, tsc, tests, build ; Chrome headless 375 / 1440 px sur `/`, `/optipro`, `/a-propos`, `/contact` ; PR (sans fusion sans accord).

## Apparition progressive au défilement — PUBLIÉE le 2026-10-19

Demande de Pierre relayée par la session principale (« je veux que le site s'affiche progressivement au fur et à mesure qu'on déroule ») ; fusion confirmée par Pierre dans cette session.
- [x] `ScrollReveal` (IntersectionObserver) dans le layout public : HTML serveur jamais masqué, masquage seulement hors mouvement réduit, premier écran jamais animé, seuil 0, opacity et translate uniquement, attributs retirés après apparition. Test de contrat dédié (18 tests).
- [x] PR #20 (CI verte, Preview prête) fusionnée en `d5243016681f400b3b554ac62402aabfe0f94e58` ; déploiement de production terminé.
- [x] Production vérifiée dans un vrai Chrome headless (protocole DevTools, script `reveal-check.mjs`) : accueil, /optipro, /projets, /a-propos à 1440 et 390 px, 0 bloc masqué au premier écran, 0 bloc invisible après défilement, CLS 0, aucun débordement ; mouvement réduit et sans JavaScript : tout affiché.

## Design « Système » (T2) — PUBLIÉ le 2026-10-19

Contexte : Pierre a rejeté l'esthétique de la refonte #18, puis trois directions artistiques (Galerie, Calibre, Riviera), puis a demandé un design tech. Il a choisi T2 « Système » parmi trois maquettes tech (Console, Système, Hardware) : « Ok pour T2, termine et publie sur le site ». Maquettes conservées hors dépôt dans `design-proposals/` (exclu via `.git/info/exclude`).

- [x] Portage de T2 dans Next.js sur la branche `claude/design-t2-systeme` : thème sombre Geist, `SystemMap` sans JS, toutes les pages déclinées, « × 25 » retiré, icône, manifeste et image de partage refaits.
- [x] Contrôles locaux : typecheck, lint, 17 tests, build ; 9 routes en 200, 404 correcte ; aucun débordement à 1440, 390 et 320 px ; nœud et bascule de prix fonctionnels ; « Terrain » ouvert par défaut sur mobile.
- [x] PR #19 : CI verte (41 s) et Preview prête ; fusion en `4bb4ff002a3b6136957f7d431a1ffa4b148bc4cd` ; déploiement Vercel de production terminé.
- [x] Production contrôlée : 12 routes en 200 et 404 correcte ; offre (890/79/790 €, 12 mois, 60 €, non cumulable, tel, 293 B) et mentions (TVA présente, phrase retirée, APE 70.22Z) en ligne ; « × 25 » absent ; redirections opti-pro.fr et /tarifs en 308 ; à 1440 et 390 px aucun débordement, aucune image cassée, aucune erreur console ; « Terrain » sélectionné par défaut sur mobile.

## Refonte « palette » + offre OptiPro — PUBLIÉE le 2026-10-19

Branche : `claude/refonte-palette-optipro` (créée depuis `main` à `515091f`). Rien n'est poussé ni déployé sans accord de Pierre.

### Audit (lecture seule, 2026-10-19)
- Structure : Next.js 16.3 / React 19, statique, CSS Modules, aucune dépendance hors Next + Analytics. Routes : `/`, `/projets`, `/a-propos`, `/cv`, `/contact`, `/mentions-legales`, `/confidentialite`. Les anciennes routes commerciales (`/tarifs`, `/services/*`, `/cgv`…) sont redirigées dans `next.config.ts`.
- Contrat de tests : `scripts/site-contract.test.mjs` verrouille un discours « personnel et non commercial » (exige « site personnel », interdit `/tarifs` et `/services`). Il doit évoluer avec la refonte.
- Contenus : titre « Projets, code & curiosité », hero « Relier les idées. Construire le concret. ». Sept projets personnels, parcours et CV complets dans `src/data/profile.ts`, GL Events et la renégociation des contrats transporteurs déjà sourcés. Aucun téléphone, aucune offre ni tarif. OptiPro n'apparaît que dans les mentions légales. La phrase « Il ne propose pas de prestations ni de prise de commande » figure dans les mentions.
- Design : sombre (#080c10), cyan/ambre, Space Grotesk + JetBrains Mono + Georgia italique. Soigné mais au code « portfolio dev ». Le premier écran ne dit pas ce que Pierre fait pour une entreprise.
- Performances (production, bureau) : TTFB 83 ms, DCL 233 ms, load 493 ms, 33 ressources, ~364 ko. Hauteur de l'accueil : 5 258 px sur bureau, 7 317 px sur mobile. Déjà très bon, à ne pas dégrader (pas de GSAP, interdit par le test).
- PharmaGreen : seuls l'intitulé du poste et son périmètre sont cités (parcours/CV), sans donnée ni projet. Cela doit rester ainsi.

### Plan validé par Pierre (franchise en base confirmée, fond clair, URL `/optipro`)
- [x] Direction artistique « Plan de lignes » : Barlow / Barlow Condensed, papier #eef0eb, quatre couleurs de ligne, jaune signalisation pour les appels à l'action. `NetworkMap` sans JS (radios + `:has()`), tracé animé une seule fois, respect de `prefers-reduced-motion`.
- [x] Accueil : hero + plan, bandeau OptiPro, réalisations reliées aux lignes, tableau du parcours, appel final.
- [x] `/optipro` : ticket d'offre, déroulé, mensuel/annuel, exemples, FAQ, CTA tel + mail, JSON-LD Service.
- [x] En-tête/pied/contact/404/manifeste/icône/OG/sitemap/README. Composants obsolètes supprimés (BuildSequence, SystemCore, NeuralBackdrop, ProfessionalOverview).
- [x] Mentions légales : phrase retirée, TVA 293 B ajoutée, APE 70.22Z inchangé et signalé.
- [x] Contrat de tests : 15/15. TypeScript, ESLint, diff check et `npm run build` local OK.
- [x] Rendu `next start` : 1440, 390 et 320 px sans débordement sur 8 pages. Sélection de ligne, menu mobile, Échap avec retour du focus. Console : seules les erreurs attendues `/_vercel/insights` en local. Accueil 4 061 px (bureau) contre 5 258 px auparavant.
- [x] Publication : Pierre demande « publie » puis confirme « Oui, fusionne la PR #18 ». PR #18 (CI verte, Preview Vercel READY) fusionnée en `6c9f9722aac1576eb50065d87838e7caae4ddb42` ; CI main `39205999045` ; déploiement Vercel du commit de fusion « Deployment has completed ».
- [x] Production contrôlée : 12 pages et ressources en HTTP 200 ; offre (890/79/790 €, non cumulable, tel:+33670259333, 293 B) et mentions (TVA ajoutée, phrase retirée, APE 70.22Z) présentes ; `/optipro` au sitemap ; redirections www, opti-pro.fr, /tarifs et /services conservées (308). Navigateur à 1440 et 390 px : titre, CTA, aucun débordement, aucune image cassée, aucune erreur console. Animation du plan gelée dans le volet masqué (artefact connu) ; état final vérifié en forçant la fin : tracés pleins.

### À confirmer par Pierre
- Contenu exact de l'abonnement (hébergement, nom de domaine, e-mail ?) : la page ne promet que la mise en ligne, le suivi et 1 h de modifications.
- Ce qui se passe après les 12 mois (reconduction, résiliation) : non affiché.
- CGV ou contrat écrit pour un engagement de 12 mois.
- Code APE 70.22Z (conseil de gestion) à confronter à l'activité de création de sites (plutôt 62.01Z).

## Direction artistique du portfolio — PUBLIÉE le 2026-10-01

Objectif : donner davantage de personnalité au site, présenter les interfaces réelles dès l’accueil et raccourcir la découverte sur mobile. Pierre autorise une autonomie complète, y compris les décisions de design et la publication dans la continuité de sa demande.

- [x] Vérifier la Production, les proportions sur ordinateur/mobile et le catalogue actuel ; lire les instructions et les leçons pertinentes.
- [x] Recomposer l’accueil : ouverture visuelle, trois projets développés, quatre projets plus compacts, méthode et parcours ensuite.
- [x] Simplifier les aperçus, remplacer l’affiche Idéoscope par son interface réelle et harmoniser la page Projets ; icône, image de partage et couleurs du manifeste alignées.
- [x] Vérifier les contenus, le clavier, les ancres, les images, les largeurs 320/390/768/1024/1440 et les contrôles existants.
- [x] Livrer par GitHub/Vercel et vérifier la version publiée sur pierre-laurent.fr.

Critères : sept projets accessibles avec leur statut exact, aucun débordement, liens et menu fonctionnels, premiers aperçus avant la méthode, accueil sensiblement plus court, Production READY au SHA livré. Préserver les modifications préexistantes et le journal.

Préparation vérifiée : 12 tests, ESLint, TypeScript et build local réussis ; image de partage et icône contrôlées visuellement. Accueil et Projets contrôlés aux cinq largeurs, Parcours et Contact à 320/1440 px, aucun débordement. Skip link, menu mobile avec Échap et retour du focus, quatre exemples natifs au clavier, ancres et images contrôlés ; aucun avertissement/erreur navigateur observé en développement. Sur mobile 390 px, sélection à 857 px au lieu de 2764 px ; accueil à 7194 px au lieu de 11365 px. Sur ordinateur 1440 px, accueil à 5389 px au lieu de 8320 px. Nouvelle capture Idéoscope réelle sans réponse personnelle, WebP 1280 × 800 (67,1 ko). Preuves : `/tmp/pierre-design-20261001/`. Mesures sur dimensions simulées, sans appareil physique.

Publication vérifiée : commit `6bd9c9d3cf70e835248567c2f2c7e2f8d73e0f4d`, PR #17 fusionnée après CI verte `36921548637` (39 s) et Preview READY `dpl_H3bRqVv4FUwkHAYHN6Ubqx9faCcD` contrôlée au même SHA. Fusion `515091f42d76450b5d7894f88dc70a59eeb377ef` ; CI main `36921747946` réussie (34 s). Déploiement `dpl_92RGJWwTp7Q88EEko8XqioPqt71o` READY, cible Production, SHA identique, domaine associé sans erreur, build distant en 16,5 s. Pages et ressources publiques contrôlées ; image Idéoscope et icône identiques par SHA-256, manifeste mis à jour, image de partage PNG valide. Production à 1440/390 px : sept projets, aucun débordement, nouvelles polices/styles présents, menu mobile et ancre Idéoscope fonctionnels, images chargées et aucun avertissement/erreur navigateur observé. Accueil publié : 5388 px sur ordinateur, 7194 px sur mobile. Aucun log runtime de niveau error retourné sur la fenêtre contrôlée. Capture finale : `/Users/pierrelaurent/.codex/visualizations/2026/10/01/01a0f8a7-92b2-7ee2-9ce2-46d3b0e300e4/portfolio-publie.jpg`. Journal et fichiers préexistants préservés ; une leçon ajoutée sans modifier le contenu antérieur ; serveur temporaire de validation arrêté, `main` synchronisé. Les avertissements de maintenance GitHub Actions (Node 20 et future image Ubuntu) n’affectent pas les contrôles réussis et restent hors du périmètre de la refonte.

## Le Fond du sujet et Idéoscope — PUBLIÉ le 2026-10-01

Objectif : présenter les deux sites dans le portfolio, avec liens publics, descriptions vérifiées et visuels réels.

- [x] Vérifier le catalogue existant et les deux sites publics ; conserver la fiche Idéoscope déjà préparée localement.
- [x] Ajouter Le Fond du sujet sur l’accueil et `/projets`, adapter les raccourcis et la numérotation des sept projets.
- [x] Vérifier les liens, les images et le rendu sur ordinateur et mobile, puis exécuter les contrôles existants.
- [x] Pierre demande « publie » : commit, push, PR, contrôles et builds distants, fusion et déploiement Production autorisés pour les deux ajouts.
- [x] Publier par le workflow GitHub/Vercel existant et vérifier les deux projets sur le domaine public.

Vérifications : 12 tests, TypeScript, ESLint et diff check réussis. Sept projets uniques, liens exacts, ressources présentes et dimensions de la nouvelle image contrôlés. Accueil à 1440, 768, 390 et 320 px ; page Projets à 1440, 390 et 320 px ; raccourcis vers les deux fiches fonctionnels, images chargées, aucun débordement ni avertissement/erreur navigateur observé. Capture réelle du Fond du sujet optimisée en WebP (52,6 ko) et favicon officiel conservé. Preuves : `/tmp/portfolio-sites-20261001/`. Contrôle sur dimensions simulées, sans appareil physique ni build de production.

Publication : commit `85740fb402c967169220d6aaa3f8f05da5693c52`, PR #16 fusionnée après CI verte (`36906587022`, 39 s) et Preview Vercel READY vérifiée. Fusion `6c8f8c96bfd7e30e2d7c3e3b71b39296a0cea8c7` ; CI main `36906720006` réussie. Déploiement `dpl_DWL2j8ZaM7iU6d8r7qLQeCHr6utu` READY, cible Production, SHA identique, domaine `pierre-laurent.fr` associé sans erreur, build distant en 15,2 s. Les deux pages et quatre nouvelles ressources répondent en HTTP 200 ; SHA-256 des ressources identiques aux fichiers livrés. Production contrôlée à 1440 et 390 px : sept projets, liens exacts, raccourcis fonctionnels, images et icônes chargées, aucun débordement ni avertissement/erreur navigateur observé. Aucun log runtime de niveau error retourné pour ce déploiement sur la fenêtre contrôlée. `main` local synchronisé ; cinq fichiers préexistants hors livraison préservés et contrôlés par empreinte. Aucun build local, changement de domaine, de paramètres ou de données.

## Ajout Idéoscope 2027 — INTÉGRATION LOCALE le 2026-09-19

- [x] Site public contrôlé : questionnaire civique en ligne, 40 questions, 7 mouvements, sources et méthode visibles, réponses conservées uniquement dans le navigateur.
- [x] Projet ajouté en tête de l’accueil et de `/projets`, avec lien public, identité officielle, aperçu optimisé et renumérotation cohérente des six projets.
- [x] Tests structurels (12/12), TypeScript, ESLint et diff check réussis.
- [x] Rendu local contrôlé sur ordinateur et à 390 × 844 px : image chargée, lien exact, aucun débordement, overlay, avertissement ou erreur navigateur.
- [x] Publication livrée le 2026-10-01 avec Le Fond du sujet, après demande « publie » de Pierre ; PR #16 et Production vérifiée (voir entrée ci-dessus).

## Refonte d’auteur — EN PRODUCTION le 2026-09-05

### Publication Production demandée le 5 septembre

- [x] Pierre demande « pousse en prod » après validation du push et autorisation du build distant `npm run build` : préparer la PR, vérifier sa CI, fusionner et contrôler la Production issue du workflow existant.
- [x] État rafraîchi : `origin/main` à `43985d6`, branche de refonte à `72dcaf3`, un seul commit d’écart sans divergence ; Preview de ce SHA READY et déjà vérifiée. Modifications locales de suivi préservées.
- [x] PR #14 créée puis fusionnée après CI verte (run `33992311161`, lint/TypeScript/dix tests/build, 35 s) et Preview Vercel READY sur le SHA `72dcaf3`.
- [x] Fusion `6b9f2d95bd351e842a7af2e67deae2aed6ed605f` ; CI main `33992363961` réussie. Déploiement `dpl_8gNvVXL72ZvLVRXCUjTEVG3GL472` READY, cible Production, SHA de fusion identique, alias `pierre-laurent.fr` associé sans erreur, build en 23 s.
- [x] Domaine public : cinq pages et nouvelle image ProbaLab en HTTP 200, canoniques et corrections présentes, SHA-256 de l’image identique au fichier livré. Navigateur à 1440 et 390 px : module Produit → Opérations → GL Events fonctionnel, poste Pharmagreen actuel, ProbaLab d’origine commune, image chargée et remplissant l’écran ; aucun débordement ni violation axe dans les vues contrôlées. Icônes du premier écran chargées et capture finale inspectée.
- [x] Aucune erreur/alerte console, requête échouée parmi 163 observées, ni log runtime de niveau error retourné pour ce déploiement pendant la vérification. Preuves : `/tmp/pierre-redesign-release-20260905/`.
- [x] `main` local synchronisé avec `origin/main` à `6b9f2d9` ; suivis préexistants, AGENTS et SVG abandonné conservés localement. Aucun build local, changement de domaine, variable ou donnée.

### Envoi GitHub demandé le 5 septembre

- [x] Pierre a demandé « ok push » : branche et commit préparés pour la refonte validée. `codex/portfolio-redesign-20260905`, commit `72dcaf35892e6abf4ede0e6fb02046b2b48f33aa` (32 fichiers). Fichiers de suivi, AGENTS préexistant et SVG abandonné conservés localement hors commit.
- [x] Origin rafraîchi : main reste à `43985d671b8f4c5914a3b60f9d4e62b42cd534aa`. TypeScript, ESLint, dix tests et diff check réussis.
- [x] Configuration Vercel vérifiée en lecture seule : intégration GitHub OptiPro active, `createDeployments=enabled`, branche Production `main`, aucun mécanisme d’ignore, framework Next.js utilisant le script `npm run build`.
- [x] Pierre a répondu « oui » à la demande explicite d’autorisation du build automatique `npm run build` déclenché par le push de branche en Preview.
- [x] Branche `codex/portfolio-redesign-20260905` poussée avec suivi distant ; SHA GitHub vérifié : `72dcaf35892e6abf4ede0e6fb02046b2b48f33aa`. Aucun workflow GitHub Actions sur cette branche seule, conformément aux déclencheurs existants.
- [x] Preview Vercel `dpl_J9UZzM3Trf59NkiuJaw9Hm6sJMWU` READY, cible Preview (`target: null`), SHA identique ; build réussi en 20,6 s. URL : https://pierre-laurent-o6vve8zfy-optipro-projects.vercel.app/.
- [x] Preview vérifiée dans le navigateur intégré authentifié : accueil et nouveau module visibles ; sélection Opérations puis lien vers GL Events fonctionnels ; Pharmagreen au présent et deux repères seulement en introduction ; origine partagée de ProbaLab et capture optimisée chargée, remplissant l’écran du téléphone. Aucun débordement sur la vue Projets contrôlée. Protection Vercel conservée ; onglet de contrôle fermé.
- [x] `origin/main` reste à `43985d671b8f4c5914a3b60f9d4e62b42cd534aa`. Aucun build local, PR, fusion ou déploiement Production ; ces dernières étapes restent hors périmètre.

### Retours visuels de Pierre — 5 septembre

- [x] Remplacer l’anneau abstrait du premier écran par une représentation compréhensible du besoin, de la construction et de l’outil obtenu, avec des exemples liés au parcours et aux projets. Exemple initial : Ferdinand ; quatre sélections natives et liens vers les projets, le parcours et la méthode.
- [x] Vérifier les quatre facettes, le clavier, le rendu sans JavaScript et les quatre formats de l’accueil ; conserver une présentation lisible sans animation. Seize cas à 1440, 1024, 390 et 320 px : hauteur du module stable, aucun débordement ni violation axe. Clavier et navigation réelle testés, aucune erreur console ni requête échouée. TypeScript, ESLint, dix tests et diff check verts ; aucun build.

- [x] Retirer le repère « 1 000+ postes » de l’introduction du parcours et répartir les deux repères restants sur deux colonnes. Pharmagreen formulé explicitement au présent : « Je pilote la logistique, l’administration et la data de Pharmagreen. » Parcours contrôlé visuellement dans le navigateur intégré, CV actualisé confirmé dans l’onglet de Pierre ; TypeScript, ESLint, dix tests et diff check réussis.

- [x] Préciser l’origine commune de ProbaLab, une idée pensée avec un ami : résumé de l’accueil, accroche et récit de la fiche. Rendu serveur local des deux pages vérifié ; TypeScript, ESLint, dix tests et diff check réussis. Aucun build ni publication.

- [x] Remplacer la capture ProbaLab par une vue réelle plus lisible et faire remplir l’écran du téléphone.
- [x] Mettre Pharmagreen au présent dans l’accueil, le parcours et le CV.
- [x] Remplacer les invitations à prendre contact par une conclusion personnelle centrée sur les projets.
- [x] Vérifier les vues concernées et les contrôles locaux, sans build ni publication.

Retours traités : nouvelle capture publique de l’exemple de comparaison ProbaLab, écran fixe et téléphone entièrement cadré ; Pharmagreen « Depuis septembre 2026 » ; conclusion « La curiosité continue. » et invitations secondaires neutralisées. Vingt vues responsive et axe sans violation, remplissage des deux téléphones vérifié, lien final testé aux quatre formats. Captures et preuves dans le sous-dossier `redesign/retours` cité au bilan.

Périmètre initial de l’exploration : travail local, aucun build sans accord sur la commande exacte. Le commit, le push et la Preview ont ensuite été autorisés et réalisés comme indiqué ci-dessus. Notes préexistantes sauvegardées dans `/tmp/pierre-redesign-20260905/`.

- [x] Lire toutes les consignes, le brief, les leçons et l’historique ; inventorier Git, les contenus et les composants.
- [x] Auditer le rendu public et conserver les captures avant ; arrêter la direction visuelle.
- [x] Créer le système visuel et l’accueil : identité, pensée/construction, projets, parcours, contact.
- [x] Harmoniser Projets, Parcours, CV, Contact ; conserver données, statuts et SEO.
- [x] Vérifier TypeScript, ESLint, tests, diff ; vérifier les cinq pages à 1440×900, 1024×768, 390×844 et 320×568.
- [x] Vérifier clavier/menu/ancres, réduction du mouvement, rendu serveur, console, réseau et débordements ; produire les captures et le bilan avant/après.


Bilan : `tasks/redesign-2026-09-05.md`. Démo locale : `http://127.0.0.1:3000/`. Vingt cas responsive validés, dix tests verts, aucune erreur console ou requête échouée ; avertissement Next dev LCP au défilement automatisé documenté. En attente : validation de la direction par Pierre.

## Visuels portfolio Ro / ProbaLab — EN PRODUCTION le 2026-08-31

- [x] État local et consignes relus ; lien stable Ro vérifié dans les preuves du projet et le navigateur.
- [x] Lien Ro remplacé par `https://ro-nutritionniste.vercel.app` (HTTP 200) ; CTA « Visiter le site ». Stade prototype conservé car le site public se présente encore comme une démonstration.
- [x] Ro : capture de l’accueil réel et logo officiel ; ProbaLab : capture mobile de `/analyser`, exemple explicitement pédagogique et sans donnée personnelle. Assets WebP locaux (~80 Ko + 2 Ko + 70 Ko) ; anciennes images conservées.
- [x] Dimensions intrinsèques renseignées dans les données et utilisées sur les deux pages ; fenêtre Ro en 16:9 pour éviter de couper le visuel.
- [x] Accueil et fiches contrôlés dans le navigateur ; images chargées, lien externe sécurisé, aucune erreur/alerte console ; largeurs 320, 390 et 1280 sans débordement. Lint, TypeScript, 10 tests existants et diff check verts.
- Preuves : `/tmp/portfolio-project-visuals/`. Démo disponible sur `http://127.0.0.1:3000/`. Vérification mobile par viewport, sans appareil physique.
- [x] Pierre a demandé « Publie » : commit, push, PR, compilation distante existante `npm run build`, fusion et déploiement Production autorisés. Aucun build local, changement DNS, secret ou données.
- [x] Commit `068d78483bbef5d28838fa08657cc28143537690`, PR #13 fusionnée après CI verte (38 s) et vérification de la Preview `dpl_AqphwFYAx4JUvPEEQEiuRC9GBBcC` ; aucun message navigateur error/warn.
- [x] Production `dpl_ECkMxwC8g1tceRfK8JUDkyMjL1QL` READY, cible Production, SHA `43985d671b8f4c5914a3b60f9d4e62b42cd534aa`, domaine `pierre-laurent.fr` associé sans erreur. Build Vercel 17,8 s ; CI main `33403050484` verte en 33 s.
- [x] Accueil et `/projets` du domaine canonique en HTTP 200 avec les nouvelles images et le lien Ro ; ancien lien absent. Les 3 assets publics répondent 200 et correspondent aux fichiers locaux (SHA-256 identiques).
- [x] Navigateur Production : nouveaux visuels chargés, Ro contrôlé sur ordinateur et ProbaLab à 390 px sans débordement ni erreur/alerte console ; aucun log runtime error sur le déploiement lors du contrôle.
- Preuves de publication : `/tmp/portfolio-project-visuals/release/`. `main` synchronisé avec `origin/main` ; suivis locaux préexistants et AGENTS conservés hors commit. Avertissement CI de dépréciation Node 20 des actions existantes, non bloquant.

## Portfolio personnel : priorité aux projets — EN PRODUCTION le 2026-08-31

- [x] Fin de session demandée par Pierre ; livraison et points de reprise consignés dans `tasks/journal.md`, sans build, commit ni push documentaire.

- [x] Revue de l’architecture, des contenus, du rendu actuel et des liens ; état local préservé
- [x] Direction confirmée par Pierre : projets personnels d’abord, parcours professionnel accessible pour les contacts et recruteurs
- [x] Accueil recentré sur les projets, aperçu concret dès le hero et textes plus courts
- [x] Navigation, page Projets, passerelle professionnelle, contact et partage cohérents
- [x] Animations conservées : mobile 0 → 0,589 → 1, ancres et états desktop contrôlés ; sortie vers le parcours fonctionnelle
- [x] 30 contrôles de largeur sur 5 pages à 320, 390, 768, 980, 1024 et 1440 px : aucune largeur débordante ni ancre interne manquante après correction de la course des modules animés
- [x] 7 pages + sitemap, robots, manifest et Open Graph en HTTP 200 ; titres/canoniques contrôlés, aperçu de partage inspecté
- [x] 4 liens externes (ProbaLab, démo Ro, GitHub, LinkedIn) en HTTP 200 ; accès mobile aux fiches, parcours et CV vérifié, menu fermé après navigation
- [x] Lint, TypeScript, 10 tests existants et diff check verts ; aucun nouveau package, aucune donnée professionnelle inventée
- [x] Contraste des textes discrets relevé à 5,21:1 sur le panneau sombre ; mise en page des fiches mobile revue pour lire le projet avant son visuel
- [x] Contenu principal et ordre projets → coulisses → parcours présents dans le HTML serveur sans JavaScript ; préférences de réduction du mouvement conservées
- [x] Mode statique à 844 × 390 vérifié (`data-scroll-motion=false`), menu mobile vers CV validé ; quatre visuels chargés et aucune erreur/alerte dans une nouvelle session de vérification après ajustement du chargement des images
- Limites des contrôles : navigateur avec dimensions mobiles, pas d’iPhone physique ; aucun build local. CV imprimable conservé sans régénérer le PDF ni lancer une impression réelle.
- Preuves : `/tmp/pierre-portfolio-review/`, `/tmp/pierre-portfolio-http.json`, `/tmp/pierre-portfolio-og.png`. Démo : `http://127.0.0.1:3000/`. Branche de préparation : `codex/portfolio-projects-first`, fusionnée dans `main`.
- Leçons ajoutées : priorité éditoriale du portfolio et dimensions des animations au premier état. Fichiers de suivi et AGENTS préexistants préservés.
- [x] Pierre a validé la démo et demandé la mise en ligne (« Déploie la sur le vrai site ») : commit, push, PR, compilation distante existante (`npm run build`), fusion et déploiement Production autorisés. Aucun build local nécessaire.
- [x] Commit `abba9b4f88a5a7ee2851875d6f3443a60afa64ca` poussé ; PR #12, CI PR `33342045166` verte (35 s, build inclus), Preview `dpl_4af6VKoZwaC7c1vrgU13YZfXJmJT` READY (18,2 s). Accueil, fiche Ferdinand et CV vérifiés dans le navigateur authentifié, aucune erreur/alerte.
- [x] PR #12 fusionnée après vérification du SHA ; `main` / `origin/main` à `1ab8f4b28533f1d9162d27622568ce7af8d2732b`. Fichiers locaux de suivi et AGENTS préservés.
- [x] Production `dpl_F72bHXp2fTFvMFTM8p7Aok9hCoxn` READY, cible Production, SHA `1ab8f4b28533f1d9162d27622568ce7af8d2732b`, domaines apex/www et anciens domaines associés. Build Vercel 18,7 s ; CI main `33342134581` verte en 34 s.
- [x] `https://pierre-laurent.fr` : 7 pages et 4 ressources en HTTPS 200, titres/canoniques et ordre projets → coulisses → parcours conformes, CV avec Pharmagreen. Image Open Graph identique à la version locale validée (SHA-256 contrôlé).
- [x] Nouvel accueil confirmé par DNS-over-HTTPS Cloudflare et Google, sans désactiver TLS ; les variantes www et anciens domaines redirigent en 308 en préservant chemin et paramètres. Aucune modification DNS ou e-mail.
- [x] Même Production testée dans le navigateur sur `optipro-website.vercel.app` : navigation mobile accueil → fiche Ferdinand → parcours → CV, menu fermé et bouton d’impression présent ; animations et passerelle professionnelle vérifiées.
- [x] Aucun log Vercel error/fatal trouvé pour cette Production. Avertissement de dépréciation Node 20 des actions GitHub existantes, non bloquant.
- Preuves Production : `/tmp/pierre-portfolio-release/` ; le domaine canonique a été contrôlé via les résolveurs publics car le résolveur réseau local garde encore temporairement le précédent A OVH. Aucun réglage réseau local modifié.
- Livraison terminée : `main` synchronisé ; seuls `tasks/todo.md`, `tasks/journal.md` et `AGENTS.md` préexistants restent locaux, pour éviter un rebuild documentaire.

## Parcours professionnel et projets personnels — EN PRODUCTION le 2026-08-31

- [x] CV lu et état actuel du site contrôlé ; modifications de suivi préexistantes conservées
- [x] Direction : Pierre Laurent, opérations / logistique / administration / data et création numérique personnelle
- [x] Accueil avec proposition de valeur, repères professionnels sourcés et accès distincts au parcours et aux projets
- [x] Parcours détaillé et CV web imprimable, avec prise de poste Pharmagreen en septembre 2026 sans résultats inventés
- [x] Navigation, contact, présentations des projets et métadonnées cohérents ; rôle et compétences illustrées par chaque projet
- [x] Contrôles locaux TypeScript, lint, 10 tests et `git diff --check` verts
- [x] 7 routes en HTTP 200 ; 30 contrôles de largeur sur les 5 pages principales à 320, 390, 768, 980, 1024 et 1440 px sans débordement ; aucun message d’erreur navigateur ni requête HTTP en erreur pendant ces contrôles
- [x] Navigation Parcours → CV → projet, menu mobile, lien email et déclenchement du bouton d’impression vérifiés
- [x] Rendu d’impression contrôlé : fond blanc, décor/navigation masqués ; aperçu CSS inspecté, sans générer ni modifier de PDF. Sauvegarde PDF réelle et impression physique non effectuées.
- [x] Animations et ancres professionnelles/personnelles vérifiées à 390 et 1440 px, progressions intermédiaires 0,501 / 0,502 ; contenu accessible sans JavaScript et en réduction du mouvement
- [x] Image de partage en HTTP 200 et inspectée ; `/cv` présent dans le sitemap
- [x] Analytics réservé à la production pour éviter le chargement externe bloqué par la CSP en développement ; leçon ajoutée
- Site publié : `https://pierre-laurent.fr/` ; CV : `https://pierre-laurent.fr/cv`. Démo locale conservée sur `http://127.0.0.1:3000/`.
- Preuves locales : `/var/folders/6k/5b2hxm4d1tqckr3ql51c6vqc0000gn/T/pierre-site-demo-5gxU0z/` (captures et rapports de vérification).
- [x] Démo validée par Pierre (« deploy c’est top ») : publication demandée via commit, push, PR, CI distante et mise en Production
- [x] Contrôles distants, fusion et vérification du site public
- [x] Commits `7271ae4` (parcours/CV) et `06184db` (domaine) poussés ; PR #11 ouverte. Preview Vercel `dpl_2d6LQwDD8jTrKY38LD535hE999pi` READY, SHA `06184dbe08b11d5524491af9f9c6bbf2a9977d1e`, cible Preview.
- [x] Preview : accueil, parcours, CV, projets, contact, sitemap et robots vérifiés par HTTP authentifié ; contenu attendu et nouveau domaine présents. Redirections locales des trois variantes de domaine testées en 308 avec chemin et paramètres conservés.
- [x] CI PR `33340384441` réussie : lint, TypeScript, tests et build verts. PR #11 fusionnée après validation DNS/HTTPS ; `main` à `29ce001fbe3b5f1a374a9c5e5e526d32f270f7b0`.
- Périmètre de publication étendu par Pierre : raccordement de `pierre-laurent.fr` chez OVH et Vercel autorisé. Aucun build local ni changement Supabase. Pas de copie publique du PDF original ni du téléphone personnel.
- [x] Domaines `pierre-laurent.fr` et `www.pierre-laurent.fr` ajoutés au projet Vercel existant, vérifiés ; `www` redirige en 308 vers l’apex.
- [x] Connexion OVH validée en autonomie : code lu dans l’application Mail et saisi sur OVH. Aucun mot de passe ni code enregistré dans le projet.
- [x] Accès au compte propriétaire rétabli après réception des bons identifiants. Aucun changement des autres domaines.
- [x] DNS OVH appliqués, import/refresh terminés : A `216.198.79.1` et `64.29.17.1`, CNAME `www` vers `937f7cf81ae28b84.vercel-dns-017.com.`, TTL web 300 s. Anciens A et TXT de parking remplacés ; NS, 3 MX et SPF préservés.
- [x] Deux serveurs OVH et résolveurs Cloudflare/Google retournent les nouveaux A ; Vercel indique `misconfigured: false` pour apex et www. Zone initiale sauvegardée dans `/tmp/pierre-laurent-dns-20260831-before.zone`.
- [x] Vercel Production `dpl_aeufgr5vk4cjCPBc5XBwfMGTYrmb` READY, bon SHA, domaines apex/www et anciens domaines associés ; build distant 21 s. CI main `33340723916` réussie, 36 s.
- [x] HTTPS actif : certificats vérifiés sans désactiver TLS ; CV lu via DNS-over-HTTPS Cloudflare ET Google, contenu Pharmagreen/GL Events Live confirmé. Accueil, parcours, CV, projets, contact, mentions, confidentialité, sitemap, robots et image Open Graph répondent 200.
- [x] Redirections permanentes 308 de `opti-pro.fr`, `www.opti-pro.fr` et `www.pierre-laurent.fr` vers `pierre-laurent.fr`, chemin et paramètres préservés ; `/services` redirige toujours vers `/projets` et HTTP vers HTTPS.
- [x] Navigateur sur l’alias Vercel de la même Production : navigation accueil → CV → projets, bouton d’impression présent, menu mobile qui se ferme, largeur 390 px sans débordement, quatre visuels chargés après défilement ; aucune erreur/alerte console. Aucun log Vercel error/fatal trouvé sur ce déploiement.
- Propagation restante au contrôle de 01:05 : le résolveur du réseau local garde encore l’ancien A `213.186.33.5` (TTL restant 2 682 s), alors que les deux DNS autoritaires OVH, Google et Cloudflare servent Vercel. Aucun paramètre réseau local n’a été modifié ; le domaine peut mettre environ 45 minutes à s’ouvrir sur ce réseau. Aperçu de la Production disponible sur `https://optipro-website.vercel.app/` en attendant.
- [x] Dépôt local revenu sur `main`, synchronisé avec `origin/main` ; seuls les suivis locaux préexistants `tasks/todo.md`, `tasks/journal.md` et `AGENTS.md` restent hors commit. Aucun build ni push documentaire supplémentaire.
- L’adresse e-mail publique `p.laurent@opti-pro.fr` reste inchangée.

## Défilement mobile — DÉPLOYÉ EN PRODUCTION le 2026-08-31

- [x] Résultat validé par Pierre (« parfait ») ; clôture documentée dans `tasks/journal.md`
- [x] Vidéo iPhone examinée : schéma déjà complet et visuels projets statiques
- [x] Cause reproduite à 390 × 844 : animation désactivée par largeur et scène non fixe
- [x] Scène fixe compacte au-dessus du texte, progression mobile et révélation des images ; parcours desktop conservé
- [x] Dimensions CSS identiques avant/après hydratation pour éviter le décalage des liens directs ; marge du lien de sortie adaptée à la scène fixe
- [x] Défilement aller/retour et ancres : idée 0/0, briques 1/0, outil 1/1 ; transitions intermédiaires 0,434 ; révélation projet 0 → 0,644 → 1
- [x] Contrôles navigateur à 320×568, 390×844, 402×874, 768×1024, 980×800, 1024×768, 1440×900 et 844×390 ; aucune largeur débordante
- [x] Mode statique conservé pour une hauteur inférieure à 500 px et la réduction des mouvements ; aucune capture du défilement ni dépendance ajoutée
- [x] Lint, TypeScript et 10 tests existants validés sans build local
- [x] Publication demandée par Pierre : commit, push, CI distante et mise en Production autorisés
- [x] PR #10 fusionnée : commit fonctionnel `9ae5e6a`, `main` à `2314b26a20fff7bda016ddddb830d84676a9e67b`
- [x] CI PR `33338012471` et CI main `33338051995` vertes, lint/TypeScript/tests/build inclus
- [x] Vercel `dpl_7BB6vsEmVuYB7VsTVhmB5QaeqJQ1` READY, cible Production, alias `www.opti-pro.fr`, bon SHA ; build distant 17,5 s
- [x] Domaine public : progression mobile 0 → 0,434 → 1, dernière étape active, lien vers `#projets`, image chargée révélée à 0,644 ; desktop 1440×900 sans débordement
- [x] `/`, `/projets`, `/a-propos` et `/contact` répondent 200 ; aucune erreur navigateur observée ni log Vercel error/fatal trouvé pour cette livraison
- Aucun changement Supabase, variable ou réglage Vercel. Avertissement CI Node.js 20 des actions existantes non bloquant. Compte rendu de livraison gardé localement pour éviter un rebuild documentaire.
- Limite : contrôles en navigateur avec dimensions mobiles, pas sur un iPhone physique ; réduction du mouvement vérifiée dans les règles CSS/JS, sans changer la préférence système.

## Parcours au défilement — DÉPLOYÉ EN PRODUCTION le 2026-08-30

- [x] Référence Pocca observée : schéma fixe et construction progressive liée au défilement
- [x] Séquence originale en trois étapes : intuition, construction des briques, interface avec les projets
- [x] Visuels projets révélés au défilement et accès directs aux étapes et aux quatre projets
- [x] Scroll natif conservé ; contenu serveur, ancres natives et cibles de focus accessibles
- [x] Animation sans dépendance, activée uniquement sur desktop assez haut et sans préférence de réduction du mouvement
- [x] Desktop/mobile contrôlés à 320, 390, 768, 980, 1024, 1280 et 1920 px : aucune largeur débordante, marges du hero conservées
- [x] Progression intermédiaire au scroll, trois étapes, ancre mobile active, accès direct Ro et navigation Projets → accueil contrôlés
- [x] Lint, TypeScript et 10 tests existants verts ; HTML serveur contrôlé hors scripts
- Limite de validation : réduction du mouvement vérifiée dans les règles CSS/JS et via le même mode statique sur petits écrans ; préférence système non modifiée. Activation clavier automatique non concluante dans le navigateur intégré, ancres et focus contrôlés.
- [x] Aperçu validé par Pierre ; commit et push autorisés sur `codex/scroll-journey`
- [x] Mise en Production autorisée par Pierre ; PR #9 fusionnée au commit `4eb9cd32e6f81c0cc5d2618915f19b05ca83007f`
- [x] CI PR `33337394537` et CI `main` `33337434947` vertes : lint, TypeScript, tests et build
- [x] Vercel `dpl_69Sx8X4McurbvHnQsHKJnMeAzSdr` READY, cible Production, alias `www.opti-pro.fr` ; build distant en 18 s
- [x] Domaine public : `/`, `/projets`, `/a-propos`, `/contact` en 200 ; nouvelle séquence présente dans le HTML serveur
- [x] Production contrôlée sur desktop/mobile : progression 0 → 0,781 → 1, ancres, navigation Projets → accueil, marges et absence de débordement
- [x] Aucun log navigateur de niveau erreur observé ; scan Vercel de cette livraison sans résultat au niveau erreur
- Aucun build local, changement Supabase, variable d’environnement ou réglage Vercel ; avertissement CI Node.js 20 des actions existantes non bloquant

## Alignement du hero — DÉPLOYÉ EN PRODUCTION le 2026-08-30

- [x] Cause identifiée : `width: 100%` sur `.heroInner` écrase la largeur commune `.shell`
- [x] Largeur concurrente retirée ; `.shell` gère à nouveau les marges et la largeur maximale
- [x] Alignement exact avec le header et absence de débordement vérifiés à 320, 390, 768, 980, 981, 1024, 1490 et 1920 px
- [x] Captures desktop/mobile et navigation Projets → accueil contrôlées ; aucune erreur console
- [x] TypeScript, lint, 10 tests existants et `git diff --check` validés sans build local
- [x] Commit `1a0e944` déployé en Production (`dpl_cHNyr7BmAufcyZfaBANRoCTCv6d2`) ; alignement reconfirmé après livraison du parcours au défilement

## Curseur personnalisé — TERMINÉ le 2026-08-30

- [x] Point central et halo fluide intégrés sans dépendance supplémentaire
- [x] Réaction visuelle discrète sur les liens, boutons et contrôles interactifs
- [x] Curseur natif conservé pour le texte et les champs
- [x] Désactivation sur mobile, pointeur grossier et réduction des animations
- [x] TypeScript, lint, 10 tests structurels et rendu navigateur validés

## Raffinement premium compact — TERMINÉ ET DÉPLOYÉ le 2026-08-30

- [x] Échelle typographique globale nettement réduite
- [x] Hero simplifié sans grande carte vitrée autour du texte
- [x] Densité et hauteur des projets réduites
- [x] Pages Projets, Parcours, Contact, header et footer harmonisés
- [x] Décor neuronal rendu beaucoup plus subtil
- [x] TypeScript, lint, 9 tests et build Next.js (12 pages statiques) validés
- [x] PR #8 fusionnée, CI verte et Production Vercel contrôlée sur `www.opti-pro.fr`

## Ajout Odysio — TERMINÉ ET DÉPLOYÉ le 2026-08-30

- [x] État réel du produit, de TestFlight et de la mise en pause vérifié
- [x] Projet ajouté aux données partagées avec un statut non public explicite
- [x] Identité mobile dédiée intégrée à partir de l’icône actuelle
- [x] TypeScript, lint, 9 tests et rendu local vérifiés
- [x] PR #7 fusionnée, CI verte et déploiement Vercel Production contrôlé sur le domaine public

## Ajout Ro Nutritionniste — TERMINÉ ET DÉPLOYÉ le 2026-08-30

- [x] État réel de la démo et du déploiement Vercel vérifié
- [x] Projet ajouté aux données partagées de l’accueil et de la page Projets
- [x] Visuel horizontal dédié intégré sans le présenter comme une app mobile
- [x] TypeScript, lint, 8 tests et rendu local vérifiés
- [x] PR #7 fusionnée, CI verte et déploiement Vercel Production contrôlé sur le domaine public

## Refonte minimaliste — TERMINÉE le 2026-08-30

Direction demandée par Pierre : conserver un site personnel sombre et technologique, mais retirer
l’accumulation d’effets JARVIS au profit d’une interface calme, lisible et centrée sur le contenu.

- [x] Hero simplifié autour du nom, d’une phrase forte et de deux liens
- [x] Grilles, noyaux IA, télémétrie, halos et animations décoratives retirés
- [x] Référence Vivva analysée : fond bleu nuit, grille discrète, point focal unique et respiration retenus
- [x] Première piste de particules générée puis retirée après retour : rendu encore trop « IA »
- [x] Visuel du hero reconstruit en HTML/CSS comme environnement de développement lisible
- [x] Échelle typographique réduite sur l’accueil et toutes les pages internes
- [x] Réseau de nœuds et connexions CSS ajouté en fond global avec dérive lente et réduction de mouvement respectée
- [x] Couche neuronale HTML/CSS enrichie : impulsions, signaux, anneaux et balayage animés
- [x] Fenêtre de code mise en mouvement : scan lumineux, curseur, statuts et cartes flottantes
- [x] Cartes ProbaLab et Ferdinand aplaties et allégées
- [x] Pages Projets, Parcours, Contact, header et footer alignés sur la nouvelle direction
- [x] Responsive et compilation de développement contrôlés
- [x] TypeScript, ESLint et tests structurels validés sans build
- [x] Build GitHub CI validé sur la PR #6
- [x] Déploiement Vercel Production `READY` et contrôle de `www.opti-pro.fr` effectué

## Pivot site personnel — EN COURS le 2026-08-30

Décision owner : arrêt définitif des missions client. OptiPro devient le site personnel de
Pierre Laurent, centré sur ses projets, son parcours, ses centres d’intérêt et ce qu’il crée.
ProbaLab et Ferdinand sont les projets actuels, sans transformer le site en vitrine produit.
Direction visuelle :
univers technologique sombre et cinématographique, interface système originale, sans reprise
de marques ou d'éléments Marvel.

- [x] Archive Git locale créée : tag `archive/client-site-2026-08-29`
- [x] Branche de travail créée : `codex/refonte-studio-produits`
- [x] Nouvelle identité éditoriale et visuelle implémentée
- [x] Discours de « studio / product builder » retiré au profit d’un vrai site personnel non commercial
- [x] Pages actives limitées à Accueil, Projets, À propos, Contact, Mentions légales, Confidentialité
- [x] ProbaLab et Ferdinand présentés comme produits personnels, pas comme clients
- [x] Tarifs, prestations, pages locales, blog commercial, formulaire, CRM/admin et crons retirés du code actif
- [x] Dépendances Supabase, Resend, GSAP, React PDF et composants admin retirés du manifeste npm
- [x] Redirections permanentes préparées pour les anciennes URL publiques
- [x] Portrait retiré du site et des fichiers publics à la demande de Pierre
- [x] Hero et page Parcours remplacés par une interface abstraite IA / automatisation, sans visage
- [x] Lien LinkedIn confirmé dans le footer et sur la page Contact
- [x] TypeScript + lint + tests structurels sans build
- [x] Validation visuelle locale desktop/mobile, navigation, images, redirections et console navigateur
- [x] Build Next.js de production validé : 12/12 pages statiques générées avec Next.js 16.3.3
- [x] Déploiement Vercel Production validé sur `www.opti-pro.fr` : commit `7d52610`, statut READY,
      pages et redirections HTTP, rendu desktop/mobile, navigation, images et console contrôlés
- [x] Variables Vercel Supabase et Resend retirées après validation de la version statique ;
      `vercel env ls` confirme qu’il ne reste aucune variable sur `optipro-website`
- [ ] Sauvegarde de la base OptiPro avant suppression : bloquée car le quota Supabase Free autorise déjà
      2 projets actifs (ProbaLab et Ferdinand). Le projet OptiPro reste `INACTIVE`, intact et non supprimé.

## Repositionnement CDI temps plein dès septembre 2026 — TERMINÉ le 2026-07-27
Pierre reprend un CDI temps plein en septembre. OptiPro devient une activité secondaire
(soirs/week-ends) + SAPAL conservé en parallèle. Décisions actées : site en acquisition filtrée
(pas GBP), back-office abandonné comme chantier actif, facturation via un outil externe.

- [x] Délai site vitrine 3 → 4 semaines (62 occurrences, 12 pages services/villes + accueil + CGV + llms.txt + 1 article blog)
- [x] Contact : « Réponse garantie sous 24h · lundi-vendredi 9h-18h » → « Réponse sous 48h » (8 occurrences ContactPageClient + 2 metadata + contact.md)
- [x] JSON-LD `openingHoursSpecification` (Mon-Fri 9h-18h) retiré de layout.tsx — incohérent avec un CDI temps plein
- [x] Offre web app dépriorisée (hero accueil, hero /le-service, bandeau pages ville) — reste vendue, juste plus en avant-plan
- [x] llms.txt et /a-propos : reformulés pour ne plus affirmer un temps plein sur OptiPro
- [x] GBP : abandonné, retiré du todo (voir section SEO ci-dessous, action annulée)
- [x] Intégration Pennylane retirée : 10 fichiers supprimés (lib/pennylane.ts, sync-actions.ts,
      sync-helpers.ts, PennylaneSyncButton.tsx, PennylaneButton.tsx, PennylaneSourceBadge.tsx,
      route cron non authentifiée /api/cron/sync-pennylane — CRON_SECRET absent en prod, faille corrigée),
      8 fichiers mixtes nettoyés (devis/factures actions + pages + confidentialite.tsx)
- [x] validateFactureAction/markFactureAsPaidAction simplifiées : suivi de statut local uniquement,
      la facture officielle (PDF, Factur-X) est désormais émise via un outil de facturation externe
- [x] 3 composants orphelins supprimés (reliquats « bras droit administratif ») : OptiboardTeaser,
      TimelineMethode, AutomatedVsHuman — jamais importés
- [x] Colonnes Supabase pennylane_* laissées en base (nullable, sans FK, aucun impact)
- Vérifs : tsc 0 erreur, build 46 pages OK, 24/24 tests Jest, vérif visuelle /contact /accueil /services/nice

### En suspens
- [ ] Variables d'env `PENNYLANE_API_TOKEN` et `NEXT_PUBLIC_PENNYLANE_COMPANY_SLUG` à retirer manuellement
      de `.env.local` et du dashboard Vercel (pas d'accès direct depuis le code)
- [ ] `public/index.md` et `public/services.md` restent obsolètes (ancienne grille tarifaire pré-juin) —
      passif préexistant non traité cette session, hors périmètre

## En cours — Corrections audit site (2026-07-26)
Audit complet : voir tasks/audit-site-2026-07-26.md (score ≈60/100). Cause racine : le repositionnement de juin n'a touché que 4 pages — tout le reste vend encore l'offre admin 650-1950€/mois.

### 🔴 Critique (cohérence de l'offre) — TERMINÉ le 2026-07-26
- [x] /contact : H1 + formulaire refondus (activité / offre visée avec vrais prix / situation) — ContactPageClient.tsx + route API + email de préqualification
- [x] JSON-LD LocalBusiness global réaligné + ajout OfferCatalog (5 offres réelles) — src/app/(public)/layout.tsx
- [x] Réécriture des 10 pages /services/* (4 métiers + 6 villes) sur le positionnement web, différenciées, avec maillage interne
- [x] CTA faux dans l'article facturation-electronique corrigé
- [x] CGV réécrites pour la prestation web (devis, délais, PI du code, garanties) + SIREN renseigné
- [x] public/llms.txt réécrit intégralement
- [x] Bonus trouvés en cours de route : manifest PWA + image OpenGraph (partages sociaux) étaient encore « bras droit administratif — dès 650€/mois »
- [x] Bonus : /methode et /pourquoi-ce-prix (code mort, 100% ancienne offre) supprimés — les redirects 301 existaient déjà ; lien interne mort corrigé dans /temoignages
- [x] Bonus : 4 pages métier ajoutées au footer (elles étaient orphelines), /admin/login passé en rel=nofollow, LAST_CONTENT_UPDATE du sitemap à jour
- Vérifs : tsc 0 erreur, build 52 pages OK, JSON-LD valide sur 7 pages testées (FAQ = HTML), 19/20 pages sans résidu (reste le blog)

### ⚠️ À valider par Pierre (hypothèses posées dans les CGV)
- [ ] Modalités de paiement CGV : j'ai écrit « 40% à la commande, solde à la livraison, 30 jours date de facture » — ce n'était nulle part sur le site, à confirmer ou corriger
- [ ] Délai de réclamation de 14 jours après livraison + réemploi des briques techniques génériques : à valider juridiquement

### 🟠 Haute — blog TERMINÉ le 2026-07-26
- [x] Blog : 6 articles supprimés + 301 ciblées par sujet, 8 conservés et réalignés (CTA, angle, maillage interne)
- [x] Bio auteur corrigée (centralisée dans ArticleClient.tsx → les 8 articles d'un coup) + accroches /blog
- [x] Stats invérifiables retirées : « 30 artisans accompagnés » et « 9 artisans sur 10 » (articles supprimés ou reformulés),
      cas plombier Cagnes requalifié en « exemple type » (confirmé composite par Pierre), « devis sous 24h = 80% signature »
      supprimé — vérification faite : **cette étude CAPEB n'existe pas**, tout comme les attributions INSEE (42€/h, 60-90 jours)
- [x] Les 2 seules stats conservées sont sourcées et vérifiées page ouverte : CAPEB Baromètre ARTISANTE (42% des artisans,
      charge admin 25-75%) et Banque de France ODP 2024 (retard moyen 13,6 j au T4). J'ai corrigé au passage une citation
      CAPEB inexacte (« 10 à 25% du temps ») que la source ne dit pas.
- [ ] Maillage : 4 pages métier orphelines (Footer.tsx l.87-95) + liens croisés ville↔métier
- [ ] Schema : OfferCatalog sur /tarifs + Article/FAQPage sur l'article « combien coûte un site »
- [ ] sitemap.ts : LAST_CONTENT_UPDATE figé au 2026-05-13 (l.7)

### 🟡 Moyenne
- [x] Page /services/vence créée le 2026-07-26 — angle « je suis sur place » (les 7 concurrents de la SERP sont
      des agences non implantées qui génèrent une page par commune). Ancrage local vérifié : marché ARTISA'VENCE,
      Cité historique, place Clemenceau. SIREN cité en FAQ comme preuve d'implantation. Priorité sitemap 0.9
      (la plus haute des pages ville), liens entrants depuis le footer (donc toutes les pages) + Cagnes-sur-Mer.
      NB : les « 400 commerces » et « 2476 entreprises » vus en recherche n'ont PAS été utilisés — page source
      mairie en 404, chiffres non vérifiables.
- [x] Perf TERMINÉ le 2026-07-27 :
      · payload RSC : cause réelle trouvée (≠ audit) — les objets `Article` complets, HTML inclus (76 KB), étaient
        envoyés au client alors que les cartes n'affichent que 5 champs. Type `ArticleCard` + projection explicite.
        Mesuré à nombre d'articles égal : /blog 156→55 KB (−65%), article 105→68 KB (−35%), JS inutilisé 48→27 KiB,
        TBT 50→20 ms, poids transféré 450→350 KiB
      · icônes PWA carrées 192/512 + maskable (safe-zone Android), palette réduite : 512 à 16,9 KiB au lieu de 44,8.
        logo.png (63 KiB) hors du chemin critique. JSON-LD logo : dimensions réelles 800×255 rétablies
      · `display: "swap"` explicite sur les 2 polices
      · code mort supprimé : ProjectCard, RoiCalculator, ComparisonCards, OfferCatalogJsonLd + comparison.ts
        (2 embarquaient GSAP). projects.ts CONSERVÉ (données réelles SAPAL/ProbaLab, reco E-E-A-T de l'audit)
      · config Jest : elle scannait .claude/worktrees/ → 7 suites en échec étrangères au projet. Corrigé, 24 tests verts
      · bug d'animation corrigé : `gsap.from` sur sélecteur string laissait du contenu à opacity 0 (hero /blog,
        hero /a-propos, cartes). Helper src/lib/gsap-reveal.ts + pattern set/to scopé au ref racine
      NB : l'audit se trompait sur les imports GSAP — ils étaient déjà corrects (gsap + ScrollTrigger seul)
- [ ] Recouper le LCP avec les données terrain (CrUX/PSI) : quota PageSpeed épuisé les 26 et 27/07, à refaire
- [ ] Vercel : redirection directe http/apex → https://www (chaîne de 2 redirects actuellement)
- [ ] Accueil : preuve sociale plus tôt + exemple « réservation en ligne » (persona restaurateur)

### ⚪ Basse
- [ ] Retirer le lien /admin/login du footer public

## Terminé — Refonte positionnement « dev opérationnel » (2026-06-10 → finalisé 2026-07-26/27)
Repositionnement : bras droit admin → dev opérationnel (sites vitrines, web apps, outils métier).
Offres : Vitrine 990€ / Vitrine Pro 1 390€ / Web app sur devis / Maintenance 79€ & 129€/mois.
Le commit du 10/06 n'avait touché que 4 pages (accueil, tarifs, le-service, à-propos) — tout le reste
(contact, 10 pages services, blog, CGV, llms.txt, manifest, OG image) a été aligné les 26-27/07, voir sections ci-dessus.

## Terminé — Refonte hero homepage inspirée pierrelegoux.fr (2026-05-12)
- [x] Analyse pierrelegoux.fr (palette, typo, structure, animations CSS pures)
- [x] Démo HTML 6 variantes hero (`public/demo-hero.html`)
- [x] Choix Pierre : V6 (bras droit XXL 2 lignes) + Option B (« bras » et « droit » en orange) + Fond 6A (grille animée + lueur balayante)
- [x] Variables sémantiques globals.css (`--ink`, `--ink-muted`, `--brand-soft`, `--surface-soft`, `--line`, `--ease-signature`)
- [x] CSS Module `src/app/(public)/home.module.css`
- [x] Refonte hero `HomePageClient.tsx` (animation mot-par-mot, CTA pill noir, lien secondaire texte)
- [x] tsc --noEmit OK, dev server 200 OK
- [ ] Phase 2 plus tard : refondre les autres sections (problème/solution/comparaison/FAQ) avec les mêmes tokens

## Terminé — Refonte site vitrine (2026-03-28)
- [x] Repositionnement OptiBoard → OptiPro (conseil & dev sur mesure)
- [x] Nouveau hero avec "La Méthode OptiPro" (4 étapes)
- [x] 4 sections services immersives avec mockups HTML/CSS
- [x] Page Services (timeline + Pierre + CTA)
- [x] Page Réalisations (2 projets placeholder)
- [x] Page Contact (formulaire simplifié)
- [x] Mentions légales LCEN + Politique de confidentialité RGPD
- [x] Navigation et footer mis à jour
- [x] Animations premium (parallax, stagger, micro-interactions)
- [x] Typographie Space Grotesk + Outfit
- [x] Header scroll shadow + nav underline animations
- [x] Mockups animés (barres, entrées staggerées, tilt 3D, chat Telegram)
- [x] Suppression fichiers OptiBoard
- [x] Merge + déploiement en prod

## En cours — Back-office admin
### Brainstorming (validé)
- [x] Approche choisie : routes /admin/* dans le même Next.js
- [x] Stack : Supabase Auth + DB (nouveau projet "OptiPro")
- [x] Schéma BDD validé : tables clients, audits, audit_answers
- [x] Structure des pages validée (dashboard, clients, audit, PDF)
- [x] 5 catégories d'audit : outils, gestion admin, données, tâches répétitives, points de friction

### À faire — Design (reprendre ici)
- [ ] Finir le spec design (écrire le doc + self-review)
- [ ] Validation du spec par Pierre
- [ ] Écrire le plan d'implémentation

### À faire — Implémentation
- [ ] Créer projet Supabase "OptiPro" (eu-west-3 ou eu-central-1)
- [ ] Créer les tables (clients, audits, audit_answers) + RLS
- [ ] Supabase Auth (email/password)
- [ ] Middleware Next.js pour protéger /admin/*
- [ ] Page login (/admin/login)
- [ ] Dashboard (/admin)
- [ ] CRUD clients (/admin/clients, /admin/clients/new, /admin/clients/[id])
- [ ] Formulaire d'audit structuré (/admin/audit/new)
- [ ] Vue/édition audit (/admin/audit/[id])
- [ ] Génération rapport PDF (/admin/audit/[id]/pdf)
- [ ] Tests + vérification
- [ ] Déploiement

## Terminé — Optimisation SEO Phase 1+2 (2026-03-31)
- [x] Corriger domaine sitemap.ts (optipro.fr → www.opti-pro.fr)
- [x] Ajouter pages légales au sitemap
- [x] Corriger robots.ts (bloquer /admin + fixer URL sitemap)
- [x] Ajouter metadata Homepage (server component wrapper)
- [x] Ajouter metadata Contact (server component wrapper)
- [x] Améliorer titles/descriptions Services + Réalisations
- [x] Ajouter JSON-LD Organization + LocalBusiness (Vence 06140)
- [x] Ajouter metadataBase + canonical URLs + OG par page
- [x] Ajouter manifest.ts (PWA)
- [x] Ajouter Cache-Control headers + HSTS
- [x] Build vérifié sans erreurs

## Terminé — SEO Phase 3 (2026-03-31)
- [x] FAQ structurée avec FAQSchema (5 questions, page Services)
- [x] Service schema JSON-LD (4 services, page Services)
- [x] BreadcrumbList schema sur toutes les pages
- [x] Canonical URLs sur toutes les pages
- [x] Build vérifié sans erreurs

## À faire — SEO (actions manuelles Pierre) — PROCHAIN CHANTIER
- [x] ~~Créer le Google Business Profile~~ — abandonné le 2026-07-27 : incompatible avec la disponibilité
      réduite dès septembre (CDI temps plein), un GBP génère des demandes locales qui ne seraient pas honorées.
- [ ] Inscrire le site dans Google Search Console (permettra aussi de récupérer le LCP terrain / CrUX, cf. todo perf)
- [ ] Tester avec Google Rich Results Test après déploiement

## À faire — Site vitrine (plus tard)
- [ ] Remplir les vrais projets dans src/data/projects.ts (SAPAL + autre)
- [ ] Ajouter photo de Pierre dans la section Services
- [ ] Enrichir la page Services (FAQ, détails par étape)
- [ ] Espace client (Niveau 3 — futur)

## En cours — Animations GSAP /a-propos + blog (2026-04-28)
- [x] AProposPageClient : timeline hero + ScrollTrigger philosophie
- [x] AProposPageClient : timeline parcours scrubbed line + dot stagger
- [x] AProposPageClient : valeurs staggered + CTA pulse glow
- [x] Blog [slug] : split en page.tsx + ArticleClient.tsx
- [x] ArticleClient : barre progression scrub + entrée breadcrumb/titre
- [x] ArticleClient : reveal h2/h3 du contenu + sidebar slide
- [x] Blog list page : ScrollTrigger.batch sur cards
- [x] prefers-reduced-motion via gsap.matchMedia
- [x] tsc --noEmit OK
