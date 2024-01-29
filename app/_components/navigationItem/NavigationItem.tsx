import Link from "next/link";
import clsx from "clsx";
type Props = {
  label: string;
  path: string;
  currentPath: string;
  onClick?: () => void;
  containsPath?: boolean;
};

export default function NavItem({
  label,
  path,
  onClick,
  containsPath,
  currentPath,
}: Props) {
  const matcher = ({
    path,
    currentPath,
    containsPath = false,
  }: Omit<Props, "label">) => {
    if (containsPath) {
      return currentPath.includes(path);
    }
    return path === currentPath;
  };

  return (
    <li onClick={onClick}>
      <Link href={path}>
        <p
          className={clsx(
            "p-2",
            matcher({ path, currentPath, containsPath }) &&
              "bg-cream-200 text-cream-900",
          )}
        >
          {label}
        </p>
      </Link>
    </li>
  );
}
