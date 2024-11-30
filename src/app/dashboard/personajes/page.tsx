import { ItemGrid } from "@/components/common/ItemGrid";
import { getPlayerCharacters } from "@/database/characters/characters";
import styles from "@/styles/pages/dashboard/pageTemplate.module.css";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import Link from "next/link";

export default async function CharactersPage() {
  const supabase = await getSupabaseServerClient();

  const characters = await getPlayerCharacters(supabase);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/dashboard/personajes/nuevo" className={styles.link}>
          Nuevo personaje
        </Link>
      </div>

      {characters.length > 0 ? (
        <ItemGrid>
          {characters.map((character) => (
            <p key={character.id}>{character.name}</p>
          ))}
        </ItemGrid>
      ) : (
        <>
          <p className={styles.text}>
            Hmm... parece que no tienes ningun personaje.
          </p>
          <p className={styles.text}>¡Crea uno nuevo para empezar a jugar!</p>
        </>
      )}
    </div>
  );
}
