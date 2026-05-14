export default function Logo({ size = 28, className = 'logo-svg' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 160 60 A 60 60 0 1 0 160 140"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="155" cy="100" r="11" fill="currentColor" />
    </svg>
  );
}
