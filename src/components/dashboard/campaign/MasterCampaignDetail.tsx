import {
  createDefaultMasterCampaign,
  getMasterCampaignDetail,
} from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import MasterCampaignForm from "./form/MasterCampaignForm";
import styles from "@/styles/components/dashboard/campaign/MasterCampaignDetail.module.css";

interface Props {
  id?: string;
}

export const MasterCampaignDetail = async ({ id }: Props) => {
  const supabase = await getSupabaseServerClient();
  const campaign = id
    ? await getMasterCampaignDetail(supabase, parseInt(id))
    : createDefaultMasterCampaign();

  return (
    <div className={styles.container}>
      <MasterCampaignForm
        campaign={campaign}
        action={id ? "update" : "create"}
      />
    </div>
  );
};
