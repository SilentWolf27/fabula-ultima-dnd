"use client";

import { ArrowLeft02Icon } from "hugeicons-react";
import { PlayerCharacter } from "@/interfaces/entity";
import { Tab } from "@/interfaces/components";
import { TabContainer } from "@/components/common/Tab/TabContainer";
import { useMultiStepForm, useTab } from "@/hooks";
import { useState } from "react";
import styles from "@/styles/components/dashboard/dashboardFormTemplate.module.css";
import PlayerCharacterAboutForm from "./PlayerCharacterAboutForm";
import {
  CharacterActionResponse,
  createPlayerCharacterAction,
} from "@/actions/character/character";

interface Props {
  character: PlayerCharacter;
  action: "create" | "update";
}

const defaultTabs: Tab[] = [
  { title: "Sobre ti", key: "about", disabled: true, active: true },
  { title: "Clase y raza", key: "classes", disabled: true },
];

export default function PlayerCharacterForm({ character, action }: Props) {
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
  } = useMultiStepForm<PlayerCharacter>(character, tabs.length);

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

    return true;
  };

  const isBasicInfoValid = () => {
    const firstStepKeys: (keyof PlayerCharacter)[] = ["name", "origin"];

    return firstStepKeys.every((key) => !formErrors[key] && formData[key]);
  };

  const save = async () => {
    setIsLoading(true);

    let result: CharacterActionResponse | null = null;

    if (action === "create") {
      result = await createPlayerCharacterAction(formData);
    } else {
      // result = await updatePlayerCharacter(supabase, formData);
    }

    if (result && !result.success) {
      setErrors({ general: result.error });
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <TabContainer tabs={tabs} onTabChange={handleTabChange}>
        <div className={styles.form_container}>
          <div className={styles.form}>
            {currentTab.key === "about" && (
              <PlayerCharacterAboutForm
                character={formData}
                updateValue={updateValue}
                formErrors={formErrors}
              />
            )}

            {currentTab.key === "classes" && (
              <p className={styles.text}>Configuración de la cuenta</p>
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
