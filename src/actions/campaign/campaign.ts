"use server";

import {
  createMasterCampaign,
  updateMasterCampaign,
} from "@/database/campaigns/master";
import { Campaign } from "@/interfaces/entity";
import { validateSchema } from "@/schemas";
import {
  createCampaignSchema,
  updateCampaignSchema,
} from "@/schemas/campaign/campaign";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { redirect } from "next/navigation";

export interface CampaignActionResponse {
  success: boolean;
  error: string | null;
}

export const createCampaignAction = async (
  campaign: Campaign
): Promise<CampaignActionResponse> => {
  const valResult = validateSchema(campaign, createCampaignSchema);

  if (!valResult.success) {
    const error = valResult.error || "Error al validar los datos de la campaña";
    return { success: false, error };
  }

  const supabase = await getSupabaseServerClient();

  try {
    await createMasterCampaign(supabase, campaign);
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error al crear la campaña" };
  }

  redirect("/dashboard/mishistorias");
};

export const updateCampaignAction = async (
  campaign: Campaign
): Promise<CampaignActionResponse> => {
  const valResult = validateSchema(campaign, updateCampaignSchema);

  if (!valResult.success) {
    const error = valResult.error || "Error al validar los datos de la campaña";
    return { success: false, error };
  }

  const supabase = await getSupabaseServerClient();

  try {
    await updateMasterCampaign(supabase, campaign);
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error al actualizar la campaña" };
  }

  redirect("/dashboard/mishistorias");
};
