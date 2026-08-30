'use client';

import { motion } from 'motion/react';
import { engineeringSignals } from '../constants';

const Skills = () => (
  <section id="stack" className="max-w-6xl mx-auto px-6 py-24 border-b border-[rgb(var(--color-border))]">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
        {'//'} 03&nbsp;&nbsp;Technical Skills
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        Core Technologies &amp; Architecture
      </h2>
      <p className="text-text-secondary text-base mt-2 max-w-2xl leading-relaxed">
        Technologies, cloud services, and tools I actively build with and deploy to production.
      </p>
    </motion.div>

    {/* Structured Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {engineeringSignals.map((signal, idx) => (
        <motion.div
          key={signal.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: idx * 0.06 }}
          className={`p-6 sm:p-7 rounded-xl border border-[rgb(var(--color-border))] bg-surface hover:border-accent/30 transition-all duration-200 flex flex-col justify-between ${
            idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[rgb(var(--color-border))] pb-3">
              <h3 className="font-mono text-xs font-bold text-accent tracking-wider uppercase">{signal.category}</h3>
              <span className="font-mono text-xs text-text-muted">
                {'//'} {signal.code}
              </span>
            </div>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">{signal.description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgb(var(--color-border))]">
            {signal.technologies.map(tech => (
              <span key={tech} className="chip text-xs">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
