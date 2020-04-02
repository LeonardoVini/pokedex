import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonTypeComponent } from './pokemon-type.component';
import { PokemonListModule } from '../components/pokemon-list/pokemon-list.module';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [PokemonTypeComponent],
  imports: [
    CommonModule,
    RouterModule,
    PokemonListModule,
    HeaderModule,
    FooterModule
  ],
  exports: [],
})
export class PokemonTypeModule { }
