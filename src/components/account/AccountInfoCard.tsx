import { getProfile } from "@/database/account/profile";
import { getSupabaseServerClient } from "@/utils/supabase/serverClient";
import styles from "@/styles/components/account/AccountInfoCard.module.css";
import Image from "next/image";
import supabaseLoader from "@/utils/images/loader";

export const AccountInfoCard = async () => {
  const client = await getSupabaseServerClient();
  const profile = await getProfile(client);

  return profile ? (
    <article className={styles.container}>
      <div className={styles.image_container}>
        {profile.image && (
          <Image
            className={styles.image}
            src={profile.image}
            alt={profile.username || ""}
            width={100}
            height={100}
            loader={supabaseLoader}
          />
        )}
        <span className={styles.role_badge}>
          {profile.fabulaRole === "dm" ? "Dungeon Master" : "Player"}
        </span>
      </div>

      <div className={styles.text_container}>
        <h3 className={styles.username}>{profile.username}</h3>

        <p className={styles.email}>{profile.email}</p>

        <p className={styles.user_id}>{profile.id}</p>
      </div>
    </article>
  ) : null;
};
