import { Input } from "@/components/common/form";
import { Campaign } from "@/interfaces/entity";
import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignBasicInfoForm.module.css";

interface Props {
  campaign: Campaign;
  updateValue: (key: string, value: any, error: string | null) => void;
  formErrors?: Record<string, string | null>;
}

export default function MasterCampaignBasicInfoForm({
  campaign,
  updateValue,
  formErrors = {},
}: Props) {
  return (
    <>
      <Input
        label="Nombre"
        name="name"
        value={campaign.name}
        onChange={updateValue}
        placeholder="Ej. Campaña de prueba"
        required={true}
        error={formErrors.name}
      />
    </>
  );
}
