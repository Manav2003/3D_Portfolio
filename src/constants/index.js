import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  urjanet,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Urjanet (Arcadia) ",
    icon: urjanet,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Developed a code which automates the extraction of targeted data",
      "The automated code selects a bill pdf, converts it into a TET format and uses the coordinates to check for the different head entities such account no, address, meter reading, etc. ",
      "Having the data extracted the output is in the form of a doc with the extruded values in it.",
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
  {
    name: "Shopping Cart",
    description:
      "Web-based platform that allows users to search, add and manage products, providing a convenient user experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Manav2003/ShoppingCartE_Commerce",
  },
  {
    name: "3D Portfolio",
    description:
      "An innovative and interactive online portfolio to showcase my skills and projects in a visually appealing and engaging manner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "PDF Finder",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "eclipse",
        color: "green-text-gradient",
      },
      {
        name: "regex",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Manav2003/PDF_Finder",
  },
];

export { services, technologies, experiences, testimonials, projects };