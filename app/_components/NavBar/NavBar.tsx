"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

function NavBar() {
  const path = usePathname();

  return (
    <nav
      className={`z-50 w-full px-4 py-2.5 text-cream-900  transition duration-300 ease-linear ${
        path !== "/" ? "bg-hero shadow" : "absolute"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-black uppercase md:text-2xl">
          A.T.
        </Link>

        <ul className="flex gap-3 md:gap-4">
          <NavItem title="Home" path="/" currentPath={path} />
          <NavItem
            title="Blog"
            path="/blog"
            currentPath={path}
            matchPath={true}
          />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
