import { NavBarItem } from "@/interfaces/components/common/Nav";
import { getSupabaseClientAccessToken } from "@/utils/session/session";

import {
  Book04Icon,
  Home05Icon,
  UserFullViewIcon,
  UserSettings01Icon,
} from "hugeicons-react";
import { useEffect, useState } from "react";

const defaultItems: NavBarItem[] = [
  {
    label: "Inicio",
    path: "/dashboard",
    icon: Home05Icon,
    role: "both",
  },
  {
    label: "Personajes",
    path: "/dashboard/personajes",
    icon: UserFullViewIcon,
    role: "player",
  },
  {
    label: "Campañas",
    path: "/dashboard/campañas",
    icon: Book04Icon,
    role: "both",
  },
  {
    label: "Perfil",
    path: "/dashboard/perfil",
    icon: UserSettings01Icon,
    role: "both",
  },
];

export const useNavbar = (): { items: NavBarItem[] } => {
  const [items, setItems] = useState<NavBarItem[]>([]);

  useEffect(() => {
    getSupabaseClientAccessToken().then((token) => {
      if (!token) return;

      const role = token.fabulaRole;

      const filteredItems = defaultItems.filter(
        (item) => item.role === "both" || item.role === role
      );

      setItems(filteredItems);
    });
  }, []);

  return { items };
};
