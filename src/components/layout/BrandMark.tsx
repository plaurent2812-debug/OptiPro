export default function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 3 85 85" fill="#75EBA9" focusable="false">
        <path
          fillRule="evenodd"
          d="M8 13H40L53 26V39L41 51H21V65H52L62 55H77V70H67L59 78H8V13ZM21 26V38H35L40 33V31L35 26H21Z"
        />
      </svg>
    </span>
  );
}
