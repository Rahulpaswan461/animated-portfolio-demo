import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../theme/themeContext";

const Sun = () => (
  <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
    <circle cx="10" cy="10" r="3.6" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M10 1.6v2M10 16.4v2M18.4 10h-2M3.6 10h-2M15.9 4.1l-1.4 1.4M5.5 14.5l-1.4 1.4M15.9 15.9l-1.4-1.4M5.5 5.5 4.1 4.1" />
    </g>
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
    <path d="M16.3 12.4A7 7 0 0 1 7.6 3.7a7 7 0 1 0 8.7 8.7Z" fill="currentColor" />
  </svg>
);

/** A two-position switch. The theme itself wipes in as a circle from here (see ThemeProvider). */
const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const dark = theme === "dark";
  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={!dark}
      aria-label={label}
      title={label}
      className="relative inline-flex h-9 w-[60px] shrink-0 items-center rounded-full border bg-surface p-1 hairline"
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1 h-7 w-7 rounded-full bg-ink"
        animate={{ x: dark ? 0 : 22 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 480, damping: 34, mass: 0.7 }}
      />
      <span className={`relative z-10 grid h-7 w-7 place-items-center transition-colors ${dark ? "text-on-ink" : "text-muted"}`}>
        <Moon />
      </span>
      <span className={`relative z-10 -ml-1 grid h-7 w-7 place-items-center transition-colors ${dark ? "text-muted" : "text-on-ink"}`}>
        <Sun />
      </span>
    </button>
  );
};

export default ThemeToggle;
