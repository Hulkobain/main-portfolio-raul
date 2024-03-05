export const contact = [
  {
    id: crypto.randomUUID(),
    url: "https://github.com/hulkobain",
    icon: "github",
    title: "GitHub | @hulkobain",
    subtitle: "View my projects and contributions.",
  },
  {
    id: crypto.randomUUID(),
    url: "https://www.linkedin.com/in/raúl-romero-montoro",
    icon: "linkedin",
    title: "LinkedIn | Raúl Romero",
    subtitle: "Let's connect and talk about life",
  },
  {
    id: crypto.randomUUID(),
    url: "mailto:raul.romero.6696@gmail.com",
    icon: "email",
    title: "Gmail | raul.romero.6696@gmail.com",
    subtitle: "Send me an email",
  },
  {
    id: crypto.randomUUID(),
    url: "https://discordapp.com/users/hulkobain#2505",
    icon: "discord",
    title: "Discord | hulkobain#2505",
    subtitle: "Let's play or talk on Discord",
  },
]

export const projects = [
  {
    id: 1,
    title: "Manage-Expenses",
    description:
      "📝​ Web application that serves to keep track of your daily expenses",
    image: "/img/bolivar.webp",
    stack: ["react", "typescript", "vitejs", "tailwind"],
    github: "https://github.com/ivanosquis10/bolivarium-conversor",
    demo: "https://manage-expenses-main.vercel.app/",
    change: true,
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "☀️​ Weather application to check the weather in your city",
    image: "/img/budget.webp",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/App-tiempo",
    demo: "https://app-tiempo.vercel.app/",
    change: true,
  },
  {
    id: 4,
    title: "CARD 3D",
    description:
      "🤖​ Application that shows cards in 3D :)",
    image: "/img/devquiz.webp",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/Cartas-3D",
    demo: "https://card3d.vercel.app/",
  },
  {
    id: 5,
    title: "Intro Neftlix",
    description:
      "​​🎞️​ Application that shows the Netflix intro",
    stack: ["js", "html", "css"],
    github: "https://github.com/Hulkobain/Intro-neftlix",
    demo: "https://intro-neftlix.vercel.app/",
  },
]

export * from "./header-links"

export * from "./social-links"
