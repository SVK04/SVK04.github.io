import dynamic from 'next/dynamic';
import { Hero, Navbar } from '../components';

const Works = dynamic(() => import('../components/Works'));
const Experience = dynamic(() => import('../components/Experience'));
const Skills = dynamic(() => import('../components/Skills'));
const About = dynamic(() => import('../components/About'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen bg-background text-text-primary overflow-x-hidden">
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
