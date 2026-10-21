// Mesure Google Lighthouse de ce site, relevée par Claude le 21 octobre 2026 vers 23 h 55,
// après la passe de design « chirurgicale » (PR #33) : Lighthouse 12.8.2, Chrome, production
// https://pierre-laurent.fr/, profil mobile, médiane de 3 passages (performance 98, 100 et 100 ;
// LCP 2 177, 1 319 et 1 916 ms). Bureau : 100 partout, LCP 0,5 s.
// À mettre à jour après chaque refonte : ne jamais afficher une valeur non remesurée.
export const lighthouse = {
  measuredOn: "21 octobre 2026",
  tool: "Google Lighthouse 12.8",
  profile: "sur téléphone, réseau mobile simulé",
  page: "page d’accueil",
  scores: [
    { label: "Performance", value: 100 },
    { label: "Accessibilité", value: 100 },
    { label: "Bonnes pratiques", value: 100 },
    { label: "Référencement", value: 100 },
  ],
  lcp: "1,9 s",
};
