import { env } from './../../Environments/Environments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly token: string;
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  //A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to
  count: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private readonly _http: HttpClient) {
    if (isPlatformBrowser(this._pLATFORM_ID)) {
      this.token = localStorage.getItem('token')!;
    } else {
      // if (token is undefined)
      this.token = '';
    }
  }

  AddToCart(id: string): Observable<any> {
    return this._http.post(
      `${env.baseUrl}/api/v1/cart`,
      {
        productId: id,
      }
    );
  }

  GetCartProducts(): Observable<any> {
    return this._http.get(`${env.baseUrl}/api/v1/cart`
    );
  }

  RemoveCartProducts(id: string): Observable<any> {
    return this._http.delete(`${env.baseUrl}/api/v1/cart/${id}`);
  }

  UpdateCartQty(id: string, newCount: number): Observable<any> {
    return this._http.put(
      `${env.baseUrl}/api/v1/cart/${id}`,
      {
        count: newCount,
      }
      
    );
  }

}
