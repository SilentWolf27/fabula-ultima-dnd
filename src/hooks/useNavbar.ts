import { NavBarItem } from "@/interfaces/components/common/Nav";
import { getSupabaseJwtPayload } from "@/utils/session/session";
import { getSupabaseClient } from "@/utils/supabase/browserClient";
import { House, NotebookPen, UserCog, Users } from "lucide-react";
import { useEffect, useState } from "react";

const defaultItems: NavBarItem[] = [
  {
    label: "Inicio",
    path: "/dashboard",
    icon: House,
    role: "both",
  },
  {
    label: "Personajes",
    path: "/dashboard/personajes",
    icon: Users,
    role: "player",
  },
  {
    label: "Mis Historias",
    path: "/dashboard/mishistorias",
    icon: NotebookPen,
    role: "dm",
  },
  {
    label: "Historias",
    path: "/dashboard/historias",
    icon: NotebookPen,
    role: "player",
  },
  {
    label: "Perfil",
    path: "/dashboard/perfil",
    icon: UserCog,
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
