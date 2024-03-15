import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 border-t bg-cream-50 py-5 md:flex-row md:justify-between md:gap-0 md:px-32 md:py-3">
      <div className="text-cream-700">
        <p className="text-center font-bold">Abdelrahman El Toukhy</p>
        <p className="mb-2 text-center">Web Developer</p>
      </div>

      <div className="mb-2 flex gap-3 text-cream-700">
        <a target="_blank" href="https://github.com/toukhyy">
          <FaGithub className="h-5 w-5 duration-200 hover:text-cream-600 md:h-7 md:w-7" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/a-toukhy">
          <FaLinkedin className="h-5 w-5 duration-200 hover:text-cream-600 md:h-7 md:w-7" />
        </a>
        <a href="mailto: tokhy104@gmail.com">
          <MdEmail className="h-5 w-5 duration-200 hover:text-cream-600 md:h-7 md:w-7" />
        </a>
      </div>
      <div>
        <p className="text-xs text-cream-700 md:text-sm">
          All rights reserved © Abdelrahman El Toukhy 2024
        </p>
      </div>
    </footer>
  );
}
