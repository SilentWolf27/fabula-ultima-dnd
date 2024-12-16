import { getMasterCampaigns } from "@/database/campaigns/master";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import { MasterCampaignCard } from "@/components/dashboard/campaign/MasterCampaignCard";
import Link from "next/link";

export default async function CampaignsPage() {
  const supabase = await getSupabaseServerClient();

  const campaigns = await getMasterCampaigns(supabase);

  return (
    <div className="py-8 px-6 min-w-[320px] h-full bg-zinc-100">
      <div className="flex justify-end items-center mb-8">
        <Link
          href="/dashboard/mishistorias/nueva"
          className="bg-violet-700 text-white text-sm px-3 py-2 rounded-md font-semibold active:bg-violet-900">
          Nueva historia
        </Link>
      </div>

      {campaigns.length > 0 ? (
        <div className="grid grid-cols-item-list gap-3 overflow-y-auto max-h-full">
          {campaigns.map((campaign) => (
            <MasterCampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-base text-gray-700">
            Hmm... parece que no tienes ninguna historia aún.
          </p>
          <p className="text-base text-gray-700">
            ¡Crea una y reúne a tu grupo para la aventura!
          </p>
        </>
      )}
    </div>
  );
}
