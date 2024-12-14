import { getPlayerCharacters } from "@/database/characters/characters";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import Link from "next/link";

export default async function CharactersPage() {
  const supabase = await getSupabaseServerClient();

  const characters = await getPlayerCharacters(supabase);

  return (
    <div className="py-8 px-6 min-w-[320px] h-full bg-zinc-100">
      <div className="flex justify-end items-center mb-8">
        <Link
          href="/dashboard/personajes/nuevo"
          className="bg-violet-700 text-white text-sm px-3 py-2 rounded-md font-semibold active:bg-violet-900">
          Crear personaje
        </Link>
      </div>

      {characters.length > 0 ? (
        <div className="grid grid-cols-item-list gap-3 overflow-y-auto max-h-full">
          {characters.map((character) => (
            <div>{character.name}</div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-base text-gray-700">
            Hmm... parece que no has creado ningún personaje aún.
          </p>
          <p className="text-base text-gray-700">
            ¡Crea uno para empezar a jugar!
          </p>
        </>
      )}
    </div>
  );
}
