import styles from "@/styles/components/common/ItemGrid.module.css";

interface Props {
  children: React.ReactNode;
}

export const ItemGrid = ({ children }: Props) => {
  return <div className={styles.grid}>{children}</div>;
};
