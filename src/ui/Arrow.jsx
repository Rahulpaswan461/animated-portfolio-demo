const Arrow = ({ className = "", diagonal = false }) => (
  <svg
    className={`arrow h-4 w-4 ${className}`}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {diagonal ? (
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

export default Arrow;
