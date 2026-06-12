'use client';

import { motion } from 'motion/react';
import { experiences } from '../constants';

// ─── Project entry inside an experience card ────────────────────────────────

const ProjectEntry = ({ project, isLast }) => (
  <div
    className={`p-4 bg-surface border border-[rgb(var(--color-border))] hover:border-accent/20 transition-colors duration-150 ${
      !isLast ? 'mb-3' : ''
    }`}
  >
    <h4 className="text-text-primary text-base font-semibold mb-2 leading-snug">{project.title}</h4>
    <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>

    {/* Impact metric */}
    <p className="font-mono text-sm text-accent mb-3">
      <span className="text-text-secondary/50 mr-1.5">→</span>
      {project.metric}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map(tag => (
        <span key={tag} className="chip">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// ─── Single experience card ─────────────────────────────────────────────────

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    id={`exp-${exp.id}`}
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="relative pl-6 border-l border-[rgb(var(--color-border))] group"
    style={{
      /* On hover, shift left border to accent color */
      borderLeftColor: undefined,
    }}
  >
    {/* Animated left-border on hover — pseudo-element via inset shadow */}
    <div
      className="absolute inset-y-0 -left-px w-px bg-[rgb(var(--color-border))] group-hover:bg-accent transition-colors duration-300"
      aria-hidden="true"
    />

    {/* Timeline node */}
    <div
      className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 border border-[rgb(var(--color-border))] bg-background group-hover:border-accent group-hover:bg-accent/10 transition-all duration-200"
      aria-hidden="true"
    />

    {/* Card header */}
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
        <h3 className="text-text-primary font-semibold text-lg leading-tight">{exp.title}</h3>
        <span className="font-mono text-sm text-text-secondary shrink-0">{exp.date}</span>
      </div>
      <p className="font-mono text-sm">
        <span className="text-accent">{exp.company}</span>
        <span className="text-text-secondary/50 mx-1.5">—</span>
        <span className="text-text-secondary">{exp.location}</span>
      </p>
    </div>

    {/* Project entries */}
    <div>
      {exp.projects.map((proj, i) => (
        <ProjectEntry key={i} project={proj} isLast={i === exp.projects.length - 1} />
      ))}
    </div>
  </motion.div>
);

// ─── Experience Section ─────────────────────────────────────────────────────

const Experience = () => (
  <section id="experience" className="border-t border-[rgb(var(--color-border))] max-w-6xl mx-auto px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
        {'//'} 02&nbsp;&nbsp;Work Experience
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Professional History</h2>
    </motion.div>

    <div className="space-y-14">
      {experiences.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} />
      ))}
    </div>
  </section>
);

export default Experience;
