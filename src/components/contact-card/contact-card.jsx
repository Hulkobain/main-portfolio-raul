import {
  ArrowUpRight,
  Discord,
  Github,
  Linkedin,
  MailOut,
} from "iconoir-react";

const icons = {
  github: Github,
  email: MailOut,
  linkedin: Linkedin,
  discord: Discord,
};

export function ContactCard({ url, icon, title, subtitle }) {
  const Icon = icons[icon];

  return (
    <a
      aria-label={`${title}: ${subtitle}`}
      className="glass-panel group flex min-h-36 flex-col justify-between rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/35 motion-reduce:transform-none sm:p-6"
      href={url}
      rel="noreferrer"
      target={url.startsWith("mailto:") ? undefined : "_blank"}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:rotate-[-5deg] motion-reduce:transform-none">
          <Icon className="size-5" />
        </span>
        <ArrowUpRight className="size-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
      </div>
      <div className="mt-7">
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        <p className="mt-1 break-words text-sm leading-5 text-muted">
          {subtitle}
        </p>
      </div>
    </a>
  );
}
