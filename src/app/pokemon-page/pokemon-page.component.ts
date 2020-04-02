import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonAPIService } from '../services/pokemon-api.service';
import { Pokemon_Species, Pokemon } from './model/pokemon.model';
import { TypeColorService } from '../services/type-color.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  public pokemon: Pokemon
  public pokemon_species: Pokemon_Species

  constructor(
    private pokemonAPIService: PokemonAPIService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeChangeDetection()
  }

  private routeChangeDetection(): void {
    this.activateRoute.params.subscribe(routeParams => {
      this.getPokemon(routeParams['id'])
      this.getPokemonSpecies(routeParams['id'])
    })
  }

  private getPokemon(pokemon_id: number): void {
    this.pokemonAPIService.getPokemon(pokemon_id).subscribe(
      pokemon => this.pokemon = { ...pokemon },
      err => console.log(err),
      () => {
        this.modifyPokemonID()
        this.setPokemonImage()
      }
    )
  }

  private getPokemonSpecies(pokemon_id: number): void {
    this.pokemonAPIService.getPokemonSpecies(pokemon_id).subscribe(
      pokemon_species => this.pokemon_species = { ...pokemon_species },
      err => console.log(err),
      () => this.setGender()
    )
  }

  private setPokemonImage(): void {
    this.pokemon['image'] = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.pokemon.id}.png`
  }

  private modifyPokemonID(): void {
    const id: number = +this.pokemon.id
    this.pokemon.id < 10 ? this.pokemon.id = `00${id}` : null
    this.pokemon.id >= 10 && this.pokemon.id < 100 ? this.pokemon.id = `0${id}` : null
  }

  private setGender(): void {
    let female_rate: number = (this.pokemon_species.gender_rate / 8) * 100
    let male_rate: number = 100 - female_rate

    let female: string = `${female_rate}% female`
    let male: string = `${male_rate}% male`

    this.pokemon_species['female'] = female
    this.pokemon_species['male'] = male
  }
}
