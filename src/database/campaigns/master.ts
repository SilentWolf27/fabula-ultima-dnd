import {
  BasicCampaign,
  Campaign,
  CampaignAccessType,
  CampaignStatus,
} from "@/interfaces/entity";
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
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

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
    .is("deleted_at", null)
    .returns<Campaign>()
    .single();

  if (data === null) {
    throw new Error("Campaña no encontrada");
  }

  if (error) {
    throw new Error("Error al obtener la campaña");
  }

  return data;
};

export const createMasterCampaign = async (
  supabase: SupabaseClient,
  campaign: Partial<Campaign>
): Promise<Campaign> => {
  const newCampaign = JSON.parse(JSON.stringify(campaign));

  if (newCampaign.id)
    throw new Error("No se puede crear una campaña con un ID");

  delete newCampaign.characters;

  const { error, data } = await supabase
    .from("campaigns")
    .insert(newCampaign)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error al crear la campaña");
  }

  return data;
};

export const updateMasterCampaign = async (
  supabase: SupabaseClient,
  campaign: Campaign | Partial<Campaign>
): Promise<void> => {
  if (!campaign.id)
    throw new Error("No se ha proporcionado el ID de la campaña");

  const updateData = {
    ...campaign,
  };

  delete updateData.characters;

  const { error } = await supabase
    .from("campaigns")
    .update(updateData)
    .eq("id", campaign.id);

  if (error) {
    console.error(error);
    throw new Error("Error al actualizar la campaña");
  }
};

export const createDefaultMasterCampaign = (): Campaign => ({
  name: "",
  description: "",
  short_description: "",
  status: CampaignStatus.HIDDEN,
  access_type: CampaignAccessType.PUBLIC,
  settings: {
    start_level: 1,
    max_level: 99,
    start_zenit: 500,
    start_fabula_points: 2,
  },
  max_players: 10,
  characters: [],
});
