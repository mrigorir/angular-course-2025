import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country',
  imports: [],
  templateUrl: './country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountryComponent { }
