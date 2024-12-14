import { z } from "zod";

export const createCampaignSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre de la campaña no puede estar vacío." }),
  description: z
    .string()
    .min(1, { message: "La campaña debe tener una descripción." }),
  short_description: z
    .string()
    .min(1, { message: "La campaña debe tener una descripción corta." }),
  access_type: z.enum(["public", "request"], {
    message: "Selecciona un tipo de acceso: público o por solicitud.",
  }),
  settings: z.object({
    start_level: z
      .number({ message: "El nivel inicial es obligatorio." })
      .positive({ message: "El nivel inicial debe ser un número mayor a 0." })
      .int({ message: "El nivel inicial debe ser un número entero." }),
    max_level: z
      .number({ message: "El nivel máximo es obligatorio." })
      .positive({ message: "El nivel máximo debe ser un número mayor a 0." })
      .int({ message: "El nivel máximo debe ser un número entero." }),
    start_zenit: z
      .number({ message: "Especifica los zenit iniciales." })
      .positive({
        message: "Los zenit iniciales deben ser un número mayor a 0.",
      })
      .int({ message: "Los zenit iniciales deben ser un número entero." }),
    start_fabula_points: z
      .number({ message: "Especifica los puntos de fábula iniciales." })
      .positive({
        message:
          "Los puntos de fábula iniciales deben ser un número mayor a 0.",
      })
      .int({
        message: "Los puntos de fábula iniciales deben ser un número entero.",
      }),
  }),
  max_players: z
    .number({
      message: "Es obligatorio indicar el número máximo de jugadores.",
    })
    .positive({
      message: "El número máximo de jugadores debe ser mayor a 0.",
    })
    .int({
      message: "El número máximo de jugadores debe ser un número entero.",
    }),
});

export const updateCampaignSchema = createCampaignSchema.extend({
  id: z
    .number({
      message: "Es obligatorio especificar el ID de la campaña a actualizar.",
    })
    .positive({ message: "El ID debe ser un número mayor a 0." }),
});
