import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'numbers',
  imports: [],
  templateUrl: './numbers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersComponent { }
