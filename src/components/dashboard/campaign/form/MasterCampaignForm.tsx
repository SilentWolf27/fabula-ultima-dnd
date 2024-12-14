"use client";

import { ArrowLeft02Icon } from "hugeicons-react";
import { Campaign } from "@/interfaces/entity";
import { MasterCampaignSettingsForm } from "./MasterCampaignSettingsForm";
import { FormStep } from "@/interfaces/components";
import { FormStepsHeader } from "@/components/common/form/FormStepsHeader";
import { useMultiStepForm } from "@/hooks";
import MasterCampaignBasicInfoForm from "./MasterCampaignBasicInfoForm";
import {
  CampaignActionResponse,
  createCampaignAction,
  updateCampaignAction,
} from "@/actions/campaign/campaign";
import { Form } from "@/components/ui/form";
import {
  createCampaignSchema,
  updateCampaignSchema,
} from "@/schemas/campaign/campaign";
import { Button } from "@/components/ui/button";

interface Props {
  campaign: Campaign;
  action: "create" | "update";
}

const steps: FormStep[] = [
  {
    title: "Información básica",
    key: "basic",
    fields: ["name", "description", "short_description", "access_type"],
  },
  {
    title: "Configuración",
    key: "config",
    fields: ["start_level", "max_level", "start_zenit", "start_fabula_points"],
  },
];

export default function MasterCampaignForm({ campaign, action }: Props) {
  const schema =
    action === "create" ? createCampaignSchema : updateCampaignSchema;

  const { currentStep, isFirstStep, isLastStep, nextStep, prevStep, form } =
    useMultiStepForm({
      initialValues: campaign,
      totalSteps: steps.length,
      schema,
    });

  const handleNextStep = async () => {
    const fields = steps[currentStep].fields;

    const isValid = await form.trigger(fields, { shouldFocus: true });

    if (!isValid) return;
    nextStep();
  };

  const handlePrevStep = () => prevStep();

  const onSubmit = async (values: Campaign) => {
    let result: CampaignActionResponse | null = null;

    if (action === "create") {
      result = await createCampaignAction(values);
    } else {
      result = await updateCampaignAction(values);
    }

    if (result && !result.success) {
      form.setError("root.server", {
        type: "server",
        message: result.error || "Error al guardar la campaña",
      });
    }
  };

  return (
    <div className=" max-h-full py-6 px-4 h-full flex flex-col">
      <FormStepsHeader steps={steps} currentStep={steps[currentStep].key} />

      <Form {...form}>
        <form
          className="flex flex-col gap-6 h-full overflow-hidden max-h-full mt-6"
          onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 h-full flex-1 overflow-y-auto max-h-full px-2">
            {steps[currentStep].key === "basic" && (
              <MasterCampaignBasicInfoForm form={form} />
            )}

            {steps[currentStep].key === "config" && (
              <MasterCampaignSettingsForm form={form} />
            )}
          </div>
          <div className="flex justify-end gap-4 w-full">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={isFirstStep}
              className="flex items-center gap-1 text-violet-700 border-0 px-4 py-2 rounded-sm font-semibold text-base disabled:text-gray-400">
              <ArrowLeft02Icon size={18} />
              Atras
            </Button>
            {isLastStep ? (
              <Button
                className="bg-violet-700 text-white font-semibold px-3 py-2 rounded-sm border-0 text-sm min-w-[100px] disabled:bg-violet-300 hover:bg-violet-900"
                disabled={form.formState.isSubmitting}
                type="submit">
                {form.formState.isSubmitting ? "Guardando..." : "Guardar"}
              </Button>
            ) : (
              <button
                onClick={handleNextStep}
                className="bg-violet-700 text-white font-semibold px-3 py-2 rounded-sm border-0 text-sm min-w-[100px] disabled:bg-violet-300 hover:bg-violet-900"
                type="button">
                Siguiente
              </button>
            )}
            {form.formState.errors.root?.server && (
              <p className="text-red-600 text-sm text-center">
                {form.formState.errors.root.server.message}
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
