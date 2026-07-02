import { AboutCard } from "@/components";

const values = [
  ["Clarity", "I reduce ambiguity in interfaces, code and communication."],
  ["Ownership", "I care about the result beyond the boundaries of my ticket."],
  [
    "Curiosity",
    "I learn quickly and challenge assumptions before adding complexity.",
  ],
  [
    "Teamwork",
    "I value useful feedback, shared context and calm collaboration.",
  ],
];

export function MoreAboutMe() {
  return (
    <AboutCard eyebrow="Beyond tools" level={3} title="The way I show up">
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {values.map(([title, description], index) => (
          <div key={title} className="rounded-2xl bg-raised/55 p-5">
            <span className="font-mono text-[0.65rem] text-brand">
              0{index + 1}
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-muted">
        Away from the keyboard, you&apos;ll usually find me training, trekking
        or playing video games. Native Spanish speaker with intermediate
        English.
      </p>
    </AboutCard>
  );
}
