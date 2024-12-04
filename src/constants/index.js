import { chegg, payr, fliprobo, summarizeX } from "../assets/images";

import {
  contact,
  css,
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
  react,
  redux,
  java,
  tailwindcss,
figma,
typescript
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
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },

  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Frontend",
  },

];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Payr",
    icon: payr,
    iconBg: "#000000",
    date: "Aug 2024 - Present",
    points: [
      "Boosted partner engagement by 40% by designing and implementing seamless API integrations, enabling external organizations to contribute content directly to the platform.",
      "Reduced server load by 20% by integrating AWS S3 for seamless media storage by offloading file handling to the cloud",
      "Spearheaded a multi-account login system, allowing users to seamlessly manage multiple accounts from a single platform, increasing user efficiency by 10%.",
      "Participated in code reviews, debugging sessions, and the deployment of updates in a fast-paced environment.",
    ],
  },
  {
    title: "Java Intern",
    company_name: "Flip Robo Technologies",
    icon: fliprobo,
    iconBg: "#ee6b6e",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Delivered end-to-end development for 5+ web applications, ensuring user-friendly experiences",
      "Implemented responsive designs and integrated external APIs to enhance application functionality.",

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
    iconUrl: summarizeX,
    theme: "btn-back-blue",
    name: "SummarizeX - AI Article Summarizer",
    description:
    "Developed an AI-powered summarizer with features like PDF/DOC downloads, handling over 100+ summaries monthly.",
    link: "https://summarize-x.vercel.app/",
  },

  {
    iconUrl: news,
    theme: "btn-back-yellow",
    name: "News Verse",
    description:
      "Built a responsive news website serving real-time updates across 10+ categories, ensuring the website provides the latest information with no delays.",
    link: "https://news-verse-mu.vercel.app/",
  },
  {
    iconUrl: chat,
    theme: "btn-back-orange",
    name: "Converso - A Chat Application",
    description:
      "Engineered a messaging platform using MERN stack with real-time bi-directional communication between users.",
    link: "https://github.com/Mehak-Mattoo/chat-app",
  },
  {
    iconUrl: note,
    theme: "btn-back-pink",
    name: "Note Zen - A Note-Taking Application",
    description:
      "Developed a feature-rich note-taking platform with CRUD Functionality.",
    link: "https://github.com/Mehak-Mattoo/note-taking-site",
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
