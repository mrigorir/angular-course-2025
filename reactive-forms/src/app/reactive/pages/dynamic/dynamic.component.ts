import { JsonPipe } from '@angular/common';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dynamic',
  imports: [JsonPipe],
  templateUrl: './dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DynamicComponent { }
