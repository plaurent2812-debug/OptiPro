// Mesure Google Lighthouse de ce site, relevée par Claude le 21 octobre 2026 vers 22 h,
// après l’ajout du portrait (Lighthouse 12.8.2, Chrome, production https://pierre-laurent.fr/,
// profil mobile, médiane de 3 passages : LCP 2 053, 2 120 et 2 057 ms).
// À mettre à jour après chaque refonte : ne jamais afficher une valeur non remesurée.
export const lighthouse = {
  measuredOn: "21 octobre 2026",
  tool: "Google Lighthouse 12.8",
  profile: "sur téléphone, réseau mobile simulé",
  page: "page d’accueil",
  scores: [
    { label: "Performance", value: 99 },
    { label: "Accessibilité", value: 100 },
    { label: "Bonnes pratiques", value: 100 },
    { label: "Référencement", value: 100 },
  ],
  lcp: "2,1 s",
};
