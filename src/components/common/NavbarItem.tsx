import { NavBarItem } from "@/interfaces/components";
import Link from "next/link";

interface Props {
  item: NavBarItem;
  currentPath: string;
}

export const NavbarItem = ({ item, currentPath }: Props) => {
  const getLinkIsActive = (path: string) => {
    if (currentPath.includes(path) && path !== "/dashboard") {
      return true;
    }

    return currentPath === path;
  };

  const isActive = getLinkIsActive(item.path);
  return (
    <li
      className={`w-full h-full py-3 px-2 min-w-[112px] rounded-sm select-none bg-white ${
        isActive ? "bg-violet-100" : ""
      }`}>
      <Link
        href={item.path}
        className={`flex flex-col items-center justify-center gap-1 text-base decoration-0 text-violet-700 font-semibold w-full `}>
        {item.icon ? <item.icon size={32} /> : null}
        <span className="text-sm">{item.label}</span>
      </Link>
    </li>
  );
};
