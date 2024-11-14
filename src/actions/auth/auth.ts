"use server";

import { validateSchema } from "@/schemas";
import { createLoginSchema } from "@/schemas/auth/auth";
import { getServerSupabaseClient } from "@/utils/supabase/serverClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(form: FormData) {
  const client = await getServerSupabaseClient();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const loginData = { email, password };

  validateSchema(loginData, createLoginSchema);

  const { error } = await client.auth.signInWithPassword(loginData);

  if (error) {
    console.error("Error logging in:", error);
    throw new Error(error.message);
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
