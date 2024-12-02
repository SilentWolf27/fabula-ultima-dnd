import PlayerCharacterForm from "@/components/dashboard/character/form/PlayerCharacterForm";
import { createDefaultCharacter } from "@/database/characters/characters";
import { getCharacterClasses } from "@/database/characters/classes";
import styles from "@/styles/pages/dashboard/detailTemplate.module.css";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";

export default async function NewCharacterPage() {
  const supabase = await getSupabaseServerClient();

  const character = createDefaultCharacter();
  const classes = await getCharacterClasses(supabase);

  console.log(classes);
  return (
    <div className={styles.container}>
      <PlayerCharacterForm character={character} action={"create"} />
    </div>
  );
}
