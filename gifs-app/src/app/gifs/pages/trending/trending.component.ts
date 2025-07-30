import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';

import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';
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
export default class TrendingComponent implements OnInit, AfterViewInit {
  scrollDiv = viewChild.required<ElementRef<HTMLElement>>('scrollDiv');

  private scrollStateService = inject(ScrollStateService);
  private gifService = inject(GifsService);

  private gifMapper = signal(GifMapper);

  public gifsPrevImages = signal<string[]>(imageUrls);
  public loadGifs = signal<boolean>(false);
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

  onScroll() {
    const element = this.scrollDiv()?.nativeElement;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom && !this.loadGifs()) {
      this.getTrendingGifs();
    }
  }
  getTrendingGifs() {
    if (this.loadGifs()) return;

    this.loadGifs.set(true);

    this.gifService.loadTrendingGifs().subscribe((response) => {
      const gifs = this.mappedGifs(response.data);
      this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
      this.loadGifs.set(false);
    });
  }

  ngAfterViewInit(): void {
    const element = this.scrollDiv()?.nativeElement;
    if (!element) return;

    element.scrollTop = this.scrollStateService.trendingScrollState();
  }

  ngOnInit(): void {
    this.getTrendingGifs();
  }
}
