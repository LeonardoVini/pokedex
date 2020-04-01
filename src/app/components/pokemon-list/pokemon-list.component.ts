import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Pokemon } from './models/pokemon.model';

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit, OnChanges {
  @Input() protected pokemons: Pokemon[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setPokemonImages()
  }

  private setPokemonImages(): void {
    this.pokemons.forEach((v, i, s) => {
      let pokemon_id: number = +v.url.split('/')[6]
      let pokemon_id_str: string = ''

      if (pokemon_id < 10) pokemon_id_str = `00${pokemon_id}`
      if (pokemon_id >= 10 && pokemon_id < 100) pokemon_id_str = `0${pokemon_id}`
      if (pokemon_id >= 100) pokemon_id_str = `${pokemon_id}`

      v['id'] = pokemon_id
      v['image'] = `http://assets22.pokemon.com/assets/cms2/img/pokedex/full/${pokemon_id_str}.png`
    })

    this.sortPokemons()
  }

  private sortPokemons(): void {
    this.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }
}
