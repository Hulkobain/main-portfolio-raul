import Link from "next/link";
import { Github, Linkedin } from "iconoir-react";

import { cn } from "@/libs/utils";
import { headerLinks } from "@/data";

export function Header() {
  const iconSize = 23;
  const stroke = "2.5";
  const className = "text-gray-400 transition-all duration-150";

  const socialLinks = [
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
  ];

  return (
    <div className="top-0 z-40 w-full bg-zinc-900/50 py-3 font-medium backdrop-blur md:sticky">
      <div className="mx-auto max-w-6xl p-4 md:p-0">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <Link aria-label="logo redirection icon" className="cursor-pointer rounded-lg" href="/">
            <img
              alt="Raul logo"
              className="h-12 w-12 rounded-lg border border-zinc-700 transition-all duration-300 hover:ring-2 hover:ring-green-500 md:h-10 md:w-10"
              height={35}
              src="https://github.com/hulkobain.png"
              width={35}
            />
            <span className="sr-only">Raul</span>
          </Link>
          <div className="mt-3 flex flex-col items-center justify-center space-y-3 md:mt-0 md:flex-row md:space-x-7 md:space-y-0">
            <div className="flex flex-row space-x-7">
              {headerLinks.map((link) => (
                link.url && (
                  <Link
                    key={link.title}
                    className="text-sm text-gray-400 transition-all duration-150 hover:text-gray-100"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center space-x-5 border-neutral-700 md:border-l md:pl-6">
                {socialLinks.map((link) => (
                  link.href && (
                    <Link key={link.id} href={link.href}>
                      {link.icon}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
