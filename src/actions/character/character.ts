"use server";

import { createPlayerCharacter } from "@/database/characters/characters";
import { PlayerCharacter } from "@/interfaces/entity";
import { validateSchema } from "@/schemas";
import { createCharacterSchema } from "@/schemas/characters/character";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";

export interface CharacterActionResponse {
  success: boolean;
  error: string | null;
}

export const createPlayerCharacterAction = async (
  character: PlayerCharacter
): Promise<CharacterActionResponse> => {
  const valResult = validateSchema(character, createCharacterSchema);

  if (!valResult.success) {
    const error = valResult.error || "Error al validar los datos";
    return { success: false, error };
  }

  const supabase = await getSupabaseServerClient();

  try {
    await createPlayerCharacter(supabase, character);
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error al crear el personaje" };
  }

  redirect("/dashboard/personajes");
};
