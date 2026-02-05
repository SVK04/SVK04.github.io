import './globals.css';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { Providers } from '../components/Providers';

const baseUrl = 'https://svk04.github.io';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaibhav Kaul | Full Stack Developer & Next.js Expert',
    template: '%s | Vaibhav Kaul',
  },
  description:
    'Portfolio of Vaibhav Kaul - A Senior Full Stack Developer specializing in Node.js, React.js, and high-performance Next.js applications.',
  keywords: [
    'Vaibhav Kaul',
    'Full Stack Developer',
    'Next.js Expert',
    'Node.js Developer',
    'React Developer',
    'Web Performance',
    'Portfolio 2026',
  ],
  authors: [{ name: 'Vaibhav Kaul', url: baseUrl }],
  creator: 'Vaibhav Kaul',
  publisher: 'Vaibhav Kaul',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vaibhav Kaul | Full Stack Developer Portfolio',
    description: 'Explore the high-performance web applications and creative solutions built by Vaibhav Kaul.',
    url: baseUrl,
    siteName: 'Vaibhav Kaul Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Kaul Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Kaul | Full Stack Developer',
    description: 'Senior Developer specializing in React, Node.js, and Next.js performance.',
    creator: '@svk04',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'dark';

  return (
    <html lang="en" className={theme}>
      <body className="antialiased font-sans">
        <Script id="service-worker-cleanup">
          {`
            if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                  registration.unregister().then(() => {
                    console.log('Stale Service Worker unregistered');
                    window.location.reload();
                  });
                }
              });
            }
            if (typeof window !== 'undefined') {
              if (localStorage.getItem('vite-pwa-version')) localStorage.clear();
            }
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
