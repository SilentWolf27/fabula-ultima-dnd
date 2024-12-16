import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ChevronsUpDown, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../../ui/command";
import { cn } from "@/lib/utils";
import { MultiSelectOption } from "./MultiselectOption";

const MultiSelectVariants = cva(
  "bg-violet-100 rounded-md py-1 px-3 text-sm flex items-center gap-1 text-violet-900",
  {
    variants: {
      variant: {
        default: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface MultiSelectProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof MultiSelectVariants> {
  options: { value: string; label: string; icon?: string }[];
  onValueChange: (value: string[]) => void;
  placeholder?: string;
  maxItems?: number;
  className?: string;
  values: string[];
}

export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      onValueChange,
      placeholder = "Selecciona una opción",
      maxItems = 3,
      className,
      values,
      variant = "default",
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const onSelectedValue = (item: string) => {
      if (values.length === maxItems) return;

      if (values.includes(item)) return;

      onValueChange([...values, item]);
    };

    const onRemoveValue = (item: string) => {
      const filteredValues = values.filter((value) => value !== item);
      onValueChange(filteredValues);
    };

    return (
      <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger asChild>
          <div
            role="combobox"
            aria-expanded={isOpen}
            className={cn(
              "w-full flex justify-between items-center rounded-md text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 px-2",
              className
            )}>
            {values.length > 0 ? (
              <div className="flex gap-2 flex-nowrap overflow-hidden items-center justify-start">
                {values.map((value) => (
                  <button
                    type="button"
                    role="option"
                    key={value}
                    className={MultiSelectVariants({ variant })}
                    onClick={() => onRemoveValue(value)}>
                    {options.find((option) => option.value === value)?.label}
                    <X className="w-[12px]" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">{placeholder}</p>
            )}
            <ChevronsUpDown className="w-4 h-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[300px]">
          <Command>
            <CommandInput placeholder="Buscar..." />
            <CommandList>
              <CommandEmpty>
                No se encontraron resultados para la búsqueda.
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <MultiSelectOption
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    icon={option.icon}
                    isSelected={values.includes(option.value)}
                    onSelect={onSelectedValue}
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);
