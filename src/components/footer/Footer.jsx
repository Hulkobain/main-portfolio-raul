import { ArrowUp, Code, Github, Linkedin } from "iconoir-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-shell pb-6 pt-12">
      <div className="border-t border-line/70 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div>
            <Link
              className="font-display text-lg font-semibold tracking-tight"
              href="/"
            >
              Raúl Romero
            </Link>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Full-stack developer building useful digital products from
              interface to infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand/40 hover:text-ink"
              href="https://github.com/hulkobain"
              rel="noreferrer"
              target="_blank"
            >
              <Github className="size-4" />
            </Link>
            <Link
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand/40 hover:text-ink"
              href="https://www.linkedin.com/in/raúl-romero-montoro"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin className="size-4" />
            </Link>
            <a
              aria-label="Back to top"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand/40 hover:text-ink"
              href="#main-content"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>

          <p className="flex items-center gap-2 font-mono text-[0.65rem] text-muted sm:col-span-2 lg:col-span-1">
            <Code className="size-4 text-brand" />
            Next.js · Tailwind · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
