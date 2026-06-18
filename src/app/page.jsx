'use client';

import Script from 'next/script';
import { Hero, Works, Experience, Skills, About, Contact, Footer, Navbar } from '../components';

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen bg-background text-text-primary overflow-x-hidden">
      {/* Structured data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vaibhav Virendar Kaul',
            url: 'https://svk04.github.io',
            jobTitle: 'Software Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'eDelta Corporation',
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Dharmsinh Desai University',
            },
            knowsAbout: [
              'Next.js',
              'Node.js',
              'Python',
              'AI Voice Systems',
              'WebSockets',
              'PostgreSQL',
              'AWS Lambda',
              'TypeScript',
            ],
            sameAs: ['https://github.com/SVK04', 'https://www.linkedin.com/in/vaibhav-kaul-448889246/'],
          }),
        }}
      />

      {/*
        ── Gradient Mesh Background Layer ──────────────────────────────────────
        Fixed to viewport; sits at z-index 0, behind content (z-[1]).
        The outer wrapper's bg-background provides the base dark/light color;
        these blobs paint ON TOP of that base, creating ambient depth.
        Colors are driven entirely by CSS custom properties (--blob-N),
        so dark ↔ light mode switching is instant and seamless.
      */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none select-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Primary — blue glow, top-right anchor (like a studio light from above) */}
        <div className="mesh-blob mesh-blob-1" />
        {/* Secondary — violet/purple depth, bottom-left */}
        <div className="mesh-blob mesh-blob-2" />
        {/* Accent — teal (dark) / amber (light) mid-right energy */}
        <div className="mesh-blob mesh-blob-3" />
        {/* Base — wide, flat blue underlay at the bottom */}
        <div className="mesh-blob mesh-blob-4" />
        {/* Film grain / noise texture for organic depth */}
        <div className="noise-overlay" />
      </div>

      {/* Content layer — above the gradient mesh */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          {/* 00 — System Status (The Hook) */}
          <Hero />
          {/* 01 — Architecture Case Studies */}
          <Works />
          {/* 02 — Professional History */}
          <Experience />
          {/* 03 — Stack Radar */}
          <Skills />
          {/* 04 — Telemetry / Accomplishments */}
          <About />
          {/* 05 — Contact */}
          <Contact />
        </main>
        {/* // Identity — The Reel */}
        <Footer />
      </div>
    </div>
  );
}
