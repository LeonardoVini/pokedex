import { Component, OnInit } from '@angular/core';

import { PokemonType, AllTypes } from './models/pokemon-type.model';
import { PokemonAPIService } from '../services/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';
import { TypeColorService } from '../services/type-color.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {

  private id: number
  public type: PokemonType
  public all_types: AllTypes
  public pokemon_array: Array<{ name: string, url: string, id?: number }> = []

  constructor(
    private pokemonAPIService: PokemonAPIService,
    private activatedRoute: ActivatedRoute,
    private typeColorService: TypeColorService
  ) { }

  ngOnInit() {
    this.getTypeID()
    this.routeChangeDetection()
    this.getAllTypes()
  }

  private getTypeID(): void {
    this.id = +this.activatedRoute.snapshot.params['id']
  }

  private routeChangeDetection(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.getTypeByID(routeParams['id'])
    })
  }

  private getTypeByID(id: number = this.id): void {
    this.pokemonAPIService.getTypeByID(id).subscribe(
      type => this.type = type,
      err => console.log(err),
      () => this.setTypeID()
    )
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

  private getAllTypes(): void {
    this.pokemonAPIService.getAllTypes().subscribe(
      response => this.all_types = response,
      err => console.log(err),
      () => this.setAllTypesID()
    )
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
