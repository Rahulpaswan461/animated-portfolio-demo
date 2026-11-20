import SectionHead from "../ui/SectionHead";
import Logo from "../ui/Logo";
import { focus } from "../data/content";

const WhatIDo = () => (
  <section id="what" className="border-t py-24 hairline md:py-32">
    <div className="wrap">
      <SectionHead
        label="What I do"
        title="Four kinds of work, one engineer"
        lede="Most of my week is backend and cloud work. The SaaS and the AI apps are where I learn what the job doesn't teach."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map((f) => (
          <article key={f.n} className="card flex flex-col p-6">
            <span className="font-mono text-[13px] text-accent">{f.n}</span>
            <h3 className="mt-8 font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.01em]">{f.title}</h3>
            <p className="mt-3 flex-1 text-[16px] leading-relaxed text-muted">{f.short}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {f.icons.map(([id, name]) => (
                <Logo key={id} id={id} name={name} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
