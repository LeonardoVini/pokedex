import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonPageComponent } from './pokemon-page.component';

import { PokedexDataModule } from './pokedex-data/pokedex-data.module';
import { PokedexMoreDataModule } from './pokedex-more-data/pokedex-more-data.module';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [
    PokemonPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PokedexDataModule,
    PokedexMoreDataModule,
    HeaderModule,
    FooterModule
  ],
  exports: [PokemonPageComponent],
})
export class PokemonPageModule { }
