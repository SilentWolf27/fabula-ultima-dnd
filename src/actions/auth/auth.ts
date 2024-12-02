"use server";

import { loginSchema } from "@/schemas/auth/auth";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { validateSchema } from "@/schemas";

export async function loginAction(form: FormData): Promise<void> {
  console.log("loginAction", form);
  const client = await getSupabaseServerClient();

  //const { error } = await client.auth.signInWithPassword(loginData);

  /*  revalidatePath("/", "layout");
  redirect("/dashboard"); */
}

export async function signOutAction(): Promise<void> {
  const client = await getSupabaseServerClient();
  //const { error } = await client.auth.signOut({ scope: "local" });

  /* revalidatePath("/", "layout");
  redirect("/login"); */
}
