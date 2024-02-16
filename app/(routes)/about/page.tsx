import { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
  title: "About me",
  description: "Abdelrahman El Toukhy",
};

export default function page() {
  return (
    <div className="mx-auto mb-16 mt-20 flex max-w-5xl flex-col-reverse items-center gap-10 px-4 md:mt-24 lg:flex-row lg:justify-between lg:gap-0 lg:px-4">
      {/* Description */}
      <div className="max-w-xs md:max-w-md">
        <p className="text-2xl font-semibold">Hi, I'm Abdelrahman.</p>
        <p className="mb-5 lg:mb-8">Web Developer, based in Cairo.</p>
        <p className="mb-4 lg:mb-5">
          After graduating with a degree in structural engineering, I decided to
          pursue my passion for programming which started from my school days.
        </p>
        <p className="mb-4 lg:mb-5">
          Started with Java then transitioned to frontend development then
          became more curios about about the APIs I was using, which led me to
          learning backend development.
        </p>
        <p className="mb-4 md:mb-5">
          Now, I enjoy working with React and NodeJS as my main stack, but I'm
          always happy to try new languages or frameworks.
        </p>
        <p>
          If you have any questions, feel free to send me a{" "}
          <a
            href="mailto: tokhy104@gmail.com"
            className="font-bold text-cream-900 duration-200 hover:text-cream-600"
          >
            mail.
          </a>
        </p>
      </div>
      {/* Image */}
      <div>
        <div className="max-w-sm rounded-3xl bg-cream-100 p-4 shadow">
          <Image
            alt="abdelrahman el toukhy's photo"
            src={
              "https://res.cloudinary.com/doaw1mqkw/image/upload/v1706288082/toukhy/about-me_lcbaar.webp"
            }
            width={2000}
            height={2000}
            className="rounded-2xl"
          />
          {/* Social Links */}
          <div className=" mt-3 flex w-full items-center justify-center gap-3 text-cream-700">
            <a target="_blank" href="https://github.com/toukhyy">
              <FaGithub className="h-7 w-7 duration-200 hover:text-cream-600" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/a-toukhy">
              <FaLinkedin className="h-7 w-7 duration-200 hover:text-cream-600" />
            </a>
            <a href="mailto: tokhy104@gmail.com">
              <MdEmail className="h-8 w-8 duration-200 hover:text-cream-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
