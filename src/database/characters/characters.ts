import { PlayerCharacter } from "@/interfaces/entity";
import { SupabaseClient } from "@supabase/supabase-js";

export const getPlayerCharacters = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from("characters").select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getPlayerCharacter = async (
  supabase: SupabaseClient,
  id: string
): Promise<PlayerCharacter> => {
  const { data, error } = await supabase
    .from("characters")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createDefaultCharacter = (): PlayerCharacter => {
  return {
    name: "",
    background: "",
    origin: "",
    races: [],
    classes: [],
  };
};

export const createPlayerCharacter = async (
  supabase: SupabaseClient,
  character: PlayerCharacter
): Promise<PlayerCharacter> => {
  if (character.id) throw new Error("El personaje ya tiene un id");

  const { data, error } = await supabase
    .from("characters")
    .insert(character)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
};

export const updatePlayerCharacter = async (
  supabase: SupabaseClient,
  character: PlayerCharacter
): Promise<PlayerCharacter> => {
  if (!character.id) throw new Error("El personaje no tiene un id");

  const { data, error } = await supabase
    .from("characters")
    .update(character)
    .eq("id", character.id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
};
