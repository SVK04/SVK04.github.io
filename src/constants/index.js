// ─── Navigation ────────────────────────────────────────────────────────────────

export const navLinks = [
  { id: 'work', title: 'Work' },
  { id: 'experience', title: 'Experience' },
  { id: 'stack', title: 'Stack' },
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact' },
  { id: 'resume', title: 'Resume', external: true, path: '/resume.pdf' },
];

// ─── Selected Work ────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'voicenow',
    number: '01',
    isFeatured: true,
    name: 'VoiceNow – Real-Time AI Voice Platform & SDK',
    company: 'eDelta Corporation',
    period: 'June 2024 — May 2026',
    tagline:
      'Built a multi-service real-time voice platform combining Python WebSockets, AWS serverless APIs, and a VAD → STT → LLM → TTS pipeline. Added organization-level authentication, PGVector RAG, S3 knowledge ingestion, and a published TypeScript SDK.',
    whatIBuilt:
      'Architected a dedicated Python WebSocket voice microservice alongside serverless management APIs on AWS Lambda and RDS. Engineered a streaming bidirectional audio pipeline orchestrating VAD → STT → LLM → TTS with LangChain/PGVector RAG knowledge retrieval and published the cross-platform VoiceNow TypeScript SDK to NPM with automated Semantic Release CI/CD.',
    whatWasHard:
      'Orchestrating real-time bidirectional audio streaming over WebSockets (VAD → STT → LLM → TTS) while synchronizing chunked streaming LLM responses and TTS synthesis without audio clipping or race conditions.',
    metricValue: 'Real-Time Voice',
    metricLabel: 'VAD → STT → LLM → TTS',
    metricSub: 'Bidirectional WebSocket streaming · RAG · AWS · TypeScript SDK',
    architectureFlow: [
      { step: 'Voice Client', sub: 'Microphone Stream' },
      { step: 'Python Microservice', sub: 'WebSocket Streaming' },
      { step: 'VAD → STT', sub: 'Voice Activity & Text' },
      { step: 'LLM + PGVector', sub: 'LangChain RAG Context' },
      { step: 'TTS Engine', sub: 'Conversational Audio' },
      { step: 'NPM SDK', sub: 'Semantic Release CI/CD' },
    ],
    stack: [
      'Python',
      'FastAPI',
      'WebSockets',
      'AWS Lambda',
      'Amazon RDS',
      'AWS S3',
      'EventBridge',
      'LangChain',
      'PGVector',
      'TypeScript',
      'GitHub Actions',
    ],
    focus: 'Real-Time Voice Architecture',
    focusTag: 'system-design',
    githubUrl: null,
  },
  {
    id: 'protectall',
    number: '02',
    isFeatured: false,
    name: 'ProtectALL – E-commerce Protection & Warranty Platform',
    company: 'eDelta Corporation',
    period: 'June 2024 — May 2026',
    tagline:
      'Cross-platform warranty selection and dynamic pricing middleware across Shopify, BigCommerce, and WooCommerce storefronts.',
    whatIBuilt:
      'Developed shared warranty-selection and dynamic-pricing logic across Shopify, BigCommerce, and WooCommerce. Built automated CSV ingestion pipelines with validation, reducing bulk product-plan assignment time from minutes to under 5 seconds (~90% reduction). Implemented Shopify Cart Transformers and Theme App Extensions for dynamic warranty-plan rendering.',
    whatWasHard:
      'Building high-performance automated CSV ingestion pipelines with schema validation while reducing bulk product-plan assignment time by ~90%.',
    metricValue: '~90% Reduction',
    metricLabel: 'Bulk Ingestion (Minutes → <5s)',
    metricSub: 'Automated CSV ingestion pipelines with validation for bulk product-plan assignment',
    architectureFlow: [
      { step: 'Storefront PDP', sub: 'Theme App Extension' },
      { step: 'Cart Transformers', sub: 'Dynamic Pricing Logic' },
      { step: 'CSV Ingestion Engine', sub: 'Automated Validation' },
      { step: 'BigCommerce Widget', sub: 'Personalized Plans' },
      { step: 'Multi-Storefront', sub: 'Shopify / WooCommerce' },
    ],
    stack: [
      'Node.js',
      'Next.js',
      'TypeScript',
      'Shopify API',
      'Cart Transformers',
      'BigCommerce Widget API',
      'WooCommerce',
      'CSV Pipelines',
    ],
    focus: 'E-commerce Middleware',
    focusTag: 'performance',
    githubUrl: null,
  },
  {
    id: 'xunified',
    number: '03',
    isFeatured: false,
    name: 'XUnified – Omnichannel & AI Platform',
    company: 'eDelta Corporation',
    period: 'June 2024 — May 2026',
    tagline:
      'Unified multiple messaging channels behind a common application layer and connected configurable AI agents using GPT-4o, Gemini, and Dialogflow.',
    whatIBuilt:
      'Integrated WhatsApp, Facebook, Instagram, and Telegram APIs into a common channel layer. Built AI-agent configuration functionality allowing users to select OpenAI/GPT or Gemini models and provide knowledge sources (files, links, text). Integrated Google Dialogflow agents and contributed to WhatsApp business-template and broadcast workflows.',
    whatWasHard:
      'Unifying multiple messaging protocols (WhatsApp, Facebook, Instagram, Telegram) into a single normalized application layer with dynamic AI agent configurations (OpenAI/GPT & Gemini) and Dialogflow routing.',
    metricValue: '4 Channels',
    metricLabel: 'WhatsApp · FB · IG · Telegram',
    metricSub: 'Unified channel layer with OpenAI/Gemini AI agent configuration & Dialogflow integrations',
    architectureFlow: [
      { step: 'Messaging APIs', sub: 'WhatsApp / FB / IG / TG' },
      { step: 'Channel Layer', sub: 'Common Application API' },
      { step: 'AI Studio Builder', sub: 'Conversational Flows' },
      { step: 'AI Agents & Dialogflow', sub: 'GPT / Gemini Knowledge' },
      { step: 'Broadcast Engine', sub: 'Template Delivery' },
    ],
    stack: [
      'Node.js',
      'Python',
      'WhatsApp API',
      'Meta Graph API',
      'Telegram API',
      'Dialogflow',
      'GPT-4o',
      'Gemini',
      'AI Studio',
    ],
    focus: 'Omnichannel & AI Routing',
    focusTag: 'distributed',
    githubUrl: null,
  },
  {
    id: 'society-management',
    number: '04',
    isFeatured: false,
    name: 'Society Management System – SaaS ERP',
    company: 'Side Project',
    period: '2024',
    tagline: 'Multi-tenant residential management platform using Next.js, Express.js, Prisma, and PostgreSQL.',
    whatIBuilt:
      'Built a multi-tenant residential management platform using Next.js, Express.js, Prisma, and PostgreSQL. Implemented RBAC and an immutable transaction ledger for tracking billing and financial activity.',
    whatWasHard:
      'Implementing strict multi-tenant isolation, immutable transaction ledgers for financial tracking, and granular role-based access control (RBAC).',
    metricValue: 'Immutable Ledger',
    metricLabel: 'Multi-Tenant RBAC & Billing',
    metricSub: 'Multi-tenant residential ERP platform on Next.js, Express.js, Prisma & PostgreSQL',
    architectureFlow: [
      { step: 'Next.js Frontend', sub: 'Resident / Admin UI' },
      { step: 'Express.js Backend', sub: 'API Layer & RBAC' },
      { step: 'Prisma ORM', sub: 'Data Access Layer' },
      { step: 'PostgreSQL', sub: 'Immutable Transaction Ledger' },
    ],
    stack: ['Next.js', 'Express.js', 'Prisma', 'PostgreSQL', 'RBAC', 'TypeScript'],
    focus: 'Multi-Tenant Architecture',
    focusTag: 'database',
    githubUrl: null,
  },
  {
    id: 'voxia',
    number: '05',
    isFeatured: false,
    name: 'Voxia – Local Voice AI Pipeline',
    company: 'Independent Project',
    period: '2024 — Present',
    tagline:
      'Explored a self-hosted voice AI architecture by rebuilding a VAD → STT → LLM → TTS pipeline using locally hosted models instead of third-party AI APIs.',
    whatIBuilt:
      'Explored a self-hosted voice AI architecture by rebuilding a VAD → STT → LLM → TTS pipeline using locally hosted models instead of third-party AI APIs.',
    whatWasHard:
      'Eliminating third-party API dependencies by orchestrating local speech recognition, quantized LLM inference, and local speech synthesis.',
    metricValue: 'Self-Contained',
    metricLabel: 'Local Model Pipeline (STT/LLM/TTS)',
    metricSub: 'Self-contained voice architecture built with open-source models (local LLM, STT, TTS)',
    architectureFlow: [
      { step: 'Local Audio', sub: 'Microphone Stream' },
      { step: 'Local STT', sub: 'Offline Speech Recognition' },
      { step: 'Local LLM', sub: 'Self-Hosted Inference' },
      { step: 'Local TTS', sub: 'Local Voice Synthesis' },
    ],
    stack: ['Python', 'FastAPI', 'WebSockets', 'Local LLMs', 'Local STT', 'Local TTS'],
    focus: 'Local Voice Architecture',
    focusTag: 'system-design',
    githubUrl: 'https://github.com/SVK04',
  },
];

