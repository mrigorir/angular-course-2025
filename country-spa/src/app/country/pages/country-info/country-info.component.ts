import { Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.component.html',
})
export class CountryInfoComponent {
  countryInfo = input.required<Country>();

  currentYear = computed(() => {
    return new Date().getFullYear();
  })
}
