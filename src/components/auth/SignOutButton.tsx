"use client";

import { signOutAction } from "@/actions/auth/auth";
import { useActionState } from "react";

export const SignOutButton = () => {
  const [state, formAction, isPending] = useActionState<string | null>(
    signOutAction,
    null
  );

  return (
    <form action={formAction}>
      <button type="submit" className="text-red-600 hover:bg-gray-100 w-full text-left px-4 py-2 rounded-r-sm" disabled={isPending}>
        {isPending ? "Cerrando sesión..." : "Cerrar sesión"}
      </button>

      {state && <p>{state}</p>}
    </form>
  );
};
