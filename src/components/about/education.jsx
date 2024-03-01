import { AboutCard } from "@/components"

export function Education() {
  return (
    <AboutCard level={4} title="Education">
   <p className="mt-3 text-zinc-200">
      <span className="span-badge">- SMR</span> (Technician in Microcomputer Systems and Networks): This is a mid-level vocational qualification in computer systems and networks. <br />
      <span className="span-badge">- DAW</span> (Technician in Web Application Development): This is a higher-level vocational qualification in web application development.
      </p>
      <p className="mt-2 text-zinc-200">
        I have obtained valuable certifications in specialized{" "}
        <span className="span-badge">Java, SpringBoot, Angular and React</span> courses through recognized
        educational platforms such as Udemy, under the expert guidance of professor Andrés Guzmán.
      </p>
    </AboutCard>
  )
}
