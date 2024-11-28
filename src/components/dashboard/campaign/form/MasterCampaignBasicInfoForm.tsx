import { Input, Select } from "@/components/common/form";
import {
  Campaign,
  campaignAccessTypeOptions,
  CampaignStatus,
  campaignStatusOptions,
} from "@/interfaces/entity";

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

      <Select
        label="Tipo de acceso"
        name="access_type"
        value={campaign.access_type}
        onChange={updateValue}
        options={campaignAccessTypeOptions}
        error={formErrors.status}
      />

      <Select
        label="Estado"
        name="status"
        value={campaign.status}
        onChange={updateValue}
        error={formErrors.status}
        options={campaignStatusOptions}
        disabled={
          campaign.status === CampaignStatus.IN_COURSE ||
          campaign.status === CampaignStatus.FINISHED
        }
      />

      <Input
        label="Descripción"
        name="description"
        value={campaign.description}
        onChange={updateValue}
        required={true}
        error={formErrors.description}
        type="textarea"
      />

      <Input
        label="Descripción corta"
        name="short_description"
        value={campaign.short_description}
        onChange={updateValue}
        required={true}
        error={formErrors.short_description}
        type="textarea"
      />
    </>
  );
}
