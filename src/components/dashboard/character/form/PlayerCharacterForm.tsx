"use client";

import { PlayerCharacter } from "@/interfaces/entity";
import { useMultiStepForm } from "@/hooks";
import PlayerCharacterAboutForm from "./PlayerCharacterAboutForm";
import {
  CharacterActionResponse,
  createPlayerCharacterAction,
} from "@/actions/character/character";
import { FormStep } from "@/interfaces/components";
import {
  createPlayerCharacterSchema,
  updatePlayerCharacterSchema,
} from "@/schemas/characters/character";
import { FormStepsHeader } from "@/components/common/form/FormStepsHeader";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { PlayerCharacterClassesForm } from "./PlayerCharacterClassesForm";
import { CharacterClass } from "@/interfaces/entity/character_classes";

interface Props {
  character: PlayerCharacter;
  action: "create" | "update";
  characterClassesOptions: { label: string; value: string }[];
  characterClasses: CharacterClass[];
}

const steps: FormStep[] = [
  {
    title: "Acerca de",
    key: "about",
    fields: ["name", "origin", "races"],
  },
  {
    title: "Clases",
    key: "classes",
    fields: ["classes"],
  },
];

export default function PlayerCharacterForm({
  character,
  action,
  characterClasses,
  characterClassesOptions,
}: Props) {
  const schema =
    action === "create"
      ? createPlayerCharacterSchema
      : updatePlayerCharacterSchema;

  const { currentStep, isFirstStep, isLastStep, nextStep, prevStep, form } =
    useMultiStepForm({
      initialValues: character,
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

  const onSubmit = async (values: PlayerCharacter) => {
    let result: CharacterActionResponse | null = null;

    if (action === "create") {
      result = await createPlayerCharacterAction(values);
    } else {
      // result = await updatePlayerCharacter(supabase, formData);
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
            {steps[currentStep].key === "about" && (
              <PlayerCharacterAboutForm form={form} />
            )}
            {steps[currentStep].key === "classes" && (
              <PlayerCharacterClassesForm
                form={form}
                classes={characterClasses}
                classesOptions={characterClassesOptions}
              />
            )}
          </div>
          <div className="flex justify-end gap-4 w-full">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={isFirstStep}
              className="flex items-center gap-1 text-violet-700 border-0 px-4 py-2 rounded-sm font-semibold text-base disabled:text-gray-400">
              <ChevronLeft size={16} />
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
