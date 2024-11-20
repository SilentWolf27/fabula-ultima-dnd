import { getSupabaseJwtPayload } from "@/utils/session/session";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";

export default async function CampaignsPage() {
  const supabase = await getSupabaseServerClient();
  const user = await getSupabaseJwtPayload(supabase);
  console.log(user);
  return (
    <main>
      <h1>Campañas</h1>
    </main>
  );
}
