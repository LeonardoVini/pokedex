import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit, OnChanges {
  @Input() protected pokemons;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  protected getColor(type): string {
    if (type === 'Grass') return '#567d46'
    if (type === 'Poison') return '#ac51cc'
    if (type === 'Fire') return '#f27d0c'
    if (type === 'Bug') return '#b1ff80'
    if (type === 'Flying') return '#87CEEB'
    if (type === 'Water') return '#58daf6'
    if (type === 'Electric') return '#FFFF00'
    if (type === 'Normal') return '#C0C6C8'
    if (type === 'Ground') return '#723832'
    if (type === 'Fairy') return '#F699CD'
    if (type === 'Fighting') return '#00fbb5'
    if (type === 'Psychic') return '#cfb53b'
    if (type === 'Ice') return '#b9e8ea'
    if (type === 'Rock') return '#969FB2'
    if (type === 'Dragon') return '#F1B46D'
  }

}
