import ProjectCard from "@/app/_components/projectCard/ProjectCard";
import projects from "@/app/_data/projects.json";

function page() {
  return (
    <section className="bg-cover px-5 text-cream-1000 lg:px-0">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 pb-16 pt-12">
        <h1 className="text-3xl font-black uppercase opacity-90 md:text-4xl lg:text-5xl">
          Projects
        </h1>
        {/* PROJECTS */}
        <div className="mx-auto w-full">
          <ul className="grid auto-rows-fr gap-24">
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
