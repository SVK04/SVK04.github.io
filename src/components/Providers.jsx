'use client';

import { ThemeProvider } from '../contexts/ThemeContext';
import { NotificationProvider } from './Notification';
import ThemeTransition from './ThemeTransition';

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <ThemeTransition />
        {children}
      </NotificationProvider>
    </ThemeProvider>
  );
}
