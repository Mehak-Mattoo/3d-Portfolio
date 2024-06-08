import { chegg, growtharrow, fliprobo } from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
