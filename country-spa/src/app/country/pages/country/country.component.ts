import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services/country.service';

import { NotFoundComponent } from '../not-found/not-found.component';
import { CountryInfoComponent } from '../country-info/country-info.component';


@Component({
  selector: 'country',
  imports: [NotFoundComponent, CountryInfoComponent],
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
