"use server";

import { createLoginSchema } from "@/schemas/auth/auth";
import { getServerSupabaseClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { validateSchema } from "@/schemas";

export interface LoginState {
  message: string | null;
  email?: string;
  password?: string;
}

export async function loginAction(
  state: LoginState,
  form: FormData
): Promise<LoginState> {
  const client = await getServerSupabaseClient();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const loginData = { email, password };

  const valResult = validateSchema(loginData, createLoginSchema);

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
  redirect("/");
}

export async function logoutAction() {
  const client = await getServerSupabaseClient();
  const { error } = await client.auth.signOut({ scope: "local" });

  if (error) {
    console.error("Error logging out:", error);
    throw new Error(error.message);
  }
  revalidatePath("/", "layout");
  redirect("/login");
}
