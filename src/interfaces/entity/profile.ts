export interface Profile {
  id: string;
  email: string | undefined;
  fabulaRole: "player" | "dm";
  username: string | null;
  image: string | null;
}
