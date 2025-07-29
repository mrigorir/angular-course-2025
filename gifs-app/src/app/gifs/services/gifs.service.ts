import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import type { GiphyResponse } from '../interfaces/giphy.interface';

import { environment } from '@environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);
  private readonly apiKey = environment.giphyApiKey;
  private readonly baseUrl = environment.giphySite;
  private readonly MAX_GIFS_LIMIT = '20';

  laodTrendingGifs(): Observable<GiphyResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.MAX_GIFS_LIMIT);

    return this.http.get<GiphyResponse>(`${this.baseUrl}/trending`, { params });
  }
}
