import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { PokemonAPIService } from '../services/pokemon-api.service';
import { Pokemon_Generation } from './models/pokemon_generation.model';
import { TypeColorService } from '../services/type-color.service';

@Component({
  selector: 'app-pokemon-region',
  templateUrl: './pokemon-region.component.html',
  styleUrls: ['./pokemon-region.component.scss']
})
export class PokemonRegionComponent implements OnInit {

  public gen_infos: Pokemon_Generation

  constructor(
    private activateRoute: ActivatedRoute,
    private typeColorService: TypeColorService
  ) { }

  ngOnInit() {
    this.getGenerationInfos()

  }

  private getGenerationInfos(): void {
    this.activateRoute.data.subscribe(
      (data: Data) => {
        this.gen_infos = data['region']
        this.setTypeID()
        this.sortGenerationInfos()
      }
    )
  }

  private setTypeID(): void {
    this.gen_infos.types.forEach((v, i, s) => {
      v['id'] = +v.url.split('/')[6]
    })
  }

  private sortGenerationInfos():void {
    this.gen_infos.moves.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.gen_infos.types.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  public getColor(type): string {
    return this.typeColorService.getColor(type)
  }
}
