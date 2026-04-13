import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { RESUME_SKILLS } from "@/constants";

const TRIANGLE_ROWS = [8, 7, 6, 5, 4, 2] as const;

const getTriangleRows = () => {
  let cursor = 0;

  return TRIANGLE_ROWS.map((size) => {
    const startIndex = cursor;
    const skills = RESUME_SKILLS.slice(cursor, cursor + size);
    cursor += size;

    return { startIndex, skills };
  }).filter((row) => row.skills.length > 0);
};

export const Skills = () => {
  const skillRows = getTriangleRows();

  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden px-2 py-14 md:py-20"
    >
      <SkillText />

      <div className="mt-4 flex w-full max-w-7xl flex-col items-center gap-4 px-3 sm:gap-5 sm:px-6">
        {skillRows.map((row, rowIndex) => (
          <div
            key={`skills-row-${rowIndex}`}
            className="flex w-full flex-row flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            {row.skills.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={row.startIndex + i}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
