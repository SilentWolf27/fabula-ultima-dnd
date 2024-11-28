import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const updateValue = (
    key: string,
    value: any,
    error: string | null = null
  ) => {
    const nestedKeys: string[] = key.split(".");
    setFormData((prev) => {
      const updatedForm = JSON.parse(JSON.stringify(prev));
      let nestedForm = updatedForm;

      for (let i = 0; i < nestedKeys.length - 1; i++) {
        const currentKey = nestedKeys[i];

        if (!nestedForm[currentKey]) {
          nestedForm[currentKey] = {};
        }

        nestedForm = nestedForm[currentKey];
      }

      nestedForm[nestedKeys[nestedKeys.length - 1]] = value;
      return updatedForm;
    });

    setErrors((prev) => {
      return { ...prev, [key]: error };
    });
  };
  return {
    formData,
    updateValue,
    formErrors: errors,
  };
};
