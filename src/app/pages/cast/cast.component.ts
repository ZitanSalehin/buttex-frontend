import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
      
    }, 
    {
      _id:5,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer5.jpg',
      
    }, 
    {
      _id:6,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer6.jpg',
      
    }, 
    {
      _id:7,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer7.jpeg',
      
    }, 
    {
      _id:8,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer8.jpeg',
      
    }
  ] 

  getOfferId2(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else  {
      return 'item-1';
    } 

  }
}
