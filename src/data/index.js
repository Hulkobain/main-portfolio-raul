export const contact = [
  {
    id: "github",
    url: "https://github.com/hulkobain",
    icon: "github",
    title: "GitHub",
    subtitle: "Code, experiments and open repositories",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/raúl-romero-montoro",
    icon: "linkedin",
    title: "LinkedIn",
    subtitle: "Professional profile and experience",
  },
  {
    id: "email",
    url: "mailto:raul.romero.6696@gmail.com",
    icon: "email",
    title: "Email",
    subtitle: "raul.romero.6696@gmail.com",
  },
  {
    id: "discord",
    url: "https://discordapp.com/users/hulkobain#2505",
    icon: "discord",
    title: "Discord",
    subtitle: "hulkobain#2505",
  },
];

export const projects = [
  {
    id: 8,
    title: "Noelia Montoro Psychology",
    description:
      "A calm, accessible professional website created for a health psychologist and Gestalt therapist, designed to explain her services clearly and turn visits into real conversations.",
    image: "/img/noelia-montoro-current.png",
    stack: ["react", "typescript", "vitejs", "tailwind"],
    github: "https://github.com/Hulkobain/my-psychology-page",
    demo: "https://noeliamontoro.es/",
    linkLabel: "Visit website",
    domain: "noeliamontoro.es",
    status: "production",
    statusLabel: "Live in production",
    type: "Client project",
    role: "Design implementation · Frontend · Deployment",
    categories: ["Production", "Frontend"],
    featured: true,
  },
  {
    id: 1,
    title: "Manage Expenses",
    description:
      "A focused web application for tracking everyday expenses with a fast, typed and responsive interface.",
    image: "/img/budget.webp",
    stack: ["react", "typescript", "vitejs", "tailwind"],
    github: "https://github.com/Hulkobain/manage-expenses-main",
    demo: "https://manage-expenses-main.vercel.app/",
    type: "Product build",
    categories: ["Frontend"],
  },
  {
    id: 2,
    title: "Microservices Hotel",
    description:
      "A resilient hotel platform designed as independent Spring services with asynchronous communication and containerized infrastructure.",
    stack: ["java", "spring", "kafka", "mysql", "docker"],
    github: "https://github.com/Hulkobain/microservices-hotel",
    type: "Backend architecture",
    categories: ["Backend"],
  },
  {
    id: 3,
    title: "REST API & JWT",
    description:
      "A secure Spring Boot REST API with JWT authentication and encrypted credentials, structured around clear security boundaries.",
    stack: ["java", "springboot"],
    github: "https://github.com/Hulkobain/JWT-APIREST",
    type: "API security",
    categories: ["Backend"],
  },
  {
    id: 4,
    title: "Quiz Resolve",
    description:
      "An interactive developer quiz with typed state, fluid navigation and a responsive interface built for quick feedback.",
    image: "/img/devquiz.webp",
    stack: ["vitejs", "typescript", "tailwind", "react-router-dom"],
    github: "https://github.com/hulkobain/quiz-main",
    demo: "https://solve-quiz.vercel.app/",
    type: "Interactive experience",
    categories: ["Frontend"],
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A lightweight weather experience for checking local conditions through a direct and responsive interface.",
    image: "/img/weather.svg",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/App-tiempo",
    demo: "https://app-tiempo.vercel.app/",
    type: "Frontend utility",
    categories: ["Frontend"],
  },
  {
    id: 6,
    title: "Card 3D",
    description:
      "An interface experiment exploring depth, perspective and tactile card interactions with native web technologies.",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/Cartas-3D",
    demo: "https://card3d.vercel.app/",
    type: "Creative experiment",
    categories: ["Frontend"],
  },
  {
    id: 7,
    title: "Netflix Intro",
    description:
      "A motion study recreating the recognizable Netflix intro with HTML, CSS and JavaScript.",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/Intro-neftlix",
    demo: "https://intro-neftlix.vercel.app/",
    type: "Motion experiment",
    categories: ["Frontend"],
  },
];

export * from "./header-links";
export * from "./social-links";
