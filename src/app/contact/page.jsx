import { ContactCard, Heading } from "@/components"
import { contact } from "@/data"

export const metadata = {
  title: "Raul Romero | Contact",
  description:
    "Welcome to my programming portfolio, where you can find projects developed in React, NodeJS, TypeScript, Tailwind CSS and other technologies. Contact me for any project, idea or just to say hello. I am available for collaborations and interesting discussions.",
}

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white sm:px-0">
      <div className="animate-fade-right">
        <span className="inline-block text-xl font-semibold leading-tight text-emerald-400">
          Let's talk
        </span>
        <Heading level={2}>CONTACT ME</Heading>

        <p className="mt-1 leading-relaxed text-gray-200">
        Thank you for visiting my portfolio. I am glad you took the time to learn about my work. <br />


        If you are interested in learning more about my work or if you would like to contact me to discuss a potential project, please do not hesitate.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-4xl animate-fade-up grid-cols-1 gap-5 md:grid-cols-2">
        {contact.map(({ id, url, icon, title, subtitle }) => (
          <ContactCard key={id} icon={icon} subtitle={subtitle} title={title} url={url} />
        ))}
      </div>
    </section>
  )
}
