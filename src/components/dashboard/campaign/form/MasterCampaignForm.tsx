"use client";

import { TabContainer } from "@/components/common/Tab/TabContainer";
import { Campaign } from "@/interfaces/entity";

import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";
import { Tab } from "@/interfaces/components";
import { useMultiStepForm, useTab } from "@/hooks";
import { ArrowLeft02Icon, ArrowRight01Icon } from "hugeicons-react";

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
    goToStep,
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

  return (
    <div className={styles.container}>
      <TabContainer tabs={tabs} onTabChange={handleTabChange}>
        {tabs[currentStep].key}
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
            <button onClick={handleNextStep} className={styles.next_button}>
              Siguiente
            </button>
          )}
        </div>
      </TabContainer>
    </div>
  );
}
