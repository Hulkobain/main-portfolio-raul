import { Code, Database, Server } from "iconoir-react";

const focusAreas = [
  { icon: Code, label: "Interfaces", value: "React & TypeScript" },
  { icon: Server, label: "Services", value: "Java & Spring Boot" },
  { icon: Database, label: "Systems", value: "SQL, Kafka & Docker" },
];

export function HeaderAbout() {
  return (
    <header className="grid gap-6 pb-12 pt-10 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-20">
      <div className="lg:col-span-8">
        <p className="eyebrow">About me</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
          Full-stack perspective, product-minded execution.
        </h1>
        <p className="mt-7 max-w-3xl text-pretty text-base leading-8 text-muted sm:text-lg">
          I&apos;m Raúl Romero, a developer based in Madrid. I build robust web
          applications across frontend and backend, balancing user experience,
          maintainable code and reliable delivery.
        </p>
      </div>

      <aside className="glass-panel rounded-[2rem] p-5 lg:col-span-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
          Working range
        </p>
        <ul className="mt-4 space-y-3">
          {focusAreas.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl bg-raised/60 p-3"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
