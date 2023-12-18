import Link from "next/link";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <section className="text-cream-1000 relative min-h-screen bg-hero bg-cover">
      <div className="mx-auto flex h-screen w-full max-w-6xl flex-col content-between pb-20 pt-20">
        <h2 className="text-8xl font-black uppercase leading-none tracking-tight opacity-80">
          Abdelrahman
          <br />
          eltoukhy
        </h2>

        <div className="flex h-full w-full items-end justify-between">
          <div className="grid gap-2 text-sm uppercase">
            {/* <RotatingBtn /> */}
            <Link
              href="/blog"
              className="bg-cream-900 w-40 max-w-md px-1  text-center tracking-wider text-orange-100"
            >
              <Marquee speed={12} autoFill pauseOnHover>
                <p className="mr-10 py-1.5">Blog</p>
              </Marquee>
            </Link>
            <Link
              href="/projects"
              className="border-cream-900 hover:bg-cream-900 border-2 py-1.5 text-center tracking-wider duration-200 hover:text-orange-100"
            >
              <p>Projects</p>
            </Link>
            <Link
              href="/about-me"
              className="border-cream-900 hover:bg-cream-900 border-2 py-1.5 text-center tracking-wider duration-200 hover:text-orange-100"
            >
              <p>About me</p>
            </Link>
          </div>
          <p className="self-end text-end text-7xl font-black uppercase leading-none tracking-tight opacity-80">
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
