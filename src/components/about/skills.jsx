import { AboutCard } from "@/components";
import { STACK_GROUPS } from "@/constants";
import Image from "next/image";

export function Skills() {
  return (
    <AboutCard eyebrow="Toolbox" level={3} title="Core stack">
      <div className="mt-7 space-y-6">
        {STACK_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill.title} className="tech-chip">
                  <Image
                    alt=""
                    className="size-4 object-contain"
                    height={16}
                    src={`/skillsImg/${skill.logo}.svg`}
                    width={16}
                  />
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AboutCard>
  );
}
