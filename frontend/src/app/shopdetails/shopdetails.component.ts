import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {ShopService} from '../shop.service';
import {ReviewService} from "../review.service";
import{UserService} from "../user.service";
import { MatSnackBar, SimpleSnackBar } from '@angular/material/snack-bar';
import {ThemePalette} from '@angular/material/core';

import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShopdetailsComponent implements OnInit {
  
  createForm:FormGroup;
  ThemePalette = 'accent';
  checked = false;
  disabled = false;
  @Input('rating') public rating: number;
  @Input('starCount') public starCount: number;
  @Input('color') public color: string;
  @Output() public ratingUpdated = new EventEmitter();
  public snackBarDuration: number = 2000;
  public ratingArr = [];
  public url1;url2;url3;url4;url5;
  public imagesUrl;
public shopdata;
public reviewdata;
  constructor(private shopservice:ShopService,public userService:UserService,private snackbar:MatSnackBar,private reviewservice:ReviewService,private fb:FormBuilder) {
    this.createForm=this.fb.group({
      
      username:["",Validators.required],
      rating:["",Validators.required],
      review:["",Validators.required]
    });
     this.shopdata=shopservice.sendshop();
     this.getperticularreviews(this.shopdata.name);
     console.log(this.shopdata);
   }
   getperticularreviews(name){
    this.reviewservice.getperticularreviews(name).subscribe(doc=>{
      this.reviewdata=doc;
      console.log(this.reviewdata);
    })
   }
   addreview(username,rating,review,asfav){
     console.log(asfav._checked);
    this.reviewservice.addReview(username,this.shopdata.name,rating,review).subscribe(data=>{
      this.snackbar.open("Review updated",'ok',{duration:5000});
     })
   }
   

  ngOnInit(): void {
    this.url1="http://localhost:3000/"+this.shopdata.image1;
    this.url2="http://localhost:3000/"+this.shopdata.image2;
    this.url3="http://localhost:3000/"+this.shopdata.image3;
    this.url4="http://localhost:3000/"+this.shopdata.image4;
    this.url5="http://localhost:3000/"+this.shopdata.image5;
   

      }
  
 

}

