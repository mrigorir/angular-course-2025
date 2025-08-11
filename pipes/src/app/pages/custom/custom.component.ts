import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  imports: [],
  templateUrl: './custom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomComponent { }
