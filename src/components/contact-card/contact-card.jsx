import { Linkedin, Github, MailOut, Discord } from "iconoir-react"


export function ContactCard({ url, icon, title, subtitle }) {
  const icons = {
    github: <Github className="h-8 w-8 sm:h-10 sm:w-10" />,
    email: <MailOut className="h-8 w-8 sm:h-10 sm:w-10" />,
    linkedin: <Linkedin className="h-8 w-8 sm:h-10 sm:w-10" />,
    discord: <Discord className="h-8 w-8 sm:h-10 sm:w-10" />,
  }

  return (
    <a
      aria-label={`${title} ${subtitle}`}
      className="flex items-center space-x-3 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-4 shadow-md ring-2 ring-transparent backdrop-blur-md transition-all duration-200 ease-in hover:-translate-y-0.5 hover:ring-emerald-600 sm:p-5"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <span className="text-emerald-600 transition-all duration-150 hover:scale-110 hover:text-emerald-500">
        {icons[icon]}
      </span>
      <div className="flex flex-col space-y-[2px] sm:space-y-[3px]">
        <h5 className="text-sm font-semibold leading-none tracking-wide sm:text-base">{title}</h5>
        <span className="text-xs leading-none opacity-60 sm:text-sm md:text-base">{subtitle}</span>
      </div>
    </a>
  )
}
