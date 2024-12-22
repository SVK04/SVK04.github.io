import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Education, Hero, Navbar, Tech, Works, StarsCanvas, NotificationProvider } from './components';

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <div className="relative z-0">
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
    </BrowserRouter>
  );
}

export default App;
