import { Component } from '@angular/core';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'by-capital',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export default class ByCapitalComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
