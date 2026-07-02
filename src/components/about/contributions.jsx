import { ArrowUpRight, Github } from "iconoir-react";

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Full-stack Developer",
    company: "FGUPM · Madrid · Hybrid",
    summary:
      "Building and evolving web applications with Java, Spring Boot and JSP in a collaborative agile environment.",
    points: [
      "Robust backend features, REST APIs and security-minded implementation.",
      "Relational data access with JPA and Hibernate.",
      "Responsive interfaces and close attention to practical user experience.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Full-stack Developer",
    company: "Mediacom360",
    summary:
      "Delivered web application features across React interfaces, Spring services and MySQL data flows.",
    points: [
      "Server-side logic and database integrations with Java and Spring Boot.",
      "Query and transaction optimization in MySQL.",
      "Responsive frontend implementation with React and utility-first CSS.",
    ],
  },
];

export function Contributions() {
  return (
    <section className="glass-panel rounded-[2rem] p-6 sm:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Building across the stack.
          </h2>
        </div>
        <a
          className="button-secondary group"
          href="https://github.com/hulkobain"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-4" />
          GitHub activity
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <ol className="mt-10 border-l border-line pl-6 sm:pl-10">
        {experience.map((item) => (
          <li key={item.company} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[1.9rem] top-1 size-3 rounded-full border-4 border-canvas bg-brand sm:-left-[2.9rem]" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
              {item.period}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted">
              {item.company}
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              {item.summary}
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted md:grid-cols-3">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="rounded-xl bg-raised/55 p-4 leading-6"
                >
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
