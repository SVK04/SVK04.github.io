'use client';

import { motion } from 'motion/react';
import { telemetry } from '../constants';

// ─── Stat Block ─────────────────────────────────────────────────────────────
const StatBlock = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    className="p-6 rounded-xl border border-[rgb(var(--color-border))] bg-surface hover:border-accent/30 transition-all group flex flex-col justify-between"
  >
    <div>
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-2">{stat.label}</span>
      <span className="font-mono text-4xl sm:text-5xl font-bold text-text-primary group-hover:text-accent transition-colors leading-none block">
        {stat.value}
      </span>
    </div>
    <p className="font-mono text-xs text-text-secondary mt-3 leading-snug">{stat.sub}</p>
  </motion.div>
);

// ─── About Section ──────────────────────────────────────────────────────────
const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-b border-[rgb(var(--color-border))]">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
        {'//'} 04&nbsp;&nbsp;About &amp; Telemetry
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">Background &amp; Philosophy</h2>
    </motion.div>

    {/* Human Bio Statement */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="p-7 sm:p-9 rounded-xl border border-[rgb(var(--color-border))] bg-surface mb-10 text-base sm:text-lg text-text-secondary leading-relaxed space-y-4"
    >
      <p className="text-text-primary font-medium text-lg sm:text-xl">{telemetry.headline}</p>
      <p className="max-w-3xl">{telemetry.bio}</p>
    </motion.div>

    {/* Dominant Numbers Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {telemetry.stats.map((stat, i) => (
        <StatBlock key={stat.label} stat={stat} index={i} />
      ))}
    </div>

    {/* Credentials & Milestones Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Education Block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="lg:col-span-5 p-6 rounded-xl border border-[rgb(var(--color-border))] bg-surface hover:border-accent/20 transition-colors"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
          {'//'} Academic Background
        </p>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-text-primary">{telemetry.education.degree}</h3>
            <p className="text-sm font-mono text-text-secondary mt-1">{telemetry.education.institution}</p>
            <p className="text-xs font-mono text-text-muted mt-0.5">{telemetry.education.location}</p>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-[rgb(var(--color-border))]">
            <span className="font-mono text-xs text-accent px-2 py-0.5 rounded border border-accent/30 bg-accent/5">
              CPI: {telemetry.education.cpi}
            </span>
            <span className="font-mono text-xs text-text-muted">Class of {telemetry.education.year}</span>
          </div>
        </div>
      </motion.div>

      {/* Production Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="lg:col-span-7 p-6 rounded-xl border border-[rgb(var(--color-border))] bg-surface"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 font-semibold">
          {'//'} Verified Production Milestones
        </p>
        <div className="space-y-3">
          {telemetry.milestones.map((milestone, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-mono text-accent text-sm shrink-0 mt-0.5 select-none" aria-hidden="true">
                ✓
              </span>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{milestone}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
