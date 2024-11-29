import { Profile } from "@/interfaces/entity";
import { getSupabaseJwtPayload } from "@/utils/session/session";
import type { SupabaseClient } from "@supabase/supabase-js";

export const getProfile = async (
  client: SupabaseClient
): Promise<Profile | null> => {
  const payload = await getSupabaseJwtPayload(client);

  if (!payload) return null;

  return {
    id: payload.sub as string,
    email: payload?.email || null,
    fabulaRole: payload?.fabulaRole || false,
    username: payload?.username || null,
    image: payload?.image || null,
  };
};
