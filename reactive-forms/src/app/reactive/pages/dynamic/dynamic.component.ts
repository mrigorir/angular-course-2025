import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DynamicComponent { }
