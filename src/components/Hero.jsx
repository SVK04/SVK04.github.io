'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// ─── Hero Data ─────────────────────────────────────────────────────────────

const ACTIVE_RND = [
  {
    label: 'eDelta Corp',
    type: 'work',
    desc: 'VoiceNow AI Platform — real-time voice orchestration (VAD → STT → GPT-4o → TTS pipeline)',
  },
  {
    label: 'eDelta Corp',
    type: 'work',
    desc: 'ProtectAllPlans — cross-platform e-commerce warranty infrastructure (Shopify · BigCommerce · WooCommerce)',
  },
  {
    label: 'Side Project',
    type: 'side',
    desc: 'Society Management ERP — multi-tenant RBAC with real-time financial ledger & automated notice dispatch',
  },
];

const ARCH_INTERESTS = [
  'Real-time voice orchestration & WebSocket infrastructure',
  'Micro-SaaS architecture & multi-tenant data isolation mechanics',
  'Serverless event scheduling & distributed systems design',
  'High-performance tooling theory & Rust-based compiler internals',
];

const CURRENT_STACK = [
  'Next.js',
  'Node.js',
  'Python',
  'TypeScript',
  'PostgreSQL',
  'AWS',
  'LangChain',
  'GPT-4o',
  'WebSockets',
  'Docker',
  'Twilio',
];

// ─── Sub-components ────────────────────────────────────────────────────────

const TreeLine = ({ isLast }) => (
  <span className="font-mono text-text-secondary/40 text-sm shrink-0 select-none mt-0.5">{isLast ? '└──' : '├──'}</span>
);

const TypeBadge = ({ type }) => {
  const isWork = type === 'work';
  return (
    <span
      className={`font-mono text-xs px-2 py-0.5 border shrink-0 leading-none ${
        isWork ? 'border-accent/40 text-accent/80' : 'border-purple-400/40 text-purple-400/80'
      }`}
    >
      {isWork ? 'eDelta Corp' : 'Side Project'}
    </span>
  );
};

const BlinkCursor = () => (
  <span className="inline-block w-[7px] h-[14px] bg-accent ml-1 align-middle animate-blink" aria-hidden="true" />
);

// ─── Hero Section ──────────────────────────────────────────────────────────

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="status" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" aria-hidden="true" />

      {/* Accent radial bleed — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -8 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2.5 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
          <span className="font-mono text-sm text-text-secondary tracking-[0.15em] uppercase">
            System Status // Online
          </span>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="terminal-card"
          role="region"
          aria-label="Current focus dashboard"
        >
          {/* Fake window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[rgb(var(--color-border))]">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[rgb(var(--color-border))]" />
              <span className="w-3 h-3 rounded-full bg-[rgb(var(--color-border))]" />
              <span className="w-3 h-3 rounded-full bg-[rgb(var(--color-border))]" />
            </div>
            <span className="font-mono text-sm text-text-secondary/60 ml-2 select-none">~&nbsp;/current-focus</span>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* ── ACTIVE_RND ────────────────────────────────── */}
            <div>
              <p className="font-mono text-sm text-accent tracking-[0.15em] uppercase mb-3 font-medium">ACTIVE_RND</p>
              <div className="space-y-2.5 pl-2">
                {ACTIVE_RND.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <TreeLine isLast={i === ACTIVE_RND.length - 1} />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <TypeBadge type={item.type} />
                      <span className="font-mono text-base text-text-primary leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgb(var(--color-border))]" aria-hidden="true" />

            {/* ── ARCH_INTERESTS ────────────────────────────── */}
            <div>
              <p className="font-mono text-sm text-accent tracking-[0.15em] uppercase mb-3 font-medium">
                ARCH_INTERESTS
              </p>
              <div className="space-y-2 pl-2">
                {ARCH_INTERESTS.map((interest, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <TreeLine isLast={i === ARCH_INTERESTS.length - 1} />
                    <span className="font-mono text-base text-text-secondary leading-relaxed">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgb(var(--color-border))]" aria-hidden="true" />

            {/* ── CURRENT_STACK ─────────────────────────────── */}
            <div>
              <p className="font-mono text-sm text-accent tracking-[0.15em] uppercase mb-3 font-medium">
                CURRENT_STACK
              </p>
              <div className="pl-2 flex flex-wrap gap-2 items-center">
                {CURRENT_STACK.map(tech => (
                  <span key={tech} className="chip hover:cursor-default">
                    {tech}
                  </span>
                ))}
                <BlinkCursor />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#projects"
            className="flex flex-col items-center gap-1.5 text-text-secondary hover:text-accent transition-colors duration-150 group"
            aria-label="Scroll to projects"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase">scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-base leading-none"
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
