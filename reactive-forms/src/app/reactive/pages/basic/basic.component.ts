import { JsonPipe } from '@angular/common';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'basic',
  imports: [JsonPipe],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicComponent { }
