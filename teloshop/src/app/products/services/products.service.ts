import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Product, ProductsResponse } from '../interfaces/products.intertface';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Options, DEFAULT_OPTIONS } from '../interfaces/options.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL: string = environment.url;

  getProducts(options: Options = {}): Observable<ProductsResponse> {
    const params = { ...DEFAULT_OPTIONS, ...options };

    return this.http.get<ProductsResponse>(`${this.BASE_URL}products`, {
      params,
    });
  }

  getProductByIdSlug(idSlug: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}products/${idSlug}`);
  }
}
