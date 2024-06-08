import { chegg, growtharrow, fliprobo } from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
  chat,
  dictionary,
  note,
  tictactoe,
  news,
  text,
  express,
  git,
  github,
  bootstrap,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  java,
  snapgram,
  summiz,
  tailwindcss,
  threads,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Animation",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Subject Matter Expert",
    company_name: "Chegg",
    icon: chegg,
    iconBg: " #E56717",
    date: "Mar 2021 - Present",
    points: [
      "Resolve student doubts and offered comprehensive solutions in Biology on a daily basis.",
      "Ranked among the top solvers multiple times, demonstrating expertise and dedication.",
    ],
  },
  {
    title: "Java Intern",
    company_name: "Flip Robo Technologies",
    icon: fliprobo,
    iconBg: "#ee6b6e",
    date: " Jan 2023 - Oct 2023",
    points: [
      " Employed MERN stack to build a real-time messaging platform to connect users by their email",
      "Built a feature-rich note-taking website with seamless CRUD functionality for efficient note management",
      "Fashioned a responsive news website using React to deliver up-to-date information across various sectors.",
      "Designed an English dictionary application, enabling users to access meanings and pronunciation of words through integration with an external API.",
    ],
  },
  {
    title: "Equity research analyst",
    company_name: "Growth Arrow",
    icon: growtharrow,
    iconBg: "#00ab41",
    date: "Nov 2020 - Dec 2020",
    points: [
      "Analyzed candlestick patterns, chart analysis, and trading strategies in the stock market.",
      "Applied technical and fundamental analysis techniques to make informed decisions and contribute to personal income growth. ",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Mehak-Mattoo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mehak-mattoo",
  },
];

export const projects = [
  {
    iconUrl: chat,
    theme: "btn-back-orange",
    name: "Converso - A Chat Application",
    description:
      "Enjoy seamless and instant messaging with people built using MERN stack and Socket.IO.",
    link: "https://github.com/Mehak-Mattoo/chat-app",
  },
  {
    iconUrl: note,
    theme: "btn-back-pink",
    name: "Note Zen - A Note-Taking Application",
    description:
      "Store, edit, and delete your notes effortlessly in one centralized platform built using MERN stack.",
    link: "https://github.com/Mehak-Mattoo/note-taking-site",
  },
  {
    iconUrl: news,
    theme: "btn-back-black",
    name: "News Verse",
    description:
      "Stay informed with the latest news from around the globe with NewsVerse – my cutting-edge news website built using React!.",
    link: "https://github.com/Mehak-Mattoo/News-application",
  },
  {
    iconUrl: dictionary,
    theme: "btn-back-blue",
    name: "English Dictionary",
    description:
      "Dive deep into the definitions of words and enrich your understanding of their meanings and pronounciation.",
    link: "https://mehak-dictionary.netlify.app",
  },

  {
    iconUrl: text,
    theme: "btn-back-orange",
    name: "Text-Utils",
    description: "Manipulate and format your desired text with just a click.",
    link: "https://mehak-text-utils.netlify.app",
  },

  {
    iconUrl: tictactoe,
    theme: "btn-back-yellow",
    name: "Tic -Tac -Toe",
    description:
      "Experience the timeless fun of Tic Tac Toe in a sleek and modern online format, perfect for players of all ages.",
    link: "https://mehak-tic-tac-toe.netlify.app",
  },
];
