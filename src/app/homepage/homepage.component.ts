import { Component, OnInit } from "@angular/core";

import { PokemonAPIService } from "../services/pokemon-api.service";
import { Pokemon_Region } from "./models/pokemon_region.model";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  public pokemon_regions: Pokemon_Region;

  constructor(private pokemonAPIService: PokemonAPIService) {}

  ngOnInit() {
    this.getRegions();
  }

  private getRegions() {
    this.pokemonAPIService.getRegions().subscribe(
      pokemons => (this.pokemon_regions = { ...pokemons }),
      err => console.log(err),
      () => this.setImages()
    );
  }

  private setImages(): void {
    this.pokemon_regions.results.forEach((v, i, s) => {
      if (v.name === "kanto") {
        v["map"] = "https://cdn.bulbagarden.net/upload/2/25/LGPE_Kanto_Map.png";
        v["id"] = i + 1;
      }

      if (v.name === "johto") {
        v["map"] = "https://cdn.bulbagarden.net/upload/6/64/JohtoMap.png";
        v["id"] = i + 1;
      }

      if (v.name === "hoenn") {
        v["map"] = "https://cdn.bulbagarden.net/upload/8/85/Hoenn_ORAS.png";
        v["id"] = i + 1;
      }

      if (v.name === "sinnoh") {
        v["map"] = "https://cdn.bulbagarden.net/upload/7/74/Pt_Sinnoh.png";
        v["id"] = i + 1;
      }

      if (v.name === "unova") {
        v["map"] = "https://cdn.bulbagarden.net/upload/f/fc/Unova_B2W2_alt.png";
        v["id"] = i + 1;
      }

      if (v.name === "kalos") {
        v["map"] = "https://cdn.bulbagarden.net/upload/8/8a/Kalos_alt.png";
        v["id"] = i + 1;
      }

      if (v.name === "alola") {
        v["map"] =
          "https://cdn.bulbagarden.net/upload/0/0b/Alola_USUM_artwork.png";
        v["id"] = i + 1;
      }
    });
  }
}
