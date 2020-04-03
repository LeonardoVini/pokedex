import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PokemonRegionComponent } from "./pokemon-region/pokemon-region.component";
import { PokemonTypeComponent } from "./pokemon-type/pokemon-type.component";
import { PokemonPageComponent } from "./pokemon-page/pokemon-page.component";

import { RegionResolver } from "./services/region-resolver.service";
import {
  TypeResolver,
  AllTypeResolver
} from "./services/type-resolver.service";
import {
  PokemonResolver,
  PokemonSpeciesResolver
} from "./services/pokemon-resolver.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "homepage", component: HomepageComponent },
  {
    path: "region/:id",
    component: PokemonRegionComponent,
    resolve: { region: RegionResolver }
  },
  {
    path: "type/:id",
    component: PokemonTypeComponent,
    resolve: { type: TypeResolver, allType: AllTypeResolver }
  },
  {
    path: "pokemon/:id",
    component: PokemonPageComponent,
    resolve: {
      pokemon: PokemonResolver,
      pokemon_species: PokemonSpeciesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
