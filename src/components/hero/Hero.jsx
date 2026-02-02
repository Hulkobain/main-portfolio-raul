import Link from "next/link";
import { FastArrowRight } from "iconoir-react";

export function Hero() {
  const href = "/contact"; // Definimos el href explícitamente

  return (
    <section className="flex animate-fade items-center justify-between">
      <div className="relative flex max-w-5xl flex-1 flex-col items-start gap-3 px-4 py-12 md:px-0">
        <img
          alt="detail icon"
          className="-bottom-16 -right-80 -z-10 hidden brightness-50 md:absolute md:block"
          height={500}
          src="/detail.webp"
          width={500}
        />
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Hi, I&apos;m Raúl Romero</p>
        <h1 className="text-pretty text-4xl font-extrabold leading-tight md:text-6xl">
          Full‑stack developer focused on building
          <span className="text-emerald-300"> fast</span>,
          <span className="text-pink-300"> accessible</span> web products.
        </h1>

        <p className="max-w-2xl text-pretty text-base text-zinc-300 md:text-lg">
          I ship production‑ready interfaces and APIs with clean architecture,
          performance in mind, and a strong attention to detail.
        </p>

        <ul className="mt-2 grid w-full max-w-2xl gap-2 text-sm text-zinc-300 md:grid-cols-3">
          <li className="rounded-md border border-zinc-800/70 bg-zinc-900/40 px-3 py-2">
            UI systems & design‑dev handoff
          </li>
          <li className="rounded-md border border-zinc-800/70 bg-zinc-900/40 px-3 py-2">
            Performance & SEO‑friendly builds
          </li>
          <li className="rounded-md border border-zinc-800/70 bg-zinc-900/40 px-3 py-2">
            Scalable backend services
          </li>
        </ul>

        <div className="relative mt-4 flex w-full flex-col gap-3 md:ml-1 md:w-auto md:flex-row">
          <Link
            className="focus:ring-zinc-emerald-400 group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-100 px-5 py-2 font-bold text-black duration-300 hover:scale-[0.98] hover:ring-4 hover:ring-emerald-400 focus:outline-none focus:ring-2 md:w-auto"
            href="#projects"
          >
            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              View projects
            </span>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <FastArrowRight />
            </div>
          </Link>
          {href && (
            <Link
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-700/60 bg-transparent px-5 py-2 font-semibold text-white transition hover:border-emerald-400/70 hover:text-emerald-200 md:w-auto"
              href={href}
            >
              Let&apos;s talk
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}