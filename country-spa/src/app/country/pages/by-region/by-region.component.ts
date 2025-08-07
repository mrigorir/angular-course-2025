import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryService } from '../../services/country.service';

import { Region, regionButtons } from '../../interfaces/regions.interface';

import { CountryListComponent } from '../../components/country-list/country-list.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'by-region',
  imports: [CountryListComponent, CommonModule],
  templateUrl: './by-region.component.html',
})
export default class ByRegionComponent {
  countryService = inject(CountryService);

  public regionButtons = signal(regionButtons);
  private region = signal<Region>('America');

  setSelectedRegion(region: Region) {
    this.region.set(region);
  }

   countryResource = rxResource({
    request: () => ({region: this.region()}),
    loader: ({ request }) => {
      if (!request.region) return of([]);

      return this.countryService.searchByRegion(request.region);
    }
   })
}
