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

export enum CampaignStatus {
  HIDDEN = "hidden",
  ACTIVE = "active",
  IN_COURSE = "in_course",
  FINISHED = "finished",
}

export enum CampaignAccessType {
  PUBLIC = "public",
  REQUEST = "request",
}

export const campaignStatusOptions = [
  { value: CampaignStatus.HIDDEN, label: "Oculta" },
  { value: CampaignStatus.ACTIVE, label: "Activa" },
  { value: CampaignStatus.IN_COURSE, label: "En curso" },
  { value: CampaignStatus.FINISHED, label: "Finalizada" },
];

export const campaignAccessTypeOptions = [
  { value: CampaignAccessType.PUBLIC, label: "Público" },
  { value: CampaignAccessType.REQUEST, label: "Por solicitud" },
];
