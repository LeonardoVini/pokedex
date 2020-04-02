import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonPageComponent } from './pokemon-page.component';

@NgModule({
  declarations: [PokemonPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokemonPageComponent],
})
export class PokemonPageModule { }
