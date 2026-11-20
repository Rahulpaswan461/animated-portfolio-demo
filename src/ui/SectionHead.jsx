/** Every section opens the same way: a small label, then an h2 that names the thing, then one line. */
const SectionHead = ({ label, title, lede, children, className = "" }) => (
  <div className={`mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between ${className}`}>
    <div className="max-w-3xl">
      {label && <p className="label mb-4">{label}</p>}
      <h2 className="h2">{title}</h2>
      {lede && <p className="lead mt-5">{lede}</p>}
    </div>
    {children}
  </div>
);

export default SectionHead;
