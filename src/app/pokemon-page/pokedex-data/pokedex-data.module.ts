import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokedexDataComponent } from './pokedex-data.component';

@NgModule({
  declarations: [PokedexDataComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PokedexDataComponent],
})
export class PokedexDataModule { }
