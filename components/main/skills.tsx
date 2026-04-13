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
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="mt-4 flex w-full flex-col items-center gap-5 px-6">
        {skillRows.map((row, rowIndex) => (
          <div
            key={`skills-row-${rowIndex}`}
            className="flex w-full flex-row flex-wrap items-center justify-center gap-5"
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
