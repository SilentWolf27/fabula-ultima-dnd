import PlayerCharacterForm from "@/components/dashboard/character/form/PlayerCharacterForm";
import { createDefaultCharacter } from "@/database/characters/characters";
import { getCharacterClasses } from "@/database/characters/classes";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";

export default async function NewCharacterPage() {
  const character = createDefaultCharacter();

  const supabase = await getSupabaseServerClient();
  const characterClasses = await getCharacterClasses(supabase);
  const characterClassesOptions = characterClasses.map((characterClass) => ({
    label: characterClass.name,
    value: characterClass.identifier,
  }));

  return (
    <PlayerCharacterForm
      character={character}
      action={"create"}
      characterClasses={characterClasses}
      characterClassesOptions={characterClassesOptions}
    />
  );
}
