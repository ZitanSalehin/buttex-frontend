import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from './../../shared/lazy-component/banner-card/banner-card.module';

import { BoysGirlsRoutingModule } from './boys-girls-routing.module';
import { BoysGirlsComponent } from './boys-girls.component';


@NgModule({
  declarations: [
    BoysGirlsComponent
  ],
  imports: [
    CommonModule,
    BoysGirlsRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class BoysGirlsModule { }