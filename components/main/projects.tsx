import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-4 py-14 md:px-0 md:py-20"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-10 text-center text-3xl font-semibold text-transparent md:py-20 md:text-[40px]">
        Selected Projects
      </h1>
      <div className="grid h-full w-full max-w-7xl grid-cols-1 items-stretch gap-7 px-2 sm:px-4 md:grid-cols-2 md:gap-10 md:px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
