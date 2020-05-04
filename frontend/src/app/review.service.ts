import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public review;

 uri='http://localhost:3000';

  constructor(private http:HttpClient) { }
  getReviews(){
    return this.http.get(`${this.uri}/review/getreviews`);
  }
  addReview(username,shopname,rating,review){
    const rev={
      username:username,
      shopname:shopname,
      rating:rating,
      review:review
    };
    return this.http.post(`${this.uri}/review`,rev);
  }
  getperticularreviews(name){
    const rev={
      shopname:name
    }
    console.log(rev);
    
    return this.http.post(`${this.uri}/review/getperticularreviews`,rev);
  }
}
