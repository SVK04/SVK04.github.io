'use client';

import { motion } from 'motion/react';
import { projects } from '../constants';
import { IconBrandGithub, IconLock, IconPackage } from '@tabler/icons-react';

// ─── Technical Architecture Diagram Component ─────────────────────────────
const ArchitectureFlow = ({ steps }) => (
  <div className="arch-container my-4 overflow-x-auto">
    {steps.map((node, idx) => (
      <div key={node.step} className="flex items-center gap-1.5 shrink-0">
        <div className="arch-node shadow-sm">
          <span className="font-semibold text-text-primary text-[11px] leading-tight">{node.step}</span>
          <span className="text-[9px] text-text-muted font-mono leading-tight">{node.sub}</span>
        </div>
        {idx < steps.length - 1 && (
          <span className="arch-arrow px-0.5 select-none" aria-hidden="true">
            →
          </span>
        )}
      </div>
    ))}
  </div>
);

// ─── Featured Flagship Project (VoiceNow) ──────────────────────────────────
const FeaturedProject = ({ project }) => (
  <motion.article
    id={`project-${project.id}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    className="border border-[rgb(var(--color-border))] bg-surface rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
  >
    {/* Featured Header Pill */}
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[rgb(var(--color-border))] pb-5">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/30 font-semibold tracking-wider uppercase">
          {'//'} Flagship Case Study · {project.number}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {project.company} · {project.period}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
          <IconPackage size={13} />
          NPM Published SDK
        </span>
        <span
          className="inline-flex items-center gap-1 font-mono text-xs text-text-muted border border-[rgb(var(--color-border))] px-2.5 py-1 rounded"
          title="Enterprise Architecture"
        >
          <IconLock size={12} />
          private
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Project Overview & Metrics */}
      <div className="lg:col-span-7 space-y-5">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-text-secondary text-base leading-relaxed mt-2">{project.tagline}</p>
        </div>

        {/* Metric Highlight Box */}
        <div className="metric-highlight flex items-start gap-4">
          <div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary block leading-none">
              {project.metricValue}
            </span>
            <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block mt-1">
              {project.metricLabel}
            </span>
            <p className="text-xs text-text-secondary mt-1">{project.metricSub}</p>
          </div>
        </div>

        {/* What I Built */}
        <div className="space-y-1.5">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">WHAT I BUILT</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{project.whatIBuilt}</p>
        </div>

        {/* What Was Hard */}
        <div className="space-y-1.5 p-4 rounded-lg bg-surface-dim/40 border border-[rgb(var(--color-border))]">
          <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
            <span>THE ENGINEERING CHALLENGE</span>
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">{project.whatWasHard}</p>
        </div>
      </div>

      {/* Right Column: Visual Architecture Pipeline & Stack */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
              Real-Time Audio Pipeline
            </span>
            <span className="font-mono text-[10px] text-accent">Bi-Directional Stream</span>
          </div>

          <ArchitectureFlow steps={project.architectureFlow} />
        </div>

        {/* Tech Stack Chips */}
        <div>
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">Tech Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(tech => (
              <span key={tech} className="chip text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

// ─── Asymmetric Supporting Project Card ────────────────────────────────────
const SupportingProject = ({ project, index }) => (
  <motion.article
    id={`project-${project.id}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="border border-[rgb(var(--color-border))] bg-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-accent/30 transition-all duration-200"
  >
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-[rgb(var(--color-border))] pb-4">
        <div>
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
            {'//'} Case Study · {project.number}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1 group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-text-muted">
            {project.company} · {project.period}
          </span>
        </div>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border border-[rgb(var(--color-border))] text-text-secondary hover:text-accent hover:border-accent/40 bg-surface/50 transition-colors"
          >
            <IconBrandGithub size={13} />
            <span>source</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 font-mono text-xs text-text-muted border border-[rgb(var(--color-border))] px-2.5 py-1 rounded">
            <IconLock size={12} />
            <span>private</span>
          </span>
        )}
      </div>

      {/* Tagline */}
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{project.tagline}</p>

      {/* Dominant Metric Box */}
      <div className="metric-highlight">
        <span className="font-mono text-2xl font-bold text-text-primary leading-none block">{project.metricValue}</span>
        <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block mt-1">
          {project.metricLabel}
        </span>
        <p className="text-xs text-text-secondary mt-0.5">{project.metricSub}</p>
      </div>

      {/* Architecture Flow Diagram */}
      {project.architectureFlow && (
        <div>
          <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-1.5">
            Architecture Pipeline
          </span>
          <ArchitectureFlow steps={project.architectureFlow} />
        </div>
      )}

      {/* What Was Hard / Focus */}
      <div className="p-3.5 rounded bg-surface-dim/40 border border-[rgb(var(--color-border))] text-xs space-y-1">
        <span className="font-mono text-accent uppercase tracking-wider font-semibold block">
          ENGINEERING CHALLENGE:
        </span>
        <p className="text-text-secondary leading-relaxed">{project.whatWasHard}</p>
      </div>
    </div>

    {/* Stack Chips */}
    <div className="pt-5 mt-5 border-t border-[rgb(var(--color-border))]">
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(tech => (
          <span key={tech} className="chip text-[11px]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

// ─── Selected Work Section ──────────────────────────────────────────────────
const Works = () => {
  const featured = projects.find(p => p.isFeatured) || projects[0];
  const supporting = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects-list" className="max-w-6xl mx-auto px-6 py-24 border-b border-[rgb(var(--color-border))]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
          {'//'} 01&nbsp;&nbsp;Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">Architecture Case Studies</h2>
        <p className="text-text-secondary text-base mt-2 max-w-2xl leading-relaxed">
          Production systems, architectural trade-offs, and quantifiable engineering results from 2+ years of shipping.
        </p>
      </motion.div>

      {/* Flagship Featured Project */}
      <div className="mb-10">
        <FeaturedProject project={featured} />
      </div>

      {/* Asymmetric 2-Column Grid for Supporting Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supporting.map((project, index) => (
          <SupportingProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Works;
