import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonAPIService } from './pokemon-api.service';
import { PokemonType, AllTypes } from '../pokemon-type/models/pokemon-type.model';

@Injectable({ providedIn: 'root' })
export class TypeResolver implements Resolve<PokemonType> {
  constructor(private pokemonAPIService: PokemonAPIService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonType> | Promise<PokemonType> | PokemonType {
    return this.pokemonAPIService.getTypeByID(route.params['id'])
  }
}

@Injectable({ providedIn: 'root' })
export class AllTypeResolver implements Resolve<AllTypes> {
  constructor(private pokemonAPIService: PokemonAPIService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<AllTypes> | Promise<AllTypes> | AllTypes {
    return this.pokemonAPIService.getAllTypes()
  }
}
