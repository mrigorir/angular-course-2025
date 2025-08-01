import { Component } from '@angular/core';

import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'by-region',
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-region.component.html',
})
export default class ByRegionComponent {}
