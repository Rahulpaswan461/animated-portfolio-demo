import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Arrow from "../ui/Arrow";
import Mark from "../ui/Mark";
import { hero, profile, projects } from "../data/content";

const ease = [0.22, 1, 0.36, 1];
const CYCLE = 3600; // ms each product stays in front

/**
 * The hero's ground: a fine grid fading out from behind the product deck, and
 * two soft accent lights drifting slowly under it. Static under reduced motion.
 */
const Ground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgb(var(--line) / 0.07) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.07) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 70% 60% at 72% 42%, #000 20%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 72% 42%, #000 20%, transparent 75%)",
      }}
    />
    <div className="hero-light absolute -right-[10%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.16] blur-[110px] dark:bg-accent/[0.13]" />
    <div className="hero-light hero-light--b absolute right-[24%] top-[38%] h-[26rem] w-[26rem] rounded-full bg-[rgb(56_189_248/0.12)] blur-[110px]" />
  </div>
);

/** One product in a browser frame. */
const DeckCard = ({ p }) => (
  <div className="overflow-hidden rounded-2xl border bg-surface shadow-[0_30px_80px_-30px_rgb(0_0_0/0.45)] hairline">
    <div className="flex h-10 items-center gap-2 border-b px-4 hairline">
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="ml-3 truncate text-[13px] font-medium text-ink">{p.name}</span>
      <span className="ml-auto inline-flex items-center gap-1.5 text-[12px] text-muted">
        <span className="live" /> Live
      </span>
    </div>
    <div className="aspect-[16/10] overflow-hidden bg-raised">
      <img src={p.shot} alt={p.shotAlt} className="h-full w-full object-cover object-top" decoding="async" />
    </div>
  </div>
);

/**
 * The three live products, stacked and fanned. Every 3.6 s the front one moves
 * to the back and the next comes forward. Hovering holds it; the tabs below
 * pick one; the pause button stops it.
 */
const ProductDeck = () => {
  const reduce = useReducedMotion();
  const n = projects.length;
  const [front, setFront] = useState(0);
  const [held, setHeld] = useState(false);
  const [paused, setPaused] = useState(false);
  const running = !reduce && !held && !paused;

  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(() => setFront((f) => (f + 1) % n), CYCLE);
    return () => clearTimeout(t);
  }, [running, front, n]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.3 }}
      className="relative"
    >
      <div
        className="relative pr-[12%] pt-[14%]"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
      >
        {/* sizer: keeps the box as tall as one card */}
        <div className="invisible" aria-hidden="true">
          <DeckCard p={projects[0]} />
        </div>
        {projects.map((p, i) => {
          const rel = (i - front + n) % n;
          return (
            <motion.a
              key={p.id}
              href={`#project-${p.id}`}
              aria-label={`${p.name}: ${p.tagline}`}
              tabIndex={rel === 0 ? 0 : -1}
              className="absolute left-0 top-[14%] block w-[88%] origin-bottom-left"
              style={{ zIndex: n - rel }}
              initial={false}
              animate={{
                x: `${rel * 6.5}%`,
                y: `${-rel * 10}%`,
                scale: 1 - rel * 0.05,
              }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 22, mass: 0.9 }}
            >
              <DeckCard p={p} />
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-bg"
                initial={false}
                animate={{ opacity: rel * 0.32 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2">
        {projects.map((p, i) => {
          const on = i === front;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setFront(i)}
              aria-pressed={on}
              className={`relative h-9 overflow-hidden rounded-full border px-4 text-[13px] font-medium transition-colors hairline ${
                on ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {on && running && (
                <motion.span
                  key={`${front}-bar`}
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 bg-accent/15"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: CYCLE / 1000, ease: "linear" }}
                />
              )}
              {on && !running && <span aria-hidden="true" className="absolute inset-0 bg-accent/15" />}
              <span className="relative">{p.name}</span>
            </button>
          );
        })}
        {!reduce && (
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-label={paused ? "Play the product carousel" : "Pause the product carousel"}
            className="ml-auto grid h-8 w-8 place-items-center rounded-full bg-ink text-on-ink transition-transform active:scale-95"
          >
            {paused ? (
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5h2v9H3zM7 1.5h2v9H7z" fill="currentColor" /></svg>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

/** Headline words rise out of a mask once, on load. The text is real and in the DOM from the start. */
const Headline = () => {
  const reduce = useReducedMotion();
  let k = 0;
  return (
    <h1
      className="font-display font-extrabold tracking-[-0.035em] text-ink"
      style={{ fontSize: "clamp(44px, 3.4vw + 20px, 76px)", lineHeight: 0.98, textWrap: "balance" }}
      aria-label={hero.title}
    >
      {hero.lines.map((line, li) => (
        <span key={li} aria-hidden="true">
          {line.map((part) =>
            part.t.split(" ").map((w, wi) => {
              const i = k++;
              return (
                <span key={`${li}-${w}-${wi}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span
                    className={`inline-block ${part.accent ? "text-accent" : ""}`}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.1 + i * 0.06 }}
                  >
                    {w}
                    {" "}
                  </motion.span>
                </span>
              );
            })
          )}
        </span>
      ))}
    </h1>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const fade = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: d },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-nav">
      <Ground />
      <div className="wrap relative flex min-h-[calc(100svh-var(--nav))] flex-col justify-center py-12 lg:py-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <motion.div {...fade(0)} className="mb-7 flex items-center gap-3">
              {profile.avatarImage ? (
                <img src={profile.avatarImage} alt="" className="h-9 w-9 rounded-full object-cover" />
              ) : (
                <Mark />
              )}
              <span className="text-[15px] font-medium text-ink">{profile.name}</span>
              <span className="label hidden sm:inline">· {hero.eyebrow}</span>
            </motion.div>
            <Headline />
            <motion.p {...fade(0.5)} className="lead mt-7 max-w-[50ch] text-ink/80 md:text-[19px]">
              {hero.lede}
            </motion.p>
            <motion.div {...fade(0.6)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn btn-primary h-12 px-7 text-base">
                See what I&apos;ve built <Arrow />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary h-12 px-7 text-base">
                Email me
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <ProductDeck />
          </div>
        </div>

        <motion.dl {...fade(0.75)} className="mt-14 grid gap-6 border-t pt-7 hairline sm:grid-cols-3 lg:mt-14">
          {hero.proof.map((f) => (
            <div key={f.k} className="flex items-baseline gap-3">
              <dt className="sr-only">{f.k}</dt>
              <dd className="whitespace-nowrap font-display text-[34px] font-extrabold leading-none tracking-[-0.02em] text-ink">{f.v}</dd>
              <dd className="text-[15px] leading-snug text-muted">{f.k}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
