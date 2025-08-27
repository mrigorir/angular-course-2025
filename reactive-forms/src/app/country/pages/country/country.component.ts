import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountryComponent {
  private fb = inject(FormBuilder);

  countyService = inject(CountryService);

  regions = signal(this.countyService.regions);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  countryForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });
}
