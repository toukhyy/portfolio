import Link from "next/link";
import ProjectCard from "@/app/_components/projectCard/ProjectCard";
import projects from "@/app/_utils/project-data.json";

function page() {
  return (
    <section className="relative min-h-screen bg-hero bg-cover px-5 text-cream-1000 lg:px-0">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 pb-16 pt-20">
        <h1 className="text-3xl font-black uppercase opacity-90 md:text-4xl lg:text-5xl">
          Projects
        </h1>
        <div className="mx-auto">
          <ul className="grid gap-10 md:grid-cols-2  lg:grid-cols-3">
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
