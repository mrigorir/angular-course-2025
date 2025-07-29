import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { GifsService } from '../../services/gifs.service';

import { GifMapper } from '../../mapper/gifs.mapper';

import { GifsListComponent } from '../trending/gifs-list/gifs-list.component';
import { Gif } from '../../interfaces/gif.interface';
import { GiphyItem } from '../../interfaces/giphy.interface';

@Component({
  selector: 'app-search',
  imports: [GifsListComponent],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchComponent {
  private gifService = inject(GifsService);

  private gifMapper = signal(GifMapper);

  loadGifs = signal<boolean>(true);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((response) => {
      this.gifs.set(this.mappedGifs(response.data));
      this.loadGifs.set(false);
    });
  }

  mappedGifs(data: GiphyItem[]) {
    return this.gifMapper().mapGiphyItemsToGifArray(data);
  }
}
