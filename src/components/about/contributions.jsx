import { Github } from "iconoir-react"

import { AboutCard } from "@/components"

export function Contributions() {
  return (
    <AboutCard level={4} title="Contributions">
      <div className="mt-4 space-y-4 text-zinc-200 sm:space-y-5">
        <div>
          <span className="span-badge">Full-Stack Developer - Java / Spring Boot / JSP</span>
          <p className="mt-2 text-zinc-300">
            General Foundation of the Polytechnic University of Madrid (FGUPM) | Sep 2024 - Present | Madrid (Hybrid)
          </p>
          <span className="span-badge mt-3 inline-block">Responsibilities</span>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-200 sm:space-y-2">
            <li>
              Backend Development: Design and implementation of robust features using Java and Spring Boot, prioritizing scalability and security.
            </li>
            <li>
              Data & APIs Management: Integration of relational databases with JPA/Hibernate and development of RESTful APIs for efficient communication between layers.
            </li>
            <li>
              Frontend: Creation of dynamic, responsive user interfaces with JSP, with a direct focus on User Experience (UX).
            </li>
            <li>
              Agile Methodology: Active participation in sprints, code reviews, and clean code best practices, using tools like Jira and Confluence for project management.
            </li>
          </ul>
        </div>

        <div>
          <span className="span-badge">Full-Stack Developer</span>
          <p className="mt-2 text-zinc-300">Mediacom360 | 2023 - 2024</p>
          <span className="span-badge mt-3 inline-block">Web Application Development</span>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-200 sm:space-y-2">
            <li>
              Backend: Spring Boot and Java implementation and management of server logic and integration with databases.
            </li>
            <li>
              Database Management: MySQL optimization of queries and transactions in SQL databases to improve system speed and efficiency.
            </li>
            <li>
              Frontend: React.js and Tailwind/Bootstrap for dynamic, responsive user interfaces.
            </li>
          </ul>
        </div>
      </div>
      <a
        className="group relative mt-3 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-100 px-5 py-2 font-bold text-black shadow-md duration-500 sm:mt-4"
        href="https://github.com/hulkobain"
        rel="noreferrer"
        target="_blank"
      >
        My activity
        <Github className="ml-1" height={25} strokeWidth={1.5} width={25} />
      </a>
    </AboutCard>
  )
}
