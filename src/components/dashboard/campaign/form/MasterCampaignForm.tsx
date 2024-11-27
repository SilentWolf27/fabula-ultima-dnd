"use client";

import { TabContainer } from "@/components/common/Tab/TabContainer";
import { Campaign } from "@/interfaces/entity";

import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";
import { Tab } from "@/interfaces/components";
import { useMultiStepForm, useTab } from "@/hooks";
import { ArrowLeft02Icon, ArrowRight01Icon } from "hugeicons-react";
import MasterCampaignBasicInfoForm from "./MasterCampaignBasicInfoForm";

interface Props {
  campaign: Campaign;
}

const defaultTabs: Tab[] = [
  { title: "Información básica", key: "basic", disabled: true, active: true },
  { title: "Configuración", key: "config", disabled: true, active: false },
  { title: "Jugadores", key: "players", disabled: true, active: false },
];

export default function MasterCampaignForm({ campaign }: Props) {
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
  } = useMultiStepForm<Campaign>(campaign, tabs.length);

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
    if (currentStep === 0) return isFirstStepValid();

    return true;
  };

  const isFirstStepValid = () => {
    const firstStepKeys = ["name"];

    return firstStepKeys.every((key) => !formErrors[key]);
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
          </div>

          <div className={styles.buttons}>
            <button
              onClick={handlePrevStep}
              disabled={isFirstStep}
              className={styles.prev_button}>
              <ArrowLeft02Icon size={20} />
              Atras
            </button>
            {isLastStep ? (
              <button className={styles.next_button}>Guardar</button>
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
