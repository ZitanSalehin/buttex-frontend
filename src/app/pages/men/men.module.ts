import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from '../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from '../../shared/lazy-component/banner-card/banner-card.module';

import { MenRoutingModule } from './men-routing.module';
import { MenComponent } from './men.component';


@NgModule({
  declarations: [
    MenComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class MenModule { }