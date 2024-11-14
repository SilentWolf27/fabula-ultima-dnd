import { ZodError } from "zod";

type CreateSchema = () => Zod.Schema;

export const validateSchema = (data: any, createSchema: CreateSchema) => {
  try {
    const schema = createSchema();
    schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) handleZodError(error);

    throw error;
  }
};

const handleZodError = (error: ZodError) => {
  const issues = error.issues;

  const message = issues.length > 0 ? issues[0].message : "Invalid data";

  throw new Error(message);
};
