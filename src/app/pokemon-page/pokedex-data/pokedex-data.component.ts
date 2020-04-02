import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Pokemon, Pokemon_Species } from '../model/pokemon.model';
import { TypeColorService } from 'src/app/services/type-color.service';

@Component({
  selector: 'app-pokedex-data',
  templateUrl: './pokedex-data.component.html',
  styleUrls: ['./pokedex-data.component.scss']
})
export class PokedexDataComponent implements OnInit, OnChanges {

  @Input() public pokemon: Pokemon
  @Input() public pokemon_species: Pokemon_Species
  @Input() public types: Array<{ name: string, id: number }> = []

  constructor(private typeColorService: TypeColorService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDimension()
    this.setTypes()
  }

  public getTypeColor(type: string) {
    return this.typeColorService.getColor(type)
  }

  private setDimension(): void {
    this.pokemon['kilograms'] = (this.pokemon.weight * 0.1).toFixed(1)
    this.pokemon['lbs'] = (this.pokemon.weight * 0.220462).toFixed(1)
    this.pokemon['metres'] = (this.pokemon.height * 0.1).toFixed(1)
  }

  private setTypes(): void {
    this.types = []

    this.pokemon.types.forEach((v, i, s) => {
      let name: string = v.type.name
      let id: number = +v.type.url.split('/')[6]

      this.types.push({ name, id })
    })
  }
}
