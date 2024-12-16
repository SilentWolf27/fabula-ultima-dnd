import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any, any>;
}

export const MasterCampaignSettingsForm = ({ form }: Props) => {
  return (
    <>
      <FormField
        name="settings.start_level"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nivel inicial</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. 1"
                autoComplete="off"
                type="number"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              El nivel con el que los jugadores comenzarán la campaña.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="settings.max_level"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nivel máximo</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. 20"
                autoComplete="off"
                type="number"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              El nivel máximo al que los jugadores pueden llegar.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="settings.start_zenit"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Zenit inicial</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. 1000"
                autoComplete="off"
                type="number"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              La cantidad de Zenit con la que los jugadores comenzarán.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="settings.start_fabula_points"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Puntos de Fábula iniciales</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. 2"
                autoComplete="off"
                type="number"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              La cantidad de Puntos de Fábula con la que los jugadores
              comenzarán.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
