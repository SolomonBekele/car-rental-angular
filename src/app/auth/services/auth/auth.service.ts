import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9000";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(signupRequest:any){
    return this.http.post(BASE_URL+"/api/auth/signup",signupRequest).subscribe();
  //   .subscribe(
  //     (response) => {
  //       // Handle the success response
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Handle the error response
  //       console.error(error);
  // });
}
}

