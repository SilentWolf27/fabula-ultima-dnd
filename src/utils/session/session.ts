import { decode, JwtPayload } from "jsonwebtoken";
import { getSupabaseClient } from "../supabase/browserClient";

export const getSupabaseClientAccessToken = async () => {
  const supabase = getSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  return decode(session.access_token) as JwtPayload;
};
