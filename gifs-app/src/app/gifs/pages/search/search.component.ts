import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { GifsService } from '../../services/gifs.service';

import { GifsListComponent } from '../trending/gifs-list/gifs-list.component';

import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifsListComponent],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchComponent {
  private gifService = inject(GifsService);
  
  loadGifs = signal<boolean>(true);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((response) => {
      this.gifs.set(response);
      this.loadGifs.set(false);
    });
  }
}
