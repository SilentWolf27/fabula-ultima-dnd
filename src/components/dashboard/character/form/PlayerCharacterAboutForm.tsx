import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    </>
  );
}
