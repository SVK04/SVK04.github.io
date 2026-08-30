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
            name: 'Vaibhav Kaul',
            url: 'https://svk04.github.io',
            jobTitle: 'Backend & AI Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Easy Cater Services Platform Private Limited',
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Dharmsinh Desai University',
            },
            knowsAbout: [
              'Node.js',
              'Python',
              'FastAPI',
              'WebSockets',
              'AWS Lambda',
              'PostgreSQL',
              'PGVector',
              'TypeScript',
              'LangChain',
              'React',
            ],
            sameAs: ['https://github.com/SVK04', 'https://www.linkedin.com/in/vaibhav-kaul-448889246/'],
          }),
        }}
      />

      {/* Background Mesh Layer */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none select-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* Content layer */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Selected Work */}
          <Works />
          {/* Professional Experience */}
          <Experience />
          {/* Technical Skills */}
          <Skills />
          {/* About & Telemetry */}
          <About />
          {/* Contact */}
          <Contact />
        </main>
        {/* Footer Identity */}
        <Footer />
      </div>
    </div>
  );
}
