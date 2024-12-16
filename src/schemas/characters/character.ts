import { z } from "zod";

export const createPlayerCharacterSchema = z.object({
  name: z
    .string({ message: "Por favor, escribe el nombre del personaje." })
    .min(1, { message: "El nombre del personaje no puede estar vacío" }),

  origin: z
    .string({ message: "Por favor, escribe el origen del personaje." })
    .min(1, { message: "El origen del personaje no puede estar vacío" }),

  classes: z
    .array(z.string(), {
      message: "Selecciona al menos una clase para el personaje.",
    })
    .min(1, { message: "El personaje debe tener al menos una clase." }),

  races: z
    .array(z.string())
    .min(1, { message: "El personaje debe tener al menos una raza." })
    .max(2, { message: "El personaje no puede tener más de dos razas." }),
});

export const updatePlayerCharacterSchema = createPlayerCharacterSchema.extend({
  id: z
    .number({
      message: "Es obligatorio especificar el ID del personaje a actualizar.",
    })
    .positive({ message: "El ID debe ser un número mayor a 0." }),
});
