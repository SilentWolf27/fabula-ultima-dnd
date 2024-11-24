import { MasterCampaignDetail } from "@/components/dashboard/campaign/MasterCampaignDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CampaignDetailPage({ params }: Props) {
  const id = (await params).id;
  return <MasterCampaignDetail id={id} />;
}
