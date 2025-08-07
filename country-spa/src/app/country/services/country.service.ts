import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Country } from '../interfaces/country.interface';
import { RestCountries } from '../interfaces/countries';
import { CountryMapper } from '../mappers/country.mappers';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Region } from '../interfaces/regions.interface';

type SearchType = 'capital' | 'name' | 'region' | 'alpha';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private readonly base_url = environment.api_url;

  // Usamos un objeto para almacenar todas las cachés
  private readonly cacheStores = {
    capital: new Map<string, Country[]>(),
    name: new Map<string, Country[]>(),
    region: new Map<string, Country[]>(),
    alpha: new Map<string, Country>(),
  };

  searchByCapital(query: string): Observable<Country[]> {
    return this.search(query, 'capital');
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this.search(query, 'name');
  }

  searchByRegion(query: Region): Observable<Country[]> {
    return this.search(query, 'region');
  }

  searchByCountryByAlphaCode(code: string): Observable<Country | undefined> {
    return this.searchAlpha(code);
  }

  private searchAlpha(code: string): Observable<Country | undefined> {
    code = code.toLowerCase();
    const cacheStore = this.cacheStores.alpha;

    if (cacheStore.has(code)) {
      return of(cacheStore.get(code));
    }

    return this.http.get<RestCountries>(`${this.base_url}/alpha/${code}`).pipe(
      map((response) => {
        const country = CountryMapper.mapRestCountriesToCountry(response);
        cacheStore.set(code, country);
        return country;
      }),
      catchError((error) => {
        console.error('Error searching by alpha code:', error);
        return throwError(
          () => new Error(`Country not found by code: ${code}`, error)
        );
      })
    );
  }

  private search(
    query: string,
    searchType: Exclude<SearchType, 'alpha'>
  ): Observable<Country[]> {
    query = query.toLowerCase();
    const cacheStore = this.cacheStores[searchType];

    if (cacheStore.has(query)) {
      return of(cacheStore.get(query) ?? []);
    }

    return this.http
      .get<RestCountries[]>(`${this.base_url}/${searchType}/${query}`)
      .pipe(
        map((response) =>
          CountryMapper.mapRestCountriesArrayToCountryArray(response)
        ),
        tap((countries) => cacheStore.set(query, countries)),
        catchError((error) => {
          console.error(`Error searching by ${searchType}:`, error);
          return throwError(() => new Error(`${searchType} not found`, error));
        })
      );
  }
}
