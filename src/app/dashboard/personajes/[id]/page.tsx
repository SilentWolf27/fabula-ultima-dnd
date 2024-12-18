import PlayerCharacterForm from "@/components/dashboard/character/form/PlayerCharacterForm";
import { getPlayerCharacter } from "@/database/characters/characters";
import { getCharacterClasses } from "@/database/characters/classes";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewCharacterPage({ params }: Props) {
  const id = (await params).id;
  const supabase = await getSupabaseServerClient();

  const character = await getPlayerCharacter(supabase, id);
  const characterClasses = await getCharacterClasses(supabase);

  const characterClassesOptions = characterClasses.map((characterClass) => ({
    label: characterClass.name,
    value: characterClass.identifier,
  }));

  return (
    <PlayerCharacterForm
      character={character}
      action={"update"}
      characterClasses={characterClasses}
      characterClassesOptions={characterClassesOptions}
    />
  );
}
