import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import type { GiphyResponse } from '../interfaces/giphy.interface';

import { environment } from '@environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private http = inject(HttpClient);
  private readonly apiKey = environment.giphyApiKey;
  private readonly baseUrl = environment.giphySite;

  laodTrendingGifgs(): Observable<GiphyResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10');

    return this.http.get<GiphyResponse>(`${this.baseUrl}/trending`, { params });
  }
}
