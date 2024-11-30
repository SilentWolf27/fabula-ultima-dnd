import { Input, Select } from "@/components/common/form";
import { PlayerCharacter } from "@/interfaces/entity";

interface Props {
  character: PlayerCharacter;
  updateValue: (key: string, value: any, error: string | null) => void;
  formErrors?: Record<string, string | null>;
}

export default function PlayerCharacterAboutForm({
  character,
  updateValue,
  formErrors = {},
}: Props) {
  return (
    <>
      <Input
        label="Nombre"
        name="name"
        value={character.name}
        onChange={updateValue}
        placeholder="Ej. Personaje de prueba"
        required={true}
        error={formErrors.name}
      />

      <Input
        label="Origen"
        name="origin"
        value={character.origin}
        onChange={updateValue}
        placeholder="Ej. El bosque de los elfos"
        required={true}
        error={formErrors.origin}
      />

      <Input
        label="Trasfondo"
        name="background"
        value={character.background}
        onChange={updateValue}
        placeholder="Ej. Hijo de un elfo y un humano"
        type="textarea"
      />
    </>
  );
}
