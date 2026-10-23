// Server component: the bento grid renders to HTML; only <Reveal> is client JS.

import { engineeringSignals } from '../constants';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// Bento spans by position (lg grid has 6 columns). The first card is the
// large highlighted tile; the rest fill around it.
const SPANS = [
  'sm:col-span-2 lg:col-span-4 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
];

const Skills = () => (
  <section id="stack" className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
    <Reveal y={12}>
      <SectionHeading
        eyebrow={'// 03  Technical Skills'}
        title="Core Technologies & Architecture"
        kinetic="Stack"
        description="Technologies, cloud services, and tools I actively build with and deploy to production."
      />
    </Reveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
      {engineeringSignals.map((signal, idx) => (
        <Reveal
          key={signal.category}
          delay={idx * 0.06}
          className={`rounded-2xl bg-surface p-6 sm:p-7 flex flex-col justify-between gap-6 ${
            signal.highlight ? 'card-brutal' : 'border border-border hover:border-accent/40 transition-colors'
          } ${SPANS[idx] || 'lg:col-span-2'}`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`font-mono font-bold tracking-wider uppercase text-accent ${
                  signal.highlight ? 'text-sm' : 'text-xs'
                }`}
              >
                {signal.category}
              </h3>
              <span className="font-mono text-xs text-text-muted">
                {'//'} {signal.code}
              </span>
            </div>
            <p
              className={
                signal.highlight
                  ? 'text-lg sm:text-2xl font-semibold leading-snug text-text-primary'
                  : 'text-sm leading-relaxed text-text-secondary'
              }
            >
              {signal.description}
            </p>
            {signal.proof && (
              <div className="mt-6">
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Proof in production</p>
                <ul className="space-y-1.5">
                  {signal.proof.map(item => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        <span className="text-accent" aria-hidden="true">
                          ↗
                        </span>
                        <span className="underline decoration-border underline-offset-4 group-hover:decoration-accent">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ul className="flex flex-wrap gap-1.5" aria-label={`${signal.category} technologies`}>
            {signal.technologies.map(tech => (
              <li key={tech} className={`chip ${signal.highlight ? 'text-sm' : 'text-xs'}`}>
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
