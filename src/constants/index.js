import { movie, todolist, dineout } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Engineer',
    icon: 'frontend',
  },
  {
    title: 'AI & Voice Architect',
    icon: 'mobile',
  },
  {
    title: 'Cloud-Native Developer',
    icon: 'backend',
  },
];

const skills = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  // { name: 'Angular', level: 70, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'Socket.IO', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  // { name: 'MongoDB', level: 60, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },

  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
];

const education = [
  {
    title: 'BTech in Computer Engineering',
    company_name: 'Dharmsinh Desai University, Nadiad (Gujarat)',
    icon: 'college',
    iconBg: '#383E56',
    date: 'Passed in 2024',
    points: ['CPI: 7.65'],
  },
  {
    title: 'Higher Secondary Education',
    company_name: 'Bright Day School,Vasna, Vadodara',
    icon: 'school',
    iconBg: '#E6DEDD',
    date: 'Passed in 2020',
    points: ['Result-89.8%'],
  },
  {
    title: 'Secondary Education',
    company_name: 'Bright Day School,Vasna, Vadodara',
    icon: 'school',
    iconBg: '#383E56',
    date: 'Passed in 2018',
    points: ['Result-86%'],
  },
];

const experiences = [
  {
    title: 'Junior Software Developer',
    company_name: 'eDelta Enterprise Solutions Pvt. Ltd.',
    iconBg: '#383E56',
    date: 'July 2023 - Present',
    points: [
      {
        title: 'E-commerce Protection Platforms (ProtectAllPlans)',
        description:
          'Designed and developed ProtectAllPlans, a cross-platform protection system for Shopify, BigCommerce, and WordPress. Built CSV-based import pipelines and implemented Shopify Cart Transformer logic.',
        tags: ['Shopify', 'BigCommerce', 'WordPress', 'Next.js', 'CSV'],
      },
      {
        title: 'VoiceNow AI Voice Platform & SDK',
        description:
          'Built a full-stack AI voice assistant platform with Python WebSocket backend (VAD -> STT -> LLM -> TTS). Designed and published the framework-agnostic VoiceNow SDK.',
        tags: ['Python', 'WebSockets', 'VAD', 'LLM', 'AI'],
      },
      {
        title: 'Omnichannel Engagement & Serverless Bots',
        description:
          'Engineered multi-channel communication APIs for WhatsApp, FB, Instagram. Designed Serverless Voice Bot architecture using AWS Lambda and API Gateway.',
        tags: ['AWS Lambda', 'API Gateway', 'PostgreSQL', 'Twilio'],
      },
    ],
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'eDelta Enterprise Solutions Pvt. Ltd.',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - June 2023',
    points: [
      {
        title: 'No-Code AI Studio Platform',
        description:
          'Designed core architecture of a no-code AI chatbot builder. Implemented a node-and-edge graph system enabling drag-and-drop flow creation.',
        tags: ['Backend', 'No-Code', 'Graph Systems', 'System Design'],
      },
      {
        title: 'Platform Automation',
        description:
          'Established backend support for node execution and flow validation, forming the base of the platform automation.',
        tags: ['Automation', 'Backend', 'Validation'],
      },
    ],
  },
];

const projects = [
  {
    name: 'DineOut',
    description:
      'Web-based system allow customers to browse menus, place orders, and pay for food items online, all from the comfort of their own homes.',
    tags: [
      {
        name: 'reactjs',
        color: 'bg-blue-600',
      },
      {
        name: 'C Sharp',
        color: 'bg-green-600',
      },
      {
        name: 'tailwind',
        color: 'bg-pink-600',
      },
      {
        name: 'SQL',
        color: 'bg-purple-600',
      },
    ],
    image: dineout,
    source_code_link: 'https://github.com/SVK04/DineOutApp-API-NetCore-ReactJs',
  },
  {
    name: 'Todo App',
    description:
      "Flutter-Based System to list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom to make sure that your tasks are written down all in one place so you don't forget anything important.",
    tags: [
      {
        name: 'Dart',
        color: 'bg-blue-600',
      },
      {
        name: 'Swift',
        color: 'bg-green-600',
      },
      {
        name: 'flutter',
        color: 'bg-pink-600',
      },
    ],
    image: todolist,
    source_code_link: 'https://github.com/SVK04/CE152_CE148_SDP_Todo_App_Flutter/tree/master/final',
  },
  {
    name: 'Movie Ticket Booking',
    description:
      'A comprehensive Movie booking platform that allows users to book movies and offers curated recommendations for popular Theaters.',
    tags: [
      {
        name: '.NETCore',
        color: 'bg-blue-600',
      },
      {
        name: 'ASP.NET',
        color: 'bg-green-600',
      },
      {
        name: 'C Sharp',
        color: 'bg-pink-600',
      },
    ],
    image: movie,
    source_code_link: '#',
  },
];

export { services, education, projects, skills, experiences };
