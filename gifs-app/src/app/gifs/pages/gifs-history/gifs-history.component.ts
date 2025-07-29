import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GifsService } from '../../services/gifs.service';

import { toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs';

import { GifsListComponent } from '../trending/gifs-list/gifs-list.component';

@Component({
  selector: 'gifs-history',
  imports: [GifsListComponent],
  templateUrl: './gifs-history.component.html',
})
export default class GifsHistoryComponent {
  gifService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
