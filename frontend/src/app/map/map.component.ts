import { Component,AfterViewInit } from '@angular/core';
import {ShopService} from '../shop.service';
import { Router } from '@angular/router';

import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

private map;
public myFeatureGroup;
lat;
lng;
public name;


  constructor(private router:Router,public shopService:ShopService) { }
  
  getNearby(lat,lng){
  
    this.shopService.getNearby(lat,lng).subscribe(doc=>{
      const l=Object.keys(doc).length;
      var i=0;
      if(l>0){
                for (i=0;i<l;i++){

            const marker=L.marker([doc[i].latitude,doc[i].longitude]).addTo(this.myFeatureGroup);
            //marker.setLatLng([doc[i].latitude,doc[i].longitude]);
            marker.bindTooltip(doc[i].name).openTooltip();
            marker.name=doc[i].name;
          }
        }
      else{
        console.log("no shops found near you");
      }
        this.router.navigate(['/map']);
     })
  };
 groupClick(event){
   console.log(event.layer.name);

    this.getshop(event.layer.name);
 }
 getshop(name){
    this.shopService.getshop(name).subscribe(doc=>{
      this.shopService.saveshop(doc);
      return this.router.navigate(['/shopdetails']);
    })
  }
  public initMap(): void {
    this.map = L.map('map', {
      center: [ 0, 0 ],
      zoom: 5
    });
     this.myFeatureGroup = L.featureGroup().addTo(this.map).on("click", this.groupClick.bind(this));
   
  
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  tiles.addTo(this.map);
  }  
  getUserLocation() {
    

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       
        console.log(position.coords);
        const marker=L.marker([position.coords.latitude,position.coords.longitude]).addTo(this.map);
        marker.setLatLng([position.coords.latitude,position.coords.longitude]);
        marker.bindTooltip("Your Location ").openTooltip();
        this.getNearby(position.coords.latitude,position.coords.longitude);
      
      });
    }
  }
  
  
 
  ngAfterViewInit(): void {
    this.initMap();
    this.getUserLocation();
 }
      
}
