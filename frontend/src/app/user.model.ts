import { NgModel } from '@angular/forms';

export interface User{
    id:String;
    name:String;
    mail:String;
    gender:String;
    phoneno:Number;
    alternateph:Number;
    dob:String;
    profilephoto:String;
    password:String;
    confirmpassword:String,
    securityqun:String;
    securityans:String;
}
