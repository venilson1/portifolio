import casting from "../assets/logos/casting.png";
import proz from "../assets/logos/proz.png";
import semfoto from "../assets/logos/sem-foto.png";
import uninove from "../assets/logos/uninove.jpg";
import devsfree from "../assets/logos/devsfree.png";

import bootstrap from "../assets/skills/bootstrap.png";
import css3 from "../assets/skills/css3.png";
import heroku from "../assets/skills/heroku.png";
import html5 from "../assets/skills/html-5.png";
import java from "../assets/skills/java.png";
import javascript from "../assets/skills/javascript.png";
import mongodb from "../assets/skills/mongodb.png";
import nodejs from "../assets/skills/nodejs.png";
import postgres from "../assets/skills/postgresql.png";
import react from "../assets/skills/react.png";
import springboot from "../assets/skills/springboot.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";
import vscode from "../assets/skills/vscode.png";

export const carrers = [
  {
    id: 1,
    company: "Solução Casting",
    occupation: "programador",
    techs: [
      {
        id: 1,
        tech: ".NET",
        badge: "bg-indigo-100 text-indigo-800",
      },
      {
        id: 2,
        tech: "SQL Server",
        badge: "bg-red-100 text-red-800",
      },
      {
        id: 2,
        tech: "Java Script",
        badge: "bg-yellow-100 text-yellow-800",
      },
      {
        id: 4,
        tech: "VueJS",
        badge: "bg-green-100 text-green-800",
      },
    ],
    initial: "2020",
    final: "2020",
    image: casting,
  },
  {
    id: 2,
    company: "Free Lancer",
    occupation: "programador",
    techs: [
      {
        id: 1,
        tech: "Java",
        badge: "bg-red-100 text-red-800",
      },
      {
        id: 2,
        tech: "React",
        badge: "bg-teal-100 text-teal-800",
      },
      {
        id: 2,
        tech: "postgress",
        badge: "bg-blue-100 text-blue-800",
      },
      {
        id: 4,
        tech: "NodeJs",
        badge: "bg-green-100 text-green-800",
      },
      {
        id: 5,
        tech: "Heroku",
        badge: "bg-violet-100 text-violet-800",
      },
    ],
    initial: "2022",
    final: "momento",
    image: semfoto,
  },
];

export const voluntaries = [
  {
    id: 1,
    company: "Proz",
    occupation: "professor de programação",
    techs: [
      {
        id: 1,
        tech: "Java",
        badge: "bg-red-100 text-red-800",
      },
      {
        id: 2,
        tech: "Phyton",
        badge: "bg-indigo-100 text-indigo-800",
      },
      {
        id: 3,
        tech: "Estrutura de dados",
        badge: "bg-gray-700 text-gray-300",
      },
      {
        id: 4,
        tech: "Algoritimos",
        badge: "bg-gray-700 text-gray-300",
      },
    ],
    initial: "2020",
    final: "2021",
    image: proz,
  },
  {
    id: 2,
    company: "Devs Free",
    occupation: "Desenvolvedor Java",
    techs: [
      {
        id: 1,
        tech: "Java",
        badge: "bg-red-100 text-red-800",
      },
      {
        id: 2,
        tech: "AWS",
        badge: "bg-orange-100 text-orange-800",
      },
      {
        id: 3,
        tech: "Docker",
        badge: "bg-blue-100 text-blue-800",
      },
    ],
    initial: "2020",
    final: "momento",
    image: devsfree,
  },
];

export const institutes = [
  {
    id: 1,
    name: "Universidade Nove de Julho",
    course: "Análise e Desenvolvimento de Sistemas",
    initiation: "2019",
    conclusion: "2021",
    image: uninove,
  },
];

export const skills = [
  {
    id: 1,
    name: "React",
    description: "Desenvolvimento web",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    id: 2,
    name: "Javascript",
    description: "Desenvolvimento web",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    id: 3,
    name: "Typescript",
    description: "Desenvolvimento web",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
  },
  {
    id: 4,
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    id: 5,
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  {
    id: 6,
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap,
  },
  {
    id: 7,
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres,
  },
  {
    id: 8,
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku,
  },
  {
    id: 9,
    name: "Visual Studio Code",
    description: "Editor de código",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  {
    id: 10,
    name: "Java",
    description: "Desenvolvimento web",
    link: "https://www.oracle.com/br/java/",
    type: "development",
    image: java,
  },
  {
    id: 11,
    name: "Spring Boot",
    description: "Desenvolvimento web",
    link: "https://spring.io/projects/spring-boot",
    type: "development",
    image: springboot,
  },
  {
    id: 12,
    name: "Mongodb",
    description: "Database",
    link: "https://www.mongodb.com",
    type: "database",
    image: mongodb,
  },
  {
    id: 13,
    name: "NodeJs",
    description: "Desenvolvimento web",
    link: "https://nodejs.org/en/",
    type: "development",
    image: nodejs,
  },
  {
    id: 14,
    name: "Tailwind",
    description: "Web design",
    link: "https://tailwindcss.com/",
    type: "design",
    image: tailwind,
  },
];
