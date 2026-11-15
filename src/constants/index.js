// All portfolio content lives here. The page says one thing ("I make slow
// backends fast") and everything below is evidence for it, so keep entries
// short: one line of context, one measured or concrete outcome.

// ─── Navigation ────────────────────────────────────────────────────────────────
// `id` must match a section id on the page.

export const navLinks = [
  { id: 'work', title: 'Work' },
  { id: 'experience', title: 'Experience' },
  { id: 'resume', title: 'Resume', external: true, path: '/resume.pdf' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaibhav-kaul-448889246/' },
  { label: 'GitHub', href: 'https://github.com/SVK04' },
];

export const resume = { href: '/resume.pdf', fileName: 'Vaibhav_Kaul_Resume.pdf' };

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero = {
  name: 'Vaibhav Kaul',
  kicker: ['Full stack engineer', 'Backend focus', 'Vadodara, India', 'Open to roles'],
  // Shown as a small avatar in the hero and a portrait in the contact section.
  // Set to null to show no photo.
  photo: { src: '/vaibhav-kaul.jpg', alt: 'Vaibhav Kaul' },
  // Rendered as "<lead> <accent>" with the accent word in italic red.
  headline: { lead: 'I make slow backends', accent: 'fast.' },
  lede: 'Full stack, with my depth on the server: Node.js, Python, PostgreSQL and AWS behind React and Next.js front ends. 2+ years shipping delivery, e-commerce and real-time voice products to production.',
  // Before/after bars. `afterShare` is the after value as a share of the
  // before value (200ms of 2,000ms), so the bar lengths are to scale.
  comparison: {
    title: 'Easy Cater catalog API · response time',
    before: { label: 'Before', value: '~2,000 ms' },
    after: { label: 'After', value: '~200 ms' },
    afterShare: 0.1,
    note: 'Ten times faster by removing redundant database calls. No new infrastructure.',
  },
  proof: [
    { value: 'min → 5s', text: 'Bulk warranty imports on ProtectALL. About 90% less processing time.' },
    { value: 'Live voice', text: 'VoiceNow: a real-time voice pipeline and the TypeScript SDK clients embed it with.' },
  ],
};

// ─── Selected Work ────────────────────────────────────────────────────────────
// `featured` projects get a large row and an expandable case study (matched by
// `id` in caseStudies.js). The rest are listed compactly under "Also built".

export const projects = [
  {
    id: 'easycater-delivery',
    number: '01',
    featured: true,
    short: 'Easy Cater',
    name: 'Easy Cater – Delivery Platform Backend',
    summary:
      'Delivery platform across the User, Merchant and Delivery apps: catalog APIs, GIS routing, live driver tracking.',
    outcome: '10× faster APIs',
    outcomeSub: '~2s → ~200ms',
  },
  {
    id: 'voicenow',
    number: '02',
    featured: true,
    short: 'VoiceNow',
    name: 'VoiceNow – Real-Time AI Voice Platform & SDK',
    summary: 'Real-time AI voice platform: WebSocket streaming, RAG, TypeScript SDK.',
    outcome: 'Real-time voice',
    outcomeSub: 'VAD → STT → LLM → TTS',
  },
  {
    id: 'protectall',
    number: '03',
    featured: true,
    short: 'ProtectALL',
    name: 'ProtectALL – E-commerce Protection & Warranty Platform',
    summary: 'Warranty plans from storefront UI to pricing backend, on Shopify, BigCommerce and WooCommerce.',
    outcome: '~90% less import time',
    outcomeSub: 'minutes → under 5s',
  },
  {
    id: 'xunified',
    short: 'XUnified',
    name: 'XUnified – Omnichannel & AI Platform',
    summary:
      'WhatsApp, Facebook, Instagram and Telegram behind one channel layer, with GPT, Gemini and Dialogflow agents.',
    outcome: '4 channels, 1 layer',
  },
  {
    id: 'society-management',
    short: 'Society Management',
    name: 'Society Management System – SaaS ERP',
    summary: 'Multi-tenant residential ERP on Next.js, Express, Prisma and PostgreSQL, with RBAC.',
    outcome: 'Immutable billing ledger',
  },
  {
    id: 'ai-studio',
    short: 'AI Studio',
    name: 'AI Studio – No-Code Conversational Bot Builder',
    summary:
      'React Flow canvas for building chatbot flows, with backend validation and an embeddable React chat widget.',
    outcome: 'No-code bot builder',
  },
  {
    id: 'voxia',
    short: 'Voxia',
    name: 'Voxia – Local Voice AI Pipeline',
    summary: 'The VAD → STT → LLM → TTS pipeline rebuilt on self-hosted models instead of third-party AI APIs.',
    outcome: 'Fully self-hosted',
  },
];

// ─── Case Studies ────────────────────────────────────────────────────────────
// Kept in their own file so the detail view can load lazily (see CaseStudy.jsx).
export { caseStudies } from './caseStudies';

// ─── Experience & Education ──────────────────────────────────────────────────

export const experiences = [
  {
    id: 'easy-cater',
    company: 'Easy Cater',
    title: 'Software Developer · Full stack, backend focus',
    date: 'Jun 2026 – now',
  },
  {
    id: 'edelta-corp',
    company: 'eDelta Corporation',
    title: 'Software Developer · Full stack',
    date: 'Jun 2024 – May 2026',
  },
  {
    id: 'edelta-ent',
    company: 'eDelta Enterprise Solutions',
    title: 'Software Engineering Intern',
    date: 'Dec 2023 – Jun 2024',
  },
  {
    id: 'ddu',
    company: 'Dharmsinh Desai University',
    title: 'B.Tech, Computer Engineering · CPI 7.65',
    date: 'Graduated 2024',
  },
];

// ─── Closing call to action ──────────────────────────────────────────────────

export const contact = {
  headline: { lead: 'Got a slow system?', accent: 'Let’s fix it.' },
  text: 'Tell me what is slow, flaky or missing. I reply by email.',
  location: 'Vadodara, Gujarat, India',
};
