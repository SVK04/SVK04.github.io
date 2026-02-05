'use client';

import React, { Suspense } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useTheme } from '../contexts/ThemeContext';
import { About, Contact, Education, Experience, Hero, Navbar, Skills, Works, Footer } from '../components';

// Import canvases dynamically to avoid SSR issues with Three.js
const StarsCanvas = dynamic(() => import('../components/canvas/Stars.jsx'), { ssr: false });
const LightBackground = dynamic(() => import('../components/canvas/LightBackground.jsx'), { ssr: false });

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="relative z-0 min-h-screen bg-background text-text-primary overflow-x-hidden">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vaibhav Kaul',
            url: 'https://svk04.github.io',
            jobTitle: 'Senior Full Stack Developer',
            knowsAbout: ['Next.js', 'React', 'Node.js', 'JavaScript', 'Web Performance', 'Three.js'],
            sameAs: [
              'https://github.com/SVK04',
              // Add other social links if available
            ],
          }),
        }}
      />
      <Suspense fallback={null}>{theme === 'dark' ? <StarsCanvas /> : <LightBackground />}</Suspense>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Works />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
