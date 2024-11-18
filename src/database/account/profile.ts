import { Profile } from "@/interfaces/entity";
import type { SupabaseClient } from "@supabase/supabase-js";

export const getProfile = async (
  client: SupabaseClient
): Promise<Profile | null> => {
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } = await client
    .from("user_profile")
    .select("is_dm, username, image");
  const profile = data ? data[0] : null;

  return {
    id: user.id,
    email: user.email,
    isDm: profile?.is_dm || false,
    username: profile?.username || null,
    image: profile?.image || null,
  };
};
