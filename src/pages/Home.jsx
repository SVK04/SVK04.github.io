import {
  About,
  Contact,
  Education,
  ThemeToggle,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  NotificationProvider,
} from '../components';
import React from 'react';

function Home() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Tech />
        <Works />
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </NotificationProvider>
  );
}

export default Home;
