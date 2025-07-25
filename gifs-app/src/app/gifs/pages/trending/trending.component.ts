import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GifsListComponent } from './gifs-list/gifs-list.component';

@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingComponent { }
