import { ShareAndroid } from "iconoir-react";
import Link from "next/link";

export function FooterAbout() {
  const href = "/contact"; // Aquí se define el href

  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-800/30 p-3 text-center transition-all hover:ring-2 hover:ring-emerald-600 md:col-span-2">
      <p className="mt-3 leading-snug text-zinc-200">
        <span className="span-badge">Contact me for any questions or projects!</span>
      </p>
      {href && ( // Verificación de que href no sea undefined o null
        <Link
          className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-100 px-5 py-2 font-bold text-black shadow-md duration-500 md:w-1/4"
          href={href}
        >
          Social networks
          <ShareAndroid className="ml-1" height={24} stroke="2.5" width={24} />
        </Link>
      )}
    </div>
  );
}