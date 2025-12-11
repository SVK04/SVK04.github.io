import { Suspense, lazy } from 'react';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
import { BrowserRouter, Route, Routes } from 'react-router';

import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeTransition } from './components';

function App() {
  return (
    <ThemeProvider>
      <ThemeTransition />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
