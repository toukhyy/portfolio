"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import Logo from "./Logo";
type Props = {};

function NavBar({}: Props) {
  const path = usePathname();

  return (
    <nav
      className={`z-50 w-full px-4 py-5 shadow-sm transition duration-300 ease-linear
      ${path === "/" ? "fixed text-white backdrop-blur-sm" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/">
          <Logo
            className={`${path === "/" ? "fill-white" : "fill-black"} w-20`}
          />
        </Link>

        <ul className="flex gap-6 font-semibold">
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
