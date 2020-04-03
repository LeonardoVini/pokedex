import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonAPIService } from './pokemon-api.service';
import { Pokemon, Pokemon_Species } from '../pokemon-page/model/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonResolver implements Resolve<Pokemon> {
  constructor(private pokemonAPIService: PokemonAPIService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> | Promise<Pokemon> | Pokemon {
    return this.pokemonAPIService.getPokemon(route.params['id'])
  }
}

@Injectable({ providedIn: 'root' })
export class PokemonSpeciesResolver implements Resolve<Pokemon_Species> {
  constructor(private pokemonAPIService: PokemonAPIService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon_Species> | Promise<Pokemon_Species> | Pokemon_Species {
    return this.pokemonAPIService.getPokemonSpecies(route.params['id'])
  }
}
