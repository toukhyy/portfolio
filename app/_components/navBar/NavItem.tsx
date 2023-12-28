import Link from "next/link";

type Props = {
  title: string;
  path: string;
  currentPath: string;
  matchPath?: boolean;
};

function NavItem({ title, path, currentPath, matchPath = false }: Props) {
  const matcher = ({ path, currentPath, matchPath }: Omit<Props, "title">) => {
    if (matchPath) {
      return currentPath.includes(path);
    }
    return path === currentPath;
  };

  return (
    <li>
      <Link href={path}>
        {/* {title} */}
        <p
          className={`text-sm md:text-base ${
            matcher({ path, currentPath, matchPath })
              ? "font-semibold"
              : "font-normal text-cream-800"
          }`}
        >
          {title}
        </p>
        <div
          className={`transition-width h-0.5 bg-cream-900 duration-300  ${
            matcher({ path, currentPath, matchPath }) ? `w-full` : "w-0"
          }`}
        ></div>
      </Link>
    </li>
  );
}

export default NavItem;
