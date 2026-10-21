// Jeu d’icônes dessinées au trait (grille 24 × 24, trait 1,5).
const paths = {
  terrain: <><path d="M3 20.5V9.6L12 4l9 5.6v10.9" /><path d="M6.8 20.5v-7.3h10.4v7.3" /><path d="M6.8 15.8h10.4M6.8 18.2h10.4" /><path d="M1.8 20.5h20.4" /></>,
  data: <><ellipse cx="12" cy="5.8" rx="7.2" ry="2.6" /><path d="M4.8 5.8v12.4c0 1.45 3.2 2.6 7.2 2.6s7.2-1.15 7.2-2.6V5.8" /><path d="M4.8 12c0 1.45 3.2 2.6 7.2 2.6s7.2-1.15 7.2-2.6" /></>,
  auto: <><rect x="6" y="6" width="12" height="12" rx="2.4" /><path d="M9.5 2.8V6M14.5 2.8V6M9.5 18v3.2M14.5 18v3.2M2.8 9.5H6M2.8 14.5H6M18 9.5h3.2M18 14.5h3.2" /><path d="M12.9 8.9 10.3 12.4h3.4l-2.6 3.5" /></>,
  app: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.8" /><path d="M10.3 5.2h3.4" /><path d="M9.5 10h5M9.5 13h3.2" /><path d="M11 18.6h2" /></>,
  site: <><rect x="2.5" y="4" width="19" height="16" rx="2.2" /><path d="M2.5 8.2h19" /><path d="M5.3 6.1h.01M7.5 6.1h.01" /><path d="M6 11.6h6.5M6 14.6h4.5" /><rect x="14.5" y="11.4" width="4" height="5" rx=".8" /></>,
  tel: <path d="M6.6 3.5h2.6c.4 0 .8.3.9.7l1 3.6c.1.4 0 .8-.3 1l-1.7 1.3a11.6 11.6 0 0 0 4.8 4.8l1.3-1.7c.3-.3.7-.4 1-.3l3.6 1c.4.1.7.5.7.9v2.6c0 1-.8 1.8-1.8 1.8C10.3 19.2 4.8 13.7 4.8 5.3c0-1 .8-1.8 1.8-1.8z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.2" /><path d="m3.6 6.6 8.4 6.3 8.4-6.3" /></>,
  route: <><circle cx="5.5" cy="18.5" r="2.2" /><circle cx="18.5" cy="5.5" r="2.2" /><path d="M7.7 18.5H15a3.2 3.2 0 0 0 0-6.4H9a3.2 3.2 0 0 1 0-6.4h7.3" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
  question: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.7" /><path d="M12 17h.01" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 12h6M9 15.5h6" /></>,
  truck: <><path d="M2.5 6.5h11v10h-11z" /><path d="M13.5 9.5h4.2l2.8 3.3v3.7h-7" /><circle cx="6.5" cy="17.6" r="1.7" /><circle cx="17" cy="17.6" r="1.7" /></>,
  user: <><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20.5c1.2-3.6 4-5.4 7.5-5.4s6.3 1.8 7.5 5.4" /></>,
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
