'use client';

import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { NotificationProvider } from './Notification';
import ThemeTransition from './ThemeTransition';

export function Providers({ children }) {
  return (
    // reducedMotion="user": skip transform animations when the OS asks for less motion
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <NotificationProvider>
          <ThemeTransition />
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
