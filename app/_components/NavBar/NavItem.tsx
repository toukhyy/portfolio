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
      <Link href={path} className="">
        {/* {title} */}
        <p className="">{title}</p>
        <div
          className={`transition-width h-0.5 bg-neutral-700 duration-300 ${
            matcher({ path, currentPath, matchPath }) ? `w-full` : "w-0"
          }`}
        ></div>
      </Link>
    </li>
  );
}

export default NavItem;
