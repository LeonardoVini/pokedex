import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokemonListComponent],
})
export class PokemonListModule { }
