import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'numbers',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersComponent {
  totalSells = signal<number>(2_433_232.5567);
  percent = signal<number>(0.4856);
}
