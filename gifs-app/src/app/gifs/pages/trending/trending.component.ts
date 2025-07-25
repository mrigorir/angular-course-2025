import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { GifsListComponent } from './gifs-list/gifs-list.component';

import { imageUrls } from './consts/gifs-list-images';
@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingComponent {
  gifs = signal<string[]>(imageUrls);
 }
