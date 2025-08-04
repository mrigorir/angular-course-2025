import { Component, inject } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'by-capital',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital.component.html',
})
export default class ByCapitalComponent {
  private countryService = inject(CountryService);




  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe((data) => {
      console.log(data);
    });
  }
}