// ─── Professional Experience ─────────────────────────────────────────────────

export const experiences = [
  {
    id: 'easy-cater',
    isCurrent: true,
    title: 'Software Developer | Full Stack / Backend Focus',
    company: 'Easy Cater Services Platform Private Limited',
    location: 'Vadodara, Gujarat',
    date: 'June 2026 – Present',
    highlightMetric: '10× API Performance Improvement (2s → 200ms)',
    highlightPill: 'GIS Routing · Live Driver Tracking · Order State Machine · Delivery Backend',
    summary:
      'Production backend & platform engineering across restaurant catalog APIs, GIS routing integration, live location tracking, and end-to-end order lifecycle state machines.',
    projects: [
      {
        title: 'API Performance Improvement (10× Speedup)',
        description:
          'Reduced redundant database calls and streamlined data retrieval for restaurant and catalog APIs, reducing response times from ~2s to ~200ms.',
        metric: 'Reduced API response times from ~2s to ~200ms (10× speedup)',
        tags: ['Node.js', 'Database Optimization', 'Catalog APIs', 'Performance'],
      },
      {
        title: 'GIS Routing & Live Driver Tracking Integration',
        description:
          'Integrated the existing GIS server and routing services with the Delivery Backend. Implemented location update and tracking APIs across Delivery and User backends, including smooth rider movement between location updates.',
        metric: 'GIS routing APIs & live location tracking with smooth movement interpolation',
        tags: ['GIS Integration', 'Routing Services', 'Live Tracking', 'Location APIs'],
      },
      {
        title: 'Order Lifecycle Workflows & State Machines',
        description:
          'Implemented and maintained backend workflows covering order placement, merchant acceptance, preparation/ETA calculation, driver assignment, pickup, and delivery.',
        metric: 'End-to-end order state machine (placement → driver assignment → pickup → delivery)',
        tags: ['Order Lifecycle', 'State Machines', 'ETA Calculation', 'Driver Assignment'],
      },
      {
        title: 'Cross-Platform Applications Integration',
        description:
          'Worked across the User, Delivery, and Merchant applications, resolving production issues, implementing changes, and optimizing frontend and backend workflows across the platform.',
        metric: 'Optimized frontend and backend workflows across User, Delivery & Merchant apps',
        tags: ['Full Stack', 'Workflow Optimization', 'Merchant App', 'Delivery App', 'User App'],
      },
    ],
  },
  {
    id: 'edelta-corp',
    isCurrent: false,
    title: 'Software Developer | Full Stack',
    company: 'eDelta Corporation',
    location: 'Surat, Gujarat',
    date: 'June 2024 – May 2026',
    highlightMetric: 'Real-Time Voice + ~90% Processing-Time Reduction',
    highlightPill: 'VoiceNow AI · ProtectALL E-commerce · XUnified Omnichannel',
    summary:
      'Architected real-time voice streaming systems, published developer SDKs to NPM, engineered cross-platform e-commerce middleware, and built omnichannel AI communication platforms.',
    projects: [
      {
        title: 'VoiceNow – Real-Time AI Voice Platform & Published NPM SDK',
        description:
          'Built a multi-service real-time voice platform with separate management and admin applications, each backed by its own serverless API, alongside a dedicated Python WebSocket microservice for the voice pipeline. Developed a WebSocket-based real-time voice pipeline orchestrating VAD → STT → LLM → TTS for conversational audio processing. Implemented organization-level authentication and LangChain/PGVector-based RAG workflows with AWS S3 for document knowledge-base ingestion. Developed and published the VoiceNow NPM SDK, with automated versioning and CI/CD using GitHub Actions and Semantic Release.',
        metric: 'Published VoiceNow NPM SDK with automated versioning & CI/CD via GitHub Actions',
        tags: [
          'FastAPI',
          'Python WebSockets',
          'AWS Lambda',
          'Amazon RDS',
          'PGVector RAG',
          'AWS S3',
          'NPM SDK',
          'Semantic Release',
        ],
      },
      {
        title: 'ProtectALL – E-commerce Protection & Warranty Platform',
        description:
          'Developed shared warranty-selection and dynamic-pricing logic across Shopify, BigCommerce, and WooCommerce, with platform-specific integrations for each storefront. Built automated CSV ingestion pipelines with validation, reducing bulk product-plan assignment time from minutes to under 5 seconds, a ~90% reduction in processing time. Implemented Shopify Cart Transformers and Theme App Extensions for dynamic warranty-plan rendering on product pages. Developed BigCommerce Widget API integrations to dynamically display personalized warranty plans within the storefront.',
        metric: 'Reduced bulk product-plan assignment from minutes to under 5 seconds (~90% reduction)',
        tags: [
          'Shopify',
          'BigCommerce Widget API',
          'WooCommerce',
          'Cart Transformers',
          'Theme App Extensions',
          'CSV Ingestion',
        ],
      },
      {
        title: 'XUnified – Omnichannel & AI Platform',
        description:
          'Integrated WhatsApp, Facebook, Instagram, and Telegram APIs into the platform’s common application/channel layer, connecting third-party messaging services with the platform’s communication workflows. Built AI-agent configuration functionality allowing users to select OpenAI/GPT or Gemini models and API keys and provide knowledge sources such as files, links, and text for their agents. Continued development of the AI Studio no-code bot builder, allowing users to create conversational flows with messages, buttons, files/media, and other response logic for supported channels. Integrated Google Dialogflow agents into the platform so configured agents could be connected to the corresponding communication channels through the application layer. Contributed to WhatsApp business-template and broadcast workflows, including template-based message handling and contact delivery flows.',
        metric: 'Integrated WhatsApp, FB, IG & Telegram with OpenAI/Gemini AI agents & Dialogflow',
        tags: [
          'WhatsApp API',
          'Instagram API',
          'Facebook Messenger',
          'Telegram API',
          'AI Agents',
          'GPT-4o',
          'Gemini',
          'Dialogflow',
        ],
      },
    ],
  },
  {
    id: 'edelta-ent',
    isCurrent: false,
    title: 'Software Engineering Intern',
    company: 'eDelta Enterprise Solutions Pvt. Ltd.',
    location: 'Ahmedabad, Gujarat',
    date: 'Dec 2023 – June 2024',
    highlightMetric: 'Visual Graph Bot Builder & Embeddable Chat Widget',
    highlightPill: 'React Flow · Node-Edge Validation · S3 Signed URLs',
    summary:
      'Developed visual flow graph builders and embeddable real-time WebSocket chat widgets for automated conversational workflows.',
    projects: [
      {
        title: 'AI Studio – No-Code Conversational Bot Builder',
        description:
          'Built a React Flow-based no-code bot builder that allowed users to visually create conversational flows using messages, buttons, files/media, inputs, and conditional logic. Implemented backend validation and execution logic for configured bot flows and integrated the resulting conversations with the platform’s channel layer. Built a customizable React chat widget connected to backend automation through REST/WebSocket integrations.',
        metric: 'React Flow no-code conversational bot builder & embeddable WebSocket chat widget',
        tags: ['React Flow', 'React', 'WebSockets', 'REST APIs', 'Bot Execution Engine', 'No-Code Builder'],
      },
    ],
  },
];

