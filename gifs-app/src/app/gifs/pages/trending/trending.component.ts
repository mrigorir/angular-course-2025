import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { GifsService } from '../../services/gifs.service';

import { GifMapper } from '../../mapper/gifs.mapper';

import { GifsListComponent } from './gifs-list/gifs-list.component';

import { imageUrls } from './consts/gifs-list-images';
import { Gif } from '../../interfaces/gif.interface';
import { GiphyItem } from '../../interfaces/giphy.interface';
@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingComponent implements OnInit {
  private gifService = inject(GifsService);

  private gifMapper = signal(GifMapper);
  private gifs = signal<Gif[]>([]);

  gifsPrevImages = signal<string[]>(imageUrls);

  ngOnInit(): void {
    this.gifService.laodTrendingGifs().subscribe((response) => {
      this.gifs.set(this.mappedGifs(response.data));
      console.log(this.gifs())
    });
  }

  mappedGifs(data: GiphyItem[]) {
    return this.gifMapper().mapGiphyItemsToGifArray(data);
  }
}
