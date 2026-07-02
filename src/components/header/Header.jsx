import { Github, Linkedin } from "iconoir-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import { headerLinks } from "@/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="glass-panel mx-auto flex max-w-5xl items-center justify-between gap-2 overflow-hidden rounded-2xl px-2.5 py-2.5 sm:gap-3 sm:rounded-full sm:px-4">
        <Link
          aria-label="Raúl Romero — home"
          className="group flex shrink-0 items-center gap-2 rounded-full"
          href="/"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-canvas transition group-hover:rotate-[-6deg] motion-reduce:transform-none">
            RR
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight lg:block">
            Raúl Romero
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="min-w-0 flex-1 overflow-x-auto"
        >
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {headerLinks.map((link) => (
              <li
                key={link.title}
                className={link.title === "Stack" ? "hidden sm:block" : ""}
              >
                <Link
                  className="block rounded-full px-2.5 py-2 text-xs font-semibold text-muted transition hover:bg-raised/70 hover:text-ink sm:px-3 sm:text-sm"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <Link
            aria-label="GitHub profile"
            className="hidden size-10 items-center justify-center rounded-full text-muted transition hover:bg-raised hover:text-ink sm:inline-flex"
            href="https://github.com/hulkobain"
            rel="noreferrer"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
          <Link
            aria-label="LinkedIn profile"
            className="hidden size-10 items-center justify-center rounded-full text-muted transition hover:bg-raised hover:text-ink md:inline-flex"
            href="https://www.linkedin.com/in/raúl-romero-montoro"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin className="size-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
