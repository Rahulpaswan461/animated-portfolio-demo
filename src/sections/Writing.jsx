import SectionHead from "../ui/SectionHead";
import Arrow from "../ui/Arrow";
import { articles, links } from "../data/content";

const Writing = () => (
  <section id="writing" className="border-t py-24 hairline md:py-32">
    <div className="wrap">
      <SectionHead label="Writing" title="Notes from what I build">
        <a href={links.medium} target="_blank" rel="noreferrer" className="btn btn-secondary self-start md:self-auto">
          Follow on Medium <Arrow diagonal />
        </a>
      </SectionHead>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.values(articles).map((a) => (
          <a key={a.title} href={a.url} target="_blank" rel="noreferrer" className="card card-link flex flex-col p-7 md:p-8">
            <div className="flex items-center gap-3">
              <img src="/icons/medium.svg" alt="" className="h-5 w-5 dark:invert" />
              <span className="label">
                {a.source} · {a.byMe ? "by me" : `by ${a.author}, on a system we built together`}
              </span>
            </div>
            <h3 className="mt-6 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[30px]">{a.title}</h3>
            <p className="mt-4 flex-1 text-[16px] leading-relaxed text-muted">{a.blurb}</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {a.tags.slice(0, 3).map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-ink">
                Read <Arrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Writing;
