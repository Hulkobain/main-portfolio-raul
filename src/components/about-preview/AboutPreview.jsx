import { ArrowUpRight } from "iconoir-react";
import Link from "next/link";

const principles = [
  ["01", "Clarity", "Interfaces and systems that explain themselves."],
  ["02", "Performance", "Fast experiences treated as part of the product."],
  ["03", "Maintainability", "Code that remains understandable after launch."],
];

export function AboutPreview() {
  return (
    <section className="section-shell reveal-section py-20">
      <div className="grid gap-4 lg:grid-cols-12">
        <article className="glass-panel rounded-[2rem] p-7 sm:p-10 lg:col-span-7">
          <p className="eyebrow">How I work</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Engineering with product awareness.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-7 text-muted">
            My background spans interface development, APIs and data. That
            full-stack perspective helps me make better trade-offs and keep the
            experience coherent from browser to database.
          </p>
          <Link className="button-secondary group mt-8" href="/about">
            More about my approach
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </article>

        <aside className="rounded-[2rem] bg-brand-soft p-7 sm:p-8 lg:col-span-5">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Now</p>
            <span className="rounded-full border border-brand/25 bg-brand/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-brand">
              Madrid · 2026
            </span>
          </div>
          <p className="mt-5 font-display text-2xl font-semibold tracking-tight">
            Building full-stack products and sharpening system design decisions.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Currently working across Java, Spring Boot and modern frontend
            systems while exploring better ways to connect UX quality with
            backend reliability.
          </p>
        </aside>

        <div className="grid gap-4 lg:col-span-12 lg:grid-cols-3">
          {principles.map(([number, title, description]) => (
            <article key={title} className="glass-panel rounded-2xl p-6">
              <span className="font-mono text-xs text-brand">{number}</span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
