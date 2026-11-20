import ThemeProvider from "./theme/ThemeProvider";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Ai from "./sections/Ai";
import About from "./sections/About";
import Writing from "./sections/Writing";
import Contact from "./sections/Contact";

/**
 * Page order: what I build (with the products up front) → what I do → the
 * products in detail → how I work → where I've worked → what I'm learning →
 * what I write → how to reach me.
 */
const App = () => (
  <ThemeProvider>
    <a
      href="#main"
      className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-on-ink focus:translate-y-0"
    >
      Skip to content
    </a>
    <Nav />
    <main id="main">
      <Hero />
      <WhatIDo />
      <Projects />
      <About />
      <Experience />
      <Ai />
      <Writing />
    </main>
    <Contact />
  </ThemeProvider>
);

export default App;
