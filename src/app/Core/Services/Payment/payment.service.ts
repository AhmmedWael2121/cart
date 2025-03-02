import { env } from './../../Environments/Environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly _httpClient:HttpClient) { }
  
  token:any = localStorage.getItem("token");

  PostOnlinePayement(id:string,data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      "shippingAddress":data
    }
    
  
  )


  }
  PostCashPayement(id:string,data:object):Observable<any>{
    return this._httpClient.post(`${env.baseUrl}/api/v1/orders/${id}`,{
      "shippingAddress":data
    }
  
  )


  }
}
