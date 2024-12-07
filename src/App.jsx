import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Education, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks } from './components';
import NotificationProvider from 'components/Notification';

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
    </BrowserRouter>
  );
}

export default App;
