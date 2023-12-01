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
      <Link
        href={path}
        className={`${
          matcher({ path, currentPath, matchPath })
            ? "underline underline-offset-4"
            : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavItem;
