import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";

const STORAGE_KEY = "rp-theme";

// Kept in sync with the --canvas token for each theme so the browser chrome
// (mobile address bar) matches the page.
const THEME_COLOR = { dark: "#0c0c0b", light: "#f7f6f2" };

const apply = (theme) => {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ThemeProvider = ({ children }) => {
  // The inline script in index.html has already resolved and applied a theme
  // before first paint; read it back rather than guessing again.
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark"
  );

  // Follow the OS only while the visitor has not made a choice of their own.
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => {
      const next = e.matches ? "light" : "dark";
      apply(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private mode / storage disabled — the toggle still works for this visit.
      }

      const commit = () => {
        apply(next);
        setTheme(next);
      };

      // Progressive enhancement: where View Transitions exist, wipe the new
      // theme in as a circle growing from the button that was pressed.
      if (!document.startViewTransition || prefersReducedMotion()) {
        commit();
        return;
      }

      const origin = event?.currentTarget?.getBoundingClientRect();
      const x = origin ? origin.left + origin.width / 2 : window.innerWidth - 48;
      const y = origin ? origin.top + origin.height / 2 : 48;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(commit);
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
          },
          {
            duration: 620,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [theme]
  );

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
