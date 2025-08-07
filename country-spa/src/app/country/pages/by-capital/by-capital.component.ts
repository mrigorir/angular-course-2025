import { Component, inject, linkedSignal, resource, signal } from '@angular/core';

import { rxResource } from '@angular/core/rxjs-interop';

import { CountryService } from '../../services/country.service';

import { firstValueFrom, of } from 'rxjs';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'by-capital',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export default class ByCapitalComponent {
  private countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal<string>(() => this.queryParam);

  onSearch(value: string) {
    this.query.set(value);
  }

  // Search using rxResource (Observables)
  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.searchByCapital(request.query);
    },
  });

  // Search using Resources (Promises)

  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     );
  //   },
  // });

  // Search using traditional methods

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
