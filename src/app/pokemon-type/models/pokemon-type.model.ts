export interface PokemonType {
  id: number
  name: string
  damage_relations: {
    no_damage_to: NameAndUrl[]
    half_damage_to: NameAndUrl[]
    double_damage_to: NameAndUrl[]
    no_damage_from: NameAndUrl[]
    half_damage_from: NameAndUrl[]
    double_damage_from: NameAndUrl[]
  }
  pokemon?: any
}

interface NameAndUrl {
  name: string
  url: string
  id?: number
  image?: number
}

export interface AllTypes {
  results: NameAndUrl[]
}
