"use client";

import { BasicCampaign } from "@/interfaces/entity";
import styles from "@/styles/components/dashboard/campaign/MasterCampaignCard.module.css";
import { useRouter } from "next/navigation";

interface Props {
  campaign: BasicCampaign;
}

export const MasterCampaignCard = ({ campaign }: Props) => {
  const router = useRouter();

  const getAccessType = () => {
    switch (campaign.access_type) {
      case "public":
        return "Pública";
      case "request":
        return "Solicitud";
      default:
        return "Desconocido";
    }
  };

  const getStatus = () => {
    switch (campaign.status) {
      case "hidden":
        return "Oculta";
      case "active":
        return "Activa";
      case "in_course":
        return "En curso";
      case "finished":
        return "Finalizada";
      default:
        return "Desconocido";
    }
  };

  const redirectToCampaign = () => {
    router.push(`/dashboard/mishistorias/${campaign.id}`);
  };

  const getStatusStyle = () => {
    switch (campaign.status) {
      case "hidden":
        return "bg-gray-200 text-gray-700";
      case "active":
        return "bg-emerald-100 text-emerald-800";
      case "in_course":
        return "bg-yellow-100 text-yellow-800";
      case "finished":
        return "bg-sky-100 text-sky-800";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div
      className="flex flex-col gap-3 text-gray-700 bg-white py-4 px-6 rounded-lg"
      onClick={redirectToCampaign}>
      <h3 className="text-base uppercase font-semibold text-center">
        {campaign.name}
      </h3>
      <p className="text-sm">{campaign.short_description}</p>

      <div className="flex justify-between gap-2 mt-4">
        <p className="text-xs w-[120px] h-[30px] px-3 rounded-xl font-semibold bg-violet-100 text-violet-700 flex items-center justify-center">
          {getAccessType()}
        </p>
        <p className={`text-xs py-1 px-3 w-[120px] h-[30px] rounded-xl font-semibold flex items-center justify-center ${getStatusStyle()}`}>
          {getStatus()}
        </p>
      </div>

      <p className="text-xs w-[120px] h-[30px] px-2 rounded-xl font-semibold bg-amber-100 text-amber-800 flex items-center justify-center">
        {campaign.enrolled_characters}{" "}
        {campaign.enrolled_characters === 1 ? "jugador" : "jugadores"}
      </p>
    </div>
  );
};
