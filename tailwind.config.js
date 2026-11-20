/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        raised: token("raised"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "on-ink": token("on-ink"),
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["Satoshi", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { wrap: "1200px", measure: "62ch" },
      transitionTimingFunction: { out: "cubic-bezier(.2,.8,.2,1)" },
      spacing: { nav: "var(--nav)" },
    },
  },
  plugins: [],
};
