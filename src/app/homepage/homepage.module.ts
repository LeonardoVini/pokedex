import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  exports: [],
})
export class HomepageModule { }
