import MasterCampaignForm from "@/components/dashboard/campaign/form/MasterCampaignForm";
import { createDefaultMasterCampaign } from "@/database/campaigns/master";
import { createCampaignSchema } from "@/schemas/campaign/campaign";

export default function NewCampaignPage() {
  const campaign = createDefaultMasterCampaign();
  return <MasterCampaignForm campaign={campaign} action={"create"}/>;
}
