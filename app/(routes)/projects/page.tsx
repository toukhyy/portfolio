import ProjectCard from "@/app/_components/projectCard/ProjectCard";
import projects from "@/app/_data/projects.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Abdelrahman El Toukhy's Projects",
};

function page() {
  return (
    <section className="px-5 text-cream-1000 lg:px-0">
      <div className="mx-auto mb-16 mt-20 flex min-h-screen w-full max-w-6xl flex-col gap-8 md:mt-24 md:gap-12 lg:gap-16">
        <h1 className="text-2xl font-black uppercase opacity-90 md:text-4xl lg:text-5xl">
          Projects
        </h1>
        {/* PROJECTS */}
        <div className="mx-auto w-full">
          <ul className="grid auto-rows-fr gap-16 md:gap-28">
            {projects.map((project) => (
              <ProjectCard key={project.label} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default page;
