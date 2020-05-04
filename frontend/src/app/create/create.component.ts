import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatTableDataSource} from '@angular/material/table';
import {MatCheckboxModule } from '@angular/material/checkbox';
import{UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user.model';
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
 image;
  createForm:FormGroup;
  constructor(private http:HttpClient, private userservice:UserService,private snackbar:MatSnackBar,private router:Router,private fb:FormBuilder) { 
    this.createForm=this.fb.group({
      
    name:["",Validators.required],
    mail:["",Validators.required],
    gender:"",
    phoneno:["",Validators.required],
    alternateph:"",
    dob:["",Validators.required],
    profilephoto:"",
    password:["",Validators.required],
    confirmpassword:["",Validators.required],
    securityqun:["",Validators.required],
    securityans:["",Validators.required],
     check:["",Validators.required]


    });
  }
  addUser(name,mail,gender,phoneno,alternateph,dob,password,securityqun,securityans ){
    console.log(gender);
    const formdata=new FormData();
    formdata.append('profilephoto',this.image);
    formdata.append('name',name);
    formdata.append('mail',mail);
    formdata.append('gender',gender);
    formdata.append('phoneno',phoneno);
    formdata.append('alternateph',alternateph);
    formdata.append('dob',dob);
    formdata.append('password',password);
    formdata.append('securityqun',securityqun);
    formdata.append('securityans',securityans);
    this.http.post<any>('http://localhost:3000/user/registration',formdata).subscribe(
      (res)=>{ this.snackbar.open("registration success",'ok',{duration:5000})},
      (err)=>{ this.snackbar.open("registration failure try again",'ok',{duration:5000})}
    )
    
    // this.userservice.addUser(name,mail,gender,phoneno,alternateph,dob,this.image,password,confirmpassword,securityqun,securityans).subscribe(()=>{
    //   this.snackbar.open("registration success",'ok',{duration:5000});  
    //   this.router.navigate(['/list']);
    // },(err)=>{
    //   this.snackbar.open("registration failure \n try again.",'go',{duration:5000});
    // }
    // );
    
    
  }
  selectimage(event){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.image=file;
    }
  }
  
  

  ngOnInit(): void {
//this.addUser();

  }
}


