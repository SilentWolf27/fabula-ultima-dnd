import { SignOutButton } from "@/components/auth/SignOutButton";
import { ProfileAvatar } from "@/components/dashboard/profile/ProfileAvatar";
import { getProfile } from "@/database/account/profile";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Profile() {
  const client = await getSupabaseServerClient();
  const profile = await getProfile(client);
  return (
    <div className="flex flex-col justify-center pt-9 font-lora">
      <h2 className="text-xl font-metamorphous text-center">Perfil</h2>
      <section>
        <ProfileAvatar profile={profile} />
      </section>
      <div className="px-3 py-4 bg-zinc-100 flex flex-col gap-4">
        <section className="bg-white p-2 rounded-sm">
          <Link
            href="perfil/editar"
            className="decoration-0 text-gray-800 py-2 px-4 text-base flex justify-between items-center">
            Editar perfil
            <ChevronRight size={24} />
          </Link>
        </section>
        <section className="bg-white p-2 rounded-sm">
          <SignOutButton />
        </section>
      </div>
    </div>
  );
}
