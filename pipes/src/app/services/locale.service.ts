import { Injectable, signal } from '@angular/core';

import { currentLocale } from '../interfaces/locales.interface';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  constructor() {
    // (localStorage.getItem('locale') as currentLocale)
    //   ? localStorage.setItem('locale', this.currentlocale())
    //   : 'es';

    this.currentlocale.set(localStorage.getItem('locale') as currentLocale ?? 'es');
  }

  private currentlocale = signal<currentLocale>('fr');

  get getLocale() {
    return this.currentlocale();
  }

  changeLocale(locale: currentLocale) {
    localStorage.setItem('local', locale);
    this.currentlocale.set(locale);
    window.location.reload();
  }
}
