import { Component, inject, resource, signal } from '@angular/core';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-country',
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country.component.html',
})
export default class ByCountryComponent {
  private countryService = inject(CountryService);

  query = signal<string>('');

  onSearch(value: string) {
    this.query.set(value);
  }

  // Search using rxResource (Observables)
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.searchByCountry(request.query);
    },
  });

  // Search using Resources (Promises)

  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(request.query)
  //     );
  //   },
  // });
}
