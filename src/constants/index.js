// ─── Navigation ────────────────────────────────────────────────────────────────

export const navLinks = [
  { id: 'status', title: 'Status' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'stack', title: 'Stack' },
  { id: 'telemetry', title: 'Telemetry' },
];

// ─── Projects (Architecture-first case studies) ─────────────────────────────

export const projects = [
  {
    id: 'protectall',
    name: 'ProtectAllPlans',
    company: 'eDelta Corporation',
    tagline:
      'Cross-platform warranty management layer for Shopify, BigCommerce, and WooCommerce — centralizing plan selection, dynamic pricing, and storefront injection.',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Shopify API', 'BigCommerce Widget API', 'CSV Pipelines'],
    metric:
      'Reduced bulk product-plan assignment time from minutes to under 5 seconds — a 90% processing time reduction via optimized CSV ingestion pipelines.',
    focus: 'Performance Optimization',
    focusTag: 'performance',
    githubUrl: null,
  },
  {
    id: 'voicenow',
    name: 'VoiceNow AI Platform & SDK',
    company: 'eDelta Corporation',
    tagline:
      'Full-stack real-time voice orchestration system with a published, framework-agnostic NPM SDK and automated CI/CD release pipeline.',
    stack: [
      'Python',
      'Uvicorn',
      'WebSockets',
      'VAD',
      'STT',
      'GPT-4o',
      'ElevenLabs',
      'LangChain',
      'PGVector',
      'Logto',
      'AWS S3',
    ],
    metric:
      'Architected end-to-end VAD → STT → LLM → TTS pipeline. Published VoiceNow SDK to NPM with Semantic Release CI/CD via GitHub Actions.',
    focus: 'System Design',
    focusTag: 'system-design',
    githubUrl: null,
  },
  {
    id: 'xunified',
    name: 'XUnified — Omnichannel Engagement',
    company: 'eDelta Corporation',
    tagline:
      'Serverless multi-channel communication infrastructure spanning WhatsApp, Facebook Messenger, and Instagram with a unified React live-chat interface.',
    stack: [
      'AWS Lambda',
      'API Gateway',
      'Twilio',
      'Dialogflow',
      'PostgreSQL',
      'Python',
      'React',
      'WhatsApp Business API',
    ],
    metric:
      'Designed scalable serverless bot architecture with unified cross-channel RDS schema enabling shared conversation history across three messaging platforms.',
    focus: 'Distributed Systems',
    focusTag: 'distributed',
    githubUrl: null,
  },
  {
    id: 'society',
    name: 'Society Management ERP',
    company: 'Side Project',
    tagline:
      'Multi-tenant SaaS ERP for residential societies — real-time fund tracking, automated notice dispatch, and role-based access across Resident, Admin, and Super-Admin tiers.',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'TypeScript', 'AWS'],
    metric:
      'Engineered multi-tenant data isolation mechanics with RBAC and real-time financial ledger, replacing manual spreadsheet workflows for committee management.',
    focus: 'Database Efficiency',
    focusTag: 'database',
    githubUrl: null,
  },
];

// ─── Work Experience ────────────────────────────────────────────────────────

