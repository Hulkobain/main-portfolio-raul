import Link from "next/link";

export const metadata = {
  title: "CV | Raúl Romero",
  description: "Resume and professional experience of Raúl Romero.",
};

export default function CVPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 py-10 text-white md:px-0">
      <header className="mb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Curriculum Vitae
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">Raúl Romero</h1>
        <p className="mt-2 max-w-2xl text-pretty text-sm text-zinc-400 md:text-base">
          You can view the CV directly below or download it as a PDF.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap gap-3">
        <Link
          className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-semibold text-black transition hover:scale-[0.98]"
          href="/cv.pdf"
        >
          Download CV (PDF)
        </Link>
        <Link
          className="rounded-lg border border-zinc-700/60 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/70 hover:text-emerald-200"
          href="/"
        >
          Back to home
        </Link>
      </div>

      <section className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-2">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-black/20">
          <iframe
            className="h-full w-full"
            src="/cv.pdf"
            title="Raúl Romero CV"
          />
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          If the PDF does not appear, place your file at public/cv.pdf.
        </p>
      </section>
    </main>
  );
}
