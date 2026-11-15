// Server component: the project rows render to HTML and never ship as JS.
// The only client island is <CaseStudy> (lazy detail view).

import { caseStudies, projects } from '../constants';
import CaseStudy from './CaseStudy';

const studyIds = new Set(caseStudies.map(s => s.id));

// ─── Large row: one project, one outcome, expandable case study ────────────
const FeaturedRow = ({ project }) => (
  <article id={`project-${project.id}`} className="scroll-mt-24 border-t border-border py-8 sm:py-10">
    <div className="grid gap-3 md:grid-cols-[5rem_1.5fr_1fr] md:items-baseline md:gap-6">
      <span className="text-[15px] text-text-muted">{project.number}</span>
      <div>
        <h3 className="font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-none tracking-[-0.02em]">{project.short}</h3>
        <p className="mt-3 text-base text-text-muted">{project.summary}</p>
      </div>
      <p className="text-xl font-semibold text-accent sm:text-[22px]">
        {project.outcome}
        <span className="mt-1.5 block text-sm font-normal text-text-muted">{project.outcomeSub}</span>
      </p>
    </div>

    {studyIds.has(project.id) && (
      <div className="md:pl-[6.5rem]">
        <CaseStudy id={project.id} projectName={project.name} />
      </div>
    )}
  </article>
);

// ─── Compact row for everything else ───────────────────────────────────────
const CompactRow = ({ project }) => (
  <li
    id={`project-${project.id}`}
    className="grid scroll-mt-24 gap-1.5 border-t border-border py-5 md:grid-cols-[1fr_2fr_1fr] md:items-baseline md:gap-6"
  >
    <h4 className="text-lg font-semibold">{project.short}</h4>
    <p className="text-base text-text-muted">{project.summary}</p>
    <p className="text-base font-medium md:text-right">{project.outcome}</p>
  </li>
);

// ─── Selected Work Section ──────────────────────────────────────────────────
const Works = () => {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="work" className="wrap scroll-mt-16 pt-24 sm:pt-28">
      <h2 className="label mb-5">Selected work</h2>
      <div className="border-b border-border">
        {featured.map(project => (
          <FeaturedRow key={project.id} project={project} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="label mb-5 mt-16">Also built</h3>
          <ul className="border-b border-border">
            {others.map(project => (
              <CompactRow key={project.id} project={project} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Works;
