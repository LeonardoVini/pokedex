import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonTypeComponent } from './pokemon-type.component';
import { PokemonListModule } from '../components/pokemon-list/pokemon-list.module';

@NgModule({
  declarations: [PokemonTypeComponent],
  imports: [
    CommonModule,
    RouterModule,
    PokemonListModule
  ],
  exports: [],
})
export class PokemonTypeModule { }
