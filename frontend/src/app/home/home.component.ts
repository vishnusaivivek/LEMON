import { Component, OnInit } from '@angular/core';
import { arch } from 'os';
import { ShopService } from '../shop.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Shop} from '../shop.model'
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x=[];
  public data;url1;url2;url3;url4;
  
  myControl = new FormControl();
  fetchShops(){
    this.shopService
    .getShops()
    .subscribe((doc:Shop[])=>{
           this.data=doc;
           console.log(this.data);
      const l=Object.keys(doc).length;
      var i;
      for (i=0;i<l;i++){
        this.x[i]=doc[i].name;
      }    
      
    });
  };
  
  filteredOptions: Observable<string[]>;

  constructor(private shopService:ShopService,private router:Router) { }
  getshop(name){
    this.shopService.getshop(name).subscribe(doc=>{
      this.shopService.saveshop(doc);
      this.router.navigate(['/shopdetails']);
    })
  }

  ngOnInit() {
    this.fetchShops();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.x.slice())
    );
  
  }
  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.x.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


}
