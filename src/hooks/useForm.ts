import { useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState<T>(initialValues);

  const updateValue = (key: string, value: any) => {
    const nestedKeys: string[] = key.split(".");

    if (nestedKeys.length === 1) {
      setFormData({ ...formData, [key]: value });
      return;
    }

    let nestedObject: any = formData;
    let lastKey: string = nestedKeys[nestedKeys.length - 1];
    for (let i = 0; i < nestedKeys.length - 1; i++) {
      nestedObject = nestedObject[nestedKeys[i]];
    }

    nestedObject[lastKey] = value;

    setFormData({ ...formData });
  };
  return {
    formData,
    updateValue,
  };
};
