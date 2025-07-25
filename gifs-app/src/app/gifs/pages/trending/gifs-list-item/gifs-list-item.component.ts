import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItemComponent {
  gif = input.required<string>();
}
