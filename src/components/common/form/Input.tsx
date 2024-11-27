import styles from "@/styles/components/common/form/Input.module.css";
import { Alert02Icon } from "hugeicons-react";
import { ChangeEventHandler } from "react";

interface Props {
  label?: string;
  name: string;
  onChange: (name: string, value: string, error: string | null) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
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

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value, name } = target;

    const error = checkForErrors(value);

    onChange(name, value, error);
  };
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${!!error ? styles.input_error : ""}`}
        id={name}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
      />

      {error && (
        <div className={styles.error_container}>
          <Alert02Icon className={styles.icon} size={20} />
          <p className={styles.error}>{error}</p>
        </div>
      )}
    </div>
  );
};
