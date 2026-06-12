'use client';

import { motion } from 'motion/react';
import { stack } from '../constants';

// ─── Category accent colours ────────────────────────────────────────────────

const CATEGORY_ACCENT = {
  LANGUAGES: 'text-blue-400',
  FRAMEWORKS: 'text-purple-400',
  'AI & VOICE': 'text-green-400',
  'INFRA & TOOLS': 'text-orange-400',
};

// ─── Skills / Stack Radar ───────────────────────────────────────────────────

const Skills = () => (
  <section id="stack" className="border-t border-[rgb(var(--color-border))] max-w-6xl mx-auto px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{'//'} 03&nbsp;&nbsp;Stack Radar</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Technologies</h2>
      <p className="text-text-secondary text-base mt-3">What I actively build with and reach for first.</p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {Object.entries(stack).map(([category, techs], catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, delay: catIndex * 0.08 }}
        >
          {/* Category label */}
          <p
            className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${
              CATEGORY_ACCENT[category] ?? 'text-text-secondary'
            }`}
          >
            {category}
          </p>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 + i * 0.025 }}
                className="chip cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
