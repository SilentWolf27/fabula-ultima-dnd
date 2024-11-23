export interface Profile {
  id: string;
  email: string | undefined;
  fabulaRole: ProfileRole;
  username: string | null;
  image: string | null;
}

export enum ProfileRole {
  Player = "player",
  DM = "dm",
}
