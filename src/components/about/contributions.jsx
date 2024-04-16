import { Github } from "iconoir-react"

import { AboutCard } from "@/components"

export function Contributions() {
  return (
    <AboutCard level={4} title="Contributions">
         <p className="mt-3 leading-snug text-zinc-200">
        <span className="span-badge">Full-Stack Developer</span> <br /> Mediacom360 | 2023 - 2024 <br />


        <span className="span-badge">Web Application Development</span> <br />
          - Backend: Spring Boot and Java <br />
          - Database Management: MySQL <br />
          - Frontend: React.JS and tailwind/bootstrap <br />
          - User Interface: Intuitive and responsive
      </p>
      <a
        className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-100 px-5 py-2 font-bold text-black shadow-md duration-500"
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
