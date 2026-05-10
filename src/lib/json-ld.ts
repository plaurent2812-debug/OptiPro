/**
 * Sérialise un objet JSON-LD en échappant les caractères dangereux pour HTML.
 *
 * Pourquoi : JSON.stringify ne touche pas à `<`, `>`, `&`. Si une valeur contient
 * `</script>`, le parser HTML peut clore le bloc <script type="application/ld+json">
 * prématurément, créant une vulnérabilité XSS si le contenu vient d'un CMS ou
 * d'un input utilisateur.
 *
 * Cette fonction est l'équivalent du serializeJsonLd utilisé par next-seo.
 *
 * @example
 * <script type="application/ld+json">
 *   {safeJsonLd(myData)}
 * </script>
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
