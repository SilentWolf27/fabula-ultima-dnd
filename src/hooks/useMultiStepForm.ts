import { useState } from "react";
import { useForm } from "./useForm";

export const useMultiStepForm = <T extends Record<string, any>>(
  initialValues: T,
  totalSteps: number
) => {
  const { formData, updateValue, formErrors } = useForm<T>(initialValues);
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
    currentStep,
    formData,
    formErrors,
    goToStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
    nextStep,
    prevStep,
    updateValue,
  };
};
