import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';

import { PokemonListModule } from './pokemon-list/pokemon-list.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [PokemonListModule],
  exports: [],
})
export class HomepageModule { }
