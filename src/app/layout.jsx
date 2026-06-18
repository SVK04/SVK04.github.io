import './globals.css';
import Script from 'next/script';
import { Providers } from '../components/Providers';

const baseUrl = 'https://svk04.github.io';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaibhav Kaul — Software Developer',
    template: '%s | Vaibhav Kaul',
  },
  description:
    'Software Developer building AI voice platforms, cross-platform e-commerce infrastructure, and serverless architectures. TypeScript, Node.js, Python, Next.js.',
  keywords: [
    'Vaibhav Kaul',
    'Vaibhav Virendar Kaul',
    'Software Developer',
    'Full Stack Engineer',
    'Node.js Developer',
    'AI Voice Platform',
    'Next.js Developer',
    'WebSocket Engineer',
    'Portfolio 2026',
  ],
  authors: [{ name: 'Vaibhav Virendar Kaul', url: baseUrl }],
  creator: 'Vaibhav Virendar Kaul',
  publisher: 'Vaibhav Virendar Kaul',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vaibhav Kaul — Software Developer',
    description:
      'Software Developer building AI voice platforms, cross-platform e-commerce infrastructure, and serverless architectures.',
    url: baseUrl,
    siteName: 'Vaibhav Kaul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Kaul — Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Kaul — Software Developer',
    description: 'Building AI voice platforms, e-commerce infrastructure, and serverless architectures.',
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
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font preconnect for Inter + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        {/*
          Inline theme-persistence script — runs synchronously before first paint
          to prevent flash of wrong theme.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (!theme) theme = prefersDark ? 'dark' : 'light';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* Service Worker cleanup — removes stale PWA registrations */}
        <Script id="service-worker-cleanup">
          {`
            if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                  registration.unregister();
                }
              });
            }
            if (typeof window !== 'undefined' && localStorage.getItem('vite-pwa-version')) {
              localStorage.clear();
            }
          `}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
