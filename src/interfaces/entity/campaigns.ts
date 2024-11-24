export interface Campaign {
  id: number;
  name: string;
  description: string;
  short_description: string;
  status: CampaignStatus;
  access_type: CampaignAccessType;
  settings: CampaignSettings;
  max_players: number;
  characters: CampaignCharacter[];
}

export interface CampaignSettings {}

export interface CampaignCharacter {}

export interface BasicCampaign {
  id: number;
  name: string;
  short_description: string;
  status: CampaignStatus;
  access_type: CampaignAccessType;
  enrolled_characters?: number;
}

enum CampaignStatus {
  HIDDEN = "hidden",
  ACTIVE = "active",
  IN_COURSE = "in_course",
  FINISHED = "finished",
}

enum CampaignAccessType {
  PUBLIC = "public",
  REQUEST = "request",
}
