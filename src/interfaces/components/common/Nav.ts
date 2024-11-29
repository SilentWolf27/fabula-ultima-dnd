import { HugeiconsProps } from "hugeicons-react";
import { FC } from "react";

export interface NavBarItem {
  label: string;
  path: string;
  icon?: FC<Omit<HugeiconsProps, "ref">>;
  role: "dm" | "player" | "both";
}
