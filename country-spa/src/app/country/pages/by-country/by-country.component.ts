import { Component, inject, resource, signal } from '@angular/core';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country',
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country.component.html',
})
export default class ByCountryComponent {
  private countryService = inject(CountryService);

  query = signal<string>('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      );
    },
  });

  onSearch(value: string) {
    this.query.set(value);
  }
}
