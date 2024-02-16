"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import NavigationItem from "../navigationItem/NavigationItem";

function NavBar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <header
      className={`z-50 w-full px-4 py-3 text-cream-900  transition duration-300 ease-linear ${
        path !== "/" ? "bg-hero shadow" : "absolute"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* NAV OVERLAY */}
        <Link
          href="/"
          className={clsx(
            "z-40 inline-block text-xl font-black uppercase duration-500 md:text-2xl",
            open && "text-cream-200",
          )}
        >
          A.T.
        </Link>
        <HamburgerMenu
          open={open}
          onClick={() => setOpen((val) => !val)}
          barColor={open ? "bg-cream-200" : "bg-cream-900"}
        />
      </div>

      {/* NAV OVERLAY */}
      {
        <nav
          className="bg-navigation-menu fixed -top-[150%] left-0 z-20 h-screen w-full  duration-200"
          style={{
            top: open ? "0" : "-150%",
            transitionDelay: open ? "0" : "0",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* NAV ITEMS */}
          <ul className="flex h-full flex-col items-center justify-center gap-10 text-2xl font-thin uppercase tracking-widest text-cream-200 lg:text-4xl">
            <NavigationItem
              currentPath={path}
              label="Home"
              path="/"
              onClick={() => setOpen((val) => !val)}
            />
            <NavigationItem
              currentPath={path}
              label="Blog"
              path="/blog"
              onClick={() => setOpen((val) => !val)}
              containsPath
            />
            <NavigationItem
              currentPath={path}
              label="About Me"
              path="/about"
              onClick={() => setOpen((val) => !val)}
            />
            <NavigationItem
              currentPath={path}
              label="Projects"
              path="/projects"
              onClick={() => setOpen((val) => !val)}
            />
          </ul>
        </nav>
      }
    </header>
  );
}

export default NavBar;
