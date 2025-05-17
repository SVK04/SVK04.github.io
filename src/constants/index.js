import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  school,
  college,
  movie,
  todolist,
  dineout,
  threejs,
  resume,
  postgresSql,
} from '../assets';

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
    id: 'work',
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
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const skills = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'GraphQL', level: 60, category: 'backend' },

  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Figma', level: 85, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    percentage: 80,
  },
  {
    name: 'CSS 3',
    icon: css,
    percentage: 80,
  },
  {
    name: 'JavaScript',
    icon: javascript,
    percentage: 70,
  },
  {
    name: 'TypeScript',
    icon: typescript,
    percentage: 30,
  },
  {
    name: 'React JS',
    icon: reactjs,
    percentage: 70,
  },
  {
    name: 'Redux-Saga Redux',
    icon: redux,
    percentage: 40,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    percentage: 60,
  },
  {
    name: 'Node JS',
    icon: nodejs,
    percentage: 60,
  },
  {
    name: 'PostgresSQL',
    icon: postgresSql,
    percentage: 60,
  },
  {
    name: 'Three JS',
    icon: threejs,
    percentage: 30,
  },
  {
    name: 'Git',
    icon: git,
    percentage: 60,
  },
  // {
  //   name: 'Figma',
  //   icon: figma,
  //   percentage: 5,
  // },
  {
    name: 'Docker',
    icon: docker,
    percentage: 50,
  },
];

const education = [
  {
    title: 'Completed BTech in Computer Enginnering ',
    company_name: 'Dharmsinh Desai Institute of Technology, Nadiad(Gujarat)',
    icon: college,
    iconBg: '#383E56',
    date: 'Passed in 2024',
    points: [
      'CPI-->7.65',
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: 'Higher Secondary Education',
    company_name: 'Bright Day School,Vasna, Vadodara',
    icon: school,
    iconBg: '#E6DEDD',
    date: 'Passed in 2020',
    points: [
      'Result-89.8%',
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: 'Secondary Education',
    company_name: 'Bright Day School,Vasna, Vadodara',
    icon: school,
    iconBg: '#383E56',
    date: 'Passed in 2018',
    points: [
      'Result-86%',
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

export { services, technologies, education, testimonials, projects, skills };
