import { Heading } from "@/components"

export function HeaderAbout() {
  return (
    <div>
      <span className="inline-block text-xl font-semibold text-emerald-400">¿Who am I?</span>
      <Heading level={2}>About me</Heading>

      <p className="mt-3 leading-relaxed text-gray-300 ">
        Hi! I'm Raul Romero, a passionate <span className="span-badge">FULL-STACK DEVELOPER</span>{" "}
        with experience in both front-end and back-end technologies. 
        I focus on building robust and functional web applications using tools like Springboot, Java, React, Angular, NodeJS and Typescript.
      </p>
    </div>
  )
}
