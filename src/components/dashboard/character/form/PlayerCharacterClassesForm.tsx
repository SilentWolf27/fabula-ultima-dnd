import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CharacterClass } from "@/interfaces/entity/character_classes";
import type { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any, any>;
  classes: CharacterClass[];
  classesOptions: { label: string; value: string }[];
}

const MAX_CLASSES = 3;

export const PlayerCharacterClassesForm = ({
  form,
  classes,
  classesOptions,
}: Props) => {
  return (
    <>
      <FormField
        name="classes"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormDescription className="text-sm text-balance">
              Las clases influyen en las habilidades y características de tu
              personaje. Puedes seleccionar hasta 3 clases.
            </FormDescription>
            <FormMessage />
            <div className="pt-4 flex flex-col gap-4">
              {classesOptions.map((option) => (
                <FormItem
                  className="flex items-center gap-2 space-x-0 space-y-0"
                  key={option.value}>
                  <FormControl>
                    <Checkbox
                      className="data-[state=checked]:bg-violet-700 "
                      onCheckedChange={(checked) => {
                        const newValues = checked
                          ? [...field.value, option.value]
                          : field.value.filter(
                              (v: string) => v !== option.value
                            );

                        form.setValue("classes", newValues);
                      }}
                      checked={field.value.includes(option.value)}
                      value={option.value}
                      disabled={
                        field.value.length >= MAX_CLASSES &&
                        !field.value.includes(option.value)
                      }
                    />
                  </FormControl>
                  <FormLabel>{option.label}</FormLabel>
                </FormItem>
              ))}
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