export const experiences = [
  {
    id: 'edelta-corp',
    title: 'Software Developer',
    company: 'eDelta Corporation',
    location: 'Surat, Gujarat',
    date: 'Jun 2024 — Present',
    projects: [
      {
        title: 'ProtectAllPlans — E-commerce Protection Platform',
        description:
          'Architected warranty selection, dynamic pricing logic, and CSV ingestion pipelines for Shopify, BigCommerce, and WooCommerce. Implemented Shopify Cart Transformers and Theme App Extensions for dynamic UI rendering on product pages.',
        metric: '90% reduction in bulk processing time — minutes → under 5 seconds',
        tags: ['Next.js', 'Node.js', 'Shopify', 'BigCommerce', 'CSV Pipelines', 'TypeScript'],
      },
      {
        title: 'VoiceNow AI Platform & SDK',
        description:
          'Built Python/Uvicorn WebSocket backend orchestrating real-time audio pipeline (VAD → STT → GPT-4o → TTS). Integrated PGVector-based RAG pipelines, Logto authentication, and AWS S3 for cross-platform knowledge ingestion. Designed and published the framework-agnostic VoiceNow SDK to NPM.',
        metric: 'Designed & published VoiceNow NPM SDK with automated Semantic Release CI/CD',
        tags: ['Python', 'WebSockets', 'LangChain', 'GPT-4o', 'ElevenLabs', 'PGVector', 'GitHub Actions'],
      },
      {
        title: 'XUnified Omnichannel & Serverless Bots',
        description:
          'Engineered multi-channel communication APIs for WhatsApp, Facebook, and Instagram. Designed serverless voice bot architecture on AWS Lambda + API Gateway, integrating Dialogflow/LLM backends. Built unified React live-chat interface with cross-channel conversation history.',
        metric: 'Unified multi-channel schema enabling shared conversation history across 3 platforms',
        tags: ['AWS Lambda', 'API Gateway', 'Twilio', 'Dialogflow', 'Python', 'React'],
      },
    ],
  },
  {
    id: 'edelta-ent',
    title: 'Software Engineering Intern',
    company: 'eDelta Enterprise Solutions Pvt. Ltd.',
    location: 'Ahmedabad, Gujarat',
    date: 'Dec 2023 — Jun 2024',
    projects: [
      {
        title: 'No-Code AI Studio — Visual Bot Builder',
        description:
          'Designed core architecture of a drag-and-drop AI chatbot flow builder using React Flow. Implemented node-and-edge graph system enabling interactive bot logic design through customizable nodes and edges.',
        metric: 'Established robust execution & validation logic forming the core automation engine',
        tags: ['React Flow', 'Node.js', 'Graph Systems', 'System Design', 'Drag-and-Drop'],
      },
      {
        title: 'React Chat Widget & Platform Integration',
        description:
          'Developed standalone React chat widget connecting to centralized platform backend for real-time conversation rendering. Established secure backend validation and real-time WebSocket conversation layer.',
        metric: 'Built real-time WebSocket conversation layer with cross-platform compatibility',
        tags: ['React', 'WebSockets', 'Node.js', 'Real-time Systems'],
      },
    ],
  },
];

// ─── Stack Radar ─────────────────────────────────────────────────────────────

export const stack = {
  LANGUAGES: ['TypeScript', 'JavaScript', 'Python'],
  FRAMEWORKS: ['Next.js', 'React', 'Node.js', 'Express', 'Socket.IO', 'Uvicorn'],
  'AI & VOICE': [
    'GPT-4o',
    'Gemini 2.0 Flash',
    'LangChain',
    'ElevenLabs',
    'VAD / STT / TTS',
    'PGVector',
    'RAG Pipelines',
  ],
  'INFRA & TOOLS': [
    'PostgreSQL',
    'AWS Lambda',
    'AWS S3',
    'Docker',
    'GitHub Actions',
    'Semantic Release',
    'Twilio',
    'Logto',
  ],
};

// ─── Telemetry / Accomplishments ─────────────────────────────────────────────

export const telemetry = {
  stats: [
    { label: 'EXPERIENCE', value: '2+', sub: 'Years of professional engineering' },
    { label: 'PERF. DELTA', value: '90%', sub: 'Bulk processing time reduction' },
    { label: 'DEGREE', value: 'B.Tech', sub: 'Computer Science Technology, 2024' },
    { label: 'PLATFORMS', value: '3+', sub: 'Cross-platform deployments shipped' },
  ],
  education: {
    degree: 'B.Tech — Computer Science Technology',
    institution: 'Dharmsinh Desai University',
    location: 'Nadiad, Gujarat',
    cpi: '7.65',
    year: '2024',
  },
  milestones: [
    'Published VoiceNow SDK to NPM registry with automated Semantic Release versioning',
    'Implemented GitHub Actions CI/CD pipeline for multi-environment production deployments',
    'Architected multi-tenant data isolation mechanics for residential society SaaS ERP',
    'Reduced e-commerce bulk synchronization pipeline from minutes to under 5 seconds',
    'Designed serverless voice bot infrastructure on AWS Lambda handling multi-channel message routing',
  ],
};

// ─── Kept for backward-compatibility (unused in new design) ─────────────────

export const services = [];
export const skills = [];
export const education = [];
