"use client";

import { usePathname } from "next/navigation";
import { useNavbar } from "@/hooks";
import { NavbarItem } from "./NavbarItem";

export const NavBar = () => {
  const currentPath = usePathname();
  const { items } = useNavbar();

  return (
    <nav
      className="w-full max-w-full overflow-x-auto scroll-none  min-h-[70px] bg-white"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <ul className="flex flex-nowrap justify-start items-center list-none h-full">
        {items.map((item, index) => (
          <NavbarItem key={index} item={item} currentPath={currentPath} />
        ))}
      </ul>
    </nav>
  );
};
