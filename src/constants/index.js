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
    title: 'Frontend Developer',
    icon: 'frontend',
  },
  {
    title: 'React Native Developer',
    icon: 'mobile',
  },
  {
    title: 'Backend Developer',
    icon: 'backend',
  },
];

const skills = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 50, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },

  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
];

const education = [
  {
    title: 'Completed BTech in Computer Enginnering ',
    company_name: 'Dharmsinh Desai Institute of Technology, Nadiad(Gujarat)',
    icon: 'college',
    iconBg: '#383E56',
    date: 'Passed in 2024',
    points: ['CPI-->7.65'],
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
    date: 'June 2024 - Present',
    points: [
      {
        title: 'Voicenow AI (AI Voice Assistant Platform)',
        description:
          'Admin portal for dynamic LLM and voice service management, Python microservice for real-time STT/TTS, Node.js Serverless API backend with Twilio integration.',
        tags: ['Python', 'Node.js', 'Twilio', 'LLM'],
      },
      {
        title: 'E-Commerce Plugin Architecture',
        description:
          'Optimized BigCommerce plan sync (70% faster), developed high-performance Next.js SSR app, complex product mapping for CSV imports.',
        tags: ['Next.js', 'BigCommerce', 'SSR'],
      },
      {
        title: 'Serverless Voice Bot Architecture',
        description: 'AWS Lambda + API Gateway, Twilio + Dialogflow integration, call logging in PostgreSQL.',
        tags: ['AWS Lambda', 'AWS API Gateway', 'PostgreSQL', 'Dialogflow'],
      },
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'eDelta Enterprise Solutions Pvt. Ltd.',
    iconBg: '#E6DEDD',
    date: 'Dec 2023 - May 2024',
    points: [
      {
        title: 'No-Code AI Studio Platform',
        description:
          'Core backend for drag-and-drop bot building, node-and-edge graph system, foundational functional nodes.',
        tags: ['Backend', 'No-Code', 'Graph Systems'],
      },
      {
        title: 'Visual & UX Features',
        description: 'Implemented node-and-edge visualization for complex bot flows.',
        tags: ['UX', 'Visualization'],
      },
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
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

export { services, education, testimonials, projects, skills, experiences };
