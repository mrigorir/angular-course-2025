import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';

import { GifsService } from '../../services/gifs.service';

import { GiphyItem } from '../../interfaces/giphy.interface';
import { Gif } from '../../interfaces/gif.interface';

import { imageUrls } from './consts/gifs-list-images';
import { GifMapper } from '../../mapper/gifs.mapper';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingComponent implements OnInit {
  scrollDiv = viewChild<ElementRef>('scrollDiv');

  private gifService = inject(GifsService);
  private gifMapper = signal(GifMapper);

  public gifsPrevImages = signal<string[]>(imageUrls);
  public loadGifs = signal<boolean>(true);
  public trendingGifs = signal<Gif[]>([]);

  // public trendingGifGroup = computed<Gif[][]>(() => {
  //   const groups = [];
  //   for (let i = 0; i < this.trendingGifs().length; i += 3) {
  //     groups.push(this.trendingGifs().slice(i, i + 3));
  //   }
  //   return groups;
  // });

  public trendingGifGroup = computed<Gif[][]>(() => {
    const gifs = this.trendingGifs();
    return Array.from({ length: Math.ceil(gifs.length / 3) }, (_, i) =>
      gifs.slice(i * 3, i * 3 + 3)
    );
  });

  private mappedGifs(data: GiphyItem[]) {
    return this.gifMapper().mapGiphyItemsToGifArray(data);
  }

  onScroll(e: Event) {
    console.log('Alo')
    const scrollDiv = this.scrollDiv()?.nativeElement;
    console.log(scrollDiv)
  }

  ngOnInit(): void {
    this.gifService.loadTrendingGifs().subscribe((response) => {
      this.trendingGifs.set(this.mappedGifs(response.data));
      this.loadGifs.set(false);
    });
  }
}
