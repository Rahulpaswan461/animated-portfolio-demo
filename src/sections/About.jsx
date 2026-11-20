import Reveal from "../ui/Reveal";
import { about } from "../data/content";

/** Who I am in one sentence, three working habits, and what I'm doing right now. */
const About = () => (
  <section id="about" className="border-t py-24 hairline md:py-32">
    <div className="wrap">
      <p className="label mb-8">How I work</p>
      <Reveal
        as="h2"
        text={about.reveal}
        className="max-w-[20ch] font-display text-[clamp(36px,3.4vw+18px,72px)] font-extrabold leading-[1.02] tracking-[-0.025em]"
      />

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {about.traits.map((t, i) => (
          <div key={t.title} className="card p-7">
            <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-6 font-display text-[24px] font-extrabold leading-tight tracking-[-0.01em]">{t.title}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">{t.body}</p>
          </div>
        ))}
      </div>

      <dl className="mt-12 grid border-t hairline md:grid-cols-3">
        {about.now.map((n) => (
          <div key={n.k} className="flex flex-col gap-2 border-b py-6 hairline md:border-b-0 md:pr-8">
            <dt className="label flex items-center gap-2">
              <span className="live" aria-hidden="true" /> {n.k}
            </dt>
            <dd className="text-[17px] leading-snug text-ink">{n.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default About;
