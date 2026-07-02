"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components";
import { projects } from "@/data";

const filters = ["All", "Production", "Frontend", "Backend"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) =>
            project.categories.includes(activeFilter),
          ),
    [activeFilter],
  );

  return (
    <section className="section-shell reveal-section py-20" id="projects">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Products, systems and useful experiments.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-7 text-muted">
            A mix of production work, product interfaces and backend
            architecture — each shaped around a different kind of problem.
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              aria-pressed={activeFilter === filter}
              className={`min-h-10 rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
                activeFilter === filter
                  ? "border-ink bg-ink text-canvas"
                  : "border-line bg-surface/60 text-muted hover:border-brand/40 hover:text-ink"
              }`}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
          <span
            className="ml-1 font-mono text-[0.65rem] text-muted"
            aria-live="polite"
          >
            {String(filteredProjects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
