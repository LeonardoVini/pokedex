import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

import { PokemonAPIService } from "../services/pokemon-api.service";
import { Pokemon_Species, Pokemon } from "./model/pokemon.model";
import { TypeColorService } from "../services/type-color.service";

@Component({
  selector: "app-pokemon-page",
  templateUrl: "./pokemon-page.component.html",
  styleUrls: ["./pokemon-page.component.scss"]
})
export class PokemonPageComponent implements OnInit {
  public pokemon: Pokemon;
  public pokemon_species: Pokemon_Species;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getPokemon();
    this.getPokemonSpecies();
  }

  private getPokemon(): void {
    this.activateRoute.data.subscribe((data: Data) => {
      this.pokemon = data["pokemon"];
      this.modifyPokemonID();
      this.setPokemonImage();
    });
  }

  private getPokemonSpecies(): void {
    this.activateRoute.data.subscribe((data: Data) => {
      this.pokemon_species = data["pokemon_species"];
      this.setGender();
    });
  }

  private setPokemonImage(): void {
    this.pokemon[
      "image"
    ] = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.pokemon.id}.png`;
  }

  private modifyPokemonID(): void {
    const id: number = +this.pokemon.id;
    this.pokemon.id < 10 ? (this.pokemon.id = `00${id}`) : null;
    this.pokemon.id >= 10 && this.pokemon.id < 100
      ? (this.pokemon.id = `0${id}`)
      : null;
  }

  private setGender(): void {
    let female_rate: number = (this.pokemon_species.gender_rate / 8) * 100;
    let male_rate: number = 100 - female_rate;

    let female: string = `${female_rate}% female`;
    let male: string = `${male_rate}% male`;

    this.pokemon_species["female"] = female;
    this.pokemon_species["male"] = male;
  }
}
