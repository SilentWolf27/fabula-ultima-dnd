import styles from "@/styles/components/common/form/Select.module.css";
import { ChangeEventHandler } from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string, error: string | null) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string | null;
  disabled?: boolean;
}

export const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  required,
  error,
  disabled = false,
}: Props) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    const { value, name } = target;

    onChange(name, value, null);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
