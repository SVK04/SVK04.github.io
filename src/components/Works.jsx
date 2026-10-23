// Server component: the project summaries render to HTML and never ship as JS.
// Client islands: <Reveal> (scroll animation) and <CaseStudy> (lazy detail).

import { IconBrandGithub, IconLock, IconPackage } from '@tabler/icons-react';
import { caseStudies, projects } from '../constants';
import CaseStudy from './CaseStudy';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// ─── Compact pipeline (summary view) ───────────────────────────────────────
const ArchitectureFlow = ({ steps }) => (
  <ol className="arch-container my-1 overflow-x-auto" aria-label="Architecture pipeline">
    {steps.map((node, idx) => (
      <li key={node.step} className="flex items-center gap-1.5 shrink-0">
        <div className="arch-node shadow-sm">
          <span className="font-semibold text-text-primary text-[11px] leading-tight">{node.step}</span>
          <span className="text-[9px] text-text-muted font-mono leading-tight">{node.sub}</span>
        </div>
        {idx < steps.length - 1 && (
          <span className="arch-arrow px-0.5 select-none" aria-hidden="true">
            →
          </span>
        )}
      </li>
    ))}
  </ol>
);

const SourceBadge = ({ project }) =>
  project.githubUrl ? (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md border border-border text-text-secondary hover:text-accent hover:border-accent/40 bg-surface/50 transition-colors"
    >
      <IconBrandGithub size={13} aria-hidden="true" />
      <span>source</span>
    </a>
  ) : (
    <span className="inline-flex items-center gap-1 font-mono text-xs text-text-muted border border-border px-2.5 py-1 rounded-md">
      <IconLock size={12} aria-hidden="true" />
      <span>private</span>
    </span>
  );

const StackChips = ({ items, size = 'text-[11px]' }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
    {items.map(tech => (
      <li key={tech} className={`chip ${size}`}>
        {tech}
      </li>
    ))}
  </ul>
);

// ─── Case-study card: scannable summary + expandable detail ────────────────
const CaseStudyCard = ({ project, study }) => (
  <Reveal
    as="article"
    id={`project-${project.id}`}
    className={`rounded-2xl bg-surface p-6 sm:p-8 lg:p-10 ${
      project.isFeatured ? 'card-brutal' : 'border border-border hover:border-accent/40 transition-colors'
    }`}
  >
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-border pb-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-accent px-2 py-0.5 rounded-md bg-accent/10 border border-accent/30 font-semibold tracking-wider uppercase">
          {project.isFeatured ? 'Flagship case study' : 'Case study'} · {project.number}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {project.company} · {project.period}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {project.id === 'voicenow' && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md border border-accent/30 text-accent bg-accent/5">
            <IconPackage size={13} aria-hidden="true" />
            NPM published SDK
          </span>
        )}
        <SourceBadge project={project} />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 space-y-5">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">{project.name}</h3>
          <p className="text-text-secondary text-base leading-relaxed mt-2">{project.tagline}</p>
        </div>

        <div className="metric-highlight">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary block leading-none">
            {project.metricValue}
          </span>
          <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block mt-1">
            {project.metricLabel}
          </span>
          <p className="text-xs text-text-secondary mt-1">{project.metricSub}</p>
        </div>

        <div className="space-y-1.5">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
            The engineering challenge
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">{project.whatWasHard}</p>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-5">
        <div>
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
            Pipeline at a glance
          </span>
          <ArchitectureFlow steps={project.architectureFlow} />
        </div>
        <div>
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">Tech stack</span>
          <StackChips items={project.stack} />
        </div>
      </div>
    </div>

    <CaseStudy id={study.id} projectName={project.name} />
  </Reveal>
);

// ─── Compact card for projects without a full case study ───────────────────
const ProjectCard = ({ project, index }) => (
  <Reveal
    as="article"
    id={`project-${project.id}`}
    delay={index * 0.08}
    className="rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between gap-5 hover:border-accent/40 transition-colors"
  >
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
            Project · {project.number}
          </span>
          <h3 className="text-xl font-bold text-text-primary mt-1">{project.name}</h3>
          <span className="font-mono text-xs text-text-muted">
            {project.company} · {project.period}
          </span>
        </div>
        <SourceBadge project={project} />
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{project.tagline}</p>
      <div className="metric-highlight">
        <span className="font-mono text-xl font-bold text-text-primary leading-none block">{project.metricValue}</span>
        <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block mt-1">
          {project.metricLabel}
        </span>
      </div>
      <ArchitectureFlow steps={project.architectureFlow} />
    </div>
    <div className="pt-4 border-t border-border">
      <StackChips items={project.stack} />
    </div>
  </Reveal>
);

// ─── Selected Work Section ──────────────────────────────────────────────────
const Works = () => {
  const studyById = Object.fromEntries(caseStudies.map(s => [s.id, s]));
  const withStudy = projects.filter(p => studyById[p.id]);
  const others = projects.filter(p => !studyById[p.id]);

  return (
    <section id="projects-list" className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <Reveal y={12}>
        <SectionHeading
          eyebrow={'// 01  Selected Work'}
          title="Architecture Case Studies"
          kinetic="Selected work"
          description="Production systems, architectural trade-offs, and measured results from 2+ years of shipping. Each card is readable at a glance; open the case study for the architecture, data model and decisions."
        />
      </Reveal>

      <div className="space-y-10">
        {withStudy.map(project => (
          <CaseStudyCard key={project.id} project={project} study={studyById[project.id]} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-16">
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">{'//'} More projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
