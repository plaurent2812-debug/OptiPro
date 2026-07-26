import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Point d'entrée unique des animations « masquer → révéler » au scroll.
 *
 * POURQUOI CE HELPER EXISTE
 * -------------------------
 * Le pattern naïf `gsap.from(el, { opacity: 0, scrollTrigger: { start: 'top 88%' } })`
 * a deux défauts qui laissaient du contenu invisible en production :
 *
 * 1. Un élément déjà présent dans le viewport au chargement mais dont le haut
 *    est situé SOUS la ligne de déclenchement (ex. 88% de la hauteur d'écran)
 *    est mis à `opacity: 0` puis attend un scroll qui ne viendra peut-être
 *    jamais. Sur /blog en 1440x900, 3 cartes étaient visibles à l'écran
 *    (41 px dépassant) et restaient définitivement blanches.
 * 2. Si le JS échoue (chunk bloqué, erreur, navigateur exotique), le contenu
 *    reste sur son état CSS. C'est pourquoi on ne met JAMAIS `opacity: 0` en
 *    CSS : l'état de départ « visible » est la source de vérité, et le masquage
 *    n'est appliqué par JS que juste avant une animation qui va réellement tourner.
 *
 * `revealOnScroll` corrige les deux : tout élément déjà intersecté au moment du
 * setup est révélé immédiatement (sans masquage préalable), les autres reçoivent
 * un ScrollTrigger classique.
 */

/** Marge de sécurité : un élément qui dépasse d'au moins 1 px est « déjà vu ». */
function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;
  // Élément de taille nulle (display:none, pas encore layouté) → on ne le
  // considère pas comme visible, il sera géré par son ScrollTrigger.
  if (rect.width === 0 && rect.height === 0) return false;
  return rect.top < viewportH && rect.bottom > 0 && rect.left < viewportW && rect.right > 0;
}

export type RevealOptions = {
  /** Décalage vertical de départ, en px. */
  y?: number;
  /** Décalage horizontal de départ, en px. */
  x?: number;
  /** Échelle de départ (1 = pas de scale). */
  scale?: number;
  duration?: number;
  ease?: string;
  /** Décalage entre chaque élément d'un même lot. */
  stagger?: number;
  /** Position de déclenchement ScrollTrigger. */
  start?: string;
  /** `true` (défaut) : animation désactivée, on garde le contenu visible. */
  reduced?: boolean;
};

/**
 * Révèle une liste d'éléments : ceux déjà visibles apparaissent tout de suite,
 * les autres au scroll. Ne laisse jamais un élément à `opacity: 0` durablement.
 *
 * @returns la liste des ScrollTrigger créés (pour un cleanup manuel éventuel ;
 *          `useGSAP` + `mm.revert()` s'en chargent déjà normalement).
 */
export function revealOnScroll(
  targets: ArrayLike<Element> | Element | null | undefined,
  options: RevealOptions = {},
): ScrollTrigger[] {
  const {
    y = 30,
    x = 0,
    scale,
    duration = 0.7,
    ease = 'power2.out',
    stagger = 0.1,
    start = 'top 88%',
    reduced = false,
  } = options;

  const els = gsap.utils.toArray<HTMLElement>(targets ?? []);
  if (els.length === 0) return [];

  // ── Mouvement réduit : on garantit simplement la visibilité, sans animation.
  if (reduced) {
    gsap.set(els, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' });
    return [];
  }

  const fromVars: gsap.TweenVars = { opacity: 0, y, x };
  if (scale !== undefined) fromVars.scale = scale;

  const toVars: gsap.TweenVars = { opacity: 1, y: 0, x: 0, ease, duration };
  if (scale !== undefined) toVars.scale = 1;

  // On sépare les éléments déjà à l'écran de ceux encore hors champ.
  const inView: HTMLElement[] = [];
  const offView: HTMLElement[] = [];
  for (const el of els) (isInViewport(el) ? inView : offView).push(el);

  // ── Déjà visibles : masquage + révélation immédiate, aucun scroll requis.
  if (inView.length > 0) {
    gsap.set(inView, fromVars);
    gsap.to(inView, { ...toVars, stagger, overwrite: 'auto' });
  }

  // ── Hors champ : masquage puis ScrollTrigger one-shot.
  const triggers: ScrollTrigger[] = [];
  if (offView.length > 0) {
    gsap.set(offView, fromVars);

    const revealed = new WeakSet<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.style.willChange = 'transform, opacity';
      gsap.to(el, {
        ...toVars,
        overwrite: 'auto',
        onComplete: () => {
          el.style.willChange = 'auto';
        },
      });
    };

    for (const el of offView) {
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => reveal(el),
        }),
      );
    }

    // Filet de sécurité : un scroll rapide (ancre, molette large, restauration
    // de position, Cmd+↓) peut sauter par-dessus la ligne de déclenchement d'un
    // ScrollTrigger, dont l'`onEnter` ne part alors jamais. L'IntersectionObserver
    // se déclenche lui sur la simple intersection, quelle que soit la vitesse.
    // Aucun `rootMargin` négatif ici : il rétrécirait la zone de détection et
    // recréerait précisément le bug corrigé (un élément visible à l'écran mais
    // sous la ligne de détection resterait transparent). Le ScrollTrigger
    // ci-dessus gère l'esthétique du déclenchement ; l'observer, lui, ne sert
    // qu'à garantir qu'un élément à l'écran finit toujours par apparaître.
    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            reveal(el);
            io.unobserve(el);
          }
        }
      });
      for (const el of offView) io.observe(el);
    }
  }

  return triggers;
}

/**
 * Filet de sécurité global : après le setup des animations, garantit qu'aucun
 * élément ciblé ne reste à `opacity: 0` s'il est visible à l'écran. Sert de
 * garde-fou contre un ScrollTrigger dont les positions ont été calculées avant
 * la stabilisation du layout (polices web, images sans dimensions, etc.).
 */
export function ensureVisibleInViewport(
  targets: ArrayLike<Element> | Element | null | undefined,
): void {
  const els = gsap.utils.toArray<HTMLElement>(targets ?? []);
  for (const el of els) {
    if (isInViewport(el) && parseFloat(getComputedStyle(el).opacity) < 0.99) {
      gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.4, overwrite: 'auto' });
    }
  }
}
