export interface CharacterClass {
  id: number;
  name: string;
  identifier: string;
  alias: string[];
  description: string;
  is_active: boolean;
  image: string | null;
  benefits_description: string[];
  benefits: ClassBenefits;
}

export interface ClassBenefits {
  hp: number;
  mp: number;
  ip: number;
  make_projects: boolean;
  make_rituals: boolean;
  martial_armors: boolean;
  martial_shields: boolean;
  martial_melee_weapons: boolean;
  martial_ranged_weapons: boolean;
}
