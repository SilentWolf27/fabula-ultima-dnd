import MasterCampaignForm from "@/components/dashboard/campaign/form/MasterCampaignForm";
import { createDefaultMasterCampaign } from "@/database/campaigns/master";
import styles from "@/styles/pages/dashboard/detailTemplate.module.css";

export default function NewCampaignPage() {
  const campaign = createDefaultMasterCampaign();
  return (
    <div className={styles.container}>
      <MasterCampaignForm campaign={campaign} action={"create"} />
    </div>
  );
}
