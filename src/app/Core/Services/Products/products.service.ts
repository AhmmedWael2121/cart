import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../Environments/Environments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getproducts():Observable<any>{
    return this._httpClient.get(`${env.baseUrl}/api/v1/products`)
  }
  getSpecificProduct(id :string):Observable<any>{
    return this._httpClient.get(`${env.baseUrl}/api/v1/products/${id}`)
  }
}
