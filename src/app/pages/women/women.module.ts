import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from '../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from '../../shared/lazy-component/banner-card/banner-card.module';

import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';


@NgModule({
  declarations: [
    WomenComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    ProductCardOneModule,
    BannerCardModule
  ]
})
export class WomenModule { }