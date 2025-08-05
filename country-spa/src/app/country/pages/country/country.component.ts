import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services/country.service';
@Component({
  selector: 'country',
  imports: [],
  templateUrl: './country.component.html',
})
export default class CountryComponent {
  countryService = inject(CountryService);

  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ( {request} ) => {
      return this.countryService.searchByCountryByAlphaCode(request.code);
    }
  })
 }
