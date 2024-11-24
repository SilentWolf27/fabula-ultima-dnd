"use client";

import { MouseEvent, useState } from "react";
import styles from "@/styles/components/common/Tab/TabContainer.module.css";

interface Props {
  children?: React.ReactNode;
  currentTab?: string;
  onTabChange: (key: string) => void;
  tabs: { title: string; key: string }[];
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
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            className={`${styles.tab_button} ${
              currentTab === tab.key ? styles.active : ""
            }`}
            onClick={() => onTabChange(tab.key)}>
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};
