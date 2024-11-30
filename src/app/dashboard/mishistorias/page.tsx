import { getMasterCampaigns } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { ItemGrid } from "@/components/common/ItemGrid";
import { MasterCampaignCard } from "@/components/dashboard/campaign/MasterCampaignCard";
import styles from "@/styles/pages/dashboard/pageTemplate.module.css";
import Link from "next/link";

export default async function CampaignsPage() {
  const supabase = await getSupabaseServerClient();

  const campaigns = await getMasterCampaigns(supabase);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard/mishistorias/nueva" className={styles.link}>
          Nueva historia
        </Link>
      </div>

      {campaigns.length > 0 ? (
        <ItemGrid>
          {campaigns.map((campaign) => (
            <MasterCampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </ItemGrid>
      ) : (
        <>
          <p className={styles.text}>
            Hmm... parece que no tienes ninguna historia aún.
          </p>
          <p className={styles.text}>
            ¡Crea una y reúne a tu grupo para la aventura!
          </p>
        </>
      )}
    </div>
  );
}
