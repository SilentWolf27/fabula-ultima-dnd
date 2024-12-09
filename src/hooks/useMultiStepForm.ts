import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";

interface MultiStepFormParams {
  initialValues: any;
  totalSteps: number;
  schema: ZodSchema;
}

export const useMultiStepForm = ({
  initialValues,
  totalSteps,
  schema,
}: MultiStepFormParams) => {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

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

    goToStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
    nextStep,
    prevStep,
    form,
  };
};
