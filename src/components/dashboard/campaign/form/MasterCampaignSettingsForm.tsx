import { Input } from "@/components/common/form";
import { Campaign } from "@/interfaces/entity";

interface Props {
  campaign: Campaign;
  updateValue: (key: string, value: any, error: string | null) => void;
  formErrors?: Record<string, string | null>;
}

export const MasterCampaignSettingsForm = ({
  campaign,
  updateValue,
  formErrors = {},
}: Props) => {
  const settings = campaign.settings;
  return (
    <>
      <Input
        label="Nivel inicial"
        name="settings.start_level"
        value={settings.start_level ? `${settings.start_level}` : ""}
        onChange={updateValue}
        placeholder="Ej. 5"
        error={formErrors.start_level}
        type="number"
      />

      <Input
        label="Nivel máximo"
        name="settings.max_level"
        value={settings.max_level ? `${settings.max_level}` : ""}
        onChange={updateValue}
        placeholder="Ej. 20"
        error={formErrors.max_level}
        type="number"
      />

      <Input
        label="Zenit inicial"
        name="settings.start_zenit"
        value={settings.start_zenit ? `${settings.start_zenit}` : ""}
        onChange={updateValue}
        placeholder="Ej. 1000"
        error={formErrors.start_zenit}
        type="number"
      />

      <Input
        label="Puntos de Fábula iniciales"
        name="settings.start_fabula_points"
        value={
          settings.start_fabula_points ? `${settings.start_fabula_points}` : ""
        }
        onChange={updateValue}
        placeholder="Ej. 2"
        error={formErrors.start_fabula_points}
        type="number"
      />
    </>
  );
};
