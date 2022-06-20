import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from './../../shared/lazy-component/banner-card/banner-card.module';

import { NewArrivalRoutingModule } from './new-arrival-routing.module';
import { NewArrivalComponent } from './new-arrival.component';


@NgModule({
  declarations: [
    NewArrivalComponent
  ],
  imports: [
    CommonModule,
    NewArrivalRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class NewArrivalModule { }