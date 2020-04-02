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

  public types: Array<{ name: string, id: number }> = []

  constructor(
    private pokemonAPIService: PokemonAPIService,
    private activateRoute: ActivatedRoute,
    private typeColorService: TypeColorService
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
        this.setTypes()
        this.setDimension()
        console.log(this.pokemon)
      }
    )
  }

  private getPokemonSpecies(pokemon_id: number): void {
    this.pokemonAPIService.getPokemonSpecies(pokemon_id).subscribe(
      pokemon_species => this.pokemon_species = { ...pokemon_species },
      err => console.log(err),
      () => console.log(this.pokemon_species)
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

  private setTypes(): void {
    this.pokemon.types.forEach((v, i, s) => {
      let name: string = v.type.name
      let id: number = +v.type.url.split('/')[6]

      this.types.push({ name, id })
    })
  }

  public getTypeColor(type: string) {
    return this.typeColorService.getColor(type)
  }

  private setDimension(): void {
    this.pokemon['kilograms'] = (this.pokemon.weight * 0.1).toFixed(1)
    this.pokemon['lbs'] = (this.pokemon.weight * 0.220462).toFixed(1)
    this.pokemon['metres'] = (this.pokemon.height * 0.1).toFixed(1)
  }
}
