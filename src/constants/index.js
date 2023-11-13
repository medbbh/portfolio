import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    angular,
    nodejs,
    git,
    figma,
    syskat,
    home,
    una,
    threejs,
    bootstrap,
    laravel
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
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "Reactjs Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Angular",
      icon: angular,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Laravel",
      icon: laravel,
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web developer",
      company_name: "Nouakchott University",
      icon: una,
      iconBg: "#383E56",
      date: "Feb 2022 - May 2022",
      points: [
        "Developing and maintaining web application to report lost and found items using Php, Javascript and other related technologies.",
        "Collaborating with 3 collegues to create high-quality products.",
        "Implementing responsive design.",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "...",
      icon: home,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - jan 2023",
      points: [
        "Developing and maintaining a Hospital management web application using Laravel and other related technologies.",
        "Developing two Interface (Admin, User).",
        "Addition of an email appointment notice.",
        "Implementing responsive design.",

      ],
    },
    {
      title: "Full-Stack Web Developer",
      company_name: "Syskat Technology",
      icon: syskat,
      iconBg: "#383E56",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Developing and maintaining web applications for Covid-19 vaccine management using Laravel, Angular and other related technologies.",
        "Collaborating with 2 including me to create high-quality products.",
        "Implementing responsive design and great UI/UX design.",
        "Adding Charts to upgrade the UX.",
        "Participating in code reviews and providing constructive feedback from other proffesors and developers.",

      ],
    },
  ];
  
  
  
  export { services, technologies, experiences };