import { Component, inject, signal } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'by-capital',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export default class ByCapitalComponent {
  private countryService = inject(CountryService);

  countries = signal<Country[]>([]);
  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);

  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe((data) => {
     this.countries.set(data);
    });
  }
}
