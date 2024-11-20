import { decode, JwtPayload } from "jsonwebtoken";
import { SupabaseClient } from "@supabase/supabase-js";

export const getSupabaseJwtPayload = async (supabase: SupabaseClient) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  return decode(session.access_token) as JwtPayload;
};
