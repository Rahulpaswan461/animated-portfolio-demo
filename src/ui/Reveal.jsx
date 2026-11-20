import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useTheme } from "../theme/themeContext";

/**
 * Scroll-linked, word-by-word reveal. Each word owns an overlapping slice of
 * the block's scroll progress and moves from the muted colour to full ink.
 *
 * It starts at the muted text colour (4.5:1 or better), never near-invisible,
 * so the sentence can always be read; the scroll only adds emphasis.
 * Colours are real values because interpolation needs them: keep them in step
 * with --muted and --ink in index.css.
 */
const PALETTE = {
  dark: { from: "#7d7c76", to: "#f2f1ec" },
  light: { from: "#7a7972", to: "#171715" },
};
const SPREAD = 2.4;

const Word = ({ word, i, total, progress, from, to }) => {
  const step = 1 / total;
  const start = i * step;
  const end = Math.min(start + step * SPREAD, 1);
  const color = useTransform(progress, [start, end], [from, to]);
  return (
    <motion.span style={{ color }} aria-hidden="true">
      {word}{" "}
    </motion.span>
  );
};

const Reveal = ({ text, as: Tag = "p", className = "" }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { theme } = useTheme();
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const { from, to } = PALETTE[theme] || PALETTE.dark;

  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={`${w}-${i}`} word={w} i={i} total={words.length} progress={scrollYProgress} from={from} to={to} />
      ))}
    </Tag>
  );
};

export default Reveal;
