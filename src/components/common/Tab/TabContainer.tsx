"use client";

import { Tab } from "@/interfaces/components";
import styles from "@/styles/components/common/Tab/TabContainer.module.css";

interface Props {
  children?: React.ReactNode;
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
  tabs: Tab[];
}

export const TabContainer = ({
  children,
  tabs,
  onTabChange,
  currentTab,
}: Props) => {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_header}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab_button} ${
              currentTab.key === tab.key ? styles.active : ""
            }`}
            onClick={() => onTabChange(tab)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tab_content}>{children}</div>
    </div>
  );
};
