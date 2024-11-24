"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/common/NavBar.module.css";
import { useNavbar } from "@/hooks/useNavbar";

export const NavBar = () => {
  const currentPath = usePathname();
  const { items } = useNavbar();

  const getLinkIsActive = (path: string) => {
    if (currentPath.includes(path) && path !== "/dashboard") {
      return true;
    }

    return currentPath === path;
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.navbar__item} ${
              getLinkIsActive(item.path) ? styles.active : ""
            }`}>
            <Link href={item.path} className={styles.navbar__link}>
              {item.icon ? <item.icon /> : null}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
