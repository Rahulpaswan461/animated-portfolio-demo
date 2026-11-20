import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import Arrow from "../ui/Arrow";
import { projects } from "../data/content";

/** The product inside a plain browser frame: the screenshot is the proof. */
const Browser = ({ src, alt, url, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border bg-raised hairline">
    <div className="flex h-9 items-center gap-2 border-b px-4 hairline">
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="ml-3 truncate font-mono text-[12px] text-muted">{url}</span>
    </div>
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
      />
    </div>
  </a>
);

/**
 * One project card. On wide screens the cards are sticky and stack as you
 * scroll; the one being covered settles back slightly (scale only, no tilt).
 */
const ProjectCard = ({ p, i, total, progress }) => {
  const reduce = useReducedMotion();
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i - 1) * 0.04]);

  return (
    <div id={`project-${p.id}`} className="md:sticky" style={{ top: `calc(var(--nav) + 24px + ${i * 16}px)` }}>
      <motion.article
        style={reduce ? undefined : { scale }}
        className="card origin-top overflow-hidden p-6 shadow-[0_-12px_32px_-20px_rgb(0_0_0/0.25)] md:p-10"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[13px] text-accent">{p.index}</span>
              <span className="label">{p.kind}</span>
            </div>
            <h3 className="mt-5 flex items-center gap-4 font-display text-[40px] font-extrabold leading-[1] tracking-[-0.02em] md:text-[48px]">
              {p.icon && <img src={p.icon} alt="" className="h-11 w-11 rounded-xl" />}
              {p.name}
            </h3>
            <p className="mt-4 text-[18px] leading-snug text-ink">{p.tagline}</p>
            <dl className="mt-7 space-y-5">
              <div>
                <dt className="label">The problem</dt>
                <dd className="mt-1.5 text-[16px] leading-relaxed text-muted">{p.problem}</dd>
              </div>
              <div>
                <dt className="label">What it does</dt>
                <dd className="mt-1.5 text-[16px] leading-relaxed text-muted">{p.solution}</dd>
              </div>
            </dl>
            <ul className="mt-6 grid gap-2.5">
              {p.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[15px] leading-snug text-ink">
                  <svg className="mt-px h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 10.5l3.2 3L15 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-secondary mt-8">
              {p.cta || `Open ${p.name}`} <Arrow diagonal />
            </a>
          </div>
          <div className="order-first lg:order-none lg:col-span-7">
            <Browser src={p.shot} alt={p.shotAlt} url={p.bar || p.liveLabel} href={p.live} />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="border-t py-24 hairline md:py-32">
      <div className="wrap">
        <SectionHead
          label="Projects"
          title="Three products I founded and run"
          lede="Each one started with a problem I saw. I built and ship all three myself, and I run them as businesses: users, updates and support."
        />
        <div ref={ref} className="flex flex-col gap-8 md:gap-[12vh]">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
