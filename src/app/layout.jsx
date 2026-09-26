import './globals.css';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from '../components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const baseUrl = 'https://vaibhav-kaul.web.app';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaibhav Kaul — Backend & AI Engineer',
    template: '%s | Vaibhav Kaul',
  },
  description:
    'Backend & AI Engineer building scalable APIs, real-time systems, and cloud-native applications with Node.js, Python, PostgreSQL, and AWS.',
  keywords: [
    'Vaibhav Kaul',
    'Backend Engineer',
    'AI Engineer',
    'Node.js Developer',
    'Python Developer',
    'FastAPI',
    'WebSockets',
    'AWS Lambda',
    'PostgreSQL',
    'PGVector',
    'TypeScript',
  ],
  authors: [{ name: 'Vaibhav Kaul', url: baseUrl }],
  creator: 'Vaibhav Kaul',
  publisher: 'Vaibhav Kaul',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vaibhav Kaul — Backend & AI Engineer',
    description:
      'Backend & AI Engineer building scalable APIs, real-time systems, and cloud-native applications with Node.js, Python, PostgreSQL, and AWS.',
    url: baseUrl,
    siteName: 'Vaibhav Kaul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Kaul — Backend & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Kaul — Backend & AI Engineer',
    description: 'Building scalable APIs, real-time systems, and cloud-native applications.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'Vaibhav Kaul',
      alternateName: ['Vaibhav Kaul Portfolio', 'Vaibhav Kaul — Backend & AI Engineer'],
      url: baseUrl,
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Vaibhav Kaul',
      url: baseUrl,
      jobTitle: 'Backend & AI Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Easy Cater Services Platform Private Limited',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Dharmsinh Desai University',
      },
      knowsAbout: [
        'Node.js',
        'Python',
        'FastAPI',
        'WebSockets',
        'AWS Lambda',
        'PostgreSQL',
        'PGVector',
        'TypeScript',
        'LangChain',
        'React',
      ],
      sameAs: ['https://github.com/SVK04', 'https://www.linkedin.com/in/vaibhav-kaul-448889246/'],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
