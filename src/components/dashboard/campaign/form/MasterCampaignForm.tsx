"use client";

import { TabContainer } from "@/components/common/Tab/TabContainer";
import { Campaign } from "@/interfaces/entity";
import { useState } from "react";
import styles from "@/styles/components/dashboard/campaign/form/MasterCampaignForm.module.css";
import { Tab } from "@/interfaces/components";

interface Props {
  campaign?: Campaign;
}

const tabs: Tab[] = [
  { title: "Información básica", key: "basic" },
  { title: "Configuración", key: "config" },
  { title: "Jugadores", key: "players" },
];

export default function MasterCampaignForm({ campaign }: Props) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className={styles.container}>
      <TabContainer
        tabs={tabs}
        onTabChange={handleTabChange}
        currentTab={currentTab}>
        {currentTab.title}
      </TabContainer>
    </div>
  );
}
