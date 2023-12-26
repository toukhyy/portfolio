type Props = {
  project: {
    label: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    ghRepo: string;
  };
};

function ProjectCard({ project }: Props) {
  return (
    <li>
      <div className="projectCard-shadow flex h-full w-64 flex-col justify-between overflow-hidden rounded border-2 border-cream-800">
        <div>
          <p className="py-2 text-center text-lg font-semibold capitalize">
            {project.label}
          </p>
          <div className="mx-auto h-[1.5px] w-5/6 bg-cream-800"></div>
        </div>
        {/* DESC AND STACK */}
        <div className="mb-2 px-4 py-3.5">
          <p className="text-center font-semibold">Description</p>
          <p className="mb-2 text-center text-sm">{project.description}</p>
          <p className="text-center font-semibold">Stack</p>
          <p className="text-center text-sm capitalize">
            {project.stack.join(" • ")}
          </p>
        </div>
        {/* LINKS */}
        <div className="flex w-full border-t-2 border-cream-800">
          {project.liveUrl ? (
            <a
              target="_blank"
              className="flex-1 bg-cream-800 py-1 text-center 
        tracking-wider text-orange-100 duration-200 hover:bg-cream-700"
              href={project.liveUrl}
            >
              Live
            </a>
          ) : (
            <div className="o relative flex-1 overflow-hidden border-r-2 border-cream-800 py-1 text-center tracking-wider">
              <span className="font-bold text-cream-800">—</span>
            </div>
          )}
          <a
            target="_blank"
            className="flex-1 py-1 text-center tracking-wider duration-200 hover:bg-cream-800 hover:text-orange-100"
            href={project.ghRepo}
          >
            Code
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
