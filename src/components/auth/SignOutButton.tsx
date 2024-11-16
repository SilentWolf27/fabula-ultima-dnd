"use client";

import { signOutAction, SignOutState } from "@/actions/auth/auth";
import { useActionState } from "react";
import styles from "@/styles/components/auth/SignOutButton.module.css";

const initialState: SignOutState = {
  message: null,
};

export const SignOutButton = () => {
  const [state, formAction, isPending] = useActionState<SignOutState>(
    signOutAction,
    initialState
  );

  return (
    <form action={formAction}>
      <button
        type="submit"
        className={styles.signout_button}
        disabled={isPending}>
        Cerrar sesión
      </button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
};
