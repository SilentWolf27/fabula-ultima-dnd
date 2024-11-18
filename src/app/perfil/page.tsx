import { AccountInfoCard } from "@/components/account/AccountInfoCard";
import { SignOutButton } from "@/components/auth/SignOutButton";
import styles from "@/styles/pages/account/Account.module.css";
import { ArrowRight01Icon } from "hugeicons-react";
import Link from "next/link";

export default function Account() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Perfil</h2>
      <section className={styles.information}>
        <AccountInfoCard />
      </section>
      <div className={styles.sections_container}>
        <section className={styles.section}>
          <Link href="/perfil/editar" className={styles.link}>
            Editar perfil
            <ArrowRight01Icon size={24} />
          </Link>
        </section>
        <section className={styles.section}>
          <SignOutButton />
        </section>
      </div>
    </div>
  );
}
