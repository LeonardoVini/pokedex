export interface Pokemon {
  Number?: string,
  Name?: string,
  Art_url?: string
  Generation?: string,
  About?: string,
  Types?: string[],
  Resistant?: string[],
  Weaknesses?: string[],
  Fast_Attack?: attacks[],
  Special_Attack?: attacks[],
  Weight?: dimensions,
  Height?: dimensions,
  Buddy_Distance?: string,
  Base_Stamina?: string,
  Base_Attack?: string,
  Base_Defense?: string,
  Base_Flee_Rate?: string,
  Next_Evolution_Requirements?: evolution_requirements,
  Previous_evolution?: evolutions[],
  Next_evolution?: evolutions[],
  MaxCP?: number,
  MaxHP?: number,
}

interface attacks {
  Name: string,
  Type: string,
  Damage: number,
}

interface dimensions {
  Minimum: string,
  Maximum: string,
}

interface evolution_requirements {
  Amount: number,
  Name: string,
}

interface evolutions {
  Number: number,
  Name: string,
}
