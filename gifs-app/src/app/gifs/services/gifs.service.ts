import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';

import type { GiphyResponse } from '../interfaces/giphy.interface';

import { environment } from '@environments/environment';

import { map, Observable, tap } from 'rxjs';
import { GifMapper } from '../mapper/gifs.mapper';
import { Gif } from '../interfaces/gif.interface';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  try {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY);
    return gifsFromLocalStorage ? JSON.parse(gifsFromLocalStorage) : {};
  } catch {
    return {};
  }
}

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  constructor() {
    loadFromLocalStorage();
  }

  private readonly apiKey = environment.giphyApiKey;
  private readonly baseUrl = environment.giphySite;
  private readonly MAX_GIFS_LIMIT = '20';

  private searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());

  public searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  private saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });

  loadTrendingGifs(): Observable<GiphyResponse> {
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

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
