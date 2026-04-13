import { ResumeHighlights } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full pt-16">
      <div className="flex flex-col gap-14 md:gap-20">
        <Hero />
        <Skills />
        <ResumeHighlights />
        <Projects />
      </div>
    </main>
  );
}
