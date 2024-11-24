import { BasicCampaign, Campaign } from "@/interfaces/entity";
import type { SupabaseClient } from "@supabase/supabase-js";

export const getMasterCampaigns = async (
  supabase: SupabaseClient
): Promise<BasicCampaign[]> => {
  const { data, error } = await supabase
    .from("campaigns")
    .select(
      `id, name, short_description, status, access_type,
      enrolled_characters:character_campaign(count)`
    )
    .is("deleted_at", null);
  if (error) {
    console.error(error);
    throw new Error("Error al obtener las campañas");
  }
  return data.map((campaign) => ({
    id: campaign.id,
    name: campaign.name,
    short_description: campaign.short_description,
    status: campaign.status,
    access_type: campaign.access_type,
    enrolled_characters: campaign.enrolled_characters[0]?.count,
  }));
};

export const getMasterCampaignDetail = async (
  supabase: SupabaseClient,
  campaignID: number
): Promise<Campaign> => {
  const { data, error } = await supabase
    .from("campaigns")
    .select(
      `name, description, status, access_type,
      short_description, id, settings, max_players,
      characters:character_campaign(name)`
    )
    .eq("id", `${campaignID}`)
    .is("deleted_at", null);
  if (error) {
    console.error(error);
    throw new Error("Error al obtener la campaña");
  }

  if (data.length === 0) {
    throw new Error("Campaña no encontrada");
  }

  return data[0];
};
