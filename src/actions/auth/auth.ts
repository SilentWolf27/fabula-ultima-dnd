"use server";

import { loginSchema } from "@/schemas/auth/auth";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { FabulaError, FabulaServerErrorBuilder } from "@/utils/errors/errors";

export async function loginAction(
  loginData: z.infer<typeof loginSchema>
): Promise<{ error: FabulaError | null }> {
  const client = await getSupabaseServerClient();

  const { error } = await client.auth.signInWithPassword(loginData);

  if (error) {
    console.error(error);
    return {
      error: FabulaServerErrorBuilder.Unauthorized(
        "Usuario o contraseña incorrectos"
      ),
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOutAction(): Promise<void> {
  const client = await getSupabaseServerClient();
  //const { error } = await client.auth.signOut({ scope: "local" });

  /* revalidatePath("/", "layout");
  redirect("/login"); */
}
