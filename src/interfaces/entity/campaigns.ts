export interface Campaign {
  id: number;
  name: string;
  description: string;
  status: "hidden" | "active" | "in_course" | "finished";
  access_type: "public" | "request";
  settings: CampaignSettings;
  max_players: number;
  characters: CampaignCharacter;
  enrolled_characters: { count: number };
}

export interface CampaignSettings {}

export interface CampaignCharacter {}
