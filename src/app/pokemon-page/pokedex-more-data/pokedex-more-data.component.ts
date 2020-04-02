import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Pokemon, Pokemon_Species } from '../model/pokemon.model';

@Component({
  selector: 'app-pokedex-more-data',
  templateUrl: './pokedex-more-data.component.html',
  styleUrls: ['./pokedex-more-data.component.scss']
})
export class PokedexMoreDataComponent implements OnInit, OnChanges {

  @Input() public pokemon: Pokemon
  @Input() public pokemon_species: Pokemon_Species

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
