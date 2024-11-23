import { getMasterCampaigns } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { ItemGrid } from "@/components/common/ItemGrid";
import { MasterCampaignCard } from "@/components/dashboard/campaign/MasterCampaignCard";
import styles from "@/styles/pages/dashboard/campaigns.module.css";

export default async function CampaignsPage() {
  const supabase = await getSupabaseServerClient();

  const campaigns = await getMasterCampaigns(supabase);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Historias</h2>

      <ItemGrid className={styles.items_container}>
        {campaigns.map((campaign) => (
          <MasterCampaignCard campaign={campaign} key={campaign.id} />
        ))}
      </ItemGrid>
    </div>
  );
}
