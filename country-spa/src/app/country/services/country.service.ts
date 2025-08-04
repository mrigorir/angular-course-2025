import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import { Capital } from '../interfaces/by-capital.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  private readonly base_url = environment.api_url;

  searchByCapital( query: string ):Observable<Capital[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<Capital[]>(`${this.base_url}/capital/${query}`);
  }
}
