import { Mail } from "iconoir-react";
import Link from "next/link";

export function Gratitude() {
  const emailHref = "mailto:raul.romero.6696@gmail.com";
  const cvHref = "https://raulromero.netlify.app/images/CV_RaulRomero.pdf";

  return (
    <section className="my-8">
      <div className="relative p-8 lg:px-16">
        <div className="pattern-dots absolute left-1/2 right-0 top-0 -z-10 mx-auto h-full w-1/2 opacity-60" />

        <div className="mx-auto mb-4 w-full text-center md:max-w-xl">
          <h3 className="mb-3 inline-block text-lg font-semibold text-emerald-400 md:text-2xl">
            Hey! Thanks for stopping by my portfolio
          </h3>
          <p className="text-xl font-bold md:text-3xl">
            If you want to talk, talk about a project or other things
          </p>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 md:max-w-xl md:flex-row md:gap-4">
          {emailHref && (
            <Link
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-white px-6 py-2 font-bold text-black md:flex-1"
              href={emailHref}
              rel="noreferrer"
              target="_blank"
            >
              <span>Email me</span>
              <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <Mail />
              </div>
            </Link>
          )}
          {cvHref && (
            <Link
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-white px-6 py-2 font-bold text-black md:flex-1"
              href={cvHref}
              rel="noreferrer"
              target="_blank"
            >
              <span>CV</span>
              <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"></div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
