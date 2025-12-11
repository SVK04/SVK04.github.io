import {
  About,
  Contact,
  Education,
  Experience,
  // ThemeToggle,
  Hero,
  Navbar,
  Skills,
  Works,
  // StarsCanvas,
  NotificationProvider,
  Footer,
} from '../components';
import React, { Suspense } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StarsCanvas = React.lazy(() => import('../components/canvas/Stars.jsx'));
const LightBackground = React.lazy(() => import('../components/canvas/LightBackground.jsx'));

function Home() {
  const { theme } = useTheme();

  return (
    <NotificationProvider>
      <div className="relative z-0 min-h-screen bg-background text-text-primary overflow-x-hidden">
        <Suspense fallback={null}>{theme === 'dark' ? <StarsCanvas /> : <LightBackground />}</Suspense>

        <div className="relative z-10">
          <Navbar />
          {/* <ThemeToggle /> */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Works />
            {/* <Feedbacks/> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </NotificationProvider>
  );
}

export default Home;
