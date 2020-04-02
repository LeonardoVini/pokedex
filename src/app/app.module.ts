import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { PokemonRegionModule } from './pokemon-region/pokemon-region.module';
import { PokemonTypeModule } from './pokemon-type/pokemon-type.module';
import { PokemonPageModule } from './pokemon-page/pokemon-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomepageModule,
    LoginModule,
    PokemonRegionModule,
    PokemonTypeModule,
    PokemonPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
