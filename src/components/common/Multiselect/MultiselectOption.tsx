import { CommandItem } from "@/components/ui/command";
import { Check } from "lucide-react";

interface Props {
  value: string;
  label: string;
  icon?: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export const MultiSelectOption = ({
  value,
  label,
  icon,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <CommandItem
      key={value}
      value={value}
      onSelect={onSelect}
      className={`flex items-center justify-between ${
        isSelected ? "text-violet-700" : ""
      }`}>
      {label}
      {isSelected && <Check className="w-4 h-4" />}
    </CommandItem>
  );
};
