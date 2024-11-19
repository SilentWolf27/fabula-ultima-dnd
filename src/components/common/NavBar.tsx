"use client";

import { NavBarItem } from "@/interfaces/components/common/Nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/common/NavBar.module.css";
import {
  Book04Icon,
  Home05Icon,
  UserFullViewIcon,
  UserSettings01Icon,
} from "hugeicons-react";

const items: NavBarItem[] = [
  {
    label: "Inicio",
    path: "/dashboard",
    icon: <Home05Icon size={28} />,
  },
  {
    label: "Personajes",
    path: "/dashboard/personajes",
    icon: <UserFullViewIcon size={28} />,
  },
  {
    label: "Campañas",
    path: "/dashboard/campañas",
    icon: <Book04Icon size={28} />,
  },
  {
    label: "Perfil",
    path: "/dashboard/perfil",
    icon: <UserSettings01Icon size={28} />,
  },
];

export const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.navbar__item} ${
              currentPath === item.path ? styles.active : ""
            }`}>
            <Link href={item.path} className={styles.navbar__link}>
              {item.icon ? item.icon : null}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
