'use client';

// Full case study body. Loaded lazily (its own JS chunk) the first time a
// visitor opens a case study, so none of this data is in the initial page.
// Strings starting with "TODO" render as visible placeholders.

import { caseStudies } from '../constants/caseStudies';
import ArchitectureDiagram from './ArchitectureDiagram';

const isTodo = text => typeof text === 'string' && text.startsWith('TODO');

const Text = ({ children }) => {
  if (!isTodo(children)) return children;
  return (
    <span className="todo">
      <span className="todo-badge">TODO</span>
      {children.replace(/^TODO:?\s*/, '')}
    </span>
  );
};

const Section = ({ n, title, children, className = '' }) => (
  <section className={`space-y-3 ${className}`}>
    <h4 className="flex items-baseline gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-text-primary">
      <span className="text-accent">{n}</span>
      {title}
    </h4>
    {children}
  </section>
);

const CaseStudyBody = ({ id }) => {
  const study = caseStudies.find(s => s.id === id);
  if (!study) return null;
  const { problem, role, architecture, stack, dataModel, decisions, challenges, results, links } = study;

  return (
    <div className="mt-6 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-2">
      <Section n="01" title="Problem">
        <p className="text-sm leading-relaxed text-text-secondary">
          <Text>{problem}</Text>
        </p>
      </Section>

      <Section n="02" title="My role & ownership">
        <p className="text-sm font-medium text-text-primary">{role.title}</p>
        <p className="text-sm text-text-secondary">
          <Text>{role.team}</Text>
        </p>
        <ul className="space-y-1.5 text-sm text-text-secondary">
          {role.ownership.map(item => (
            <li key={item} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">
                ▸
              </span>
              <span>
                <Text>{item}</Text>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="03" title="Architecture" className="lg:col-span-2">
        <ArchitectureDiagram id={id} {...architecture} />
      </Section>

      <Section n="04" title="Stack">
        <dl className="space-y-2.5">
          {stack.map(group => (
            <div key={group.layer} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
              <dt className="w-28 shrink-0 font-mono text-xs text-text-muted">{group.layer}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map(item =>
                  isTodo(item) ? (
                    <Text key={item}>{item}</Text>
                  ) : (
                    <span key={item} className="chip text-[11px]">
                      {item}
                    </span>
                  )
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section n="05" title="Data model">
        <p className="text-sm leading-relaxed text-text-secondary">
          <Text>{dataModel.summary}</Text>
        </p>
        <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {dataModel.entities.map(entity => (
            <div key={entity.name} className="grid grid-cols-1 gap-1 px-3 py-2.5 sm:grid-cols-[10rem_1fr] sm:gap-3">
              <dt className="font-mono text-xs font-semibold text-text-primary">
                <Text>{entity.name}</Text>
              </dt>
              <dd className="text-xs leading-relaxed text-text-secondary">
                <Text>{entity.detail}</Text>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section n="06" title="Key decisions & trade-offs" className="lg:col-span-2">
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {decisions.map(d => (
            <li key={d.decision} className="space-y-2 rounded-xl border border-border bg-surface-dim/40 p-4">
              <p className="text-sm font-semibold text-text-primary">
                <Text>{d.decision}</Text>
              </p>
              <p className="text-xs leading-relaxed text-text-secondary">
                <span className="font-mono text-accent">why · </span>
                <Text>{d.why}</Text>
              </p>
              <p className="text-xs leading-relaxed text-text-secondary">
                <span className="font-mono text-text-muted">cost · </span>
                <Text>{d.tradeoff}</Text>
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section n="07" title="Challenges solved">
        <ul className="space-y-3">
          {challenges.map(c => (
            <li key={c.challenge} className="space-y-1 text-sm">
              <p className="text-text-primary">
                <Text>{c.challenge}</Text>
              </p>
              <p className="text-text-secondary">
                <span className="font-mono text-xs text-accent">→ </span>
                <Text>{c.solution}</Text>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="08" title="Results">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {results.map(r => (
            <li key={r.label} className="rounded-xl border border-border bg-surface-dim/40 p-3">
              <span
                className={`block font-mono text-2xl font-bold leading-none ${
                  isTodo(r.value) ? 'text-text-muted' : 'text-text-primary'
                }`}
              >
                {isTodo(r.value) ? '—' : r.value}
              </span>
              <span className="mt-1.5 block text-xs leading-snug text-text-secondary">
                <Text>{r.label}</Text>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="09" title="Links" className="lg:col-span-2">
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
                  <span className="font-mono text-xs text-text-muted">{link.label}:</span>
                  <Text>{link.note}</Text>
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default CaseStudyBody;
