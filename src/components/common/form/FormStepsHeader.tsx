"use client";

import { FormStep } from "@/interfaces/components";
import styles from "@/styles/components/common/Tab/TabContainer.module.css";

interface Props {
  children?: React.ReactNode;
  steps: FormStep[];
  currentStep: string;
}

export const FormStepsHeader = ({ steps, currentStep }: Props) => {
  return (
    <div className="flex justify-between gap-3 w-full max-w-full overflow-x-auto">
      {steps.map((step) => (
        <p
          key={step.key}
          className={`w-full py-2 px-1 bg-transparent border-0 border-t-4 text-left text-sm min-w-[80px] text-gray-700 ${
            step.key === currentStep ? "border-violet-500" : "border-zinc-300"
          }`}>
          {step.title}
        </p>
      ))}
    </div>
  );
};