// ─── Technical Skills ────────────────────────────────────────────────────────

export const engineeringSignals = [
  {
    category: 'BACKEND',
    code: '01',
    description: 'Server-side API architecture, microservices, and real-time communication protocols.',
    technologies: ['Node.js', 'TypeScript', 'Python', 'FastAPI', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.IO'],
  },
  {
    category: 'CLOUD',
    code: '02',
    description: 'Serverless event computing, cloud storage, and automated CI/CD release pipelines.',
    technologies: [
      'AWS Lambda',
      'API Gateway',
      'AWS S3',
      'Amazon RDS',
      'EventBridge',
      'Docker',
      'CI/CD (GitHub Actions)',
    ],
  },
  {
    category: 'DATA',
    code: '03',
    description: 'Relational data modeling, vector storage for contextual retrieval, and caching.',
    technologies: ['PostgreSQL', 'PGVector', 'Redis', 'Prisma', 'TypeORM'],
  },
  {
    category: 'AI',
    code: '04',
    description: 'Large language model integration, voice pipelines, and vector search.',
    technologies: ['LLMs', 'RAG Pipelines', 'LangChain', 'GPT-4o', 'Gemini', 'STT / TTS', 'VAD'],
  },
  {
    category: 'FRONTEND',
    code: '05',
    description: 'Component architecture, interactive flow builders, and responsive web systems.',
    technologies: ['React', 'Next.js', 'React Flow', 'Tailwind CSS'],
  },
];

export const stack = {
  Backend: ['Node.js', 'TypeScript', 'Python', 'FastAPI', 'Express.js', 'REST APIs', 'WebSockets'],
  Cloud: ['AWS Lambda', 'API Gateway', 'AWS S3', 'Amazon RDS', 'EventBridge', 'Docker'],
  Data: ['PostgreSQL', 'PGVector', 'Redis', 'Prisma', 'TypeORM'],
  AI: ['LLMs', 'RAG', 'LangChain', 'GPT-4o', 'Gemini', 'STT/TTS', 'VAD'],
  Frontend: ['React', 'Next.js', 'React Flow', 'Tailwind CSS'],
};

// ─── Telemetry / Background ──────────────────────────────────────────────────

export const telemetry = {
  headline: 'I build backend systems, real-time infrastructure, and AI-powered applications.',
  bio: 'Backend & AI Engineer with 2+ years of experience building production APIs, real-time systems, web applications, and cloud platforms using Node.js, TypeScript, Python, PostgreSQL, React, Next.js, and AWS. Experienced in API integrations, WebSockets, serverless systems, e-commerce platforms, LLM applications, RAG workflows, and real-time location systems.',
  stats: [
    { label: 'EXPERIENCE', value: '2+', sub: 'Years building backend APIs & cloud platforms' },
    { label: 'API SPEEDUP', value: '2s → 200ms', sub: 'Easy Cater restaurant & catalog API optimization' },
    { label: 'BULK INGESTION', value: '~90%', sub: 'ProtectALL CSV ingestion time reduction (min → <5s)' },
    { label: 'CREDENTIALS', value: 'B.Tech', sub: 'Dharmsinh Desai University, CPI: 7.65 (Graduated 2024)' },
  ],
  education: {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'Dharmsinh Desai University',
    location: 'Nadiad, Gujarat',
    cpi: '7.65',
    year: 'Graduated 2024',
  },
  milestones: [
    'Reduced restaurant and catalog API response times from ~2s to ~200ms (10× speedup) at Easy Cater',
    'Integrated GIS server routing services and built live driver tracking APIs with smooth rider movement interpolation',
    'Built automated CSV ingestion pipelines reducing bulk product-plan assignment time by ~90% (minutes to under 5 seconds)',
    'Architected WebSocket real-time voice pipeline (VAD → STT → LLM → TTS) and published VoiceNow SDK to NPM with automated Semantic Release CI/CD',
    'Unified WhatsApp, Facebook, Instagram, and Telegram APIs with OpenAI/Gemini AI agents and Google Dialogflow',
  ],
};

// ─── Backward-compatibility exports ──────────────────────────────────────────
export const services = [];
export const skills = [];
export const education = [];
