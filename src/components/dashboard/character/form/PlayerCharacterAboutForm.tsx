import { MultiSelect } from "@/components/common/Multiselect/Multiselect";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fabulaUltimaRaces } from "@/database/characters/races";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any, any>;
}

export default function PlayerCharacterAboutForm({ form }: Props) {
  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Ej. Gandalf" autoComplete="off" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="origin"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Origen</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. La Comarca"
                autoComplete="off"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              El lugar de nacimiento o procedencia del personaje.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="races"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Razas</FormLabel>
            <FormControl>
              <MultiSelect
                options={fabulaUltimaRaces}
                onValueChange={(values: string[]) => {
                  form.setValue("races", values);
                }}
                placeholder="Selecciona la(s) raza(s) del personaje"
                maxItems={2}
                values={field.value}
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              Selecciona hasta dos razas para tu personaje.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
