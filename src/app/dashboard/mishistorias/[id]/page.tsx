import { getMasterCampaignDetail } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import styles from "@/styles/pages/dashboard/detailTemplate.module.css";
import MasterCampaignForm from "@/components/dashboard/campaign/form/MasterCampaignForm";
import { updateCampaignSchema } from "@/schemas/campaign/campaign";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CampaignDetailPage({ params }: Props) {
  const id = (await params).id;

  const supabase = await getSupabaseServerClient();
  const campaign = await getMasterCampaignDetail(supabase, parseInt(id));

  return (
    <div className={styles.container}>
      <MasterCampaignForm campaign={campaign} action={"update"} schema={updateCampaignSchema}/>
    </div>
  );
}
