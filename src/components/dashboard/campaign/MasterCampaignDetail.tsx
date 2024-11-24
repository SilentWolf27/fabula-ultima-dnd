import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import MasterCampaignForm from "./form/MasterCampaignForm";
import { getMasterCampaignDetail } from "@/database/campaigns/master";
import styles from "@/styles/components/dashboard/campaign/MasterCampaignDetail.module.css";

interface Props {
  id: string;
}

export const MasterCampaignDetail = async ({ id }: Props) => {
  const supabase = await getSupabaseServerClient();
  const campaign = await getMasterCampaignDetail(supabase, parseInt(id));
  return (
    <div className={styles.container}>
      <MasterCampaignForm campaign={campaign} />
    </div>
  );
};
