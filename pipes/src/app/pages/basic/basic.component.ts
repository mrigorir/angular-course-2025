import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

import { LocaleService } from '../../services/locale.service';

import { currentLocale } from '../../interfaces/locales.interface';

@Component({
  selector: 'basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicComponent {
  localeService  = inject(LocaleService);

  nameLower = signal<string>('marco');
  nameUpper = signal<string>('MARCO');
  fullName = signal<string>('mArCo PArrA');

  customDate = signal<Date>(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  });

  changeLocale(locale: currentLocale) {
    this.localeService.changeLocale(locale);
  }
}
