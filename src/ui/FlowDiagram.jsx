import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Logo from "./Logo";

/**
 * A live system diagram: nodes joined by curved edges, with a pulse running
 * along each edge in order, one cycle every `cycleMs` (3.2 s, holding the
 * finished picture for the last ~18%).
 *
 * - Two layouts: `wide` (left to right) and `narrow` (top to bottom, < 640px).
 *   Positions are fractions of the box; the box is measured, so paths are real
 *   pixels and the pulses stay round.
 * - `groups` makes it a router: each cycle one group is active, only its edges
 *   pulse and its nodes light up. Nodes can swap their sub-line per group.
 * - Reduced motion: no pulses, everything drawn, the first group shown.
 * - A pause button, since it keeps moving.
 */
const FlowDiagram = ({ nodes, edges, layouts, groups = null, cycleMs = 3200, label }) => {
  const box = useRef(null);
  const reduce = useReducedMotion();
  const [width, setWidth] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || paused) return undefined;
    const t = setInterval(() => setCycle((c) => c + 1), cycleMs);
    return () => clearInterval(t);
  }, [reduce, paused, cycleMs]);

  const narrow = width > 0 && width < 640;
  const layout = narrow ? layouts.narrow : layouts.wide;
  const height = layout.height;
  const vertical = narrow;
  const active = groups ? groups[cycle % groups.length] : null;

  const pos = (id) => {
    const [x, y] = layout.pos[id];
    return [x * width, y * height];
  };

  const paths = useMemo(() => {
    if (!width) return [];
    return edges.map((e) => {
      const [x1, y1] = pos(e.from);
      const [x2, y2] = pos(e.to);
      let d;
      if (vertical) {
        const my = (y1 + y2) / 2;
        d = `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
      } else {
        const mx = (x1 + x2) / 2;
        d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
      }
      return { ...e, d };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, narrow, edges]);

  const steps = Math.max(...edges.map((e) => e.step)) + 1;
  const stepMs = (cycleMs * 0.82) / steps;
  const isOn = (g) => !groups || !g || g === active;

  return (
    <div className="card relative overflow-hidden p-0" role="img" aria-label={label}>
      {/* faint dot grid: a drawing surface, not decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(rgb(var(--line) / 0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div ref={box} className="relative mx-6 my-6 md:mx-10 md:my-8" style={{ height }}>
        {width > 0 && (
          <>
            <svg className="absolute inset-0 overflow-visible" width={width} height={height} aria-hidden="true">
              {paths.map((p) => (
                <path
                  key={`${p.from}-${p.to}`}
                  d={p.d}
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{
                    stroke: isOn(p.group) ? "rgb(var(--accent) / 0.55)" : "rgb(var(--line) / 0.14)",
                    transition: "stroke 300ms",
                  }}
                />
              ))}
            </svg>

            {!reduce &&
              paths
                .filter((p) => isOn(p.group))
                .map((p) => (
                  <span
                    key={`${p.from}-${p.to}-${cycle}`}
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-accent"
                    style={{
                      offsetPath: `path("${p.d}")`,
                      offsetRotate: "0deg",
                      boxShadow: "0 0 0 4px rgb(var(--accent) / 0.18)",
                      animation: `travel ${stepMs}ms linear ${p.step * stepMs}ms 1 both`,
                      animationPlayState: paused ? "paused" : "running",
                      marginLeft: -5,
                      marginTop: -5,
                    }}
                  />
                ))}

            {nodes.map((n) => {
              const [x, y] = pos(n.id);
              const on = isOn(n.group);
              // On a phone, side-by-side branch nodes go compact: short title, no icon or sub-line.
              const compact = narrow && layout.pos[n.id][0] !== 0.5;
              const sub = compact ? null : n.subByGroup && active ? n.subByGroup[active] : n.sub;
              const title = compact ? n.short || n.title : n.title;
              return (
                <div
                  key={n.id}
                  className={`absolute flex w-max items-center gap-3 rounded-xl border bg-surface px-3 py-2.5 shadow-sm transition-[border-color,opacity] duration-300 ${
                    n.group && on ? "border-accent/60" : "hairline"
                  } ${groups && n.group && !on ? "opacity-45" : "opacity-100"}`}
                  style={{
                    left: x,
                    top: y,
                    transform: "translate(-50%, -50%)",
                    maxWidth: compact ? width * 0.31 : narrow ? width * 0.8 : n.wide ? 290 : 250,
                    padding: compact ? "8px 10px" : undefined,
                  }}
                >
                  {n.icon && !compact && <Logo id={n.icon} name={n.iconName || n.title} size={30} />}
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-[14px] font-medium leading-tight text-ink">{title}</p>
                    {sub && <p className="mt-0.5 font-mono text-[12px] leading-snug text-muted">{sub}</p>}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {!reduce && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play animation" : "Pause animation"}
          className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-ink text-on-ink transition-transform active:scale-95"
        >
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5h2v9H3zM7 1.5h2v9H7z" fill="currentColor" /></svg>
          )}
        </button>
      )}
    </div>
  );
};

export default FlowDiagram;
