import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconArrowDown } from '@tabler/icons-react';

// ─── Hero Data ─────────────────────────────────────────────────────────────

const ACTIVE_WORK = [
  {
    company: 'Easy Cater',
    badgeType: 'work',
    task: 'Production backend: 10× API speedup (~2s to ~200ms), GIS routing & live tracking',
  },
  {
    company: 'eDelta Corp',
    badgeType: 'work',
    task: 'VoiceNow — real-time voice pipeline (VAD → STT → LLM → TTS) & published NPM SDK',
  },
  {
    company: 'eDelta Corp',
    badgeType: 'work',
    task: 'ProtectALL — automated CSV ingestion (min to <5s, ~90% reduction) & Cart Transformers',
  },
  {
    company: 'eDelta Corp',
    badgeType: 'work',
    task: 'XUnified — WhatsApp, FB, IG & Telegram APIs with OpenAI/Gemini AI agents & Dialogflow',
  },
  {
    company: 'Independent',
    badgeType: 'work',
    task: 'Voxia — local voice AI pipeline using self-hosted LLM, STT, and TTS models',
  },
];

const ARCH_INTERESTS = [
  'Real-time WebSocket streaming architectures & microservices',
  'Serverless workflows on AWS Lambda, API Gateway & EventBridge',
  'PostgreSQL, PGVector vector search & LangChain RAG pipelines',
  'GIS routing integration, live location tracking & order state machines',
];

const CORE_STACK = [
  'Node.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'AWS Lambda',
  'WebSockets',
  'PGVector',
  'Docker',
];

// ─── Sub-components ────────────────────────────────────────────────────────

const TreeLine = ({ isLast }) => (
  <span className="font-mono text-text-muted/60 text-xs shrink-0 select-none mt-1">{isLast ? '└──' : '├──'}</span>
);

const BlinkCursor = () => (
  <span className="inline-block w-[6px] h-[13px] bg-accent ml-1 align-middle animate-blink" aria-hidden="true" />
);

// ─── Hero Section ──────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section
      id="work"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[rgb(var(--color-border))]"
    >
      {/* Background Dot-Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-80" aria-hidden="true" />

      {/* Ambient Depth */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(6,182,212,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* ── LEFT COLUMN: Identity, Positioning & CTAs ─────────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
            {/* Status Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgb(var(--color-border))] bg-surface/80 text-xs font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
                <span>BACKEND &amp; AI ENGINEER</span>
              </span>
              <span className="font-mono text-xs text-text-muted">Vadodara, Gujarat, India</span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] mb-5">
              Vaibhav Kaul
            </h1>

            {/* Positioning Statement */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              Backend &amp; AI Engineer building scalable APIs, real-time systems, and cloud-native applications with
              Node.js, Python, PostgreSQL, and AWS.
            </p>

            {/* Proof Signals */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-lg">
              {['2+ years production', 'Node.js · Python · AWS', 'Real-Time WebSockets', 'AI Voice & RAG Systems'].map(
                chip => (
                  <span
                    key={chip}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-[rgb(var(--color-border))] bg-surface-dim/50 text-text-secondary"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects-list"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-md"
              >
                <span>View Work</span>
                <IconArrowDown size={15} />
              </a>

              <a
                href="https://github.com/SVK04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-md border border-[rgb(var(--color-border))] bg-surface/40 hover:bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all font-mono"
              >
                <IconBrandGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vaibhav-kaul-448889246/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-md border border-[rgb(var(--color-border))] bg-surface/40 hover:bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all font-mono"
              >
                <IconBrandLinkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-md border border-[rgb(var(--color-border))] bg-surface/40 hover:bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all font-mono"
              >
                <IconDownload size={15} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Technical Terminal Dashboard ───────────── */}
          <div className="lg:col-span-6 animate-fade-in-up [animation-delay:150ms]">
            <div
              className="terminal-card rounded-lg shadow-xl overflow-hidden"
              role="region"
              aria-label="Current technical focus"
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgb(var(--color-border))] bg-surface-dim/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-xs text-text-muted ml-2">~ /current-focus</span>
                </div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">Active Runtime</span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 sm:p-6 space-y-6 text-xs sm:text-sm">
                {/* Active Work Section */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="font-mono text-xs font-semibold text-accent tracking-widest uppercase">
                      {'//'} ACTIVE_PROJECTS
                    </p>
                  </div>
                  <div className="space-y-2.5 pl-1">
                    {ACTIVE_WORK.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <TreeLine isLast={i === ACTIVE_WORK.length - 1} />
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span
                            className={`font-mono text-[11px] px-1.5 py-0.2 border shrink-0 leading-tight rounded ${
                              item.badgeType === 'work'
                                ? 'border-accent/40 text-accent bg-accent/5'
                                : 'border-purple-400/40 text-purple-400 bg-purple-400/5'
                            }`}
                          >
                            {item.company}
                          </span>
                          <span className="font-mono text-xs text-text-secondary leading-snug">{item.task}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[rgb(var(--color-border))]" aria-hidden="true" />

                {/* Architecture Interests */}
                <div>
                  <p className="font-mono text-xs font-semibold text-accent tracking-widest uppercase mb-2.5">
                    {'//'} ARCHITECTURE_FOCUS
                  </p>
                  <div className="space-y-2 pl-1">
                    {ARCH_INTERESTS.map((interest, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <TreeLine isLast={i === ARCH_INTERESTS.length - 1} />
                        <span className="font-mono text-xs text-text-secondary leading-relaxed">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[rgb(var(--color-border))]" aria-hidden="true" />

                {/* Core Stack */}
                <div>
                  <p className="font-mono text-xs font-semibold text-accent tracking-widest uppercase mb-2.5">
                    {'//'} CORE_TECHNOLOGIES
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center pl-1">
                    {CORE_STACK.map(tech => (
                      <span key={tech} className="chip text-[11px]">
                        {tech}
                      </span>
                    ))}
                    <BlinkCursor />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
