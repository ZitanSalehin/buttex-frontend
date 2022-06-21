import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from './../../shared/lazy-component/banner-card/banner-card.module';

import { CastRoutingModule } from './cast-routing.module';
import { CastComponent } from './cast.component';


@NgModule({
  declarations: [
    CastComponent
  ],
  imports: [
    CommonModule,
    CastRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class CastModule { }