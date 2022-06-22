import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boys-girls',
  templateUrl: './boys-girls.component.html',
  styleUrls: ['./boys-girls.component.scss']
})
export class BoysGirlsComponent implements OnInit {

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
      
    }, 
    {
      _id:9,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer9.jpeg',
      
    }, 
    {
      _id:10,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer10.jpeg',
      
    }, 
    {
      _id:11,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer11.jpeg',
      
    }, 
    {
      _id:12,
      routerLink:'#',
      title:'dummy text',
      image:'./assets/images/products/newArrivalOffer/newArrivalOffer12.jpeg',
      
    }
  ] 

  infants:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/infant1.jpeg',
      

    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/infant2.jpeg',
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/infant3.jpeg',
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/infant4.jpeg',
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/infant5.jpeg',
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear1.jpeg',
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear2.jpeg',
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear3.jpeg',
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear4.jpeg',
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/infantProducts/womenFootwear5.jpeg',
    }
  ]

  getOfferId(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else  {
      return 'item-1';
    } 
  }

  getInfantId(index: number): string {
    if(index === 0) {
      return 'item-2';
    } else if(index === 1) {
      return 'item-3'
    } else if(index===2) {
      return 'item-4'
    } else if(index===3) {
      return 'item-5'
    } else {
      return 'item-6'
    }
  }

  
}
