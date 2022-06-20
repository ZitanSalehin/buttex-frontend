import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCardComponent } from './banner-card.component';


@NgModule({
  declarations: [
    BannerCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BannerCardComponent
  ]
})
export class BannerCardModule { }