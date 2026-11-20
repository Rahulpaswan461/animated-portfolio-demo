/** A real brand mark from public/icons on a white tile, so its own colours read in both themes. */
const Logo = ({ id, name, size = 36 }) => (
  <span className="logo-tile" style={{ width: size, height: size }} title={name}>
    <img src={`/icons/${id}.svg`} alt={name} className="max-h-[58%] max-w-[64%]" loading="lazy" decoding="async" />
  </span>
);

export default Logo;
