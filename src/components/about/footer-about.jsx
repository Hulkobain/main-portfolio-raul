import { ShareAndroid } from "iconoir-react";
import Link from "next/link";

export function FooterAbout() {
  const href = "/contact"

  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-800/30 p-3 text-center transition-all hover:ring-2 hover:ring-emerald-600 md:col-span-2">
      <div className="mx-auto w-full max-w-2xl">
        <p className="mt-3 leading-snug text-zinc-200">
          <span className="span-badge">Contact me for any questions or projects!</span>
        </p>
        {href && (
          <Link
            className="group relative mt-3 inline-flex w-auto items-center justify-center overflow-hidden rounded-xl bg-zinc-100 px-6 py-2 font-bold text-black shadow-md duration-500 sm:px-8"
            href={href}
          >
            Social networks
            <ShareAndroid className="ml-1" height={24} stroke="2.5" width={24} />
          </Link>
        )}
      </div>
    </div>
  )
}