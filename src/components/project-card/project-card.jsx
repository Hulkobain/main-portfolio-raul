import Link from "next/link";
import { MapsArrowDiagonal } from "iconoir-react";
import { GitHubIcon } from "../icons/Icons";
import { CardSpotlight } from "@/components";

export function ProjectCard({ title, description, stack, github, demo, image }) {
  const previewImage = image || "/detail.webp";

  return (
    <CardSpotlight className="group rounded-xl border border-zinc-800/60 bg-zinc-900/40">
      <div className="flex w-full flex-col overflow-hidden rounded-xl">
        <div className="relative h-[180px] w-full overflow-hidden border-b border-zinc-800/60">
          <img
            alt={`${title} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            height={180}
            loading="lazy"
            src={previewImage}
            width={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
        </div>

        <div className="flex flex-col gap-2 p-2 pb-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
              {title}
            </h3>
          </div>

          <p className="line-clamp-3 text-pretty text-sm text-zinc-300">
            {description}
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-900/70 px-3 py-1 text-xs font-semibold text-zinc-200"
              >
                <img
                  alt=""
                  className="h-4 w-4"
                  height={16}
                  loading="lazy"
                  src={`/skillsImg/${item}.svg`}
                  width={16}
                />
                <span className="uppercase tracking-wide text-zinc-300">{item}</span>
              </span>
            ))}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            {demo && (
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-black transition hover:scale-[0.98]"
                href={demo}
                rel="noopener"
                target="_blank"
              >
                Live demo
                <MapsArrowDiagonal className="h-4 w-4" />
              </Link>
            )}
            {github && (
              <Link
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/70 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-emerald-400/70 hover:text-emerald-200"
                href={github}
                rel="noopener"
                target="_blank"
              >
                View code
                <GitHubIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}