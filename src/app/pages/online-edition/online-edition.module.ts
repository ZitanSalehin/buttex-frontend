import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from './../../shared/lazy-component/banner-card/banner-card.module';

import { OnlineEditionRoutingModule } from './online-edition-routing.module';
import { OnlineEditionComponent } from './online-edition.component';


@NgModule({
  declarations: [
    OnlineEditionComponent
  ],
  imports: [
    CommonModule,
    OnlineEditionRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class OnlineEditionModule { }