import { Download, NavArrowLeft } from "iconoir-react";
import Link from "next/link";

export const metadata = {
  title: "CV",
  description: "Resume and professional experience of Raúl Romero.",
};

export default function CVPage() {
  return (
    <main className="section-shell pb-20 pt-12 sm:pt-20" id="main-content">
      <header className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow">Curriculum vitae</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Experience, in detail.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            View the complete CV below or keep a PDF copy for later.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="button-primary" href="/cv.pdf" target="_blank">
            <Download className="size-4" />
            Download PDF
          </Link>
          <Link className="button-secondary" href="/">
            <NavArrowLeft className="size-4" />
            Back home
          </Link>
        </div>
      </header>

      <section className="glass-panel mt-10 rounded-[2rem] p-2 sm:p-3">
        <div className="aspect-[4/5] min-h-[70vh] w-full overflow-hidden rounded-[1.4rem] bg-raised">
          <iframe
            className="h-full w-full"
            src="/cv.pdf"
            title="Raúl Romero CV"
          />
        </div>
        <p className="px-3 pb-2 pt-4 font-mono text-[0.65rem] text-muted">
          PDF viewer · use the download action if your browser blocks embedded
          documents.
        </p>
      </section>
    </main>
  );
}
