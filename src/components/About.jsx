// Server component: the bento grid renders to HTML; only <Reveal> is client JS.

import { telemetry } from '../constants';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const card = 'rounded-2xl border border-border bg-surface';

// lg grid has 6 columns: bio takes 4×2, two stats stack beside it,
// then two stats + education share a row, milestones span the bottom.
const StatTile = ({ stat, index }) => (
  <Reveal
    delay={index * 0.06}
    className={`p-6 rounded-2xl bg-surface flex flex-col justify-between lg:col-span-2 ${
      stat.highlight ? 'card-brutal' : 'border border-border hover:border-accent/40 transition-colors'
    }`}
  >
    <div>
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-2">{stat.label}</span>
      <span
        className={`font-mono font-bold leading-none block ${
          stat.highlight ? 'text-4xl sm:text-5xl text-accent' : 'text-3xl sm:text-4xl text-text-primary'
        }`}
      >
        {stat.value}
      </span>
    </div>
    <p className="font-mono text-xs text-text-secondary mt-3 leading-snug">{stat.sub}</p>
  </Reveal>
);

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <Reveal y={12}>
        <SectionHeading eyebrow={'// 04  About & Telemetry'} title="Background & Philosophy" kinetic="About" />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
        {/* Bio */}
        <Reveal
          className={`${card} sm:col-span-2 lg:col-span-4 lg:row-span-2 p-7 sm:p-9 flex flex-col justify-center gap-4 text-base sm:text-lg text-text-secondary leading-relaxed`}
        >
          <p className="text-text-primary font-bold text-xl sm:text-3xl tracking-tight leading-snug">
            {telemetry.headline}
          </p>
          <p className="max-w-3xl">{telemetry.bio}</p>
        </Reveal>

        {telemetry.stats.map((stat, i) => (
          <StatTile key={stat.label} stat={stat} index={i} />
        ))}

        {/* Education */}
        <Reveal
          delay={0.1}
          className={`${card} sm:col-span-2 lg:col-span-2 p-6 hover:border-accent/40 transition-colors`}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
            {'//'} Academic Background
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-bold text-text-primary">{telemetry.education.degree}</h3>
              <p className="text-sm font-mono text-text-secondary mt-1">{telemetry.education.institution}</p>
              <p className="text-xs font-mono text-text-muted mt-0.5">{telemetry.education.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border">
              <span className="font-mono text-xs text-accent px-2 py-0.5 rounded-md border border-accent/30 bg-accent/5">
                CPI: {telemetry.education.cpi}
              </span>
              <span className="font-mono text-xs text-text-muted">{telemetry.education.year}</span>
            </div>
          </div>
        </Reveal>

        {/* Milestones */}
        <Reveal delay={0.15} className={`${card} sm:col-span-2 lg:col-span-6 p-6 sm:p-8`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
            {'//'} Verified Production Milestones
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {telemetry.milestones.map(milestone => (
              <li key={milestone} className="flex items-start gap-3">
                <span className="font-mono text-accent text-sm shrink-0 mt-0.5 select-none" aria-hidden="true">
                  ✓
                </span>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{milestone}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
