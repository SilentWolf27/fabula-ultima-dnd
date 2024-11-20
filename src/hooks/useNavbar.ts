import { NavBarItem } from "@/interfaces/components/common/Nav";
import { getSupabaseJwtPayload } from "@/utils/session/session";
import { getSupabaseClient } from "@/utils/supabase/browserClient";

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
    label: "Historias",
    path: "/dashboard/historias",
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
  const supabase = getSupabaseClient();

  useEffect(() => {
    getSupabaseJwtPayload(supabase).then((token) => {
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
