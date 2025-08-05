import { Component, inject, resource, signal } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export default class ByCapitalComponent {
  private countryService = inject(CountryService);

  query = signal<string>('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    },
  });

  onSearch(value: string) {
    this.query.set(value);
  }

  // countries = signal<Country[]>([]);
  // isLoading = signal<boolean>(false);
  // isError = signal<string | null>(null);

  // onSearch(query: string) {
  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(`Capital not found: ${query}`);
  //     }
  //   });
  // }
}
