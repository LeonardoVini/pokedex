import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from './homepage/homepage.component';
import { PokemonRegionComponent } from './pokemon-region/pokemon-region.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'region/:id', component: PokemonRegionComponent },
  { path: 'type/:id', component: PokemonTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
