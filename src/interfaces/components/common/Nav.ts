import { LucideProps } from "lucide-react";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavBarItem {
  label: string;
  path: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  role: "dm" | "player" | "both";
}
