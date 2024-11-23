import type { SupabaseClient } from "@supabase/supabase-js";

export const getMasterCampaigns = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase.from("campaigns")
    .select(`id, name, description, status,
      enrolled_characters:character_campaign(count)`);
  if (error) {
    console.error(error);
    throw new Error("Error al obtener las campañas");
  }
  return data;
};

export const getAvailableCampaigns = async (supabase: SupabaseClient) => {
  return [];
};
