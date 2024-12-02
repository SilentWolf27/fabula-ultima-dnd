import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "La dirección de correo electrónico es requerida" })
    .email({ message: "Ingresa una dirección de correo electrónico válida" }),
  password: z.string().min(1, { message: "La contraseña es requerida" }),
});
