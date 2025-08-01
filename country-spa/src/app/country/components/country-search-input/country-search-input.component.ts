import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  placeholder = input<string>('Buscar');
  inputSearch = output<string>();


  onSearch(value: string) {
    this.inputSearch.emit(value);
  }
 }
