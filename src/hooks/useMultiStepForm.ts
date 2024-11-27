import { useState } from "react";
import { useForm } from "./useForm";

export const useMultiStepForm = <T>(initialValues: T, totalSteps: number) => {
  const { formData, updateValue } = useForm<T>(initialValues);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    if (currentStep === totalSteps - 1) return;
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  const goToStep = (step: number) => {
    if (step < 0 || step >= totalSteps) return;
    setCurrentStep(step);
  };

  return {
    formData,
    updateValue,
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    isLastStep: currentStep === totalSteps - 1,
    isFirstStep: currentStep === 0,
  };
};
