import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicComponent {
  nameLower = signal<string>('marco');
  nameUpper = signal<string>('MARCO');
  fullName = signal<string>('mArCo PArrA');
}
