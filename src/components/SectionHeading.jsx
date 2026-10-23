// Section heading with an oversized, slowly scrolling outline word behind it.
// The moving word is decorative (aria-hidden) and CSS-only; it stops when the
// visitor prefers reduced motion (see globals.css).

const SectionHeading = ({ eyebrow, title, description, kinetic, descriptionClassName = 'max-w-2xl' }) => {
  const word = (kinetic || title).toUpperCase();
  const half = Array.from({ length: 4 }, (_, i) => <span key={i}>{word} ✦</span>);

  return (
    <div className="relative isolate mb-14">
      <div className="kinetic" aria-hidden="true">
        <div className="kinetic__track">
          {half}
          {half}
        </div>
      </div>

      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">{title}</h2>
      {description && (
        <p className={`text-text-secondary text-base mt-3 leading-relaxed ${descriptionClassName}`}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
