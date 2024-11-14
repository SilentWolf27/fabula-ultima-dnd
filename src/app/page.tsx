"use client";

import { logoutAction } from "@/actions/auth/auth";
import { getSupabaseClient } from "@/utils/supabase/browserClient";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Welcome to the home page</p>

      <form action={logoutAction}>
        <button type="submit"> Logout </button>
      </form>
    </main>
  );
}
