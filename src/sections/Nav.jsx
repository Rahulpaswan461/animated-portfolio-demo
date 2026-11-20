import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import Mark from "../ui/Mark";
import { profile } from "../data/content";

const NAV = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "ai", label: "AI" },
  { id: "writing", label: "Writing" },
];

/** Fixed, opaque, one hairline. Same at every scroll depth. */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  // Mark the section in view (a 1px underline under its word).
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-nav border-b bg-bg hairline">
      <div className="wrap flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Rahul Paswan, back to top">
          <Mark />
          <span className="font-display text-[19px] font-bold tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="navlink" aria-current={current === n.id ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={profile.resume} className="navlink hidden md:inline" target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-primary hidden sm:inline-flex">
            Email me
          </a>
          <button
            type="button"
            className="btn btn-secondary h-11 w-11 px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 6h13M2.5 12h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-x-0 bottom-0 top-nav bg-bg lg:hidden"
            onClick={() => setOpen(false)}
          >
            <nav aria-label="Menu" className="wrap flex flex-col pt-4">
              {[...NAV, { id: "contact", label: "Contact" }].map((n) => (
                <a key={n.id} href={`#${n.id}`} className="flex h-14 items-center border-b font-display text-2xl font-bold hairline">
                  {n.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary w-full">Email me</a>
                <a href={profile.resume} className="btn btn-secondary w-full" target="_blank" rel="noreferrer">Download résumé</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
