import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../Environments/Environments';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}
  getCategoryList(): Observable<any> {
    return this._httpClient.get(
      `${env.baseUrl}/api/v1/categories`
    );

  }

  getSpecificCategory(id : string): Observable<any> { 
    return this._httpClient.get(
      `${env.baseUrl}/api/v1/categories/${id}`
    );
    
  }

}
