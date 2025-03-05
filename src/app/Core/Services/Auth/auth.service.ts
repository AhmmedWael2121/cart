import { env } from './../../Environments/Environments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string =""
  private readonly _router = inject(Router)
  //get token from local storage by jwt-decode

  constructor(private _httpClient:HttpClient) { }
  sendRegister(data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/auth/signup`,data);
  }
  sendLogin(data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/auth/signin`,data);
  }
  getUserData():boolean{
    if(localStorage.getItem("token")){
      this.token =jwtDecode(localStorage.getItem('token')!)
      return true
    }
    return false

  }


  VerifyEmailSubmit(data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/auth/forgotPasswords`,data);
  }

  VerifyCodeSubmit(data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/auth/verifyResetCode`,data);
  }
  RePassordSubmit(data:object):Observable<any>{
    return this._httpClient.put(`${env.baseUrl}/api/v1/auth/resetPassword`,data);
  }
  logOut():void{
    localStorage.removeItem('token');
  
    this.token = "";
    this._router.navigate(['/login']);
  }
}