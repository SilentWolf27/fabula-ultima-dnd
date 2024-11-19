import { Profile } from "@/interfaces/entity";
import type { SupabaseClient } from "@supabase/supabase-js";
import { decode } from "jsonwebtoken";

export const getProfile = async (
  client: SupabaseClient
): Promise<Profile | null> => {
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return null;
  }

  const {
    data: { session },
  } = await client.auth.getSession();

  if (!session) return null;

  const accessToken = session.access_token;
  const payload = decode(accessToken) as any;

  return {
    id: user.id,
    email: user.email,
    fabulaRole: payload?.fabulaRole || false,
    username: payload?.username || null,
    image: payload?.image || null,
  };
};
