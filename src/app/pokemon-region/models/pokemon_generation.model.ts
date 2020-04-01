export interface Pokemon_Generation {
  abilities: NameAndURL[]
  id: number
  main_region: NameAndURL
  moves: NameAndURL[]
  name: string
  names:Language[]
  pokemon_species: Species[]
  types: NameAndURL[]
  version_groups: NameAndURL[]
}

interface NameAndURL {
  name: string
  url: string
}

interface Species {
  id: number
  name: string
  url?: string
  image?: string
}

interface Language {
  name: string
  language: NameAndURL
}
