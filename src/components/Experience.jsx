'use client';

import { motion } from 'motion/react';
import { experiences } from '../constants';

// ─── Single Experience Card ─────────────────────────────────────────────────
const ExperienceCard = ({ exp, index }) => (
  <motion.article
    id={`exp-${exp.id}`}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    className={`p-6 sm:p-8 rounded-xl border transition-all duration-200 ${
      exp.isCurrent
        ? 'border-accent/50 bg-surface shadow-lg relative'
        : 'border-[rgb(var(--color-border))] bg-surface/60 hover:bg-surface hover:border-accent/25'
    }`}
  >
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[rgb(var(--color-border))] pb-4 mb-5">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{exp.title}</h3>
          {exp.isCurrent && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CURRENT ROLE
            </span>
          )}
        </div>
        <p className="font-mono text-sm text-accent mt-1 font-medium">
          {exp.company}
          <span className="text-text-muted mx-2">·</span>
          <span className="text-text-secondary font-normal">{exp.location}</span>
        </p>
      </div>

      <span className="font-mono text-xs sm:text-sm text-text-muted shrink-0 font-medium px-2.5 py-1 rounded border border-[rgb(var(--color-border))] bg-surface-dim/40">
        {exp.date}
      </span>
    </div>

    {/* Highlight Banner for Easy Cater / Current Role */}
    {exp.highlightMetric && (
      <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase block">
            {'//'} KEY PRODUCTION OUTCOME
          </span>
          <p className="text-text-primary text-sm font-semibold mt-0.5">{exp.highlightMetric}</p>
        </div>
        {exp.highlightPill && (
          <span className="font-mono text-xs text-text-secondary bg-surface/80 border border-[rgb(var(--color-border))] px-2.5 py-1 rounded shrink-0">
            {exp.highlightPill}
          </span>
        )}
      </div>
    )}

    {/* Summary */}
    {exp.summary && <p className="text-text-secondary text-sm leading-relaxed mb-6">{exp.summary}</p>}

    {/* Project Deliverables List */}
    <div className="space-y-4">
      {exp.projects.map((proj, i) => (
        <div
          key={i}
          className="p-4 rounded-lg bg-surface-dim/30 border border-[rgb(var(--color-border))] hover:border-accent/20 transition-colors"
        >
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h4 className="text-sm sm:text-base font-semibold text-text-primary">{proj.title}</h4>
          </div>

          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3">{proj.description}</p>

          {/* Metric Callout */}
          <div className="flex items-start gap-2 text-xs font-mono text-accent mb-3">
            <span className="text-accent/60">→</span>
            <span className="font-medium leading-tight">{proj.metric}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {proj.tags.map(tag => (
              <span key={tag} className="chip text-[10px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.article>
);

// ─── Experience Section ─────────────────────────────────────────────────────
const Experience = () => (
  <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-b border-[rgb(var(--color-border))]">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
        {'//'} 02&nbsp;&nbsp;Professional History
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">Engineering Experience</h2>
      <p className="text-text-secondary text-base mt-2 max-w-xl leading-relaxed">
        Production backend architectures, real-time voice infrastructure, and high-throughput data pipelines.
      </p>
    </motion.div>

    {/* Vertical Editorial Timeline */}
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} />
      ))}
    </div>
  </section>
);

export default Experience;
