import { Component, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  onEmitInputSearch = output<string>();

  onSearch(value: string) {
    this.onEmitInputSearch.emit(value);
  }
 }
