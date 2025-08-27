import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

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
  border = signal<Country[]>([]);

  countryForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  onFormChanged = effect((onCleanup) => {
    const regionSubscription = this.onRegionChanged();
    const countrySubscription = this.onCountryChanged();

    onCleanup(() => {
      regionSubscription?.unsubscribe();
      countrySubscription?.unsubscribe();
    });
  });

  onRegionChanged() {
    return this.countryForm
      .get('region')
      ?.valueChanges.pipe(
        tap(() => this.countryForm.get('country')?.setValue('')),
        tap(() => this.countryForm.get('border')?.setValue('')),
        switchMap((region) =>
          this.countyService.getCountriesByRegion(region ?? '')
        )
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
      });
  }

  onCountryChanged() {
    return this.countryForm
      .get('country')
      ?.valueChanges.pipe(
        tap(() => this.countryForm.get('border')?.setValue('')),
        filter((value) => value!.length > 0),
        switchMap((alphaCode) =>
          this.countyService.getCountryByAlphaCode(alphaCode ?? '')
        ),
        switchMap((country) => this.countyService.getCountryNamesByCodeArray(country.borders))
      )
      .subscribe((borders) => {
        this.border.set(borders);
      });
  }
}
