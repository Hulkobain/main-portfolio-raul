import { AboutCard } from "@/components"

export function MoreAboutMe() {
  return (
    <AboutCard level={4} title="More about me">
       <ul className="mt-3 list-inside list-disc space-y-1 tracking-tighter text-zinc-300 ">
        <li>
        <span className="span-badge">Proactive, responsible and committed</span> with my
          work.
        </li>
        <li>
        <span className="span-badge">Rapid learning:</span> I learn quickly and adapt easily to new environments and technologies.
        </li>
        <li>
        <span className="span-badge">Teamwork: </span> I am an effective team player who collaborates effectively with others to achieve common goals.
        </li>
        <li>
        <span className="span-badge">Creativity and determination: </span> I have the ability to find creative solutions to complex problems and am motivated to achieve my goals.</li>
        <li>Native Spanish, intermediate level of English.</li>
        <li>I like playing sports, trekking and video games.</li>
      </ul>
    </AboutCard>
  )
}
