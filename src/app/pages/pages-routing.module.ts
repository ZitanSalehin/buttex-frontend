import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:"product-details",
        loadChildren: () => import ('./product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
      {
        path:"new-arrival",
        loadChildren: () => import ('./new-arrival/new-arrival.module').then(m => m.NewArrivalModule)
      },
      {
        path:"cast",
        loadChildren: () => import ('./cast/cast.module').then(m => m.CastModule)
      },
      {
        path:"online-edition",
        loadChildren: () => import ('./online-edition/online-edition.module').then(m => m.OnlineEditionModule)
      },
      {
        path:"boys-girls",
        loadChildren: () => import ('./boys-girls/boys-girls.module').then(m => m.BoysGirlsModule)
      },
      {
        path:"women",
        loadChildren: () => import ('./women/women.module').then(m => m.WomenModule)
      },
      {
        path:"men",
        loadChildren: () => import ('./men/men.module').then(m => m.MenModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
