'use client';

// Full case study body. Loaded lazily (its own JS chunk) the first time a
// visitor opens a case study, so none of this data is in the initial page.
// Placeholder strings starting with "TODO" are not shown: any item that still
// holds one is left out, and a section with nothing left is skipped.

import { caseStudies } from '../constants/caseStudies';
import ArchitectureDiagram from './ArchitectureDiagram';

const isTodo = text => typeof text === 'string' && text.startsWith('TODO');
const known = (...texts) => texts.every(t => !isTodo(t));

const Section = ({ n, title, children, className = '' }) => (
  <section className={`space-y-3 ${className}`}>
    <h4 className="flex items-baseline gap-2 text-xs font-semibold uppercase tracking-widest text-text-primary">
      <span className="text-accent">{n}</span>
      {title}
    </h4>
    {children}
  </section>
);

const CaseStudyBody = ({ id }) => {
  const study = caseStudies.find(s => s.id === id);
  if (!study) return null;
  const { problem, role, architecture, dataModel } = study;

  const ownership = role.ownership.filter(item => known(item));
  const stack = study.stack
    .map(group => ({ ...group, items: group.items.filter(item => known(item)) }))
    .filter(group => group.items.length > 0);
  const entities = dataModel.entities.filter(e => known(e.name, e.detail));
  const decisions = study.decisions.filter(d => known(d.decision, d.why));
  const challenges = study.challenges.filter(c => known(c.challenge, c.solution));
  const results = study.results.filter(r => known(r.value, r.label));
  const links = study.links.filter(l => (l.href ? known(l.label) : known(l.label, l.note)));

  // Numbering follows the sections actually shown.
  let n = 0;
  const next = () => String(++n).padStart(2, '0');

  return (
    <div className="mt-6 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-2">
      <Section n={next()} title="Problem">
        <p className="text-sm leading-relaxed text-text-secondary">{problem}</p>
      </Section>

      <Section n={next()} title="My role & ownership">
        <p className="text-sm font-medium text-text-primary">{role.title}</p>
        {known(role.team) && <p className="text-sm text-text-secondary">{role.team}</p>}
        <ul className="space-y-1.5 text-sm text-text-secondary">
          {ownership.map(item => (
            <li key={item} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">
                ▸
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section n={next()} title="Architecture" className="lg:col-span-2">
        <ArchitectureDiagram id={id} {...architecture} />
      </Section>

      {stack.length > 0 && (
        <Section n={next()} title="Stack">
          <dl className="space-y-2.5">
            {stack.map(group => (
              <div key={group.layer} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
                <dt className="w-28 shrink-0 text-xs text-text-muted">{group.layer}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <span key={item} className="chip text-[11px]">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section n={next()} title="Data model">
        {known(dataModel.summary) && <p className="text-sm leading-relaxed text-text-secondary">{dataModel.summary}</p>}
        {entities.length > 0 && (
          <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
            {entities.map(entity => (
              <div key={entity.name} className="grid grid-cols-1 gap-1 px-3 py-2.5 sm:grid-cols-[10rem_1fr] sm:gap-3">
                <dt className="text-xs font-semibold text-text-primary">{entity.name}</dt>
                <dd className="text-xs leading-relaxed text-text-secondary">{entity.detail}</dd>
              </div>
            ))}
          </dl>
        )}
      </Section>

      {decisions.length > 0 && (
        <Section n={next()} title="Key decisions & trade-offs" className="lg:col-span-2">
          <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {decisions.map(d => (
              <li key={d.decision} className="space-y-2 rounded-xl border border-border bg-surface-dim/40 p-4">
                <p className="text-sm font-semibold text-text-primary">{d.decision}</p>
                <p className="text-xs leading-relaxed text-text-secondary">
                  <span className="text-accent">why · </span>
                  {d.why}
                </p>
                {known(d.tradeoff) && (
                  <p className="text-xs leading-relaxed text-text-secondary">
                    <span className="text-text-muted">cost · </span>
                    {d.tradeoff}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {challenges.length > 0 && (
        <Section n={next()} title="Challenges solved">
          <ul className="space-y-3">
            {challenges.map(c => (
              <li key={c.challenge} className="space-y-1 text-sm">
                <p className="text-text-primary">{c.challenge}</p>
                <p className="text-text-secondary">
                  <span className="text-xs text-accent">→ </span>
                  {c.solution}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {results.length > 0 && (
        <Section n={next()} title="Results">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {results.map(r => (
              <li key={r.label} className="rounded-xl border border-border bg-surface-dim/40 p-3">
                <span className="block font-serif text-3xl leading-none text-text-primary">{r.value}</span>
                <span className="mt-1.5 block text-xs leading-snug text-text-secondary">{r.label}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {links.length > 0 && (
        <Section n={next()} title="Links" className="lg:col-span-2">
          <ul className="flex flex-wrap gap-3 text-sm">
            {links.map(link => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip text-xs hover:text-accent"
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <span className="inline-flex flex-wrap items-center gap-2 text-text-secondary">
                    <span className="text-xs text-text-muted">{link.label}:</span>
                    {link.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
};

export default CaseStudyBody;
