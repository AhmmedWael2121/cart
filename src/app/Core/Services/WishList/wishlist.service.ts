import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { env } from '../../Environments/Environments';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}
  getWishlist(): Observable<any> {
    return this.http.get(`${env.baseUrl}/api/v1/wishlist`);
  }
  AddWishlist(id: string): Observable<any> {
    return this.http.post(`${env.baseUrl}/api/v1/wishlist`, {
      productId: id,
    });
  }
  RemveWishlistItem(id: string): Observable<any> {
    return this.http.delete(`${env.baseUrl}/api/v1/wishlist/${id}`);
  }

}