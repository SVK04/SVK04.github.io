'use client';

import { motion } from 'motion/react';
import { projects } from '../constants';
import { IconBrandGithub, IconLock } from '@tabler/icons-react';

// ─── Focus tag config ──────────────────────────────────────────────────────

const FOCUS_CONFIG = {
  performance: 'text-orange-400 border-orange-400/25',
  'system-design': 'text-blue-400   border-blue-400/25',
  distributed: 'text-purple-400 border-purple-400/25',
  database: 'text-green-400  border-green-400/25',
};

// ─── Project Card ──────────────────────────────────────────────────────────

const ArchCard = ({ project, index }) => {
  const focusCls = FOCUS_CONFIG[project.focusTag] ?? 'text-text-secondary border-[rgb(var(--color-border))]';

  return (
    <motion.article
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="p-6 md:p-8 border border-[rgb(var(--color-border))] hover:border-accent/30 transition-colors duration-200 group h-full flex flex-col gap-5"
    >
      {/* Header — project name + github/private badge */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="font-mono text-xs text-text-secondary/60 tracking-widest uppercase">{project.company}</span>
          <h3 className="font-mono text-lg md:text-xl font-semibold text-text-primary mt-0.5 group-hover:text-accent transition-colors duration-150 leading-snug">
            {project.name}
          </h3>
        </div>

        {/* Source link or private badge */}
        <div className="shrink-0 mt-0.5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-accent border border-[rgb(var(--color-border))] hover:border-accent/30 px-2 py-1 transition-colors duration-150"
            >
              <IconBrandGithub size={12} aria-hidden="true" />
              source
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 font-mono text-xs text-text-secondary/50 border border-[rgb(var(--color-border))] px-2 py-1 cursor-default select-none"
              title="Private repository"
            >
              <IconLock size={11} aria-hidden="true" />
              private
            </span>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-text-secondary text-base leading-relaxed">{project.tagline}</p>

      {/* Stack */}
      <div className="space-y-2">
        <span className="font-mono text-xs text-text-secondary/60 tracking-widest uppercase">Stack</span>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metric — grows to push focus tag to bottom */}
      <div className="metric-bar flex-1">
        <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-1.5">Metric</span>
        <p className="text-text-primary text-base font-medium leading-relaxed">{project.metric}</p>
      </div>

      {/* Focus tag */}
      <div>
        <span className={`font-mono text-xs border px-2.5 py-1 ${focusCls}`}>{project.focus}</span>
      </div>
    </motion.article>
  );
};

// ─── Works Section ─────────────────────────────────────────────────────────

const Works = () => (
  <section id="projects" className="border-t border-[rgb(var(--color-border))] max-w-6xl mx-auto px-6 py-24">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
        {'//'} 01&nbsp;&nbsp;Engineering Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Architecture Case Studies</h2>
      <p className="text-text-secondary text-base mt-3 max-w-xl leading-relaxed">
        No screenshots, no live demos. Just the systems thinking, trade-offs, and measurable outcomes behind each build.
      </p>
    </motion.div>

    {/* Grid — 2 columns, gap rendered as border lines via bg trick */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgb(var(--color-border))]">
      {projects.map((project, index) => (
        <div key={project.id} className="bg-background">
          <ArchCard project={project} index={index} />
        </div>
      ))}
    </div>
  </section>
);

export default Works;
