import { z } from "zod";

export const createLoginSchema = () => {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "El correo electrónico es requerido" })
      .email({ message: "La dirección de correo electrónico no es válida" }),
    password: z.string().min(1, { message: "La contraseña es requerida" }),
  });

  return schema;
};
