import Image from "next/image";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { FaStarOfLife } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  project: {
    label: string;
    description: string;
    additionalDesc?: string;
    stack: string[];
    liveUrl?: string;
    ghRepo: string;
    webImg: string;
    mobImg?: string;
  };
};
const placeholderWeb =
  "https://res.cloudinary.com/doaw1mqkw/image/upload/v1705397927/estore-web_ejd2ix.png";
const placeholderMob =
  "https://res.cloudinary.com/doaw1mqkw/image/upload/v1705684898/projects/estore-mobile_h8ekxn.png";

function ProjectCard({ project }: Props) {
  return (
    <li className="flex w-full flex-row justify-between gap-10 even:flex-row-reverse">
      {/* img with background */}
      <div className="relative flex flex-[1.5] items-center justify-center rounded-md bg-cream-200 p-14">
        <Image
          alt={project.label}
          src={project.webImg || placeholderWeb}
          width="1150"
          height="650"
          className="max-w-xl rounded-md"
        />
        {project.mobImg && (
          <Image
            alt={project.label}
            src={project.mobImg}
            width="260"
            height="420"
            className="absolute right-10 top-32 h-56 w-min rounded-md shadow-base"
          />
        )}
      </div>
      {/* description */}
      <div className="flex h-full flex-1 flex-col justify-end p-4">
        <Link
          target="_blank"
          href={project.liveUrl || project.ghRepo}
          className="group relative mb-2.5 w-max"
        >
          <p className=" text-3xl font-bold uppercase">{project.label}</p>
          <HiMiniArrowUpRight className="absolute -right-6 top-0 h-6 w-6 text-cream-600 duration-200 group-hover:-right-7 group-hover:-top-1" />
        </Link>
        <p className="mb-3 max-w-sm text-xs text-cream-600">
          {project.description}
        </p>

        <div className="flex items-center gap-1 font-thin text-cream-600">
          <FaStarOfLife className="h-2.5 w-2.5" />
          <div className="text-xs">
            <span>click the label for the live version</span>
            <span> or check the code </span>
            <a
              href={project.ghRepo}
              className="rounded bg-cream-100 p-0.5 text-cream-600 duration-200 hover:bg-cream-300"
            >
              here.
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
