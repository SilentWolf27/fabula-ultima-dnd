import { ZodError } from "zod";

type CreateSchemaCallback = () => Zod.Schema;

export const validateSchema = (
  data: any,
  createSchemaCallback: CreateSchemaCallback
) => {
  try {
    const schema = createSchemaCallback();
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
