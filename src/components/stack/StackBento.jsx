import { STACK_GROUPS } from "@/constants";
import Image from "next/image";

export function StackBento() {
  return (
    <section className="section-shell reveal-section py-20" id="stack">
      <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow">Tools with a purpose</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A stack shaped around the product.
          </h2>
        </div>
        <p className="max-w-xl text-pretty leading-7 text-muted md:justify-self-end">
          I choose technology for clarity, maintainability and delivery — from
          the first interface decision to the service running in production.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {STACK_GROUPS.map((group, groupIndex) => (
          <article
            key={group.title}
            className={`glass-panel group relative overflow-hidden rounded-[2rem] p-6 sm:p-7 ${
              groupIndex === 0 ? "md:col-span-4" : "md:col-span-3"
            }`}
          >
            <span className="absolute right-6 top-5 font-mono text-xs text-muted/50">
              0{groupIndex + 1}
            </span>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {group.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              {group.description}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.title}
                  className="flex items-center gap-2.5 rounded-xl border border-line/60 bg-canvas/55 px-3 py-2 text-sm font-semibold transition duration-300 group-hover:border-brand/20"
                >
                  <Image
                    alt=""
                    className="size-5 object-contain"
                    height={20}
                    src={`/skillsImg/${skill.logo}.svg`}
                    width={20}
                  />
                  {skill.title}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <aside className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-canvas md:col-span-4">
          <div className="grid h-full gap-5 md:content-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-canvas/55">
                Engineering principle
              </p>
              <p className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                The best stack is the one that makes the product easier to use,
                operate and evolve.
              </p>
            </div>
            <span className="font-mono text-xs text-canvas/55">
              UI → API → DATA → DELIVERY
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
