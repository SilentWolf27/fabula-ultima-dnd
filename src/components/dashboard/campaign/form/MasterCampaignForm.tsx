"use client";

import { ArrowLeft02Icon } from "hugeicons-react";
import { Campaign } from "@/interfaces/entity";
import { MasterCampaignSettingsForm } from "./MasterCampaignSettingsForm";
import { Tab } from "@/interfaces/components";
import { TabContainer } from "@/components/common/Tab/TabContainer";
import { useMultiStepForm, useTab } from "@/hooks";
import MasterCampaignBasicInfoForm from "./MasterCampaignBasicInfoForm";
import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";
import {
  CampaignActionResponse,
  createCampaignAction,
  updateCampaignAction,
} from "@/actions/campaign/campaign";
import { useState } from "react";

interface Props {
  campaign: Campaign;
  action: "create" | "update";
}

const defaultTabs: Tab[] = [
  { title: "Información básica", key: "basic", disabled: true, active: true },
  { title: "Configuración", key: "config", disabled: true, active: false },
  /* { title: "Jugadores", key: "players", disabled: true, active: false }, */
];

export default function MasterCampaignForm({ campaign, action }: Props) {
  const { currentTab, handleTabChange, tabs } = useTab(defaultTabs, {
    activePrevTabs: true,
  });

  const {
    currentStep,
    formData,
    formErrors,
    isFirstStep,
    isLastStep,
    nextStep,
    prevStep,
    updateValue,
    setErrors,
  } = useMultiStepForm<Campaign>(campaign, tabs.length);

  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    const nextTab = tabs[currentStep + 1];

    if (nextTab) {
      handleTabChange(nextTab);
    }

    nextStep();
  };

  const handlePrevStep = () => {
    const prevTab = tabs[currentStep - 1];

    if (prevTab) {
      handleTabChange(prevTab);
    }

    prevStep();
  };

  const isFormValid = () => {
    if (currentStep === 0) return isBasicInfoValid();

    if (currentStep === 1) return isSettingsValid();

    return true;
  };

  const isBasicInfoValid = () => {
    const firstStepKeys: (keyof Campaign)[] = [
      "name",
      "description",
      "short_description",
      "access_type",
    ];

    return firstStepKeys.every((key) => !formErrors[key] && formData[key]);
  };

  const isSettingsValid = () => {
    const secondStepKeys: (keyof Campaign["settings"])[] = [
      "start_level",
      "max_level",
      "start_zenit",
      "start_fabula_points",
    ];

    return secondStepKeys.every(
      (key) => !formErrors[key] && formData.settings[key]
    );
  };

  const save = async () => {
    setIsLoading(true);

    let result: CampaignActionResponse | null = null;

    if (action === "create") {
      result = await createCampaignAction(formData);
    } else {
      result = await updateCampaignAction(formData);
    }

    if (result && !result.success) {
      setErrors({ ...formErrors, general: result.error });
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <TabContainer tabs={tabs} onTabChange={handleTabChange}>
        <div className={styles.form_container}>
          <div className={styles.form}>
            {currentTab.key === "basic" && (
              <MasterCampaignBasicInfoForm
                campaign={formData}
                updateValue={updateValue}
                formErrors={formErrors}
              />
            )}

            {currentTab.key === "config" && (
              <MasterCampaignSettingsForm
                campaign={formData}
                updateValue={updateValue}
                formErrors={formErrors}
              />
            )}
          </div>
          {formErrors.general && (
            <p className={styles.error}>{formErrors.general}</p>
          )}
          <div className={styles.buttons}>
            <button
              onClick={handlePrevStep}
              disabled={isFirstStep}
              className={styles.prev_button}>
              <ArrowLeft02Icon size={20} />
              Atras
            </button>
            {isLastStep ? (
              <button
                className={styles.next_button}
                onClick={save}
                disabled={isLoading || !isFormValid()}>
                {isLoading ? "Guardando..." : "Guardar"}
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className={styles.next_button}
                disabled={!isFormValid()}>
                Siguiente
              </button>
            )}
          </div>
        </div>
      </TabContainer>
    </div>
  );
}
