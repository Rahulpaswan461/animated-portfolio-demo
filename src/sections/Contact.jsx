import Arrow from "../ui/Arrow";
import Mark from "../ui/Mark";
import { links, profile } from "../data/content";

const SOCIAL = [
  ["LinkedIn", links.linkedin],
  ["X", links.x],
  ["Medium", links.medium],
  ["LeetCode", links.leetcode],
  ["forg.to", links.forg],
];

const Contact = () => (
  <footer id="contact" className="border-t hairline">
    <div className="wrap py-24 md:py-32">
      <p className="label mb-6">Contact</p>
      <h2
        className="max-w-[16ch] font-display font-extrabold tracking-[-0.03em]"
        style={{ fontSize: "clamp(44px, 5vw + 12px, 96px)", lineHeight: 0.98 }}
      >
        Email me about backend, cloud or AI work.
      </h2>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href={`mailto:${profile.email}`} className="btn btn-primary h-12 px-7 text-base">
          Email me <Arrow />
        </a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-secondary h-12 px-7 text-base">
          Download résumé
        </a>
      </div>
      <p className="mt-6 font-mono text-[14px] text-muted">{profile.email}</p>
    </div>
    <div className="border-t hairline">
      <div className="wrap flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Mark />
          <span className="text-[14px] text-muted">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
        </div>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-6 gap-y-2">
          {SOCIAL.map(([name, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="navlink text-[14px]">
              {name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>
);

export default Contact;
