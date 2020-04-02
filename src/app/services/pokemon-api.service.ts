import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon_Region } from '../homepage/models/pokemon_region.model';
import { Pokemon_Generation } from '../pokemon-region/models/pokemon_generation.model';
import { PokemonType, AllTypes } from '../pokemon-type/models/pokemon-type.model';
import { Pokemon, Pokemon_Species } from '../pokemon-page/model/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonAPIService {

  private urlAPI: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  public getRegions(): Observable<Pokemon_Region> {
    const url: string = `${this.urlAPI}/region`
    return this.http.get<Pokemon_Region>(url)
  }

  public getGenerationInfos(generation_id: number): Observable<Pokemon_Generation> {
    const url: string = `${this.urlAPI}/generation/${generation_id}`
    return this.http.get<Pokemon_Generation>(url)
  }

  public getTypeByID(type_id: number): Observable<PokemonType> {
    const url: string = `${this.urlAPI}/type/${type_id}`
    return this.http.get<PokemonType>(url)
  }

  public getAllTypes(): Observable<AllTypes> {
    const url: string = `${this.urlAPI}/type`
    return this.http.get<AllTypes>(url)
  }

  public getPokemon(pokemon_id: number): Observable<Pokemon> {
    const url: string = `${this.urlAPI}/pokemon/${pokemon_id}`
    return this.http.get<Pokemon>(url)
  }

  public getPokemonSpecies(pokemon_id: number): Observable<Pokemon_Species> {
    const url: string = `${this.urlAPI}/pokemon-species/${pokemon_id}`
    return this.http.get<Pokemon_Species>(url)
  }
}
