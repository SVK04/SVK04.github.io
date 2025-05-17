import {
  About,
  Contact,
  Education,
  // ThemeToggle,
  Hero,
  Navbar,
  Skills,
  Works,
  StarsCanvas,
  NotificationProvider,
  Footer,
} from '../components';
import React from 'react';

function Home() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        {/* <ThemeToggle /> */}
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Works />
          {/* <Feedbacks/> */}
          <Contact />
          <StarsCanvas />
        </main>
        <Footer />
      </div>
    </NotificationProvider>
  );
}

export default Home;
