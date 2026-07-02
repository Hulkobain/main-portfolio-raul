export const STACK_GROUPS = [
  {
    title: "Interface",
    description:
      "Accessible, responsive product interfaces with a strong eye for detail.",
    skills: [
      { title: "React", logo: "react" },
      { title: "TypeScript", logo: "typescript" },
      { title: "Next.js", logo: "nextjs" },
      { title: "Tailwind CSS", logo: "tailwind" },
      { title: "Vite", logo: "vitejs" },
    ],
  },
  {
    title: "Backend",
    description:
      "Secure services and maintainable domain logic built to evolve.",
    skills: [
      { title: "Java", logo: "java" },
      { title: "Spring", logo: "spring" },
      { title: "Spring Boot", logo: "springboot" },
      { title: "Node.js", logo: "node" },
    ],
  },
  {
    title: "Data & delivery",
    description:
      "Reliable data flows, messaging and reproducible delivery environments.",
    skills: [
      { title: "MySQL", logo: "mysql" },
      { title: "PostgreSQL", logo: "postgresql" },
      { title: "Kafka", logo: "kafka" },
      { title: "Docker", logo: "docker" },
      { title: "Git", logo: "git" },
    ],
  },
];

export const SKILLS = STACK_GROUPS.flatMap((group) => group.skills);
