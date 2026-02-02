import {
  HeaderAbout,
  Education,
  Skills,
  Contributions,
  MoreAboutMe,
  FooterAbout,
} from "@/components"

export const metadata = {
  title: "Raul Romero | About me",
  description:
    "Welcome to my programming portfolio, where you can find projects developed in React, TypeScript, NodeJS, Tailwind CSS and other technologies. I am a passionate developer with experience in different technologies. Learn more about me, my background and my skills in web development and interface design.",
}

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white sm:px-0 sm:py-10">
      <div className="animate-fade-right">
        <HeaderAbout />
      </div>
      <div className="mt-6 grid animate-fade-up grid-cols-1 gap-4 sm:mt-7 sm:gap-6 md:grid-cols-2 md:auto-rows-fr">
        <Education />
        <Skills />
        <Contributions />
        <MoreAboutMe />
        <FooterAbout />
      </div>
    </section>
  )
}
