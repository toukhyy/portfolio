import Link from "next/link";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <section className="relative min-h-screen bg-hero bg-cover text-cream-1000">
      <div className="mx-auto flex h-screen w-full max-w-6xl flex-col content-between px-5 pb-10 pt-20 md:px-10 md:pb-20 lg:px-2">
        <h2 className="flex-1 text-[2.6rem] font-black uppercase leading-none tracking-tight opacity-80 md:flex-auto md:text-6xl lg:text-7xl">
          Abdelrahman
          <br />
          eltoukhy
        </h2>

        <div className="flex h-full w-full flex-1 flex-col items-center justify-between md:flex-auto md:flex-row md:items-end md:justify-between">
          <div className="grid gap-2 text-sm uppercase">
            <Link
              href="/blog"
              className="w-52 max-w-md bg-cream-900 px-1 text-center  tracking-wider text-orange-100 md:w-40"
            >
              <Marquee speed={12} autoFill pauseOnHover>
                <p className="mr-16 py-1.5 md:mr-10">Blog</p>
              </Marquee>
            </Link>
            <Link
              href="/projects"
              className="border-2 border-cream-900 py-1.5 text-center tracking-wider duration-200 hover:bg-cream-900 hover:text-orange-100"
            >
              <p>Projects</p>
            </Link>
            <Link
              href="/about"
              className="border-2 border-cream-900 py-1.5 text-center tracking-wider duration-200 hover:bg-cream-900 hover:text-orange-100"
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
