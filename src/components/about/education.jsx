import { AboutCard } from "@/components";

const education = [
  {
    short: "DAW",
    title: "Web Application Development",
    detail:
      "Higher vocational qualification focused on modern web application development.",
  },
  {
    short: "SMR",
    title: "Computer Systems & Networks",
    detail:
      "Technical foundation in systems, networks, hardware and infrastructure.",
  },
];

export function Education() {
  return (
    <AboutCard eyebrow="Foundation" level={3} title="Education">
      <ol className="mt-7 space-y-5">
        {education.map((item) => (
          <li key={item.short} className="grid grid-cols-[auto_1fr] gap-4">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 font-mono text-xs font-bold text-brand">
              {item.short}
            </span>
            <div>
              <h4 className="font-display font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-7 border-t border-line/70 pt-5 text-sm leading-6 text-muted">
        Continuous specialized training in Java, Spring Boot and modern frontend
        frameworks, including courses by Andrés Guzmán and Víctor Robles.
      </p>
    </AboutCard>
  );
}
