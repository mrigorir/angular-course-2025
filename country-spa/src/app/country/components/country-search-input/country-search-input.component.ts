import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  placeholder = input<string>('Buscar');
  inputSearch = output<string>();

  inputValue = signal<string>('');

  onSearch(value: string) {
    this.inputSearch.emit(value);
  }

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this, this.inputSearch.emit(value);
    }, 500);

    onCleanup(() =>{
      clearTimeout(timeout)
    });
  });
}
