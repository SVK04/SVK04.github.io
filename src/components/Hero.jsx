import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconArrowDown } from '@tabler/icons-react';
import { hero } from '../constants';

// Server component, rendered eagerly. Animations are CSS-only (no motion) so
// the LCP text paints without waiting for hydration.

const SOCIAL_ICONS = { GitHub: IconBrandGithub, LinkedIn: IconBrandLinkedin };

const TreeLine = ({ isLast }) => (
  <span className="font-mono text-text-muted/60 text-xs shrink-0 select-none mt-1" aria-hidden="true">
    {isLast ? '└──' : '├──'}
  </span>
);

const BlinkCursor = () => (
  <span className="inline-block w-[6px] h-[13px] bg-accent ml-1 align-middle animate-blink" aria-hidden="true" />
);

const Hero = () => {
  return (
    <section id="work" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border">
      {/* Background Dot-Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-80" aria-hidden="true" />

      {/* Ambient Depth */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(var(--color-accent),0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* ── LEFT: identity, value, proof, CTAs ─────────────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/80 text-xs font-mono text-text-secondary uppercase">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span>{hero.role}</span>
              </span>
              <span className="font-mono text-xs text-text-muted">{hero.location}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.02] mb-5">
              {hero.name}
            </h1>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              {hero.valueStatement}
            </p>

            {/* Headline metrics */}
            <dl className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 max-w-xl">
              {hero.metrics.map(m => (
                <div key={m.label} className="rounded-2xl border border-border bg-surface/80 p-3 sm:p-4">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-mono text-2xl sm:text-3xl font-bold text-text-primary leading-none">{m.value}</dd>
                  <dd
                    className="mt-1.5 text-[11px] sm:text-xs font-semibold text-accent leading-tight"
                    aria-hidden="true"
                  >
                    {m.label}
                  </dd>
                  <dd className="mt-1 text-[10px] sm:text-[11px] font-mono text-text-muted leading-snug">{m.sub}</dd>
                </div>
              ))}
            </dl>

            {/* Core stack tag line */}
            <p className="font-mono text-xs sm:text-sm text-text-secondary mb-8 max-w-xl">
              <span className="text-accent">$ stack </span>
              {hero.coreStack.join(' · ')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={hero.resume.href}
                download={hero.resume.fileName}
                className="btn-brutal btn-brutal--accent px-5 py-2.5 text-sm"
              >
                <IconDownload size={16} aria-hidden="true" />
                <span>Download resume</span>
              </a>

              <a href="#contact" className="btn-brutal btn-brutal--plain px-5 py-2.5 text-sm">
                <IconMail size={16} aria-hidden="true" />
                <span>Contact me</span>
              </a>

              <div className="flex items-center gap-2">
                {hero.socials.map(s => {
                  const Icon = SOCIAL_ICONS[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="p-2.5 rounded-xl border border-border bg-surface/40 text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                    >
                      {Icon ? <Icon size={17} aria-hidden="true" /> : s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#projects-list"
              className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
            >
              See the case studies
              <IconArrowDown size={13} aria-hidden="true" />
            </a>
          </div>

          {/* ── RIGHT: current focus terminal ───────────────────────────── */}
          <div className="lg:col-span-5 animate-fade-in-up [animation-delay:150ms]">
            <div
              className="terminal-card rounded-2xl shadow-xl overflow-hidden"
              role="region"
              aria-label="Current technical focus"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-dim/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-xs text-text-muted ml-2">~ /current-focus</span>
                </div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">Active Runtime</span>
              </div>

              <div className="p-5 sm:p-6 space-y-6 text-xs sm:text-sm">
                <div>
                  <p className="font-mono text-xs font-semibold text-accent tracking-widest uppercase mb-2.5">
                    {'//'} ACTIVE_PROJECTS
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    {hero.activeWork.map((item, i) => (
                      <li key={item.task} className="flex items-start gap-2">
                        <TreeLine isLast={i === hero.activeWork.length - 1} />
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="font-mono text-[11px] px-1.5 border shrink-0 leading-tight rounded border-accent/40 text-accent bg-accent/5">
                            {item.company}
                          </span>
                          <span className="font-mono text-xs text-text-secondary leading-snug">{item.task}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border" aria-hidden="true" />

                <div>
                  <p className="font-mono text-xs font-semibold text-accent tracking-widest uppercase mb-2.5">
                    {'//'} ARCHITECTURE_FOCUS
                  </p>
                  <ul className="space-y-2 pl-1">
                    {hero.architectureFocus.map((interest, i) => (
                      <li key={interest} className="flex items-start gap-2">
                        <TreeLine isLast={i === hero.architectureFocus.length - 1} />
                        <span className="font-mono text-xs text-text-secondary leading-relaxed">{interest}</span>
                      </li>
                    ))}
                  </ul>
                  <BlinkCursor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
