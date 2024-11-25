"use client";

import { Tab } from "@/interfaces/components";
import styles from "@/styles/components/common/Tab/TabContainer.module.css";

interface Props {
  children?: React.ReactNode;
  onTabChange: (tab: Tab) => void;
  tabs: Tab[];
}

export const TabContainer = ({ children, tabs, onTabChange }: Props) => {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_header}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab_button} ${
              tab.active ? styles.active : ""
            }`}
            onClick={() => onTabChange(tab)}
            disabled={tab.disabled}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tab_content}>{children}</div>
    </div>
  );
};
