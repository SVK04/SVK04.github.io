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
  mongodb,
  git,
  figma,
  docker,
  school,
  college,
  carrent,
  jobit,
  tripguide,
  movie,
  todolist,
  dineout,
  threejs,
  resume,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    percentage: 80,
  },
  {
    name: "CSS 3",
    icon: css,
    percentage: 80,
  },
  {
    name: "JavaScript",
    icon: javascript,
    percentage: 70,
  },
  {
    name: "TypeScript",
    icon: typescript,
    percentage: 30,
  },
  {
    name: "React JS",
    icon: reactjs,
    percentage: 70,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    percentage: 10,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    percentage: 60,
  },
  {
    name: "Node JS",
    icon: nodejs,
    percentage: 60,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    percentage: 60,
  },
  {
    name: "Three JS",
    icon: threejs,
    percentage: 20,
  },
  {
    name: "Git",
    icon: git,
    percentage: 50,
  },
  {
    name: "Figma",
    icon: figma,
    percentage: 5,
  },
  {
    name: "Docker",
    icon: docker,
    percentage: 10,
  },
];

const education = [
  {
    title: "Pursuing BTech in Computer Enginnering ",
    company_name: "Dharmsinh Desai Institute of Technology, Nadiad(Gujarat)",
    icon: college,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "CPI-->7.36",
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "Bright Day School,Vasna, Vadodara",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - March 2020",
    points: [
      "Result-90%",
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "Bright Day School,Vasna, Vadodara",
    icon: school,
    iconBg: "#383E56",
    date: "Apr 2016 - Mar 2018",
    points: [
      "Result-86%",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DineOut",
    description:
      "Web-based system allow customers to browse menus, place orders, and pay for food items online, all from the comfort of their own homes.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "purple-text-gradient",
      },
    ],
    image: dineout,
    source_code_link: "https://github.com/SVK04/DineOutApp-API-NetCore-ReactJs",
  },
  {
    name: "Todo App",
    description:
      "Flutter-Based System to list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom to make sure that your tasks are written down all in one place so you don't forget anything important.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Swift",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link:
      "https://github.com/SVK04/CE152_CE148_SDP_Todo_App_Flutter/tree/master/final",
  },
  {
    name: "Movie Ticket Booking",
    description:
      "A comprehensive Movie booking platform that allows users to book movies and offers curated recommendations for popular Theaters.",
    tags: [
      {
        name: ".NETCore",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "#",
  },
];

export { services, technologies, education, testimonials, projects };
