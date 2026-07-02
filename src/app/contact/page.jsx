import { ArrowUpRight, Mail } from "iconoir-react";

import { ContactCard } from "@/components";
import { contact } from "@/data";

export const metadata = {
  title: "Contact",
  description:
    "Contact Raúl Romero to discuss a web product, collaboration or full-stack development project.",
};

export default function ContactPage() {
  return (
    <main className="section-shell pb-20 pt-12 sm:pt-20" id="main-content">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <header className="lg:col-span-8">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Let&apos;s make the next idea useful.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
            Share the problem, the context and where you want to go. I&apos;m
            happy to talk about product interfaces, backend systems or the space
            between both.
          </p>
        </header>

        <aside className="rounded-[2rem] bg-ink p-6 font-mono text-sm text-canvas lg:col-span-4">
          <div className="flex gap-1.5 border-b border-canvas/10 pb-4">
            <span className="size-2 rounded-full bg-[#ff7a90]" />
            <span className="size-2 rounded-full bg-[#f4c95d]" />
            <span className="size-2 rounded-full bg-brand" />
          </div>
          <div className="mt-5 space-y-2 text-canvas/55">
            <p>
              <span className="text-brand">$</span> start_conversation
            </p>
            <p>
              status: <span className="text-brand">available</span>
            </p>
            <p>location: Madrid</p>
            <p>mode: remote / hybrid</p>
          </div>
          <a
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 font-sans text-sm font-bold text-[#06241b] transition hover:-translate-y-0.5 motion-reduce:transform-none"
            href="mailto:raul.romero.6696@gmail.com"
          >
            <Mail className="size-4" />
            Email directly
            <ArrowUpRight className="size-4" />
          </a>
        </aside>
      </div>

      <section className="mt-16" aria-labelledby="contact-options">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Choose a channel</p>
            <h2
              id="contact-options"
              className="mt-3 font-display text-3xl font-semibold tracking-tight"
            >
              Find me online.
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-muted sm:block">
            04 channels
          </span>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contact.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
