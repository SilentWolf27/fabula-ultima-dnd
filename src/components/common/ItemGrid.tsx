import styles from "@/styles/components/common/ItemGrid.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ItemGrid = ({ children, className }: Props) => {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
};
