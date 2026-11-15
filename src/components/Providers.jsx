'use client';

import { NotificationProvider } from './Notification';

export function Providers({ children }) {
  return <NotificationProvider>{children}</NotificationProvider>;
}
