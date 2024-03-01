import { Github, Linkedin } from "iconoir-react"

import { cn } from "@/libs/utils"

const iconSize = 23
const stroke = "2.5"
const className = "text-gray-400 transition-all duration-150"

export const socialLinks = [
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/hulkobain",
    icon: (
      <Github
        className={cn(className, "hover:text-gray-300")}
        height={iconSize}
        name="GitHub"
        stroke={stroke}
        width={iconSize}
      />
    ),
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/raúl-romero-montoro",
    icon: (
      <Linkedin
        className={cn(className, "hover:text-blue-600")}
        height={iconSize}
        name="LinkedIn"
        stroke={stroke}
        width={iconSize}
      />
    ),
  },
]
