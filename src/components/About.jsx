'use client';

import { motion } from 'motion/react';
import { telemetry } from '../constants';

// ─── Single stat block ──────────────────────────────────────────────────────

const StatBlock = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    className="p-5 border border-[rgb(var(--color-border))] hover:border-accent/25 transition-colors duration-150 group"
  >
    <p className="font-mono text-xs text-text-secondary/60 tracking-widest uppercase mb-1.5">{stat.label}</p>
    <p className="text-4xl font-bold text-text-primary group-hover:text-accent transition-colors duration-150 leading-none">
      {stat.value}
    </p>
    <p className="font-mono text-xs text-text-secondary mt-2 leading-relaxed">{stat.sub}</p>
  </motion.div>
);

// ─── About / Telemetry Section ──────────────────────────────────────────────

const About = () => (
  <section id="telemetry" className="border-t border-[rgb(var(--color-border))] max-w-6xl mx-auto px-6 py-24">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{'//'} 04&nbsp;&nbsp;Telemetry</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Accomplishments</h2>
      <p className="text-text-secondary text-base mt-2">
        Concrete engineering milestones and institutional background.
      </p>
    </motion.div>

    {/* Stats grid — gap rendered as border lines */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgb(var(--color-border))] mb-10">
      {telemetry.stats.map((stat, i) => (
        <div key={stat.label} className="bg-background">
          <StatBlock stat={stat} index={i} />
        </div>
      ))}
    </div>

    {/* Education block */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="border border-[rgb(var(--color-border))] p-5 md:p-6 mb-8 hover:border-accent/20 transition-colors duration-150"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Education</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-text-primary font-medium text-base">{telemetry.education.degree}</p>
          <p className="font-mono text-sm text-text-secondary mt-0.5">
            {telemetry.education.institution}
            <span className="text-text-secondary/40 mx-1.5">—</span>
            {telemetry.education.location}
          </p>
        </div>
        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
          <span className="font-mono text-sm text-text-secondary border border-[rgb(var(--color-border))] px-2.5 py-0.5">
            CPI&nbsp;{telemetry.education.cpi}
          </span>
          <span className="font-mono text-sm text-text-secondary/60">{telemetry.education.year}</span>
        </div>
      </div>
    </motion.div>

    {/* Milestones */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.25 }}
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Milestones</p>
      <div className="space-y-3">
        {telemetry.milestones.map((milestone, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="font-mono text-accent text-base shrink-0 mt-0.5" aria-hidden="true">
              ✓
            </span>
            <p className="text-text-secondary text-base leading-relaxed">{milestone}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
