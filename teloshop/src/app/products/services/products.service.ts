import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ProductsResponse } from '../interfaces/products.intertface';
import { Observable, tap } from 'rxjs';

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
    }).pipe(
      tap((data) => console.log(data))
    );
  }
}
