import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { campaignAccessTypeOptions } from "@/interfaces/entity";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any, any, any>;
}

export default function MasterCampaignBasicInfoForm({ form }: Props) {
  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ej. Campaña de prueba"
                autoComplete="off"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="access_type"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de acceso</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tipo de acceso" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {campaignAccessTypeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Ingresa una descripción. Puede ser tan larga como desees."
                className="resize-none min-h-[200px]"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              Esta descripción se mostrará en el detalle de la campaña. Puedes
              incluir toda la información que consideres necesaria para que los
              usuarios puedan entender de qué se trata la campaña.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="short_description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción corta</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Ingresa una descripción breve."
                className="resize-none min-h-[100px]"
              />
            </FormControl>
            <FormDescription className="text-sm text-balance">
              Esta descripción se mostrará en elementos más pequeños, como
              tarjetas o listados. Debe ser breve y concisa para que los
              usuarios puedan entender rápidamente de qué se trata la campaña.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
