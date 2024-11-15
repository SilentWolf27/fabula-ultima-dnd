import { LoginForm } from "@/components/auth/LoginForm";
import styles from "@/styles/pages/auth/Login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}> Fabula Ultima App</h2>

      <div className={styles.description}>
        <p>
          Esta aplicación fue diseñada como herramienta de apoyo para el juego
          de rol Fabula Ultima
        </p>

        <p>Por favor, inicia sesión para continuar</p>
      </div>

      <div className={styles.form_container}>
        <LoginForm />
      </div>
    </main>
  );
}
