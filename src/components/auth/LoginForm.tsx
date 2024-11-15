"use client";

import { loginAction, LoginState } from "@/actions/auth/auth";
import styles from "@/styles/components/auth/LoginForm.module.css";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";
import { useActionState, useState } from "react";

const initialFormState = {
  message: null,
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formState, formAction, isFormPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, initialFormState);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className={styles.input}
          placeholder="username@fabula.com"
          defaultValue={formState.email}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <div className={styles.password_container}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={styles.input}
            placeholder={showPassword ? "Contraseña" : "*********"}
            defaultValue={formState.password}
          />
          <button
            type="button"
            className={styles.eye_button}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewOffSlashIcon /> : <ViewIcon />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className={styles.submit_button}
        disabled={isFormPending}>
        {isFormPending ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>

      {formState.message && (
        <p className={styles.error_message}>{formState.message}</p>
      )}
    </form>
  );
};
