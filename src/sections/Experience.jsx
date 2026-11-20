import { motion, useReducedMotion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import Arrow from "../ui/Arrow";
import { career, profile } from "../data/content";

/**
 * One company, three steps: a progression track rather than paragraphs.
 * The details are in the résumé.
 */
const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="border-t py-24 hairline md:py-32">
      <div className="wrap">
        <SectionHead
          label="Experience"
          title="Intern to engineer at AegisCovenant"
          lede="I joined as an intern in January 2025 and was offered a full-time role in July 2025. I build the backend services an InsurTech product runs on."
        >
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-secondary self-start md:self-auto">
            Download résumé <Arrow />
          </a>
        </SectionHead>

        <div className="card p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink font-display text-[17px] font-extrabold text-on-ink">AC</span>
              <div>
                <p className="font-display text-[24px] font-extrabold leading-tight">{career.company}</p>
                <p className="text-[14px] text-muted">{career.meta}</p>
              </div>
            </div>
          </div>

          <ol className="relative mt-12 grid gap-10 md:grid-cols-2 md:gap-6">
            {/* the track: draws once from left to right when it comes into view */}
            <div aria-hidden="true" className="absolute left-0 right-[48.8%] top-2 hidden h-px md:block">
              <div className="h-px w-full bg-[rgb(var(--line)/0.14)]" />
              <motion.div
                className="absolute inset-0 h-px origin-left bg-accent"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-accent/60 md:hidden" />

            {career.steps.map((s) => (
              <li key={s.role} className="relative pl-8 md:pl-0 md:pt-10">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-accent md:top-[1px] ${
                    s.current ? "bg-accent" : "bg-surface"
                  }`}
                />
                <p className="flex items-center gap-2 font-mono text-[13px] text-muted">
                  {s.period}
                  {s.current && <span className="-my-1 inline-flex h-5 items-center rounded-full bg-accent/15 px-2 text-[12px] leading-none text-accent">Now</span>}
                </p>
                <h3 className="mt-2 font-display text-[24px] font-extrabold leading-tight tracking-[-0.01em]">{s.role}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{s.note}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-2 border-t pt-7 hairline">
            <span className="label mr-2">Day to day</span>
            {career.focus.map((f) => (
              <span key={f} className="chip">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
