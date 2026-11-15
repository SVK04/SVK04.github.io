import './globals.css';
import Script from 'next/script';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Providers } from '../components/Providers';
import { caseStudies, projects } from '../constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Display face for headlines and big figures
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const baseUrl = 'https://vaibhav-kaul.web.app';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaibhav Kaul — Full Stack Engineer (Backend Focus)',
    template: '%s | Vaibhav Kaul',
  },
  description:
    'Full stack engineer with a backend focus, building production APIs, real-time systems and web apps with Node.js, Python, PostgreSQL, React, Next.js and AWS.',
  keywords: [
    'Vaibhav Kaul',
    'Full Stack Engineer',
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
    title: 'Vaibhav Kaul — Full Stack Engineer (Backend Focus)',
    description:
      'Full stack engineer with a backend focus, building production APIs, real-time systems and web apps with Node.js, Python, PostgreSQL, React, Next.js and AWS.',
    url: baseUrl,
    siteName: 'Vaibhav Kaul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Kaul — Full Stack Engineer (Backend Focus)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Kaul — Full Stack Engineer (Backend Focus)',
    description: 'Full stack engineer, backend focus: production APIs, real-time systems and web apps.',
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
  // Google Search needs a square favicon of at least 48px; the PNG covers
  // crawlers and browsers that skip SVG icons.
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      // Site name Google shows above the result. Keep it short; without a
      // confident signal Google falls back to the parent domain's name
      // ("Google", since web.app is Firebase). The lowercase hostname is the
      // last-resort alternate Google's site-name docs recommend.
      name: 'Vaibhav Kaul',
      alternateName: ['Vaibhav Kaul Portfolio', 'vaibhav-kaul.web.app'],
      url: `${baseUrl}/`,
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Vaibhav Kaul',
      url: baseUrl,
      jobTitle: 'Full Stack Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Easy Cater Services Platform Private Limited',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Dharmsinh Desai University',
      },
      description:
        'Backend & full stack engineer building production APIs, real-time WebSocket systems, AWS serverless platforms, e-commerce integrations and LLM/RAG voice pipelines.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
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
        'Express.js',
        'Next.js',
        'REST APIs',
        'Amazon RDS',
        'AWS S3',
        'Amazon EventBridge',
        'API Gateway',
        'Docker',
        'Redis',
        'Prisma',
        'Retrieval-Augmented Generation',
        'Large Language Models',
        'Speech-to-Text and Text-to-Speech pipelines',
        'Serverless architecture',
        'Real-time systems',
        'Shopify app development',
        'BigCommerce integrations',
        'GIS routing and live location tracking',
      ],
      sameAs: ['https://github.com/SVK04', 'https://www.linkedin.com/in/vaibhav-kaul-448889246/'],
    },
    // One CreativeWork per case study, authored by the Person above.
    ...caseStudies.map(study => {
      const project = projects.find(p => p.id === study.id);
      return {
        '@type': 'CreativeWork',
        '@id': `${baseUrl}/#project-${study.id}`,
        name: project?.name,
        url: `${baseUrl}/#project-${study.id}`,
        abstract: study.problem,
        keywords: study.stack
          .flatMap(group => group.items)
          .filter(item => !item.startsWith('TODO'))
          .join(', '),
        author: { '@id': `${baseUrl}/#person` },
      };
    }),
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
