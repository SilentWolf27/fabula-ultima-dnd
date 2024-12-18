"use client";

import { PlayerCharacter } from "@/interfaces/entity";
import { getCharacterClassName } from "@/utils/fabula/Classes";
import { useRouter } from "next/navigation";

interface Props {
  character: PlayerCharacter;
}

export const PlayerCharacterCard = ({ character }: Props) => {
  const router = useRouter();

  const redirectToCharacter = () =>
    router.push(`/dashboard/personajes/${character.id}`);

  return (
    <div
      className="bg-white rounded-lg py-3 px-4"
      onClick={redirectToCharacter}>
      <div className="flex items-center gap-4">
        <h3 className="text-base font-semibold">{character.name}</h3>
      </div>
      <div className="flex gap-3 overflow-hidden flex-wrap mt-4">
        {character.classes.map((c) => (
          <div
            key={c}
            className={`text-xs bg-orange-100 text-orange-900 rounded-xl py-1 px-2 font-semibold`}>
            <p>{getCharacterClassName(c)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
