import { CharacterClass } from "@/interfaces/entity/character_classes";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getCharacterClasses(
  supabase: SupabaseClient
): Promise<CharacterClass[]> {
  const { data, error } = await supabase
    .from("character_classes")
    .select(
      `id, identifier, name, description, benefits_description, benefits, alias, image`
    )
    .eq("is_active", true)
    .order("name", { ascending: true });

  if (error) {
    throw error;
  }

  return data as CharacterClass[];
}
