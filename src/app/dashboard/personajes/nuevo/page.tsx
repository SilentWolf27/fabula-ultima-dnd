import PlayerCharacterForm from "@/components/dashboard/character/form/PlayerCharacterForm";
import { createDefaultCharacter } from "@/database/characters/characters";

export default async function NewCharacterPage() {
  const character = createDefaultCharacter();

  return <PlayerCharacterForm character={character} action={"create"} />;
}
