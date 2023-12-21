"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

function NavBar() {
  const path = usePathname();
  // if (path === "/") return null;

  return (
    <nav
      className={`z-50 w-full px-4 py-2.5 text-cream-900  transition duration-300 ease-linear ${
        path === "/blog" ? "bg-hero shadow" : "fixed"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="text-2xl font-black uppercase">
          {/* <Logo className="w-20 fill-black" /> */}
          A.T.
        </Link>

        <ul className="flex gap-4 font-semibold">
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
