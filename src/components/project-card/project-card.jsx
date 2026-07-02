import { ArrowUpRight, CodeBrackets, MapsArrowDiagonal } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

import { CardSpotlight } from "@/components";
import { GitHubIcon } from "@/components/icons/Icons";
import { cn } from "@/libs/utils";

function ProjectVisual({ featured, image, stack, title, type }) {
  if (image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-raised",
          featured ? "min-h-72 lg:min-h-full" : "aspect-[16/10]",
        )}
      >
        <Image
          alt={`${title} website preview`}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#090d13] p-5 text-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,140,255,0.18),transparent_35%)]" />
      <div className="relative flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="size-2 rounded-full bg-[#ff7a90]" />
        <span className="size-2 rounded-full bg-[#f4c95d]" />
        <span className="size-2 rounded-full bg-[#5ee9b5]" />
        <span className="ml-auto font-mono text-[0.6rem] uppercase tracking-widest text-white/35">
          {type}
        </span>
      </div>
      <div className="relative mt-5 space-y-3 font-mono text-xs text-white/45">
        <p>
          <span className="text-[#5ee9b5]">project</span> {`{`}
        </p>
        <p className="pl-4">
          <span className="text-[#9b8cff]">name:</span> &quot;{title}&quot;,
        </p>
        <p className="pl-4">
          <span className="text-[#9b8cff]">stack:</span> [
          {stack.slice(0, 3).join(", ")}],
        </p>
        <p className="pl-4">
          <span className="text-[#9b8cff]">status:</span>{" "}
          &quot;maintainable&quot;
        </p>
        <p>{`}`}</p>
      </div>
      <CodeBrackets className="absolute bottom-5 right-5 size-8 text-white/15" />
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  image,
  linkLabel = "Live demo",
  domain,
  statusLabel,
  type,
  role,
  featured = false,
}) {
  return (
    <CardSpotlight
      className={cn(
        "glass-panel group rounded-[2rem] transition duration-500 hover:-translate-y-1 hover:border-brand/30 motion-reduce:transform-none",
        featured && "md:col-span-2",
      )}
    >
      <article
        className={cn(
          "h-full",
          featured && "grid lg:grid-cols-[1.22fr_0.78fr]",
        )}
      >
        <ProjectVisual
          featured={featured}
          image={image}
          stack={stack}
          title={title}
          type={type}
        />

        <div
          className={cn(
            "relative flex flex-col p-6 sm:p-7",
            featured && "lg:p-9",
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              {type}
            </span>
            {statusLabel && (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-brand">
                <span className="size-1.5 rounded-full bg-brand" />
                {statusLabel}
              </span>
            )}
          </div>

          <h3
            className={cn(
              "mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.035em]",
              featured && "sm:text-4xl",
            )}
          >
            {title}
          </h3>

          {domain && (
            <p className="mt-2 font-mono text-xs text-brand">{domain}</p>
          )}

          <p
            className={cn(
              "mt-4 text-sm leading-6 text-muted",
              featured && "sm:text-base sm:leading-7",
            )}
          >
            {description}
          </p>

          {role && (
            <div className="mt-5 border-l-2 border-brand/40 pl-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-muted">
                Contribution
              </p>
              <p className="mt-1 text-sm font-semibold">{role}</p>
            </div>
          )}

          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label={`${title} technology stack`}
          >
            {stack.map((item) => (
              <li key={item} className="tech-chip">
                <Image
                  alt=""
                  className="size-4 object-contain"
                  height={16}
                  src={`/skillsImg/${item}.svg`}
                  width={16}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            {demo && (
              <Link
                className="button-primary group/link"
                href={demo}
                rel="noopener noreferrer"
                target="_blank"
              >
                {linkLabel}
                <MapsArrowDiagonal className="size-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            )}
            {github && (
              <Link
                className="button-secondary"
                href={github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon h={18} w={18} />
                View source
                <ArrowUpRight className="size-3.5" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </CardSpotlight>
  );
}
