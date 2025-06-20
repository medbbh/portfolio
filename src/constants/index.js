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
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Integration",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: html, // Using available icons as placeholders
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: css,
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
      name: "Django REST",
      icon: backend,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "PostgreSQL",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mobile,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Tailwind CSS",
      icon: bootstrap,
    },
  ];

  const projects = [
    {
      name: "Blockchain Medical Record System",
      description: "HIPAA-compliant medical record management system with blockchain integration for secure and immutable patient data storage.",
      tags: [
        {
          name: "django-rest",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "blockchain",
          color: "orange-text-gradient",
        },
      ],
      image: web, // Using available image as placeholder
      source_code_link: "https://github.com/BahMbeirik/Dossiers_Medicaux",
      live_demo_link: "#",
      year: "2025",
      highlights: [
        "Designed HIPAA-compliant system with AES-256 encryption for patient data",
        "Implemented blockchain ledger for secure and immutable medical record storage",
        "Developed role-based dashboards with access analytics"
      ]
    },
    {
      name: "Thimar - AI Productivity Platform",
      description: "Winner of Supabase Launch Week 14. AI-powered productivity platform with prayer-time scheduling and habit tracking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "ai",
          color: "orange-text-gradient",
        },
      ],
      image: mobile, // Using available image as placeholder
      source_code_link: "https://github.com/thimar-app/thimar",
      live_demo_link: "#",
      year: "2024",
      highlights: [
        "Built task management platform with prayer-time scheduling",
        "Implemented real-time data sync using Supabase",
        "Developed habit-tracking visualizations with AI recommendations"
      ]
    },
    {
      name: "School Assessment Platform",
      description: "Comprehensive academic evaluation system with role-based access control and advanced grade reporting capabilities.",
      tags: [
        {
          name: "django-rest",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "jwt",
          color: "orange-text-gradient",
        },
      ],
      image: backend, // Using available image as placeholder
      source_code_link: "https://github.com/medbbh/school_assessment",
      live_demo_link: "#",
      year: "2024",
      highlights: [
        "Created role-based academic evaluation system",
        "Designed grade reporting tools with filtering capabilities",
        "Implemented secure authentication with JWT"
      ]
    },
  ];
  
  const experiences = [
    {
      title: "Team Leader - AI Productivity Platform",
      company_name: "SalamHack (International Hackathon)",
      icon: syskat,
      iconBg: "#383E56",
      date: "2025",
      points: [
        "Led 3-person team to develop 'Thimar' - AI-powered productivity platform with real-time analytics.",
        "Integrated AI-driven goal recommendations and habit tracking features.",
        "Won Supabase Launch Week 14 competition among international participants.",
        "Implemented real-time task management with prayer-time scheduling integration.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Next Technology",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      points: [
        "Developing and maintaining modern web applications using React, Node.js, and Python.",
        "Implementing responsive design and user-friendly interfaces for client projects.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        "Participating in code reviews and maintaining best practices for clean, scalable code.",
        "Working with modern development tools and CI/CD pipelines for efficient deployment.",
      ],
    },
    {
      title: "Sustainability Developer",
      company_name: "Ecothon 'Green Code of Moscow'",
      icon: una,
      iconBg: "#E6DEDD",
      date: "2024",
      points: [
        "Ranked 16th out of 29 teams in international sustainability competition.",
        "Developed innovative tool for endangered species identification using AI/ML.",
        "Collaborated with international team on environmental conservation solutions.",
        "Implemented data visualization for species tracking and monitoring.",
      ],
    },
    {
      title: "Full-Stack Web Developer",
      company_name: "Syskat Technology",
      icon: syskat,
      iconBg: "#383E56",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Developed and maintained web applications for Covid-19 vaccine management using Laravel, Angular and related technologies.",
        "Collaborated with development team to create high-quality healthcare solutions.",
        "Implemented responsive design and intuitive UI/UX interfaces.",
        "Added interactive charts and data visualizations to enhance user experience.",
        "Participated in code reviews and provided constructive feedback to improve code quality.",
      ],
    },

  ];

  const certifications = [
    {
      title: "Flutter Bootcamp",
      organization: "Smart w5 SA",
      date: "Dec 2023",
      description: "Comprehensive mobile app development training with Flutter framework"
    },
    {
      title: "Intermediate Git",
      organization: "DataCamp",
      date: "2024-2025",
      description: "Advanced version control and collaboration techniques"
    },
    {
      title: "Intermediate Python for Developers",
      organization: "DataCamp",
      date: "2024-2025",
      description: "Advanced Python programming concepts and best practices"
    },
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript", "SQL", "Dart"],
    frontend: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Django REST", "Spring Boot", "Laravel", "Node.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "Linux", "Postman", "Jira", "Twilio"],
  };
  
  export { services, technologies, projects, experiences, certifications, skills };