import Link from "next/link";
import Hero from "../_components/hero/Hero";
import { GiCampfire, GiSpellBook } from "react-icons/gi";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex flex-col bg-white md:flex-row">
        <Link
          href="/"
          className="group flex h-full w-full flex-col items-center justify-center bg-slate-50 py-36"
        >
          <div>
            <div className="flex flex-col items-center justify-center gap-7 group-hover:text-yellow-700">
              <GiCampfire size={180} />
              <h2 className="text-3xl font-bold">Get to Know Me</h2>
            </div>
          </div>
        </Link>

        <Link
          href="/blog"
          className="group flex h-full w-full flex-col items-center justify-center bg-slate-100 py-36"
        >
          <div>
            <div className="flex flex-col items-center justify-center gap-7 group-hover:text-yellow-700">
              <GiSpellBook size={180} />
              <h2 className="text-3xl font-bold">Read my Blog</h2>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
