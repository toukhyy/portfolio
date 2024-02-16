import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <section className="relative min-h-screen  bg-cover text-cream-1000">
      <div className="mx-auto flex h-screen w-full max-w-6xl flex-col content-between px-5 pb-10 pt-20 md:px-10 md:pb-20 lg:px-2">
        <h2 className="flex-1 text-[2.6rem] font-black uppercase leading-none tracking-tight opacity-80 md:flex-auto md:text-6xl lg:text-7xl">
          Abdelrahman
          <br />
          eltoukhy
        </h2>

        <div className="flex h-full w-full flex-1 flex-col items-center justify-between md:flex-auto md:flex-row md:items-end md:justify-between">
          <div className="grid gap-2.5 text-sm uppercase">
            <Link
              href="/blog"
              className="w-52 bg-cream-900 px-1 text-center  tracking-wider text-orange-50"
            >
              <Marquee direction="right" speed={12} autoFill pauseOnHover>
                <div className="mr-5 flex items-center border-2 border-cream-900">
                  <p className="mr-5 py-2">Blog</p>
                  <FaArrowRight />
                </div>
              </Marquee>
            </Link>
            <Link
              href="/about"
              className="border-2 border-cream-900 py-2 text-center tracking-wider duration-200 hover:bg-cream-900 hover:text-orange-50"
            >
              <p>About me</p>
            </Link>
          </div>
          <p className="self-end text-end text-4xl font-black uppercase leading-none tracking-tight opacity-80 md:text-6xl">
            Web
            <br />
            Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
