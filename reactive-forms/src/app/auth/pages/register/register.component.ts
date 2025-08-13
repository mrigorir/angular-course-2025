import { JsonPipe } from '@angular/common';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'register-page',
  imports: [JsonPipe],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent { }
