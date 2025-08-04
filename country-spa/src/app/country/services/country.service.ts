import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';

import { Country } from '../interfaces/country.interface';
import { RestCountries } from '../interfaces/countries';

import { CountryMapper } from '../mappers/country.mappers';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private readonly base_url = environment.api_url;

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http
      .get<RestCountries[]>(`${this.base_url}/capital/${query}`)
      .pipe(map( resp => CountryMapper.mapRestCountriesArrayToCountryArray(resp)));
  }
}
