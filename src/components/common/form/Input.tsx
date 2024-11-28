import styles from "@/styles/components/common/form/Input.module.css";
import { Alert02Icon } from "hugeicons-react";
import { ChangeEventHandler } from "react";

interface Props {
  label?: string;
  name: string;
  onChange: (name: string, value: string, error: string | null) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "textarea";
  value: string;
  error?: string | null;
  required?: boolean;
}

export const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
  required = false,
  error,
}: Props) => {
  const checkForErrors = (value: string) => {
    if (required && !value) {
      return "Este campo es requerido";
    }

    return null;
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const name = target.name;
    let value: any = target.value;

    const error = checkForErrors(value);

    if (type === "number") {
      value = Number.isNaN(Number(value)) ? 0 : Number(value);
    }

    onChange(name, value, error);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}></textarea>
      ) : (
        <input
          className={styles.input}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}

      {error && (
        <div className={styles.error_container}>
          <Alert02Icon className={styles.icon} size={20} />
          <p className={styles.error}>{error}</p>
        </div>
      )}
    </div>
  );
};
