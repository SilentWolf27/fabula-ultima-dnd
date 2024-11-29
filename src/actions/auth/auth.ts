"use server";

import { loginSchema } from "@/schemas/auth/auth";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { validateSchema } from "@/schemas";

export interface LoginState {
  message: string | null;
  email?: string;
  password?: string;
}

export interface SignOutState {
  message: string | null;
}

export async function loginAction(
  state: LoginState,
  form: FormData
): Promise<LoginState> {
  const client = await getSupabaseServerClient();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const loginData = { email, password };

  const valResult = validateSchema(loginData, loginSchema);

  if (!valResult.success) {
    return {
      ...loginData,
      message: valResult.error,
    };
  }

  const { error } = await client.auth.signInWithPassword(loginData);

  if (error) {
    console.error("Error logging in:", error);
    return {
      ...loginData,
      message: "Usuario o contraseña incorrectos",
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOutAction(
  state: SignOutState
): Promise<SignOutState> {
  const client = await getSupabaseServerClient();
  const { error } = await client.auth.signOut({ scope: "local" });

  if (error) {
    console.error("Error logging out:", error);
    return {
      message: "Error cerrando sesión",
    };
  }
  revalidatePath("/", "layout");
  redirect("/login");
}
