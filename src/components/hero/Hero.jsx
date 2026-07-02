import {
  ArrowUpRight,
  CheckCircle,
  Code,
  Database,
  Download,
  Server,
} from "iconoir-react";
import Link from "next/link";

const capabilities = [
  { icon: Code, label: "Product interfaces", detail: "React · TypeScript" },
  { icon: Server, label: "Backend systems", detail: "Java · Spring Boot" },
  { icon: Database, label: "Data & delivery", detail: "SQL · Kafka · Docker" },
];

export function Hero() {
  return (
    <section className="section-shell pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 animate-fade-up lg:col-span-7">
          <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="eyebrow">Full-stack developer</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="size-1.5 rounded-full bg-brand motion-safe:animate-pulse-soft" />
              Open to meaningful projects
            </span>
          </div>

          <h1 className="max-w-4xl break-words font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]">
            I build digital products ready for
            <span className="text-gradient"> production.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
            I&apos;m Raúl Romero, a full-stack developer turning complex
            requirements into fast interfaces and reliable services. I care
            about the details users notice and the architecture they don&apos;t.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary group" href="#projects">
              Explore selected work
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link className="button-secondary" href="/cv.pdf" target="_blank">
              <Download className="size-4" />
              Download CV
            </Link>
          </div>
        </div>

        <div className="grid min-w-0 animate-fade gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          <div className="glass-panel rounded-[2rem] p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  Current focus
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  Useful software, built with care.
                </p>
              </div>
              <CheckCircle className="size-6 shrink-0 text-brand" />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Production-ready web experiences, clean architecture and pragmatic
              engineering decisions.
            </p>
          </div>

          {capabilities.map(({ icon: Icon, label, detail }, index) => (
            <div
              key={label}
              className={`glass-panel group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:rotate-[-4deg] motion-reduce:transform-none">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold">{label}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
