import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public data;
  uri='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getShops(){
    return this.http.get(`${this.uri}/shop/getshops`);
  }
  getshop(name){
      const shop={
        name:name
      }
      return this.http.post(`${this.uri}/shop/getshop`,shop);
  }
  saveshop(doc){
    this.data={
      name:doc[0].name,
      description:doc[0].description,
      avgrating:doc[0].avgrating,
      image1:doc[0].image1,
      image2:doc[0].image2,
      image3:doc[0].image3,
      image4:doc[0].image4
    }
  }
  sendshop(){
    return this.data;
  }
  
  
  addShop(name,latitude,longitude,image1,image2,image3,image4,description,avgrating){
   const shop={ name:name,
    latitude:latitude,
    longitude:longitude,
    image1:image1,
    image2:image2,
    image3:image3,
    image4:image4,
    description:description,
    avgrating:avgrating,
    
  }
  return this.http.post(`${this.uri}/shop/registration`,shop);
  }
 getNearby(lat,lng){
   const location={
     lat:lat,
     lng:lng
   }
  
    return this.http.post(`${this.uri}/shop/getnearby`,location);
  }

}
