import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col py-12 px-6 max-w-[300px] mx-auto">
      <h2 className="font-metamorphous text-pretty max-w-[320px] text-center font-bold text-4xl">
        Fabula Ultima App
      </h2>

      <div className="font-lora text-sm mt-8 flex flex-col gap-2">
        <p>
          Esta aplicación fue diseñada como herramienta de apoyo para el juego
          de rol Fabula Ultima
        </p>

        <p>Por favor, inicia sesión para continuar</p>
      </div>

      <div className="max-w-[320px]">
        <LoginForm />
      </div>
    </main>
  );
}
