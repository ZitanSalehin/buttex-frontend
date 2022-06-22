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
      
    }
  ] 
  
  womenOffers:any[] = [
    {
      _id:1,
      routerLink:'#',
      title:'2 PCS UNSTICHED SHIRT & TROUSER',
      image:'./assets/images/products/womenOffer/womenOffer1.jpg',
      
    }, 
    {
      _id:2,
      routerLink:'#',
      title:'2 PCS UNSTICHED SHIRT & DUPATTA',
      image:'./assets/images/products/womenOffer/womenOffer2.jpg',
      
    },
    {
      _id:3,
      routerLink:'#',
      title:'3 PCS UNSTICHED',
      image:'./assets/images/products/womenOffer/womenOffer3.jpg',
      
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
  
  womenFootwears:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear1.jpeg',
      
    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear1.jpeg',
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear1.jpeg',
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear1.jpeg',
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'PEACH BLENDED KAMEEZ SHALWAR | JJIKS-S-41164',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/womenFootwear/womenFootwear1.jpeg',
    }
  ]

  products:any[] =[
    {
      _id:1,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/01.jpg',
      

    },
    {
      _id:2,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/02.jpg"
    },
    {
      _id:3,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/03.jpg"
    },
    {
      _id:4,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/04.jpg"
    },
    {
      _id:5,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/05.jpg"
    },
    {
      _id:6,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/06.jpg"
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/07.jpg"
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/08.jpg"
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/09.jpg"
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/10.jpg"
    },
    {
      _id:11,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JJIKP-43146',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/11.jpg"
    },
    {
      _id:12,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/12.jpg"
    },
    {
      _id:13,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/13.jpg"
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

  getInfantId1(index: number): string {
    if(index === 0) {
      return 'item-4';
    } else if(index === 1) {
      return 'item-5'
    } else if(index===2) {
      return 'item-6'
    } else if(index===3) {
      return 'item-7'
    } else {
      return 'item-8'
    }
  }

  getInfantId2(index: number): string {
    if(index === 0) {
      return 'item-4';
    } else if(index === 1) {
      return 'item-5'
    } else if(index===2) {
      return 'item-6'
    } else if(index===3) {
      return 'item-7'
    } else {
      return 'item-8'
    }
  }
  
  getWomenOfferId(index: number): string {
    if(index === 0) {
      return 'item-9';
    } else if(index === 1) {
      return 'item-10'
    } else if(index===2) {
      return 'item-11'
    } else  {
      return 'item-7'
    } 
  }

  getWomenFootId(index: number): string {
    if(index === 0) {
      return 'item-12';
    } else if(index === 1) {
      return 'item-13'
    } else if(index===2) {
      return 'item-14'
    } else  {
      return 'item-15'
    } 
  }

  getOfferId2(index: number): string {
    if(index === 0) {
      return 'item-17';
    } else  {
      return 'item-18';
    } 

  }
}



