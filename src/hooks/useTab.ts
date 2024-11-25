import { Tab } from "@/interfaces/components";
import { useState } from "react";

interface useTabParams {
  initialTabs: Tab[];
  useTabConfig?: useTabConfig;
}

interface useTabConfig {
  activePrevTabs?: boolean;
}

export const useTab = (
  initialTabs: Tab[],
  { activePrevTabs = false }: useTabConfig
) => {
  const [currentTab, setCurrentTab] = useState<Tab>(initialTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
    setActiveTabs(tab);
  };

  const setActiveTabs = (tab: Tab) => {
    const currentTabIndex = tabs.findIndex((t) => t.key === tab.key);

    const newTabs = tabs.map((t, index) => {
      if (activePrevTabs) {
        return { ...t, active: index <= currentTabIndex };
      }

      return { ...t, active: t.key === tab.key };
    });
    setTabs(newTabs);
  };

  return { tabs, currentTab, handleTabChange };
};
