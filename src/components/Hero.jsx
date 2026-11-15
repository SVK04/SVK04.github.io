import Image from 'next/image';
import { hero, resume } from '../constants';

// Server component, rendered eagerly. Animations are CSS-only (no motion) so
// the LCP headline paints without waiting for hydration.

// Before/after response time, drawn to scale: the "after" bar is `afterShare`
// of the "before" bar.
const Comparison = ({ data }) => (
  <figure>
    <figcaption className="label">{data.title}</figcaption>

    <dl className="mt-5 space-y-2.5">
      <div className="grid grid-cols-[3.75rem_1fr] items-center gap-3">
        <dt className="text-sm text-text-muted">{data.before.label}</dt>
        <dd className="flex h-11 origin-left animate-bar-grow items-center rounded-sm bg-surface-dim px-3.5 text-base font-semibold text-text-primary">
          {data.before.value}
        </dd>
      </div>
      <div className="grid grid-cols-[3.75rem_1fr] items-center gap-3">
        <dt className="text-sm text-text-muted">{data.after.label}</dt>
        <dd className="flex h-11 items-center gap-3">
          <span
            className="h-full origin-left animate-bar-grow rounded-sm bg-accent [animation-delay:350ms]"
            style={{ width: `${data.afterShare * 100}%` }}
            aria-hidden="true"
          />
          <span className="text-base font-semibold text-accent">{data.after.value}</span>
        </dd>
      </div>
    </dl>

    <p className="mt-4 text-base leading-normal text-text-muted">{data.note}</p>
  </figure>
);

const Hero = () => (
  <section id="top" className="wrap pt-10 sm:pt-16">
    <div className="animate-fade-in-up">
      <p className="flex items-center gap-3 text-[15px] text-text-muted">
        {hero.photo ? (
          // Avatar with the red "open to roles" dot on its corner
          <span className="relative shrink-0">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-accent ring-2 ring-background"
              aria-hidden="true"
            />
          </span>
        ) : (
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        )}
        <span>{hero.kicker.join(' · ')}</span>
      </p>

      <h1 className="mb-9 mt-6 font-serif text-[clamp(3.6rem,14.2vw,12.75rem)] leading-[0.9] tracking-[-0.035em] sm:mb-11 sm:mt-7">
        {hero.headline.lead} <em className="text-accent">{hero.headline.accent}</em>
      </h1>

      <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
        <p className="max-w-[34ch] text-lg leading-normal sm:text-[22px]">{hero.lede}</p>
        <div className="flex flex-wrap gap-3.5 md:justify-end">
          <a href="#contact" className="btn btn--fill">
            Hire me <span aria-hidden="true">→</span>
          </a>
          <a href={resume.href} download={resume.fileName} className="btn">
            Resume (PDF)
          </a>
        </div>
      </div>
    </div>

    {/* Proof strip: one chart and two figures */}
    <div className="mt-12 grid animate-fade-in-up border-t-[1.5px] border-text-primary [animation-delay:150ms] sm:mt-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div className="border-b border-border py-8 md:border-b-0 md:border-r md:pb-11 md:pr-10">
        <Comparison data={hero.comparison} />
      </div>
      {hero.proof.map((item, i) => (
        <div
          key={item.value}
          className={`border-b border-border py-8 md:border-b-0 md:px-8 md:pb-11 ${
            i < hero.proof.length - 1 ? 'md:border-r' : 'md:pr-0'
          }`}
        >
          <p className="font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-none tracking-[-0.02em]">{item.value}</p>
          <p className="mt-3.5 text-base leading-normal text-text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
