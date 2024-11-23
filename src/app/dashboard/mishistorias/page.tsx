import { ItemGrid } from "@/components/common/ItemGrid";
import { getMasterCampaigns } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import styles from "@/styles/pages/dashboard/campaigns.module.css";

export default async function CampaignsPage() {
  const supabase = await getSupabaseServerClient();

  const campaigns = await getMasterCampaigns(supabase);
  console.log(campaigns);
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Historias</h2>

      <ItemGrid>
        {campaigns.map((campaign) => (
          <div key={campaign.id}>{campaign.name}</div>
        ))}
      </ItemGrid>
    </main>
  );
}
