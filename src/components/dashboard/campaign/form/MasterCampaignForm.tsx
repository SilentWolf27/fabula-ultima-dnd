"use client";

import { TabContainer } from "@/components/common/Tab/TabContainer";
import { Campaign } from "@/interfaces/entity";

import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";
import { Tab } from "@/interfaces/components";
import { useTab } from "@/hooks";

interface Props {
  campaign?: Campaign;
}

const defaultTabs: Tab[] = [
  { title: "Información básica", key: "basic", disabled: true, active: true },
  { title: "Configuración", key: "config", disabled: true, active: false },
  { title: "Jugadores", key: "players", disabled: true, active: false },
];

export default function MasterCampaignForm({ campaign }: Props) {
  const { currentTab, handleTabChange, tabs } = useTab(defaultTabs, {
    activePrevTabs: true,
  });

  return (
    <div className={styles.container}>
      <TabContainer tabs={tabs} onTabChange={handleTabChange}>
        {currentTab.title}
      </TabContainer>
    </div>
  );
}
