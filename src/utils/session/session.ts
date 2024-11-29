import { decode, JwtPayload } from "jsonwebtoken";
import { SupabaseClient } from "@supabase/supabase-js";
import { Profile } from "@/interfaces/entity";

type SupabaseJwtPayload = JwtPayload & Profile;

export const getSupabaseJwtPayload = async (
  supabase: SupabaseClient
): Promise<SupabaseJwtPayload | null> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  return decode(session.access_token) as SupabaseJwtPayload;
};
