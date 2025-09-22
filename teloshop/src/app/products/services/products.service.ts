import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ProductsResponse } from '../interfaces/products.intertface';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl: string = environment.url;

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.baseUrl}/products`);
  }
}
