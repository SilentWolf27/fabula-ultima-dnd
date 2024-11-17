import { SignOutButton } from "@/components/auth/SignOutButton";
import styles from "@/styles/pages/account/Account.module.css";

export default function Account() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Perfil</h2>
      <div className={styles.sections_container}>
        <section className={styles.section}></section>
        <section className={styles.section}>
          <SignOutButton />
        </section>
      </div>
    </div>
  );
}
