import {
  mobile,
  web,
  game,
  ai,
  javascript,
  typescript,
  html,
  css,
  cs,
  java,
  unity,
  ue,
  next,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  idz,
  carrent,
  jobit,
  promptverse,
  glitchGarden,
  threejs,
  moon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "https://drive.google.com/file/d/1hkuR7ND6zaSfAqUSbquhZpCAgWvWOatF/view?usp=drive_link",
    title: "Resume",
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
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Prompt Engineer",
    icon: ai,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "C#",
    icon: cs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: ue,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Game Developer Intern",
    company_name: "IDZ digital",
    icon: idz,
    iconBg: "#000000",
    date: "April 2023 - May 2023",
    points: [
      "Creating and managing game applications using Unity and C#, enjoyed by a user base of over 400 million.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality games.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "PromptVerse",
    description:
      "Promptverse is a dynamic platform that empowers users to share and explore an extensive collection of AI-generated prompts.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: promptverse,
    source_code_link: "https://github.com/lak7/PromptVerse",
    live_demo_link: "http://promptverse.thelakshay.com/",
  },
  {
    name: "Glitch Garden",
    description:
      "Crafted with the powerful Unity engine and meticulously coded in C#, this awe-inspiring game stands as a faithful replication of the beloved Plants vs. Zombies franchise.",
    tags: [
      {
        name: "CS",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: glitchGarden,
    source_code_link: "https://github.com",
    live_demo_link: "https://laks07.itch.io/glitch-garden",
  },
];

export { services, technologies, experiences, testimonials, projects };
