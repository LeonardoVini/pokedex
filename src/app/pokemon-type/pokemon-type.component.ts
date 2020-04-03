import { Component, OnInit } from '@angular/core';

import { PokemonType, AllTypes } from './models/pokemon-type.model';
import { ActivatedRoute, Data } from '@angular/router';
import { TypeColorService } from '../services/type-color.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {

  public type: PokemonType
  public all_types: AllTypes
  public pokemon_array: Array<{ name: string, url: string, id?: number }> = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private typeColorService: TypeColorService
  ) { }

  ngOnInit() {
    this.getTypeID()
    this.getAllTypeID()
  }

  private getTypeID(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.type = data['type']
      this.setTypeID()
    })
  }

  private getAllTypeID(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.all_types = data['allType']
      this.setAllTypesID()
    })
  }

  private setTypeID(): void {
    let damage_relations: string[] = [
      'double_damage_from',
      'half_damage_from',
      'no_damage_from',
      'double_damage_to',
      'half_damage_to',
      'no_damage_to',
    ]

    damage_relations.forEach(el => {
      this.type.damage_relations[`${el}`].forEach((v, i, s) => {
        v['id'] = +v.url.split('/')[6]
      })

      this.type.damage_relations[`${el}`].sort((a, b) => a.name > b.name ? 1 : -1)
    })

    this.generatePokemonArray()
  }

  public getTypeColor(type): string {
    return this.typeColorService.getColor(type)
  }

  private setAllTypesID(): void {
    this.all_types.results.forEach((v, i, s) => {
      v['id'] = +v.url.split('/')[6]
    })

    this.all_types.results = [...this.all_types.results.filter(v => v.id < 10000)]

    this.all_types.results.sort((a, b) => a.name > b.name ? 1 : -1)
  }

  private generatePokemonArray(): void {
    this.pokemon_array = []

    this.type.pokemon.forEach((v, i) => {
      this.pokemon_array.push({
        name: v.pokemon.name,
        url: v.pokemon.url,
        id: v.pokemon.url.split('/')[6]
      })
    })

    this.pokemon_array = [...this.pokemon_array.filter(v => v.id < 10000)]
  }
}
