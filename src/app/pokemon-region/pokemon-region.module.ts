import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonRegionComponent } from './pokemon-region.component';
import { PokemonListModule } from '../components/pokemon-list/pokemon-list.module';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [PokemonRegionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PokemonListModule,
    HeaderModule,
    FooterModule
  ],
  exports: [],
})
export class PokemonRegionModule { }
