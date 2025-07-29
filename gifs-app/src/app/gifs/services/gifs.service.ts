import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import type { GiphyResponse } from '../interfaces/giphy.interface';

import { environment } from '@environments/environment';

import { map, Observable, tap } from 'rxjs';
import { GifMapper } from '../mapper/gifs.mapper';
import { Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  private readonly apiKey = environment.giphyApiKey;
  private readonly baseUrl = environment.giphySite;

  private readonly MAX_GIFS_LIMIT = '20';

  private searchHistory = signal<Record<string, Gif[]>>({});

  public searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  laodTrendingGifs(): Observable<GiphyResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.MAX_GIFS_LIMIT);

    return this.http.get<GiphyResponse>(`${this.baseUrl}/trending`, { params });
  }

  searchGifs(query: string): Observable<Gif[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.MAX_GIFS_LIMIT)
      .set('q', query);

    return this.http
      .get<GiphyResponse>(`${this.baseUrl}/search`, { params })
      .pipe(
        // Esto de abajo es lo mismo que:
        // map((response) => GifMapper.mapGiphyItemsToGifArray(response.data))
        map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data)),
        // Historial
        tap((items) => {
          this.searchHistory.update((currentHistory) => ({
            ...currentHistory,
            [query.toLocaleLowerCase()]: items,
          }));
        })
      );
  }
}
