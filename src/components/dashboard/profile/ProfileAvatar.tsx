import Image from "next/image";
import supabaseLoader from "@/utils/images/loader";
import { Profile } from "@/interfaces/entity";

interface Props {
  profile: Profile | null;
}

export const ProfileAvatar = async ({ profile }: Props) => {
  return profile ? (
    <article className="flex flex-col items-center gap-4 py-4 px-6">
      <div className="w-full max-w-[180px] aspect-square bg-violet-50 rounded-full relative">
        {profile.image && (
          <Image
            className="w-full h-full rounded-full object-cover"
            src={profile.image}
            alt={profile.username || ""}
            width={100}
            height={100}
            loader={supabaseLoader}
          />
        )}
        <span className="absolute bottom-0 right-0 bg-violet-700 text-white rounded-md text-sm z-10 px-3 py-1 rounded-tr-none">
          {profile.fabulaRole === "dm" ? "Dungeon Master" : "Player"}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="font-metamorphous text-2xl font-semibold">
          {profile.username}
        </h3>

        <p className="text-base font-normal">{profile.email}</p>

        <p className="text-sm font-normal text-zinc-500">{profile.id}</p>
      </div>
    </article>
  ) : null;
};
