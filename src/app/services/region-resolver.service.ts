import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokemon_Generation } from '../pokemon-region/models/pokemon_generation.model';
import { PokemonAPIService } from './pokemon-api.service';

@Injectable({ providedIn: 'root' })
export class RegionResolver implements Resolve<Pokemon_Generation> {
  constructor(private pokemonAPIService: PokemonAPIService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon_Generation> | Promise<Pokemon_Generation> | Pokemon_Generation {
    return this.pokemonAPIService.getGenerationInfos(route.params['id'])
  }
}
