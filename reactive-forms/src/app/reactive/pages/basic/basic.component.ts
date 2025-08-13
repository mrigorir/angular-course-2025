import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'basic',
  imports: [],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent { }
