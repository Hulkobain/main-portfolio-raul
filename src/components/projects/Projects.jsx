"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components"
import { projects } from "@/data"

export function Projects() {
  const [activeTag, setActiveTag] = useState("All")
  const tags = useMemo(() => {
    const unique = new Set(projects.flatMap((project) => project.stack))
    return ["All", ...Array.from(unique)]
  }, [])

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(activeTag))

  return (
    <section className="my-16 animate-fade-up px-2 md:px-1" id="projects">
      <div className="mb-6 flex flex-col gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Selected work
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-pretty text-sm text-zinc-400 md:text-base">
            Browse by tech stack and explore live demos or repositories.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition md:text-sm ${
                activeTag === tag
                  ? "border-emerald-400/70 bg-emerald-400/10 text-emerald-200"
                  : "border-zinc-800/70 bg-zinc-900/40 text-zinc-300 hover:border-emerald-400/50"
              }`}
              onClick={() => setActiveTag(tag)}
              type="button"
            >
              {tag}
            </button>
          ))}
          <span className="ml-auto text-xs text-zinc-500 md:text-sm">
            {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <div className="relative grid gap-8 md:grid-cols-2 md:auto-rows-fr">
        {filteredProjects.map(
          ({ id, title, description, stack, github, demo, image }) => (
          <ProjectCard
            key={id}
            demo={demo}
            description={description}
            github={github}
            image={image}
            stack={stack}
            title={title}
          />
        ))}
      </div>
    </section>
  )
}
