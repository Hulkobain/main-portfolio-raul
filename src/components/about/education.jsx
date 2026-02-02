import { AboutCard } from "@/components"

export function Education() {
  return (
    <AboutCard level={4} title="Education">
      <div className="mt-4 space-y-3 text-zinc-200 sm:space-y-4">
        <ul className="list-inside list-disc space-y-1 sm:space-y-2">
          <li>
            <span className="span-badge">SMR</span> (Technician in Microcomputer Systems and Networks): Mid-level vocational qualification in computer systems and networks.
          </li>
          <li>
            <span className="span-badge">DAW</span> (Technician in Web Application Development): Higher-level vocational qualification in web application development.
          </li>
        </ul>
        <p>
          I have earned specialized certifications in <span className="span-badge">Java and Spring Boot</span> for the backend and <span className="span-badge">Angular, React and Vue.js</span> for the frontend through recognized platforms such as Udemy, under the guidance of Professor Andrés Guzmán and Victor Robles.
        </p>
      </div>
    </AboutCard>
  )
}
