import { Component } from '@angular/core';
import {UserService} from '../app/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public _userservice:UserService){}
}
