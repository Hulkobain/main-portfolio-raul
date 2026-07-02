import { Heading } from "@/components";
import { cn } from "@/libs/utils";

export function AboutCard({ children, title, eyebrow, level = 3, className }) {
  return (
    <article
      className={cn("glass-panel h-full rounded-[2rem] p-6 sm:p-8", className)}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading level={level}>{title}</Heading>
      {children}
    </article>
  );
}
