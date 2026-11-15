import dynamic from 'next/dynamic';
import { Hero, Navbar } from '../components';

const Works = dynamic(() => import('../components/Works'));
const Experience = dynamic(() => import('../components/Experience'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-text-primary">
      <Navbar />
      <main>
        {/* One claim and its proof */}
        <Hero />
        {/* Selected Work */}
        <Works />
        {/* Experience & education */}
        <Experience />
      </main>
      {/* Closing ask, contact form and footer */}
      <Contact />
    </div>
  );
}
