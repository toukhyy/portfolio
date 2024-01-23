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
    <li className="flex w-full flex-col justify-between gap-6 md:flex-row md:gap-10 md:even:flex-row-reverse">
      {/* img with background */}
      <div className="relative flex flex-[1.5] items-center justify-center rounded-md bg-cream-200 p-8 md:p-8 lg:p-14">
        <Image
          alt={project.label}
          src={project.webImg || placeholderWeb}
          width="1150"
          height="650"
          className="rounded-md lg:max-w-xl"
        />
        {project.mobImg && (
          <Image
            alt={project.label}
            src={project.mobImg}
            width="260"
            height="420"
            className="absolute right-5 top-14 h-32 w-min rounded-md shadow-base md:right-5 md:top-16 md:h-40 lg:right-10 lg:top-32 lg:h-56"
          />
        )}
      </div>
      {/* description */}
      <div className="flex h-full flex-1 flex-col px-2 md:justify-end md:p-4">
        <Link
          target="_blank"
          href={project.liveUrl || project.ghRepo}
          className="group relative mb-0.5 w-max md:mb-2.5"
        >
          <p className="text-lg font-bold uppercase md:text-2xl lg:text-3xl">
            {project.label}
          </p>
          <HiMiniArrowUpRight className="absolute -right-4 top-0.5 h-4 w-4 text-cream-600 duration-200 group-hover:-right-5 group-hover:-top-1 md:-right-6 md:top-0 md:h-6 md:w-6 md:group-hover:-right-7 md:group-hover:-top-1" />
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
