import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  banners:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/bannersItems/banner1.jpg',
      
      
    }
  ] 
  offers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer1.jpg',
      
    }, 
    {
      _id:2,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer2.jpg',
      
    },
    {
      _id:3,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer3.jpg',
      
    }, 
    {
      _id:4,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer4.jpg',
      
    }
  ]


  getOfferId1(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else if(index === 1) {
      return 'item-1';
    } else if(index === 2) {
      return 'item-2';
    } else  {
      return 'item-3';
    }

  } 
}



