// ─── Case Studies ────────────────────────────────────────────────────────────
// One entry per project `id`, all with the same sections. Any string starting
// with "TODO:" (or a result value of 'TODO') is a placeholder the site shows as
// a visible TODO. Replace it with a real fact, never a guess, before release.
//
// Diagram format: nodes sit on a grid (`col`, `row`, from 0). `highlight` marks
// the parts I owned. Edges go `from` → `to`; `both: true` draws two arrowheads.

export const caseStudies = [
  {
    id: 'voicenow',
    problem:
      'Build a real-time conversational voice platform: stream a user’s speech in, answer from an organization’s own documents, speak the reply back without clipping, and let other developers embed it through an SDK.',
    role: {
      title: 'Software Developer (Full Stack), eDelta Corporation',
      team: 'TODO: add team size and who else worked on the platform',
      ownership: [
        'Architected the dedicated Python WebSocket voice microservice',
        'Engineered the streaming VAD → STT → LLM → TTS audio pipeline',
        'Implemented organization-level authentication',
        'Built LangChain + PGVector RAG with AWS S3 knowledge-base ingestion',
        'Developed and published the VoiceNow TypeScript SDK to NPM with Semantic Release CI/CD',
      ],
    },
    architecture: {
      title: 'VoiceNow: voice plane and management plane',
      caption:
        'Audio streams over a WebSocket to a Python service that runs VAD, STT, a RAG-backed LLM and TTS, then streams speech back. Separate management and admin apps use their own serverless APIs on AWS Lambda.',
      nodes: [
        { id: 'client', label: 'Voice Client', sub: 'VoiceNow TS SDK', col: 0, row: 1 },
        { id: 'ws', label: 'Voice Service', sub: 'FastAPI · WebSockets', col: 1, row: 1, highlight: true },
        { id: 'stt', label: 'VAD → STT', sub: 'speech to text', col: 2, row: 0, highlight: true },
        { id: 'llm', label: 'LLM + LangChain', sub: 'RAG answers', col: 2, row: 1, highlight: true },
        { id: 'tts', label: 'TTS', sub: 'speech synthesis', col: 2, row: 2, highlight: true },
        { id: 's3', label: 'AWS S3', sub: 'knowledge docs', col: 3, row: 0 },
        { id: 'vec', label: 'PGVector', sub: 'embeddings', col: 3, row: 1 },
        { id: 'apps', label: 'Mgmt & Admin Apps', sub: 'separate apps', col: 0, row: 3 },
        { id: 'api', label: 'Serverless APIs', sub: 'Lambda · org auth', col: 1, row: 3, highlight: true },
        { id: 'rds', label: 'Amazon RDS', sub: 'platform data', col: 2, row: 3 },
      ],
      edges: [
        { from: 'client', to: 'ws', label: 'audio stream', both: true },
        { from: 'ws', to: 'stt', label: 'frames' },
        { from: 'stt', to: 'llm', label: 'transcript' },
        { from: 'llm', to: 'tts', label: 'token chunks' },
        { from: 'tts', to: 'ws', label: 'audio' },
        { from: 'llm', to: 'vec', label: 'retrieve' },
        { from: 's3', to: 'vec', label: 'ingest' },
        { from: 'apps', to: 'api', label: 'manage' },
        { from: 'api', to: 'rds', label: 'read/write' },
      ],
    },
    stack: [
      { layer: 'Voice service', items: ['Python', 'FastAPI', 'WebSockets'] },
      { layer: 'AI', items: ['LangChain', 'PGVector', 'VAD', 'STT', 'LLM', 'TTS'] },
      { layer: 'Cloud', items: ['AWS Lambda', 'Amazon RDS', 'AWS S3', 'EventBridge'] },
      { layer: 'SDK & CI/CD', items: ['TypeScript', 'NPM', 'GitHub Actions', 'Semantic Release'] },
    ],
    dataModel: {
      summary:
        'Organizations are the authentication boundary. Knowledge-base documents land in S3 and are ingested into PGVector for retrieval; platform data for the management apps lives in Amazon RDS.',
      entities: [
        { name: 'Organization', detail: 'Scope for organization-level authentication' },
        { name: 'Knowledge document', detail: 'Uploaded to AWS S3, then ingested for RAG' },
        { name: 'Embedding', detail: 'Stored in PGVector and queried through LangChain' },
        {
          name: 'TODO: add the main tables',
          detail: 'TODO: e.g. agents, sessions, and how embeddings are keyed per organization',
        },
      ],
    },
    decisions: [
      {
        decision:
          'Run the voice pipeline as a dedicated Python WebSocket service, separate from the serverless management APIs',
        why: 'A voice call is a long-lived, two-way stream; management actions are short request/response calls that suit Lambda.',
        tradeoff: 'Two deployment models to operate instead of one.',
      },
      {
        decision: 'Stream LLM output to TTS in chunks instead of waiting for the full answer',
        why: 'The caller starts hearing the reply sooner.',
        tradeoff: 'Chunk ordering and audio boundaries must be managed to avoid clipping and race conditions.',
      },
      {
        decision: 'Use PGVector for retrieval',
        why: 'Embeddings stay in PostgreSQL next to relational data instead of in a separate vector database.',
        tradeoff: 'TODO: note any limit you hit (index type, recall, latency)',
      },
      {
        decision: 'Ship the client as a published TypeScript SDK with Semantic Release',
        why: 'Integrators install a versioned package; versions and changelogs come from commits automatically.',
        tradeoff: 'Public API changes need disciplined commit messages and semver care.',
      },
    ],
    challenges: [
      {
        challenge:
          'Real-time two-way audio over WebSockets (VAD → STT → LLM → TTS) while keeping streamed LLM chunks and TTS synthesis in sync, without clipping or race conditions.',
        solution: 'TODO: describe how you sequenced chunks and handled interruptions or back-pressure',
      },
    ],
    results: [
      { value: 'NPM', label: 'VoiceNow SDK published with automated versioning and CI/CD' },
      { value: 'TODO', label: 'TODO: add end-to-end voice response latency' },
      { value: 'TODO', label: 'TODO: add concurrent sessions or call volume' },
    ],
    links: [
      { label: 'NPM package', href: null, note: 'TODO: add the public NPM package URL' },
      { label: 'Source', href: null, note: 'Private (company project)' },
    ],
  },
  {
    id: 'easycater-delivery',
    problem:
      'Restaurant and catalog APIs took about 2 seconds to respond. The delivery platform also needed live driver tracking on top of an existing GIS routing server, and one consistent order lifecycle across the User, Merchant and Delivery apps.',
    role: {
      title: 'Software Developer (Full Stack / Backend), Easy Cater',
      team: 'TODO: add team size',
      ownership: [
        'Cut redundant database calls in restaurant and catalog APIs',
        'Integrated the existing GIS server and routing services with the Delivery Backend',
        'Built location update and tracking APIs across the Delivery and User backends',
        'Implemented order workflows: placement, merchant acceptance, prep/ETA, driver assignment, pickup, delivery',
        'Fixed production issues across the User, Delivery and Merchant applications',
      ],
    },
    architecture: {
      title: 'Easy Cater: order and tracking flow',
      caption:
        'Three client apps share one order lifecycle. The User Backend serves catalog and ordering; the Delivery Backend handles driver assignment, location updates and GIS routing, and feeds live location back to users.',
      nodes: [
        { id: 'user', label: 'User App', sub: 'customers', col: 0, row: 0 },
        { id: 'merchant', label: 'Merchant App', sub: 'restaurants', col: 0, row: 1 },
        { id: 'driver', label: 'Delivery App', sub: 'riders', col: 0, row: 2 },
        { id: 'userBe', label: 'User Backend', sub: 'catalog & orders', col: 1, row: 0, highlight: true },
        { id: 'deliveryBe', label: 'Delivery Backend', sub: 'tracking', col: 1, row: 2, highlight: true },
        { id: 'db', label: 'Database', sub: 'restaurants & catalog', col: 2, row: 0 },
        { id: 'order', label: 'Order State Machine', sub: 'placed → delivered', col: 2, row: 1, highlight: true },
        { id: 'gis', label: 'GIS / Routing', sub: 'existing server', col: 2, row: 2 },
      ],
      edges: [
        { from: 'user', to: 'userBe', label: 'browse/order' },
        { from: 'userBe', to: 'db', label: 'fewer queries' },
        { from: 'userBe', to: 'order', label: 'place' },
        { from: 'merchant', to: 'order', label: 'accept · ETA' },
        { from: 'order', to: 'deliveryBe', label: 'assign' },
        { from: 'driver', to: 'deliveryBe', label: 'location', both: true },
        { from: 'deliveryBe', to: 'gis', label: 'routes' },
        { from: 'deliveryBe', to: 'userBe', label: 'live location' },
      ],
    },
    stack: [
      { layer: 'Backend', items: ['Node.js', 'REST APIs'] },
      { layer: 'Location', items: ['GIS routing server', 'Location tracking APIs'] },
      { layer: 'Data', items: ['TODO: add database and any cache'] },
    ],
    dataModel: {
      summary:
        'An order moves through explicit states, and driver location updates are relayed to the user while the order is active.',
      entities: [
        { name: 'Order', detail: 'placed → accepted → preparing (ETA) → driver assigned → picked up → delivered' },
        { name: 'Restaurant & catalog', detail: 'Served by the catalog APIs that were sped up 10×' },
        { name: 'Driver location', detail: 'Location updates from the Delivery app, routed through GIS' },
        { name: 'TODO: add schema details', detail: 'TODO: database engine, key tables and indexes' },
      ],
    },
    decisions: [
      {
        decision: 'Remove redundant database calls instead of adding infrastructure',
        why: 'The slowness came from repeated reads in the request path, so fixing data access gave the 10× win.',
        tradeoff: 'TODO: note what you traded (e.g. query complexity, caching rules)',
      },
      {
        decision: 'Model the order lifecycle as an explicit state machine',
        why: 'Every app sees the same allowed transitions from placement to delivery.',
        tradeoff: 'New states or edge cases have to be changed in one shared place.',
      },
      {
        decision: 'Smooth rider movement between location updates',
        why: 'The map looks live without sending location updates more often.',
        tradeoff: 'The displayed position is an estimate between real updates.',
      },
      {
        decision: 'Integrate the existing GIS server rather than replace it',
        why: 'Routing already existed; the Delivery Backend needed to use it.',
        tradeoff: 'TODO: note any limits of the existing GIS service',
      },
    ],
    challenges: [
      {
        challenge: 'Restaurant and catalog APIs responded in about 2 seconds.',
        solution: 'Removed redundant database calls and streamlined data retrieval, bringing responses to about 200ms.',
      },
      {
        challenge: 'Live tracking looked jumpy between location updates.',
        solution: 'Implemented smooth rider movement between updates across the Delivery and User backends.',
      },
    ],
    results: [
      { value: '10×', label: 'catalog API speedup (~2s → ~200ms)' },
      { value: '3 apps', label: 'User, Merchant and Delivery on one order lifecycle' },
      { value: 'TODO', label: 'TODO: add order volume or tracking update rate' },
    ],
    links: [
      { label: 'Live product', href: null, note: 'TODO: add public app/website link if allowed' },
      { label: 'Source', href: null, note: 'Private (company project)' },
    ],
  },
  {
    id: 'protectall',
    problem:
      'Merchants on Shopify, BigCommerce and WooCommerce needed to offer warranty plans with dynamic pricing on product pages, and assigning plans to products in bulk took minutes.',
    role: {
      title: 'Software Developer (Full Stack), eDelta Corporation',
      team: 'TODO: add team size',
      ownership: [
        'Built shared warranty-selection and dynamic-pricing logic used on all three platforms',
        'Built automated CSV ingestion pipelines with validation',
        'Implemented Shopify Cart Transformers and Theme App Extensions',
        'Built BigCommerce Widget API integrations for personalized plans',
      ],
    },
    architecture: {
      title: 'ProtectALL: ingestion and storefront integrations',
      caption:
        'Bulk CSV uploads are validated and turned into product-plan assignments. One shared pricing core serves Shopify, BigCommerce and WooCommerce through platform-specific integrations.',
      nodes: [
        { id: 'csv', label: 'CSV Upload', sub: 'bulk product-plans', col: 0, row: 0 },
        { id: 'ingest', label: 'Ingestion Pipeline', sub: 'validation', col: 1, row: 0, highlight: true },
        { id: 'plans', label: 'Plan Assignments', sub: 'product ↔ plan', col: 2, row: 0 },
        { id: 'core', label: 'Shared Pricing Core', sub: 'warranty selection', col: 2, row: 1, highlight: true },
        { id: 'shopify', label: 'Shopify', sub: 'Cart Transformers', col: 3, row: 0, highlight: true },
        { id: 'bigc', label: 'BigCommerce', sub: 'Widget API', col: 3, row: 1, highlight: true },
        { id: 'woo', label: 'WooCommerce', sub: 'storefront', col: 3, row: 2 },
      ],
      edges: [
        { from: 'csv', to: 'ingest', label: 'upload' },
        { from: 'ingest', to: 'plans', label: 'valid rows' },
        { from: 'plans', to: 'core', label: 'lookup' },
        { from: 'core', to: 'shopify', label: 'price' },
        { from: 'core', to: 'bigc', label: 'plans' },
        { from: 'core', to: 'woo', label: 'plans' },
      ],
    },
    stack: [
      { layer: 'Backend', items: ['Node.js', 'TypeScript', 'CSV pipelines'] },
      { layer: 'Frontend', items: ['Next.js'] },
      {
        layer: 'Platforms',
        items: ['Shopify API', 'Cart Transformers', 'Theme App Extensions', 'BigCommerce Widget API', 'WooCommerce'],
      },
      { layer: 'Data', items: ['TODO: add database'] },
    ],
    dataModel: {
      summary: 'Warranty plans are assigned to products; the pricing core reads those assignments for each storefront.',
      entities: [
        { name: 'Product', detail: 'From the merchant’s storefront' },
        { name: 'Warranty plan', detail: 'Selected and priced dynamically per product' },
        { name: 'Product-plan assignment', detail: 'Created in bulk from validated CSV rows' },
        { name: 'TODO: add schema details', detail: 'TODO: database, merchant/store tables, keys' },
      ],
    },
    decisions: [
      {
        decision: 'One shared selection and pricing core, with platform-specific integrations',
        why: 'Pricing rules are written once and behave the same on every storefront.',
        tradeoff:
          'Each platform’s extension model (Cart Transformers, Widget API, WooCommerce) still needs its own integration.',
      },
      {
        decision: 'Validate CSV rows before assignment',
        why: 'Bad rows are rejected up front instead of leaving partial or wrong plan data.',
        tradeoff: 'TODO: note how invalid rows are reported back to merchants',
      },
      {
        decision: 'Use Shopify Cart Transformers for warranty pricing in the cart',
        why: 'Pricing runs through Shopify’s supported cart extension point.',
        tradeoff: 'TODO: note any platform limits you worked around',
      },
    ],
    challenges: [
      {
        challenge: 'Bulk product-plan assignment took minutes.',
        solution:
          'Built automated CSV ingestion pipelines with validation, bringing it under 5 seconds (~90% less time).',
      },
      {
        challenge: 'Three commerce platforms with different extension models.',
        solution: 'Kept selection and pricing logic shared, with platform-specific integrations for each storefront.',
      },
    ],
    results: [
      { value: '~90%', label: 'less bulk-assignment time (minutes → under 5s)' },
      { value: '3', label: 'commerce platforms on one pricing core' },
      { value: 'TODO', label: 'TODO: add merchants or products served' },
    ],
    links: [
      { label: 'App listing', href: null, note: 'TODO: add Shopify/BigCommerce app listing if public' },
      { label: 'Source', href: null, note: 'Private (company project)' },
    ],
  },
  {
    id: 'xunified',
    problem:
      'Businesses talk to customers on WhatsApp, Facebook, Instagram and Telegram, each with its own API, and wanted to configure AI agents and bot flows once and use them on every channel.',
    role: {
      title: 'Software Developer (Full Stack), eDelta Corporation',
      team: 'TODO: add team size',
      ownership: [
        'Integrated WhatsApp, Facebook, Instagram and Telegram APIs into the common channel layer',
        'Built AI-agent configuration: choose OpenAI/GPT or Gemini, add API keys and knowledge sources',
        'Continued development of the AI Studio no-code bot builder',
        'Integrated Google Dialogflow agents with the channel layer',
        'Contributed to WhatsApp business-template and broadcast workflows',
      ],
    },
    architecture: {
      title: 'XUnified: one channel layer, many agents',
      caption:
        'Messaging channels connect to a common channel layer, which routes conversations to AI Studio flows, configurable GPT/Gemini agents or Dialogflow. Broadcasts go out through WhatsApp templates.',
      nodes: [
        { id: 'wa', label: 'WhatsApp', sub: 'Business API', col: 0, row: 0 },
        { id: 'meta', label: 'Facebook · Instagram', sub: 'Meta Graph API', col: 0, row: 1 },
        { id: 'tg', label: 'Telegram', sub: 'Telegram API', col: 0, row: 2 },
        { id: 'broadcast', label: 'Broadcasts', sub: 'business templates', col: 1, row: 0 },
        { id: 'layer', label: 'Channel Layer', sub: 'common app API', col: 1, row: 1, highlight: true },
        { id: 'studio', label: 'AI Studio Flows', sub: 'no-code builder', col: 2, row: 0 },
        { id: 'agents', label: 'AI Agents', sub: 'GPT / Gemini', col: 2, row: 1, highlight: true },
        { id: 'dialogflow', label: 'Dialogflow', sub: 'Google agents', col: 2, row: 2, highlight: true },
        { id: 'knowledge', label: 'Knowledge Sources', sub: 'files · links · text', col: 3, row: 1 },
      ],
      edges: [
        { from: 'wa', to: 'layer', both: true },
        { from: 'meta', to: 'layer', label: 'messages', both: true },
        { from: 'tg', to: 'layer', both: true },
        { from: 'broadcast', to: 'wa', label: 'templates' },
        { from: 'layer', to: 'studio', label: 'flows' },
        { from: 'layer', to: 'agents', label: 'route' },
        { from: 'layer', to: 'dialogflow', label: 'route' },
        { from: 'knowledge', to: 'agents', label: 'context' },
      ],
    },
    stack: [
      { layer: 'Backend', items: ['Node.js', 'Python'] },
      { layer: 'Channels', items: ['WhatsApp API', 'Meta Graph API', 'Telegram API'] },
      { layer: 'AI', items: ['GPT-4o', 'Gemini', 'Dialogflow', 'AI Studio'] },
      { layer: 'Data', items: ['TODO: add database'] },
    ],
    dataModel: {
      summary:
        'An agent configuration stores the chosen model provider, its API key and knowledge sources. Bot flows are built from message, button, media, input and condition steps.',
      entities: [
        { name: 'Agent config', detail: 'Provider (OpenAI/GPT or Gemini), API key, knowledge sources' },
        { name: 'Knowledge source', detail: 'Files, links or text attached to an agent' },
        { name: 'Bot flow', detail: 'Messages, buttons, files/media, inputs and conditional logic' },
        { name: 'Broadcast template', detail: 'WhatsApp business template plus contact delivery' },
        {
          name: 'TODO: add schema details',
          detail: 'TODO: database, conversation/message storage, how API keys are secured',
        },
      ],
    },
    decisions: [
      {
        decision: 'Normalize every messaging channel behind one common channel layer',
        why: 'Flows, agents and Dialogflow are connected once and work on every channel.',
        tradeoff: 'Channel-specific features have to fit the common message shape or be handled as exceptions.',
      },
      {
        decision: 'Let users pick the model provider and bring their own API key',
        why: 'Customers choose between OpenAI/GPT and Gemini without code changes.',
        tradeoff: 'Two provider integrations to maintain and keys to store safely.',
      },
    ],
    challenges: [
      {
        challenge:
          'Unifying WhatsApp, Facebook, Instagram and Telegram protocols into one normalized layer with per-agent AI configuration and Dialogflow routing.',
        solution: 'TODO: describe how messages were normalized and routed (e.g. adapter per channel, shared schema)',
      },
    ],
    results: [
      { value: '4', label: 'messaging channels behind one layer' },
      { value: '3', label: 'agent back ends: GPT, Gemini, Dialogflow' },
      { value: 'TODO', label: 'TODO: add message volume or number of businesses' },
    ],
    links: [
      { label: 'Product', href: null, note: 'TODO: add public product link if allowed' },
      { label: 'Source', href: null, note: 'Private (company project)' },
    ],
  },
];
