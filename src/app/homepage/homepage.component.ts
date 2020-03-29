import { Component, OnInit } from '@angular/core';

import POKEMONS from "../database/pokemon_infos";
import POKEMON_IMAGES from "../database/pokemon_images";
import { Pokemon } from "src/app/database/pokemon_infos.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  protected pokemons: Pokemon[] = []
  protected pokemons_images: Array<{ art_url: string }>

  constructor() { }

  ngOnInit() {
    this.setImages()
  }

  protected setImages(): void {
    this.pokemons = [...POKEMONS]
    this.pokemons_images = [...POKEMON_IMAGES]

    this.pokemons.forEach((v, i, s) => {
      v.Art_url = this.pokemons_images[i].art_url
    })
  }

}
