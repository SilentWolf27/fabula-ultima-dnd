import { TabContainer } from "@/components/common/Tab/TabContainer";
import { Campaign } from "@/interfaces/entity";
import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";

interface Props {
  campaign?: Campaign;
}

export default function MasterCampaignForm({ campaign }: Props) {
  return (
    <div className={styles.container}>
      <TabContainer></TabContainer>
    </div>
  );
}
