import { ZodError } from "zod";

type CreateSchema = () => Zod.Schema;

export const validateSchema = (data: any, createSchema: CreateSchema) => {
  try {
    const schema = createSchema();
    const { success, error } = schema.safeParse(data);

    return { success, error: error ? handleZodError(error) : null };
  } catch (error) {
    console.error("Error validating schema:", error);
    throw error;
  }
};

const handleZodError = (error: ZodError) => {
  const issues = error.errors;

  const message = issues.length > 0 ? issues[0].message : "Error de validación";

  return message;
};
