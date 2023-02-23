import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router,private http:HttpClient) { }
  Register(data: any) {
    
    return this.http.post('http://localhost:3002/register',data)
  }

  Verify(token: any) {
    return this.http.get('http://localhost:3002/verify_user',{params:{token:token}})
  }

  Login(data: any) {
    
    return this.http.post('http://localhost:3002/login',data)
  }

  Submit(data: any) {
    return this.http.post('http://localhost:3002/forgot_password',data)
  }

  
  Reset(token:any,data: any) {
    return this.http.post('http://localhost:3002/Reset_password',data,{params:{token:token}})
  }

}
