import { getMasterCampaignDetail } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CampaignDetailPage({ params }: Props) {
  const id = (await params).id;

  const supabase = await getSupabaseServerClient();
  const campaign = await getMasterCampaignDetail(supabase, parseInt(id));
  console.log(campaign);
  return <h1>Campaign Detail Page</h1>;
}
