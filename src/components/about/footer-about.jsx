import { ArrowUpRight } from "iconoir-react";
import Link from "next/link";

export function FooterAbout() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-brand-soft p-7 sm:p-10">
      <p className="eyebrow">Next step</p>
      <div className="mt-4 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Let&apos;s turn a clear problem into a useful product.
        </h2>
        <Link className="button-primary group shrink-0" href="/contact">
          Start a conversation
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
