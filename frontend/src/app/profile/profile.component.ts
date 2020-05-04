import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {User} from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public data;
  public url;

  constructor(public userService:UserService,private router:Router) { 
    this.data=userService.getuser();
     console.log(this.data);
  }

  ngOnInit(): void {
  
    
    this.url="http://localhost:3000/"+this.data.profilephoto;
  


   
  }


}
