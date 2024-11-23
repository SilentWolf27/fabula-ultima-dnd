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
    router.push(`/dashboard/campaign/${campaign.id}`);
  }

  return (
    <div className={styles.container} onClick={redirectToCampaign}>
      <h3 className={styles.title}>{campaign.name}</h3>
      <p className={styles.description}>{campaign.short_description}</p>

      <div className={styles.info_container}>
        <span className={styles.access_type}>{getAccessType()}</span>
        <span className={`${styles.status} ${styles[campaign.status]}`}>
          {getStatus()}
        </span>
      </div>

      <span className={styles.enrolled}>
        {campaign.enrolled_characters}{" "}
        {campaign.enrolled_characters === 1 ? "jugador" : "jugadores"}
      </span>
    </div>
  );
};
