import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core'
import{MatSelectModule} from '@angular/material/select';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import{MatTableModule} from '@angular/material/table';
import{MatDividerModule} from '@angular/material/divider';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { NgMatSearchBarModule} from 'ng-mat-search-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReviewService } from './review.service';
import {UserService} from './user.service';
import {ShopService} from './shop.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './forget/forget.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {SliderModule} from 'angular-image-slider'
import { MatTooltipModule } from "@angular/material/tooltip";
import { AboutusComponent } from './aboutus/aboutus.component';

const routes:Routes=[
  {path:'create',component:CreateComponent},
  {path:'list',component:ListComponent},
  {path:'home',component:HomeComponent},
  {path:'forget',component:ForgetComponent},
  {path:'map',component:MapComponent},
  {path:'profile',component:ProfileComponent},
  {path:'shopdetails',component:ShopdetailsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    HomeComponent,
    ForgetComponent,
    MapComponent,
    ProfileComponent,
    ShopdetailsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTooltipModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatToolbarModule,
    SliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    NgMatSearchBarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [ReviewService,UserService,ShopService,{provide:MAT_CHECKBOX_CLICK_ACTION,useValue:'check'}],
  bootstrap: [AppComponent],

})
export class AppModule { }
