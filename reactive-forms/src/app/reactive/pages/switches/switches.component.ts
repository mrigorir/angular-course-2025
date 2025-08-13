import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'switches',
  imports: [JsonPipe],
  templateUrl: './switches.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchesComponent { }
