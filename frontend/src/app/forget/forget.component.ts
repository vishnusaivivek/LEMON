import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{UserService} from '../user.service';
import {FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  createForm:FormGroup;
  constructor(private router:Router,private userService:UserService,private fb:FormBuilder)  { 
  this.createForm=this.fb.group({
    mail:["",Validators.required],
    
    securityqun:["",Validators.required],
    securityans:["",Validators.required],
    password:["",Validators.required]
  });
}
forget(mail,securityqun,securityans,password){
   this.userService.forget(mail,securityqun,securityans,password).subscribe(()=>{
     this.router.navigate(['/list']);
   })
  
}
  ngOnInit(): void {
  }

}

