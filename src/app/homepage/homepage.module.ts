import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ],
  exports: [],
})
export class HomepageModule { }
