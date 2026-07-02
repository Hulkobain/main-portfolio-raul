import { ArrowUpRight, Mail } from "iconoir-react";
import Link from "next/link";

export function Gratitude() {
  return (
    <section className="section-shell reveal-section py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-canvas sm:px-12 sm:py-20 lg:px-16">
        <div className="absolute -right-20 -top-24 size-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 size-80 rounded-full bg-violet/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Start a conversation
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Have a product, an idea or a difficult technical problem?
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-canvas/65">
              Tell me what you are trying to build. I&apos;ll bring curiosity,
              honest technical thinking and a strong bias toward shipping useful
              work.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-[#06241b] transition hover:-translate-y-0.5 motion-reduce:transform-none"
              href="mailto:raul.romero.6696@gmail.com"
            >
              <Mail className="size-4" />
              Email me
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-canvas/20 px-6 py-3 text-sm font-bold text-canvas transition hover:border-brand/50 hover:bg-brand/10"
              href="/contact"
            >
              Contact options
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative mt-12 border-t border-canvas/10 pt-5 font-mono text-xs text-canvas/50">
          <span className="text-brand">&gt;</span> start_conversation() ·
          status: available
        </div>
      </div>
    </section>
  );
}
