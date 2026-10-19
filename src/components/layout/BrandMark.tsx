// Signe de la marque : un flux qui part du terrain (ambre) et arrive en ligne (vert).
export default function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" strokeWidth="1.3" strokeLinecap="round" focusable="false">
        <path d="M3.5 4.5h4.2a1.8 1.8 0 0 1 1.8 1.8v3.4a1.8 1.8 0 0 0 1.8 1.8h1.2" stroke="#8590A2" />
        <circle cx="3.5" cy="4.5" r="1.6" fill="#F0A940" stroke="none" />
        <circle cx="12.5" cy="11.5" r="1.6" fill="#6FD39C" stroke="none" />
      </svg>
    </span>
  );
}
