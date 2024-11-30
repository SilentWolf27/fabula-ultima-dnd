import PlayerCharacterForm from "@/components/dashboard/character/form/PlayerCharacterForm";
import { createDefaultCharacter } from "@/database/characters/characters";
import styles from "@/styles/pages/dashboard/detailTemplate.module.css";

export default function NewCharacterPage() {
  const character = createDefaultCharacter();

  return (
    <div className={styles.container}>
      <PlayerCharacterForm character={character} action={"create"} />
    </div>
  );
}
