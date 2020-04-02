export interface Pokemon {
  abilities: AbilityItem[]
  base_experience: number
  height: number
  id: (number | string)
  is_default: boolean
  moves: Move[]
  name: string
  sprites: Sprites
  stats: Stats[]
  types: Types[]
  weight: number
  image?: string
  kilograms?: string
  lbs?: string
  metres?: string
}

interface Types {
  slot: number
  type: NameAndURL
}

interface Stats {
  base_stat: number
  effort: number
  stat: NameAndURL
}

interface Sprites {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

interface AbilityItem {
  ability: NameAndURL
  is_hidden: boolean
  slot: number
}

interface Move {
  move: NameAndURL
}

interface NameAndURL {
  name?: string
  url?: string
}

export interface Pokemon_Species {
  base_happiness: number
  capture_rate: number
  color: NameAndURL
  egg_groups: NameAndURL[]
  evolution_chain: NameAndURL
  evolves_from_species: NameAndURL
  flavor_text_entries: Flavor_Text_Entries[]
  gender_rate: number
  genera: Genera[]
  generation: NameAndURL
  growth_rate: NameAndURL
  habitat: NameAndURL
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  name: string
  names: Names[]
  order: number
  pal_park_encounters: Pal_Park_Encounters[]
  shape: NameAndURL
}

interface Pal_Park_Encounters {
  area: NameAndURL
  base_score: number
  rate: number
}

interface Flavor_Text_Entries {
  flavor_text: string
  language: NameAndURL
  version: NameAndURL
}

interface Genera {
  genus: string
  language: NameAndURL
}

interface Names {
  name: string
  language: NameAndURL
}
