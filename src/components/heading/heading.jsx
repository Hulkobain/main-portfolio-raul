import { cn } from "@/libs/utils";

export function Heading({ children, level = 2, variants }) {
  const HeadingTag = `h${level}`;
  const classes = {
    h2: "font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl",
    h3: "font-display text-3xl font-semibold tracking-[-0.035em]",
    h4: "font-display text-xl font-semibold tracking-[-0.02em] sm:text-2xl",
  };

  return (
    <HeadingTag className={cn(classes[`h${level}`], variants)}>
      {children}
    </HeadingTag>
  );
}
