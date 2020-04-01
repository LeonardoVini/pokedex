import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonRegionComponent } from './pokemon-region.component';
import { PokemonListModule } from '../components/pokemon-list/pokemon-list.module';

@NgModule({
  declarations: [PokemonRegionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PokemonListModule
  ],
  exports: [],
})
export class PokemonRegionModule { }
