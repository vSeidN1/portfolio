import avatar from "../assets/seid's avatar.png";
import medasport from "../assets/medasport.png";
import abisat from "../assets/abisat.jpg";

export const portfolioData = {
  personalInfo: {
    name: "Seid Nur",
    title: "Web Developer",
    subtitle: "Web developer based in Addis Ababa",
    shortBio:
      "I build web applications with Vue.js, Node.js, and MySQL, from the first page a user sees to the data behind it.",
    avatar: avatar,
    resumeUrl: "/CV Resume.pdf",
    socials: {
      github: "https://github.com/vSeidN1",
      linkedin: "https://linkedin.com/in/vseidn",
      twitter: "https://twitter.com/vSeidN",
      email: "vSeidN1@gmail.com",
      location: "Addis Ababa, Ethiopia",
    },
  },

  stats: [
    {
      value: "2026",
      label: "Graduate",
      description: "B.Sc. in Software Engineering",
    },
    {
      value: "1",
      label: "Internship",
      description: "Backend development at Devlogics Technology",
    },
    {
      value: "4",
      label: "Projects",
      description: "Full-stack websites and backend projects",
    },

    {
      value: "5+",
      label: "Technologies",
      description:
        "HTML, CSS, JS, Vue.js, Node.js, MySQL, Tailwind CSS, Bootstrap, and more",
    },
  ],

  skills: {
    frontend: [
      { name: "HTML5 / CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Vue 3", level: 75 },
      { name: "React", level: 50 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 80 },
    ],
    backend: [{ name: "Node.js / Express", level: 75 }],
    database: [
      { name: "MySQL", level: 80 },
      // { name: "MongoDB", level: "Next Destination" },
    ],
    toolsDevops: [
      { name: "CI/CD (GitHub Actions)", level: 70 },
      { name: "Git & Agile Workflow", level: 75 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Meda Sport Ethiopia",
      description:
        "A place for Ethiopian sports fans to follow local events, league history, news, and match highlights.",
      image: medasport,
      tech: [
        "Vue.js",
        "Bootstrap",
        "Node.js + Express",
        "MySQL",
        "Animate.css",
      ],
      category: "Full-Stack",
      demoUrl: "https://meda-sportet.onrender.com",
      githubUrl: "https://github.com/vSeidN1/meda-sportET",
    },
    {
      id: 2,
      title: "Abisat Info",
      description:
        "A satellite resource site with receiver software, loaders, channel information, and DTH service details.",
      image: abisat,
      tech: [
        "Vue.js",
        "Bootstrap",
        "Node.js + Express",
        "MySQL",
        "Animate.css",
        "Font Awesome",
      ],
      category: "Full-Stack",
      demoUrl: "https://abisat-info.onrender.com",
      githubUrl: "https://github.com/vSeidN1/Abisat-info",
    },
    {
      id: 3,
      title: "Mini Delivery Tracker",
      description:
        "A delivery tracking system for organizations to manage requests and follow delivery status across web and mobile.",
      image:
        "https://play-lh.googleusercontent.com/kfYP3QKpWVujIyQaehUoXP4oGByYtejf5OpMEHgzYOrvfmbtuY4y2rLFhPIc63tlGStVxMoHAXSOuBNjol9-AA=w240-h480-rw",
      tech: ["Flutter", "Node.js + Express", "MySQL"],
      category: "Full-Stack",
      githubUrl: "https://github.com/kalebme/Mini-Delivery-Tracker",
    },
    {
      id: 4,
      title: "University Resource sharing & Exchange Platform",
      description:
        "A university community platform for sharing and exchanging study materials, electronics, clothing, and other useful items.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind CSS", "Node.js + Express", "MySQL", "MongoDB"],
      category: "Full-Stack",
      githubUrl: "https://github.com/vSeidN1/Rs-ep",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Backend developer",
      company: "Devlogics Technology",
      location: "Jigjiga, Ethiopia",
      period: "March 2025 - June 2025",
      description:
        "Works for the company as Backend developer with Node.js and collaborates with frontend developers.",
      tech: ["Node.js", "MySQL"],
    },
    {
      id: 2,
      role: "Backend developer",
      company: "For Final year Project",
      location: "Jigjiga University, Jigjiga, Ethiopia",
      period: "Feb 2026 - Apr 2026",
      description:
        "works in final year and graduation project as backend developer with Node.js and MySQL.",
      tech: ["Node.js", "MySQL"],
    },
    {
      id: 3,
      role: "Full-Stack Developer",
      company: "Remote",
      location: "Addis Ababa, Ethiopia",
      period: "Jun 2025 - Jul 2025",
      description:
        "Worked remotely on a satellite information platform, using Vue.js, Node.js, and MySQL.",
      tech: ["Vue.js", "Node.js", "MySQL"],
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.S. in Software Engineering",
      school: "Jigjiga University",
      period: "2022 - 2026",
      details:
        "Specialized in Software Engineering. Core coursework in web development, Database Systems, and Web Security.",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Udacity Certificate",
      issuer: "Udacity",
      year: "2024",
    },
    {
      id: 2,
      name: "E-learning Certificate",
      issuer: "e-learning program from MOE",
      year: "2024",
    },
  ],

  // testimonials: [
  //   {
  //     id: 1,
  //     name: "Sophia Vance",
  //     role: "CEO & Co-founder",
  //     company: "NovaTech",
  //     quote:
  //       "Alex is a rare software engineer who pairs exceptional coding skills with an eye for UI/UX. The analytics platform he built is both robust and beautifully designed.",
  //     avatar:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Marcus Chen",
  //     role: "VP of Product",
  //     company: "Aether Retail",
  //     quote:
  //       "Our website performance was struggling. Alex re-architected our storefront with Nuxt 3 and optimized our Core Web Vitals, resulting in a 25% increase in conversion rates.",
  //     avatar:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "Elena Rostova",
  //     role: "CTO",
  //     company: "EchoGroup",
  //     quote:
  //       "We hired Alex to lead our real-time messaging project. His knowledge of WebSockets, caching layers, and database optimization kept our launch stable and bug-free.",
  //     avatar:
  //       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  //   },
  // ],
};
