import { z } from "zod";

export const createCharacterSchema = z.object({
  name: z.string({ message: "Ingresa el nombre del personaje." }),
  origin: z.string({ message: "Ingresa el origen del personaje." }),
  background: z.string({ message: "Ingresa el trasfondo del personaje." }),
});
